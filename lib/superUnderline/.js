
CSS.registerProperty({
  name: '--extra-underlineNumber',
  syntax: '<number>',
  inherits: false,
  initialValue: 3
});

CSS.registerProperty({
  name: '--extra-underlineColor',
  syntax: '<color>',
  inherits: true,
  initialValue: 'black'
});

CSS.registerProperty({
  name: '--extra-underlineSpread',
  syntax: '<number>',
  inherits: false,
  initialValue: 20
});

CSS.registerProperty({
  name: '--extra-underlineWidth',
  syntax: '<number>',
  inherits: false,
  initialValue: 2
});

const worklet = "const getRandom = (min, max) => {\r\n  return Math.floor(Math.random() * (max - min + 1)) + min\r\n}\r\n\r\nif (typeof registerPaint !== 'undefined') {\r\n  class SuperUnderline {\r\n    static get inputProperties() {\r\n      return ['--extra-underlineNumber', '--extra-underlineColor', '--extra-underlineSpread', '--extra-underlineWidth']\r\n    }\r\n  \r\n    paint(ctx, size, properties) {\r\n      const numUnderlines = properties.get('--extra-underlineNumber')\r\n      const lineWidth = properties.get('--extra-underlineWidth')\r\n      const color = properties.get('--extra-underlineColor')\r\n      const spread = properties.get('--extra-underlineSpread')\r\n\r\n      ctx.lineWidth = lineWidth\r\n      ctx.strokeStyle = color\r\n\r\n      for (let i = 0; i < numUnderlines; i++) {\r\n        ctx.beginPath()\r\n        ctx.moveTo(0, getRandom(0, spread) + size.height/1.4)\r\n        ctx.lineTo(size.width, getRandom(0, spread) + size.height/1.4)\r\n        ctx.stroke()\r\n      }\r\n    }\r\n  }\r\n  \r\n  registerPaint('extra-superUnderline', SuperUnderline)\r\n}"
const workletBlob = URL.createObjectURL(new Blob([worklet], { type: 'application/javascript' }))
window.CSS.paintWorklet.addModule(workletBlob)
