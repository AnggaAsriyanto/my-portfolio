import { onMounted } from 'vue'
import { useIsElementVisible } from './isElementVisible'

export const useToggleActiveLink = () => {
  onMounted(() => {
    const links = document.querySelectorAll('.link')

    const workSection = document.getElementById('work')
    const aboutSection = document.getElementById('about')
    const contactSection = document.getElementById('contact')

    let linkClicked = false

    links.forEach((link) => {
      link.addEventListener('click', () => {
        linkClicked = true
        links.forEach((l) => l.classList.remove('active'))
        link.classList.toggle('active')

        if (link.id === 'work-link') {
          workSection?.scrollIntoView({ behavior: 'smooth' })
        }

        if (link.id === 'about-link') {
          aboutSection?.scrollIntoView({ behavior: 'smooth' })
        }

        if (link.id === 'contact-link') {
          contactSection?.scrollIntoView({ behavior: 'smooth' })
        }

        window.addEventListener('scrollend', () => {
          linkClicked = false
        })
      })
    })

    window.addEventListener('scroll', () => {
      if (!linkClicked) {
        if (useIsElementVisible(workSection)) {
          chooseActive(document.getElementById('work-link'))
        }

        if (useIsElementVisible(aboutSection)) {
          chooseActive(document.getElementById('about-link'))
        }

        if (useIsElementVisible(contactSection)) {
          chooseActive(document.getElementById('contact-link'))
        }
      }
    })
  })

  function chooseActive(target) {
    const links = document.querySelectorAll('.link')

    links.forEach((l) => l.classList.remove('active'))
    target.classList.toggle('active')
  }
}
