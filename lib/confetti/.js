
CSS.registerProperty({
  name: '--extra-confettiNumber',
  syntax: '<number>',
  inherits: false,
  initialValue: 30,
});

CSS.registerProperty({
  name: '--extra-confettiLengthVariance',
  syntax: '<number>',
  inherits: false,
  initialValue: 15,
});

CSS.registerProperty({
  name: '--extra-confettiWeightVariance',
  syntax: '<number>',
  inherits: false,
  initialValue: 4,
});


const worklet = "const getRandom = (min, max) => {\r\n  return Math.floor(Math.random() * (max - min + 1)) + min\r\n}\r\n\r\nif (typeof registerPaint !== 'undefined') {\r\n  class ExtraConfetti {\r\n    static get inputProperties() {\r\n      return ['--extra-confettiNumber','--extra-confettiLengthVariance', '--extra-confettiWeightVariance']\r\n    }\r\n  \r\n    paint(ctx, size, properties) {\r\n      const confettiNum = properties.get('--extra-confettiNumber')\r\n      const minLength = 3\r\n      const maxLength = minLength + parseInt(properties.get('--extra-confettiLengthVariance'))\r\n      const minWeight = 1\r\n      const maxWeight = minWeight + parseInt(properties.get('--extra-confettiWeightVariance'))\r\n      \r\n      for (var i = 0; i < confettiNum; i++) {\r\n        const x = Math.random() * size.width\r\n        const y = Math.random() * (size.height - maxLength)\r\n        const confettiLength = getRandom(minLength, maxLength)\r\n        const confettiWeight = getRandom(minWeight, maxWeight)\r\n\r\n        // Set Color\r\n        const hue = getRandom(0,360)\r\n        const sat = getRandom(90,100)\r\n        const light = getRandom(40,90)\r\n        const color = `hsl(${hue}deg, ${sat}%, ${light}%)`\r\n\r\n        // Set Paint Info\r\n        ctx.lineWidth = confettiWeight\r\n        ctx.strokeStyle = color\r\n        \r\n        //  Calculate New Position\r\n        const angle = getRandom(0,89)\r\n        const hypotenuse = confettiLength\r\n        const newX = x + Math.cos(angle) * hypotenuse\r\n        const newY = y + Math.sin(angle) * hypotenuse\r\n\r\n        // Paint\r\n        ctx.beginPath();\r\n        ctx.moveTo(x,y)\r\n        ctx.lineTo(newX, newY)\r\n        ctx.stroke()\r\n      }\r\n    }\r\n  }\r\n  \r\n  registerPaint('extra-confetti', ExtraConfetti)\r\n}"
const workletBlob = URL.createObjectURL(new Blob([worklet], { type: 'application/javascript' }))
window.CSS.paintWorklet.addModule(workletBlob)
