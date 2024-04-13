const url = new URLSearchParams(window.location.search)
const identifier = url.get('identifier')

window.location.replace(`https://miniurl.api.joaojob.dev/${identifier}`)