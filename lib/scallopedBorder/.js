
CSS.registerProperty({
  name: '--extra-scallopRadius',
  syntax: '<number>',
  inherits: false,
  initialValue: 10
});

CSS.registerProperty({
  name: '--extra-scallopColor',
  syntax: '<color>',
  inherits: true,
  initialValue: 'black'
});

CSS.registerProperty({
  name: '--extra-scallopWeight',
  syntax: '<number>',
  inherits: false,
  initialValue: 2
});

const worklet = "if (typeof registerPaint !== 'undefined') {\r\n  class ScallopedBorder {\r\n    static get inputProperties() {\r\n      return ['--extra-scallopRadius', '--extra-scallopWeight', '--extra-scallopColor']\r\n    }\r\n  \r\n    paint(ctx, size, properties) {\r\n      const radius = properties.get('--extra-scallopRadius').value\r\n      const scallopWeight = properties.get('--extra-scallopWeight')\r\n      const color = properties.get('--extra-scallopColor')\r\n      const height = size.height\r\n      const width = size.width\r\n\r\n      ctx.lineWidth = scallopWeight\r\n      ctx.strokeStyle = color\r\n      \r\n      const getSteps = (sizeVal) => {\r\n        return Math.floor(sizeVal / (radius * 2) - 2)\r\n      }\r\n\r\n      const getOwnRadius = (sizeVal, otherRad) => {\r\n        const steps = getSteps(sizeVal) + 1\r\n        const totalSpace = sizeVal - (radius * 2)\r\n        const spaceTaken = steps * (radius * 2)\r\n        let pixelsRemaining = totalSpace - spaceTaken\r\n\r\n        if (otherRad) {\r\n          const radDif = otherRad - radius\r\n          pixelsRemaining = totalSpace - spaceTaken - radDif\r\n        }\r\n\r\n        const newRadius = radius + ((pixelsRemaining / 2) / (steps + 1))\r\n        return (newRadius)\r\n      }\r\n\r\n      const horizRadius = getOwnRadius(width, getOwnRadius(height))\r\n      const vertRadius = getOwnRadius(height, getOwnRadius(width))\r\n\r\n      // top\r\n      for (let i = 0; i <= getSteps(width); i++) {\r\n        ctx.beginPath()\r\n        ctx.arc(horizRadius + horizRadius + (horizRadius * i * 2), horizRadius + (scallopWeight * 1) , horizRadius, 0, Math.PI, true)\r\n        ctx.stroke()\r\n      }\r\n\r\n      // bottom\r\n      for (let i = 0; i <= getSteps(width); i++) {\r\n        ctx.beginPath()\r\n        ctx.arc(horizRadius + horizRadius + (horizRadius * i * 2), height - horizRadius - (scallopWeight * 1), horizRadius, 0, Math.PI, false)\r\n        ctx.stroke()\r\n      }\r\n\r\n      // left\r\n      for (let i = 0; i <= getSteps(height); i++) {\r\n        ctx.beginPath()\r\n        ctx.arc(vertRadius + (scallopWeight * 1), vertRadius + vertRadius + (vertRadius * i * 2), vertRadius, Math.PI * 0.5,  Math.PI * 1.5, false);\r\n        ctx.stroke()\r\n      }\r\n\r\n      // right\r\n      for (let i = 0; i <= getSteps(height); i++) {\r\n        ctx.beginPath()\r\n        ctx.arc(width - vertRadius - (scallopWeight * 1), vertRadius + vertRadius + (vertRadius * i * 2), vertRadius, Math.PI * 0.5,  Math.PI * 1.5, true);\r\n        ctx.stroke()\r\n      }\r\n    }\r\n  }\r\n\r\n  registerPaint('extra-scallopedBorder', ScallopedBorder)\r\n}\r\n"
const workletBlob = URL.createObjectURL(new Blob([worklet], { type: 'application/javascript' }))
window.CSS.paintWorklet.addModule(workletBlob)
