const btn=document.getElementById('btn');
const container=document.getElementById('container');
btn.addEventListener("click", ()=>{
    show();
});

function show(){
    const notif=document.createElement("div");
    notif.classList.add('notif');
    notif.innerText="i am short notification";
    container.appendChild(notif);
    setTimeout( ()=>{
      notif.remove();
    } , 3000)
    
}