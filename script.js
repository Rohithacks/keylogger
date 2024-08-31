const startbtn = document.getElementById("btn1");
const stopbtn = document.getElementById("btn2");
const press = document.getElementById("press");
const release = document.getElementById("release");

startbtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handledown);
    document.addEventListener("keyup",handleup);

});

stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    press.textContent="";
    release.textContent="";
});

function handledown(e){
    press.textContent = `key ${e.key} pressed down`;
    release.textContent = `key is down`;
}
function handleup(e){
    press.textContent = `key ${e.key} pressed up`;
    release.textContent = `key is up`;
}


