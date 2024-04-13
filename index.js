import minify from './api.js'

let form = document.getElementById('form')
let input = document.getElementById('url')
let button = document.getElementById('minify')
let copy = document.getElementById('copy')
let loader = document.getElementById('loader')
let toast = document.getElementById('toast')
let toastContent = document.getElementById('toast-content')

window.addEventListener("popstate", e =>
  console.log(new URL(window.location.href).pathname)
);

form.addEventListener('submit', (e) => {
  e.preventDefault()

  handle(input.value)
})

input.addEventListener('input', (e) => {
  e.preventDefault()

  copy.classList.add('hide')
  button.classList.remove('hide')
})

copy.addEventListener('click', (e) => {
  e.preventDefault()

  navigator.clipboard.writeText(input.value)

  showToast('Copied to clipboard', 'toast-black')
})

const handle = async (url) => {
  input.readOnly = true
  button.classList.add('hide')
  loader.classList.remove('hide')

  const response = await minify(url)

  input.readOnly = false
  loader.classList.add('hide')

  if (response.mini_url) {
    copy.classList.remove('hide')
    input.value = response.mini_url
    return
  }

  button.classList.remove('hide')

  if (response.message === 'INVALID_URL') {
    showToast('Invalid URL', 'toast-red')
    return
  }

  showToast('Unable to minify your URL', 'toast-red')
}


const showToast = (message, color) => {
  toast.classList.add(color)
  toast.classList.remove('hide')
  toastContent.innerText = message

  setTimeout(() => toast.classList.add('hide'), 2500)
}