const minify = async (url) => {
  const request = { url }

  try {
    const response = await fetch(
      'https://miniurl.api.joaojob.dev',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
      }
    )
  
    return await response.json()
  } catch(expection) {
    console.error(expection)
    return { }
  }
}

export default minify