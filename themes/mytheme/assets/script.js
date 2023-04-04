if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  disableTransitionsTemporarily()
  document.documentElement.classList.add('dark')
} else {
  disableTransitionsTemporarily()
  document.documentElement.classList.remove('dark')
}


function disableTransitionsTemporarily() {
  document.documentElement.classList.add('[&_*]:!transition-none')
  window.setTimeout(() => {
    document.documentElement.classList.remove('[&_*]:!transition-none')
  }, 0)
}

function toggleMode() {
  let classes = document.documentElement.classList.value.toString()
  let dark = classes.includes("dark")
  if (dark) {
    disableTransitionsTemporarily()
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    disableTransitionsTemporarily()
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
}
