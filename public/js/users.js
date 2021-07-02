import { hideSpinner, showSpinner } from "./spinner.js";
import { registerEventListerner } from "./helper.js";

const displayUsers = (data) => {
  const header = `<h3 class="page-tile">All users and their posts</h3>`
  const htmlContent = data.map((user) => {
    return `<div class="user">
                <div class="users__item">
                    <h3>Name: ${user.name}</h3>
                    <h4>Email: ${user.email}</h3>
                </div>
                <button class='post-btn' data-user-id=${user.id} data-user-name=${user.email}>view post</button>
            </div>
        `
  });
  htmlContent.unshift(header);
  htmlContent.join("");
  document.querySelector(".users").insertAdjacentHTML("afterbegin", htmlContent);
  return;
};

export const fetchUserInfo = () => {
  showSpinner();
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        alert("Error, Please try once again later.");
      }
      return res.json();
    })
    .then((data) => {
      hideSpinner();
      displayUsers(data);
      registerEventListerner();
    })
    .catch((error) => {
      hideSpinner();
      alert("Error, Please try once again later.");
    });
};
