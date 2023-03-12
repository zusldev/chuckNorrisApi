export default async function translateToSpanish (joke: string): Promise<string> {
  // Codificar la broma para usarla en la URL
  const encodedJoke = encodeURIComponent(joke)

  // Hacer una solicitud HTTP a la API de MyMemory para traducir la broma a español
  const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodedJoke}&langpair=en|es`
  )

  // Analizar la respuesta de la API
  const data = await response.json()

  // Devolver la traducción de la broma en español
  return data.responseData.translatedText
}
