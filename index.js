export const getTitle = () => {
  const getText = document.querySelector('.title');
  const textContent = getText.textContent
  return textContent
}
getTitle()

export const getDescription = () => {
  const getAbout = document.querySelector('.about');
  const innerText = getAbout.innerText
  return innerText
}
getDescription()

export const getPlans = () => {
  const getPlans = document.querySelector('.plans');
  const innerHtml = getPlans.innerHTML
  return innerHtml
}
getPlans()

export const getGoal = () => {
  const getGoal = document.querySelector('.goal')
  const outerHtml = getGoal.outerHTML
  return outerHtml
}
getGoal()