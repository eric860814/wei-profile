
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import { useJsonParse, isFunction } from './_utils'

Swiper.use([Navigation, Pagination, Autoplay])

const win = $(window)

const createTemplate = (target) => {
  const { data } = target

  let slides = ''
  data.forEach((item, index) => {
    slides += `
      <div class="swiper-slide" style=display:${item.id === '-1' ? 'none' : ''} data-id="${item.id}" data-value="${item.value}" ${item.url ? `data-url='${item.url}'` : ''} ${item.anchor ? `data-anchor='${item.anchor}'` : ''}>
        <p> ${item.value} </p>
      </div>
    `
  })

  return `
  <div class="swiper-box">
    <div class="swiper">
      <div class="swiper-wrapper">
        ${slides}
      </div>
    </div>
    <div class="swiper-arrow outer-pos">
      <div class="arrow left">
        <span class="icon-arrow-left"></span>
      </div>
      <div class="arrow right">
        <span class="icon-arrow-right"></span>
      </div>
    </div>
  </div>
  `
}

const modeHandler = (target, value) => {
  switch (value) {
    case 'swiper':
      if( !$(target).find('.swiper').hasClass('swiper-initialized') && target.needInit() ) {
        $(target).find('.swiper-arrow').show()
        $(target).find('.swiper-box').css('max-width', target.outerW)
        $(target).find('.swiper-wrapper').css({
          'justify-content': 'flex-start',
          'flex-warp': 'nowrap'
        })
        target.initSwiper()
      }
      break;
    default:
      target.destroySwiper()
      break;
  }
}

const activeHandler = (target, value) => {
  const data = target.data
  const nowID = data[data.findIndex(v => v.id == value)].id

  const nowItem = $(target).find(`[data-id=${nowID}]`)
  if(!nowItem.hasClass('active')) {
    nowItem.siblings().removeClass('active')
    nowItem.addClass('active')
  }
  console.log(nowID, data[nowID], data)
  target.emit('change', data[nowID])
}

class swipeNav extends HTMLElement {
  constructor() {
    super()
    this.create()
    // console.log(this.data, 'test DATA')
  }

  static get observedAttributes() {
    return [':mode', ':active']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case ':active':
        activeHandler(this, newValue)
        break;
      case ':mode':
        modeHandler(this, newValue)
        break;
    }
  }

  create() {
    const self = $(this)
    this.data = useJsonParse(self.attr(':data'))
    this.needActive = useJsonParse(self.attr(':noActive')) ? false : true
    this.__events__ = {}

    this.mount()
    setTimeout(() => {
      this.events()
    }, 250)

    self.removeAttr(':data')
  }

  mount() {
    const self = $(this)
    const _template = $(createTemplate(this))
    self.append(_template)
    this.template = _template
  }

  events() {
    const self = $(this)
    self[0].initSwiper()
    if(self[0].needActive) {
      self.find('.swiper-slide').on('click', function() {
        const selfID = $(this).attr('data-id')
        self[0].emit('select', self[0].data[selfID])
        self.attr(':active', selfID)
        if(self[0].__swiper__) self[0].__swiper__.slideTo(selfID)
      })
    } else {
      self.addClass('anchor-mode')
      self.find('.swiper-slide').off('click.anchor').on('click.anchor', function() {
        const selfID = $(this).attr('data-id')
        const selfAnchor = $(this).attr('data-anchor')
        const offsetTarget = $(selfAnchor).offset().top - 150
        window.scrollTo({
          top: offsetTarget,
          behavior: "smooth"
        })
        if(self[0].__swiper__) self[0].__swiper__.slideTo(selfID)
      })
    }
  }

  initSwiper() {
    const swiperSet = {
      slidesPerView: 'auto',
      navigation: {
        nextEl: $(this).find('.arrow.right')[0],
        prevEl: $(this).find('.arrow.left')[0],
      },
      on: {
        init: function() {
          if(this.isEnd) $(this.$el).removeClass('end all').addClass('start')
          else if(this.isBeginning) $(this.$el).removeClass('start all').addClass('end')
          else $(this.$el).removeClass('start end').addClass('all')
        },
        slideChangeTransitionStart: function() {
          if(this.isEnd) $(this.$el).removeClass('end all').addClass('start')
          else if(this.isBeginning) $(this.$el).removeClass('start all').addClass('end')
          else $(this.$el).removeClass('start end').addClass('all')
        }
      }
    }
    
    this.setSwiper()
    if(this.needInit()) this.__swiper__ = new Swiper($(this).find('.swiper')[0] , swiperSet)
  }

  setSwiper() {
    const self = this
    this.outerW = $(self).find('.swiper').outerWidth(true)
    this.innerW = 0
    $(self).find('.swiper-slide').each((i, el) => {
      this.innerW += $(el).outerWidth(true)
    })
    if(this.needInit()) {
      $(self).find('.swiper').removeClass('swiper-no-swiping')
      $(self).find('.swiper-arrow').show()
    }
    else {
      $(self).find('.swiper').addClass('swiper-no-swiping')
      $(self).find('.swiper .swiper-wrapper').css('justify-content', 'center')
      $(self).find('.swiper-arrow').hide()
    }
  }

  needInit() {
    return Math.floor(this.innerW) > Math.floor(this.outerW) ? true : false
  }

  destroySwiper() {
    if(!this.__swiper__) return
    this.__swiper__.destroy()
    $(this).find('.swiper-arrow').hide()
    $(this).find('.swiper-box').css('max-width', '100%')
    $(this).find('.swiper-wrapper').css({
      'justify-content': 'center',
      'flex-warp': 'wrap'
    })
  }

  on(events, handler) {
    if (!isFunction(handler)) return this

    const { __events__ } = this

    events.split(' ').forEach(evt => {
      if (!__events__[evt]) __events__[evt] = []
      __events__[evt].push(handler)
    })

    return this
  }

  emit(...args) {
    const { __events__ } = this

    const event = args[0]
    const data = args.slice(1, args.length)

    if (!__events__[event]) return this

    __events__[event].forEach(handler => {
      if (isFunction(handler)) handler.apply(this, data)
    })
    return this
  }
}

export default swipeNav

