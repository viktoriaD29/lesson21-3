export function getTitle() {
  let elemText = document.querySelector('.title');
  return elemText.textContent;
}
getTitle();

export function getDescription() {
  let elemAbout = document.querySelector('.about');
  return elemAbout.innerText;
}
getDescription();

export function getPlans() {
  let elemPlans = document.querySelector('.plans');
  return elemPlans.innerHTML;
}
getPlans();

export function getGoal() {
  let elemGoal = document.querySelector('.goal');
  return elemGoal.outerHTML;
}
getGoal();
