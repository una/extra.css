
CSS.registerProperty({
  name: '--extra-sparkleNumber',
  syntax: '<number>',
  inherits: false,
  initialValue: 30,
});

CSS.registerProperty({
  name: '--extra-sparkleHue',
  syntax: '<number>',
  inherits: false,
  initialValue: 60,
});

CSS.registerProperty({
  name: '--extra-sparkleHeightVariance',
  syntax: '<number>',
  inherits: false,
  initialValue: 9,
});

CSS.registerProperty({
  name: '--extra-sparkleWidthVariance',
  syntax: '<number>',
  inherits: false,
  initialValue: 12,
});

CSS.registerProperty({
  name: '--extra-sparkleWeightVariance',
  syntax: '<number>',
  inherits: false,
  initialValue: 2,
});


const worklet = "const getRandom = (min, max) => {\r\n  return Math.floor(Math.random() * (max - min + 1)) + min\r\n}\r\n\r\nif (typeof registerPaint !== 'undefined') {\r\n  class ExtraSparkles {\r\n    static get inputProperties() {\r\n      return ['--extra-sparkleNumber', '--extra-sparkleHue', '--extra-sparkleHeightVariance', '--extra-sparkleWidthVariance', '--extra-sparkleWeightVariance']\r\n    }\r\n  \r\n    paint(ctx, size, properties) {\r\n      const sparkles = properties.get('--extra-sparkleNumber')\r\n      const minHeight = 3\r\n      const maxHeight = minHeight + parseInt(properties.get('--extra-sparkleHeightVariance'))\r\n      const minWidth = 3\r\n      const maxWidth = minWidth + parseInt(properties.get('--extra-sparkleWidthVariance'))\r\n      const minWeight = 1\r\n      const maxWeight = minWeight + parseInt(properties.get('--extra-sparkleWeightVariance'))\r\n      \r\n      for (let i = 0; i < sparkles; i++) {\r\n        const x = Math.random() * size.width\r\n        const y = Math.random() * (size.height - maxHeight)\r\n        const sparkleHeight = getRandom(minHeight, maxHeight)\r\n        const sparkleWidth = getRandom(minWidth, maxWidth)\r\n        const strokeWidth = getRandom(minWeight, maxWeight)\r\n        \r\n        // Set Color\r\n        const hueVal = parseInt(properties.get('--extra-sparkleHue'))\r\n        const hue = getRandom(hueVal, hueVal + 20)\r\n        const sat = getRandom(90,100)\r\n        const light = getRandom(50,100)\r\n        const color = `hsl(${hue}deg, ${sat}%, ${light}%)`\r\n        \r\n        // Set Stroke Info\r\n        ctx.lineWidth = strokeWidth\r\n        ctx.strokeStyle = color\r\n        \r\n        // Paint\r\n        ctx.beginPath()\r\n        ctx.moveTo((x - sparkleWidth / 2), sparkleHeight/2 + y)\r\n        ctx.lineTo((x + sparkleWidth / 2), sparkleHeight/2 + y)\r\n        ctx.moveTo(x, 0 + y)\r\n        ctx.lineTo(x, sparkleHeight + y)\r\n        ctx.stroke()\r\n      }\r\n    }\r\n  }\r\n  \r\n  registerPaint('extra-sparkles', ExtraSparkles)\r\n}"
const workletBlob = URL.createObjectURL(new Blob([worklet], { type: 'application/javascript' }))
window.CSS.paintWorklet.addModule(workletBlob)
