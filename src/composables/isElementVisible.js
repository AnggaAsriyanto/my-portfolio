export const useIsElementVisible = (element) => {
  if (!element) return false

  const elementTop = element.offsetTop
  const elementBottom = elementTop + element.offsetHeight
  const elementMiddle = elementTop + element.offsetHeight / 2

  const viewportTop = window.pageYOffset
  const viewportBottom = viewportTop + window.innerHeight
  const viewportMiddle = viewportTop + window.innerHeight / 2

  // Check if the middle of the element is within the viewport's middle section
  const middleSectionTop = viewportMiddle - window.innerHeight / 4
  const middleSectionBottom = viewportMiddle + window.innerHeight / 4

  return elementMiddle >= middleSectionTop && elementMiddle <= middleSectionBottom
}
