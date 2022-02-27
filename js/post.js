const loadPost = () => {
fetch ('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => showPost(data))
};

const showPost = (posts) => {
    const postWrapper = document.getElementById('posts');
    posts.forEach(post => {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post');
        const postTitle = document.createElement('h4');
        postTitle.innerText = `${post.title}`;
        postContainer.appendChild(postTitle);
        const postBody = document.createElement('p');
        postBody.innerText = `${post.body}`;
        postContainer.appendChild(postBody);
        postWrapper.appendChild(postContainer);
    });
};

loadPost();