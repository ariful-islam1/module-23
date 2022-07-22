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


const blogs = document.getElementsByClassName('blogs');
for (const blog of blogs) {
    blog.style.border = '2px solid orange';
    blog.style.margin = '20px';
    blog.style.padding = '15px';
    blog.style.borderRadius = '10px'
}