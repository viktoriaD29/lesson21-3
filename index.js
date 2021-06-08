function getTitle() {
  const elemText = document.querySelector('.title');
  return elemText.textContent;
}
getTitle();

function getDescription() {
  const elemAbout = document.querySelector('.about');
  return elemAbout.innerText;
}
getDescription();

function getPlans() {
  const elemPlans = document.querySelector('.plans');
  return elemPlans.innerHTML;
}
getPlans();

function getGoal() {
  const elemGoal = document.querySelector('.goal');
  return elemGoal.outerHTML;
}
getGoal();
