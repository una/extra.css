const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

if (typeof registerPaint !== 'undefined') {
  class CrossOut {
    static get inputProperties() {
      return ['--extra-crossNumber', '--extra-crossColor', '--extra-crossSpread', '--extra-crossWidth']
    }
  
    paint(ctx, size, properties) {
      const lineWidth = properties.get('--extra-crossWidth')
      const color = properties.get('--extra-crossColor')
      const spread = properties.get('--extra-crossSpread')
      const spreadPercent = spread / 100
      const verticalStart = (size.height - (size.height * spreadPercent)) * 1.5

      ctx.lineWidth = lineWidth
      ctx.strokeStyle = color

      ctx.beginPath()
      ctx.moveTo(lineWidth, verticalStart + lineWidth)
      ctx.lineTo(size.width - lineWidth, size.height * spreadPercent - lineWidth)
      ctx.moveTo(size.width - lineWidth, verticalStart + lineWidth)
      ctx.lineTo(lineWidth, size.height * spreadPercent - lineWidth)
      ctx.stroke()
    }
  }
  
  registerPaint('extra-crossOut', CrossOut)
}