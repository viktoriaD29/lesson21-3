export const getTitle = () => {
  let elemText = document.querySelector('.title');
  return elemText.textContent;
};
getTitle();

export const getDescription = () => {
  let elemAbout = document.querySelector('.about');
  return elemAbout.innerText;
};
getDescription();

export const getPlans = () => {
  let elemPlans = document.querySelector('.plans');
  return elemPlans.innerHTML;
};
getPlans();

export const getGoal = () => {
  let elemGoal = document.querySelector('.goal');
  return elemGoal.outerHTML;
};
getGoal();
