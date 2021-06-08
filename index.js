export const getTitle = () => {
  let elemText = document.querySelector('.title');
  return elemText.textContent;
};

export const getDescription = () => {
  let elemAbout = document.querySelector('.about');
  return elemAbout.innerText;
};

export const getPlans = () => {
  let elemPlans = document.querySelector('.plans');
  return elemPlans.innerHTML;
};

export const getGoal = () => {
  let elemGoal = document.querySelector('.goal');
  return elemGoal.outerHTML;
};
