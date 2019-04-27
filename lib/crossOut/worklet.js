
if (typeof registerPaint !== 'undefined') {
  class CrossOut {
    static get inputProperties() {
      return ['--extra-crossNumber', '--extra-crossColor', '--extra-crossSpread', '--extra-crossWidth']
    }
  
    paint(ctx, size, properties) {
      const lineWidth = properties.get('--extra-crossWidth')
      const color = properties.get('--extra-crossColor')
      const spread = properties.get('--extra-crossSpread')
      const spreadPercent = (spread - 1) / 100
      const verticalStart = (size.height - lineWidth) * spreadPercent + lineWidth

      ctx.lineWidth = lineWidth
      ctx.strokeStyle = color

      ctx.beginPath()
      ctx.moveTo(lineWidth, lineWidth)
      ctx.lineTo(size.width - lineWidth, verticalStart)
      ctx.moveTo(size.width - lineWidth, lineWidth)
      ctx.lineTo(lineWidth, verticalStart + size.height)
      ctx.stroke()
    }
  }
  
  registerPaint('extra-crossOut', CrossOut)
}