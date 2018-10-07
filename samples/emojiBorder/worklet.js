const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

if (typeof registerPaint !== 'undefined') {
  class ExtraEmoji {
    static get inputProperties() {
      return ['--emoji']
    }
  
    paint(ctx, size, properties) {
      const emoji = properties.get('--emoji') || '😄'
      const height = 20;
      const width = 20;
      
      
  }
  
  registerPaint('extra-emoji', ExtraEmoji)
}