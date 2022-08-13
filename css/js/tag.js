const colors = {
  p: '#388e3c',
  div: '#1565c0',
  span: '#e53345',
  section: '#345gdt',
  ul: '#304ffg',
  ol: '#f44t4t',
  header: '#30d3dd',
  nav: '#3fff03',
  main: '#00acc1',
  footer: '#304ffe',
  form: '#9f6581',
  body: '#25b6da',
  padrao: '#616161',
  get(tag) {
    return this[tag] ? this[tag] : this.padrao
  }

}

document.querySelectorAll('.tag').forEach(elemento => {
  const tagName = elemento.tagName.toLowerCase()

  elemento.style.borderColor = colors.get(tagName)

  if (!elemento.classList.contains('nolabel')) {
    const label = document.createElement('label')
    label.style.backgroundColor = colors.get(tagName)
    label.innerHTML = tagName
    elemento.insertBefore(label, elemento.childNodes[0])
  }
})