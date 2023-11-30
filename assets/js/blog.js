/*
A script to render blog posts formatted as this bootstrap element:

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
*/

const xhr = new XMLHttpRequest();
let resp, postID, postTitle, postDateTime, postDate, postTime, postImage, socialImage, postDescription, postUrl,
  postCommentsCount,  postNode, postNodeImage, postNodeBody, postNodeTitle, postNodeDate, postNodeDesc, postNodeLink;

xhr.open("GET", "https://dev.to/api/articles?username=bbeale");
xhr.send();
xhr.responseType = "json";

xhr.onload = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {

    for (let r in xhr.response) {
      resp = xhr.response[r];

      postID = resp.id;
      postTitle = resp.title;
      postDateTime = resp.created_at.split("T");
      postDate = postDateTime[0];
      postTime = postDateTime[1].split("Z")[0];
      postImage = resp.cover_image;
      socialImage = resp.social_image;
      postDescription = resp.description;
      postUrl = resp.url;
      postCommentsCount = resp.comments_count;

      postNode = document.createElement("div");
      postNode.className = "blog-card";

      postNodeImage = document.createElement("img");
      postNodeImage.className = "card-img-top";
      postNodeImage.setAttribute("src", socialImage);
      postNodeImage.setAttribute("alt", "socialImage test");

      postNodeBody = document.createElement("div");
      postNodeBody.className = "card-body";

      postNodeTitle = document.createElement("h3");
      postNodeTitle.className = "mt-0";
      postNodeTitle.innerHTML = `${postTitle}`;

      postNodeDate = document.createElement("p");
      postNodeDate.className = "blog-date";
      postNodeDate.innerHTML = `${postDate} at ${postTime}`;

      postNodeDesc = document.createElement("p");
      postNodeDesc.className = "lead mb-4";
      postNodeDesc.innerHTML = `${postDescription}`;

      postNodeLink = document.createElement("a");
      postNodeLink.setAttribute("href", postUrl);

      postNodeLink.setAttribute("target", "_blank");
      postNodeLink.setAttribute("rel", "noopener noreferrer");
      postNodeLink.innerHTML = "Continue reading";

      postNodeBody.appendChild(postNodeTitle);
      postNodeBody.appendChild(postNodeDate);
      postNodeBody.appendChild(postNodeDesc);
      postNodeBody.appendChild(postNodeLink);

      postNode.appendChild(postNodeImage);
      postNode.appendChild(postNodeBody);

      document.getElementById("blogPosts").appendChild(postNode);
    }
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
