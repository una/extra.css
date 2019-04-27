const randomColor = () => {
  return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
}

if (typeof registerPaint !== 'undefined') {
  class RandomBg {
    paint(ctx, size) {
      ctx.fillStyle = randomColor()
      ctx.fillRect(0, 0, size.width, size.height)
    }
  }
  
  registerPaint('extra-randomBg', RandomBg)
}