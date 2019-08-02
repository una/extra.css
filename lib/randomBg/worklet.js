/*
  Random Backgrounmd Color
 */
const getRandomNumber = ([low, high, ...secureBrightness]) =>{
  var r = Math.floor(Math.random() * (high - low + 1)) + low
  return r;
}

const brightness = (color) => {
  // Variables for red, green, blue values
  let r, g, b, hsp
  color = color.toString()
  
  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
    
    r = color[1]
    g = color[2]
    b = color[3]
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +('0x' + color.slice(1).replace( 
    color.length < 5 && /./g, '$&$&'))

    r = color >> 16
    g = color >> 8 & 255
    b = color & 255
  }
  
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  )

  return Math.round(hsp)
}

const getRandomColorHsl = (colorBrightness) => {
  let secureBrightness = colorBrightness > 128 ? [12,50] : [51, 88]
	let hue = Math.floor(Math.random() * 360)
	let saturation = Math.floor(Math.random() * 100)
  let lightness = getRandomNumber(secureBrightness)
  
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

if (typeof registerPaint !== 'undefined') {
  class RandomBg {
    // Get inherit color
    static get inputProperties() { return ['color'] }

    paint(ctx, size, properties) {
      const color = properties.get('color');
      const colorBrightness = brightness(color)

      ctx.fillStyle = getRandomColorHsl(colorBrightness)
      ctx.fillRect(0, 0, size.width, size.height)
    }
  }
  
  registerPaint('extra-randomBg', RandomBg)
}