if (typeof registerPaint !== 'undefined') {
  class ExtraConfetti {
    static get inputProperties() {
      return ['--extra-confettiNumber','--extra-confettiLengthVariance', '--extra-confettiWeightVariance']
    }
  
    paint(ctx, size, properties) {
      const confettiNum = parseInt(properties.get('--extra-confettiNumber')) || 30
      const minLength = 3
      const maxLength = minLength + parseInt(properties.get('--extra-confettiLengthVariance')) || 15
      const minWeight = 1
      const maxWeight = minWeight + parseInt(properties.get('--extra-confettiWeightVariance')) || 4

      const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }      
      
      for (var i = 0; i < confettiNum; i++) {
        const x = Math.random() * size.width
        const y = Math.random() * (size.height - maxLength)
        const confettiLength = getRandom(minLength, maxLength)
        const confettiWeight = getRandom(minWeight, maxWeight)

        // Set Color
        const hue = getRandom(0,360)
        const sat = getRandom(90,100)
        const light = getRandom(40,90)
        const color = `hsl(${hue}deg, ${sat}%, ${light}%)`

        // Set Paint Info
        ctx.lineWidth = confettiWeight
        ctx.strokeStyle = color
        
        //  Calculate New Position
        const angle = getRandom(0,89)
        const hypotenuse = confettiLength
        const newX = x + Math.cos(angle) * hypotenuse
        const newY = y + Math.sin(angle) * hypotenuse

        // Paint
        ctx.beginPath();
        ctx.moveTo(x,y)
        ctx.lineTo(newX, newY)
        ctx.stroke()
      }
    }
  }
  
  registerPaint('extra-confetti', ExtraConfetti)
}