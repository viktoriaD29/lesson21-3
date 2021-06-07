export const getTitle = () => {
  const getText = document.querySelector('.title');
  const getTextContent = getText.textContent
  return getTextContent;
}
getTitle()

export const getDescription = () => {
  const getAbout = document.querySelector('.about');
  const getInnerText = getAbout.innerText
  return getInnerText;
}
getDescription()

export const getPlans = () => {
  const getPlans = document.querySelector('.plans');
  const getInnerHtml = getPlans.innerHTML
  return getInnerHtml;
}
getPlans()

export const getGoal = () => {
  const getGoal = document.querySelector('.goal')
  const getOuterHtml = getGoal.outerHTML
  return getOuterHtml;
}
getGoal()