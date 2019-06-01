


const worklet = "const randomColor = () => {\r\n  return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`\r\n}\r\n\r\nif (typeof registerPaint !== 'undefined') {\r\n  class RandomBg {\r\n    paint(ctx, size) {\r\n      ctx.fillStyle = randomColor()\r\n      ctx.fillRect(0, 0, size.width, size.height)\r\n    }\r\n  }\r\n  \r\n  registerPaint('extra-randomBg', RandomBg)\r\n}"
const workletBlob = URL.createObjectURL(new Blob([worklet], { type: 'application/javascript' }))
window.CSS.paintWorklet.addModule(workletBlob)
