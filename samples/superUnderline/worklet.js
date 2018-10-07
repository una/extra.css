const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

if (typeof registerPaint !== 'undefined') {
  class SuperUnderline {
    static get inputProperties() {
      return ['--extra-underlineNumber', '--extra-underlineColor', '--extra-underlineSpread', '--extra-underlineWidth']
    }
  
    paint(ctx, size, properties) {
      const numUnderlines = properties.get('--extra-underlineNumber')
      const lineWidth = properties.get('--extra-underlineWidth')
      const color = properties.get('--extra-underlineColor')
      const spread = properties.get('--extra-underlineSpread')

      ctx.lineWidth = lineWidth
      ctx.strokeStyle = color

      for (let i = 0; i < numUnderlines; i++) {
        ctx.beginPath()
        ctx.moveTo(0, getRandom(0, spread) + size.height/1.4)
        ctx.lineTo(size.width, getRandom(0, spread) + size.height/1.4)
        ctx.stroke()
      }
    }
  }
  
  registerPaint('extra-superUnderline', SuperUnderline)
}