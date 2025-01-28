const btnwidth=150;
const btnheight=50;
maxheight=window.innerHeight-btnheight;
maxwidth=window.innerwidth-btnwidth;
window.addEventListener('DOMContentLoaded', () => {
    const button=document.getElementById("button2");
    button.addEventListener('mouseover', () => {
        button.style.left=Math.floor(Math.random()*(maxheight+1))+'px';
        button.style.top=Math.floor(Math.random()*(maxheight+1))+'px';
    })
})
/*nst button=document.getElementById("button");
button.addEventListener('click', () => {

});*/
