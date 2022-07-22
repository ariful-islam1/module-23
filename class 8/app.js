const secondTitle = document.getElementById('second-title');
secondTitle.style.textAlign = 'center';

const thirdTile = document.getElementById('third-title');
thirdTile.style.backgroundColor = 'cyan';
thirdTile.style.fontSize = '24px';
thirdTile.style.padding = '30px';
thirdTile.style.marginLeft = '10px';
thirdTile.innerText = 'Title Updated by JS';

const fourthTile = document.getElementById('fourth-title');
fourthTile.innerText = 'I can do magic';


const article = document.createElement('article');
article.classList.add('blogs');
const h3 = document.createElement('h3');
const p = document.createElement('p');
h3.innerText = 'my Awwsome Blog-5'
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis, commodi necessitatibus reprehenderit totam, quas dolorem similique, corporis tempora saepe recusandae fugiat magnam molestiae quaerat voluptatem dicta dignissimos! Consectetur, deserunt.'
article.appendChild(h3);
article.appendChild(p);
const section = document.getElementById('section');
section.appendChild(article)

const blogs = document.getElementsByClassName('blogs');
for (const blog of blogs) {
    blog.style.border = '2px solid orange';
    blog.style.margin = '20px';
    blog.style.padding = '15px';
    blog.style.borderRadius = '10px'
}

const li = document.createElement('li');
li.innerText = "list-5";
const ul = document.getElementById('list-blog');
ul.appendChild(li);


