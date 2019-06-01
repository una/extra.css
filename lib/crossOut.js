// See files in crossOut/*

CSS.registerProperty({
  name: '--extra-crossColor',
  syntax: '<color>',
  inherits: true,
  initialValue: 'black'
});

CSS.registerProperty({
  name: '--extra-crossSpread',
  syntax: '<number>',
  inherits: false,
  initialValue: 100
});

CSS.registerProperty({
  name: '--extra-crossWidth',
  syntax: '<number>',
  inherits: false,
  initialValue: 1
});

(()=> {const worklet = `
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
}`

const workletBlob = URL.createObjectURL(new Blob([worklet], { type: 'application/javascript' }))

window.CSS.paintWorklet.addModule(workletBlob)
})()