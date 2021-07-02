export const hideSpinner = () => {
  const spinner = document.querySelector(".ring");
  document.querySelector(".spinner").classList.remove("backdrop-bg");
  spinner.parentNode.removeChild(spinner);
  return;
};
export const showSpinner = () => {
  document.querySelector(".spinner").classList.add("backdrop-bg");
  const spinner = `
      <div class="ring">
        Loading
        <span></span>
      </div>`;
  document.querySelector(".spinner").insertAdjacentHTML("afterbegin", spinner);
};
