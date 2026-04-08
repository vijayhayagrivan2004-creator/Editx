// LOADER
setTimeout(()=>{
  document.getElementById("loader").style.display="none";
},2000);

// CURSOR
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});

// TYPING
const text="Mechatronics Engineering Student | Automation";
let i=0;
function type(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text[i];
    i++;
    setTimeout(type,30);
  }
}
type();

// 3D TILT
const tilt=document.querySelector(".tilt");
document.addEventListener("mousemove",(e)=>{
  let x=(window.innerWidth/2-e.pageX)/25;
  let y=(window.innerHeight/2-e.pageY)/25;
  tilt.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;
});