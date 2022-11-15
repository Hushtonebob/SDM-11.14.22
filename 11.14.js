let colors = ["red","blue","yellow","green","orange","pink","black"]
document.getElementById("header").addEventListener("click",()=>{
setInterval(()=>document.body.style.backgroundColor = colors[Math.round(Math.random() * 7)],100)
}
);
