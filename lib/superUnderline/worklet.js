if (typeof registerPaint !== 'undefined') {
  class SuperUnderline {
    static get inputProperties() {
      return ['--extra-underlineNumber', '--extra-underlineColor', '--extra-underlineSpread', '--extra-underlineWidth']
    }
  
    paint(ctx, size, properties) {
      const numUnderlines = parseInt(properties.get('--extra-underlineNumber')) || 3
      const lineWidth = parseInt(properties.get('--extra-underlineWidth')) || 2
      const color = String(properties.get('--extra-underlineColor')) || 'black'
      const spread = parseInt(properties.get('--extra-underlineSpread')) || 20

      const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

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