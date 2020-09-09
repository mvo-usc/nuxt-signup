const sleepRandom = () => {
  const delay = Math.random() * 2000
  return new Promise(handler => setTimeout(handler, delay))
}
export default sleepRandom
