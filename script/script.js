document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  )

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {
        const target = el.dataset.target
        const $target = document.getElementById(target)
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})

ScrollReveal().reveal('.welcome')
ScrollReveal().reveal('.wcCard', { interval: 300 })
ScrollReveal().reveal('.services')
ScrollReveal().reveal('.svcCard', { interval: 300 })
