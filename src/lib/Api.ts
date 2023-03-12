import translateToSpanish from './Translate'

export async function getJoke (): Promise<string> {
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  const data = await response.json()
  return data.value
}

export async function getSpanishJoke (): Promise<string> {
  const joke = await getJoke()
  return await translateToSpanish(joke)
}
