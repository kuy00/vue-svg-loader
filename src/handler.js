const domParser = (file) => {
  const parser = new DOMParser()
  return parser.parseFromString(file, 'image/svg+xml')
}

export const fileLoad = async (path) => {
  const response = await fetch(path)
  return await response.text()
}

export const getStyle = (file) => {
  const dom = domParser(file)
  const svg = dom.getElementsByTagName('svg')[0]
  return {
    width: svg.getAttribute('width'),
    height: svg.getAttribute('height'),
    viewBox: svg.getAttribute('viewBox'),
  }
}

export const getPath = (file) => {
  const dom = domParser(file)
  const path = dom.getElementsByTagName('svg')[0].innerHTML
  return path
}
