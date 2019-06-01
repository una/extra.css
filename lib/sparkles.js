// See files in sparkles/*

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

(() => { const worklet = `
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

if (typeof registerPaint !== 'undefined') {
  class ExtraSparkles {
    static get inputProperties() {
      return ['--extra-sparkleNumber', '--extra-sparkleHue', '--extra-sparkleHeightVariance', '--extra-sparkleWidthVariance', '--extra-sparkleWeightVariance']
    }
  
    paint(ctx, size, properties) {
      const sparkles = properties.get('--extra-sparkleNumber')
      const minHeight = 3
      const maxHeight = minHeight + parseInt(properties.get('--extra-sparkleHeightVariance'))
      const minWidth = 3
      const maxWidth = minWidth + parseInt(properties.get('--extra-sparkleWidthVariance'))
      const minWeight = 1
      const maxWeight = minWeight + parseInt(properties.get('--extra-sparkleWeightVariance'))
      
      for (let i = 0; i < sparkles; i++) {
        const x = Math.random() * size.width
        const y = Math.random() * (size.height - maxHeight)
        const sparkleHeight = getRandom(minHeight, maxHeight)
        const sparkleWidth = getRandom(minWidth, maxWidth)
        const strokeWidth = getRandom(minWeight, maxWeight)
        
        // Set Color
        const hueVal = parseInt(properties.get('--extra-sparkleHue'))
        const hue = getRandom(hueVal, hueVal + 20)
        const sat = getRandom(90,100)
        const light = getRandom(50,100)
        const color = 'hsl(' + hue + 'deg,' + sat + '%,' + light + '%)'
        
        // Set Stroke Info
        ctx.lineWidth = strokeWidth
        ctx.strokeStyle = color
        
        // Paint
        ctx.beginPath()
        ctx.moveTo((x - sparkleWidth / 2), sparkleHeight/2 + y)
        ctx.lineTo((x + sparkleWidth / 2), sparkleHeight/2 + y)
        ctx.moveTo(x, 0 + y)
        ctx.lineTo(x, sparkleHeight + y)
        ctx.stroke()
      }
    }
  }
  
  registerPaint('extra-sparkles', ExtraSparkles)
}`

const workletBlob = URL.createObjectURL(new Blob([worklet], { type: 'application/javascript' }))

window.CSS.paintWorklet.addModule(workletBlob)
})()