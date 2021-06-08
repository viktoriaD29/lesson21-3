export function getTitle() {
  const elemText = document.querySelector('.title');
  return elemText.textContent;
}
getTitle();

export function getDescription() {
  const elemAbout = document.querySelector('.about');
  return elemAbout.innerText;
}
getDescription();

export function getPlans() {
  const elemPlans = document.querySelector('.plans');
  return elemPlans.innerHTML;
}
getPlans();

export function getGoal() {
  const elemGoal = document.querySelector('.goal');
  return elemGoal.outerHTML;
}
getGoal();
