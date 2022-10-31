
const win = $(window)

export const useJsonParse = (json) => {
  try {
    JSON.parse(json)
  }
  catch (e) {
    return json
  }
  return JSON.parse(json)
}

export const isFunction = (value) => {
  return typeof value === 'function'
}

export const getSlotData = (target) => {
  const data = {}
  target.querySelectorAll('[slot]').forEach(el => {
    // convert 'nick-name' into 'nickName' for easy JS access
    // set the DOM node as data property value
    data[el.getAttribute('slot').replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())] = el
  });
  return data
}

export const HTMLToString = (dom) => {
  if (!dom) return;
  return dom.outerHTML
}

export const getUniqueId = () => Math.random().toString(36).substr(2, 9)
