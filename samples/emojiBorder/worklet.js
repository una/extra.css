if (typeof registerPaint !== 'undefined') {
  class ExtraEmoji {
    static get inputProperties() {
      return ['--emoji']
    }
  
    paint(ctx, size, properties) {
      const emoji = properties.get('--emoji')[0] || '😄'
      const height = 20;
      const width = 20;

      console.log(emoji)
      
      // convert emoji to base64 to use it as a background image and paint that onto a canvas
    }
  }
  
  registerPaint('extra-emoji', ExtraEmoji)
}