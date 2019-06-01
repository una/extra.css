// See files in scallopedBorder/*

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

(() => { const worklet = `
if (typeof registerPaint !== 'undefined') {
  class ScallopedBorder {
    static get inputProperties() {
      return ['--extra-scallopRadius', '--extra-scallopWeight', '--extra-scallopColor']
    }
  
    paint(ctx, size, properties) {
      const radius = properties.get('--extra-scallopRadius').value
      const scallopWeight = properties.get('--extra-scallopWeight')
      const color = properties.get('--extra-scallopColor')
      const height = size.height
      const width = size.width

      ctx.lineWidth = scallopWeight
      ctx.strokeStyle = color
      
      const getSteps = (sizeVal) => {
        return Math.floor(sizeVal / (radius * 2) - 2)
      }

      const getOwnRadius = (sizeVal, otherRad) => {
        const steps = getSteps(sizeVal) + 1
        const totalSpace = sizeVal - (radius * 2)
        const spaceTaken = steps * (radius * 2)
        let pixelsRemaining = totalSpace - spaceTaken

        if (otherRad) {
          const radDif = otherRad - radius
          pixelsRemaining = totalSpace - spaceTaken - radDif
        }

        const newRadius = radius + ((pixelsRemaining / 2) / (steps + 1))
        return (newRadius)
      }

      const horizRadius = getOwnRadius(width, getOwnRadius(height))
      const vertRadius = getOwnRadius(height, getOwnRadius(width))

      // top
      for (let i = 0; i <= getSteps(width); i++) {
        ctx.beginPath()
        ctx.arc(horizRadius + horizRadius + (horizRadius * i * 2), horizRadius + (scallopWeight * 1) , horizRadius, 0, Math.PI, true)
        ctx.stroke()
      }

      // bottom
      for (let i = 0; i <= getSteps(width); i++) {
        ctx.beginPath()
        ctx.arc(horizRadius + horizRadius + (horizRadius * i * 2), height - horizRadius - (scallopWeight * 1), horizRadius, 0, Math.PI, false)
        ctx.stroke()
      }

      // left
      for (let i = 0; i <= getSteps(height); i++) {
        ctx.beginPath()
        ctx.arc(vertRadius + (scallopWeight * 1), vertRadius + vertRadius + (vertRadius * i * 2), vertRadius, Math.PI * 0.5,  Math.PI * 1.5, false);
        ctx.stroke()
      }

      // right
      for (let i = 0; i <= getSteps(height); i++) {
        ctx.beginPath()
        ctx.arc(width - vertRadius - (scallopWeight * 1), vertRadius + vertRadius + (vertRadius * i * 2), vertRadius, Math.PI * 0.5,  Math.PI * 1.5, true);
        ctx.stroke()
      }
    }
  }

  registerPaint('extra-scallopedBorder', ScallopedBorder)
}`

const workletBlob = URL.createObjectURL(new Blob([worklet], { type: 'application/javascript' }))

window.CSS.paintWorklet.addModule(workletBlob)
})()