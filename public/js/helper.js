import { fetchPosts } from "./posts.js";

export const registerEventListerner = () => {
  Array.from(document.querySelectorAll(".post-btn")).forEach((btn) =>
    btn.addEventListener("click", fetchPosts)
  );
};
