export function getTitle() {
  let elemText = document.querySelector('.title');
  const res = elemText.textContent;
  return res
}
getTitle();

export function getDescription() {
  let elemAbout = document.querySelector('.about');
  const res2 = elemAbout.innerText;
  return res2
}
getDescription();

export function getPlans() {
  let elemPlans = document.querySelector('.plans');
  const res3 = elemPlans.innerHTML;
  return res3
}
getPlans();

export function getGoal() {
  let elemGoal = document.querySelector('.goal');
  const res4 = elemGoal.outerHTML;
  return res4
}
getGoal();
