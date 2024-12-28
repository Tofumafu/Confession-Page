var no = document.querySelector('button.noButton');
no.addEventListener("mouseover", moveHover)

function moveHover(){
    const x = Math.floor(Math.random() * 500)+1;
    const y = Math.floor(Math.random() * 500)+1;
    no.style.left = x + 'px';
    no.style.top = y + 'px';
}
function newPage(){
    window.location.href = "success.html";
}