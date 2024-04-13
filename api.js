minify = async (url) => {
  const request = { url }

  const response = await fetch(
    'https://miniurl.api.joaojob.dev',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    }
  )

  return await response.json()
}

export default minify