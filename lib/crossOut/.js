
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

const worklet = "if (typeof registerPaint !== 'undefined') {\r\n  class CrossOut {\r\n    static get inputProperties() {\r\n      return ['--extra-crossNumber', '--extra-crossColor', '--extra-crossSpread', '--extra-crossWidth']\r\n    }\r\n  \r\n    paint(ctx, size, properties) {\r\n      const lineWidth = properties.get('--extra-crossWidth')\r\n      const color = properties.get('--extra-crossColor')\r\n      const spread = properties.get('--extra-crossSpread')\r\n      const spreadPercent = (spread - 1) / 100\r\n      const verticalStart = (size.height - lineWidth) * spreadPercent + lineWidth\r\n\r\n      ctx.lineWidth = lineWidth\r\n      ctx.strokeStyle = color\r\n\r\n      ctx.beginPath()\r\n      ctx.moveTo(lineWidth, lineWidth)\r\n      ctx.lineTo(size.width - lineWidth, verticalStart)\r\n      ctx.moveTo(size.width - lineWidth, lineWidth)\r\n      ctx.lineTo(lineWidth, verticalStart + size.height)\r\n      ctx.stroke()\r\n    }\r\n  }\r\n  \r\n  registerPaint('extra-crossOut', CrossOut)\r\n}"
const workletBlob = URL.createObjectURL(new Blob([worklet], { type: 'application/javascript' }))
window.CSS.paintWorklet.addModule(workletBlob)
