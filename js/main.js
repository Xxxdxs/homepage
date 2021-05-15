const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const theme = document.querySelector('#theme')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

let color = '#00aa00'

about.addEventListener('click', () => {
  new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    mount: aboutContent,
    onfocus: function () {
      this.setBackground(color)
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    mount: contactContent,
    onfocus: function () {
      this.setBackground(color)
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})


theme.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.setProperty('--text-color', randomColor);
  color = randomColor
})

