const WORD_ENPOINT_RANDOM = 'https://random-word-api.herokuapp.com/word?lang=es'
export const getRandomWord = async () => {
  const res = await fetch(WORD_ENPOINT_RANDOM)
  const data = await res.json()
  const { word } = data
  return word
}
export const words = ['maravilloso', 'hola', 'bien', 'gato', 'perro', 'abuela']
