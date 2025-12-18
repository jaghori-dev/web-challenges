console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}
const root = document.querySelector('[data-js="root"]')

const likeButton = document.querySelector('[data-js="like-button"]');

likeButton.addEventListener("click", handleLikeButtonClick);

function copyPost(post){
  const article = document.createElement("article")
  article.classList.add("post")
  article.innerHTML = post.innerHTML
  return root.append(article)
}
const articleContents = document.querySelector(".post")
copyPost(articleContents);
copyPost(articleContents);
copyPost(articleContents);
copyPost(articleContents);

// const article = document.createElement("article")
// article.classList.add("post")
// article.innerHTML = articleContents.innerHTML
// root.append(article)


// Exercise:
// Use document.createElement() and append another social media post to the body.
