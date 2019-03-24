export const randomHex = () => {
  return `#${((1<<24)*(Math.random()+1)|0).toString(16).substr(1)}`
}