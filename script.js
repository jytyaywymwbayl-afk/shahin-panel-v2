function toggleMenu() {

document.getElementById("sidebar").classList.toggle("active");

document.getElementById("overlay").classList.toggle("active");

}

let users = JSON.parse(localStorage.getItem("users")) || [];

function showPage(page){

document.getElementById("dashboard-page")?.style.setProperty("display","none");

document.getElementById("users-page").style.display="none";

document.getElementById("configs-page").style.display="none";

document.getElementById("settings-page").style.display="none";

document.getElementById("github-page").style.display="none";

document.getElementById(page+"-page").style.display="block";

}

function createUser(){

let name=document.getElementById("username").value;

let protocol=document.getElementById("protocol").value;

let volume=document.getElementById("volume").value;

if(name=="") return;

users.push({

name,

protocol,

volume

});

localStorage.setItem("users",JSON.stringify(users));

renderUsers();

}

function renderUsers(){

let box=document.getElementById("usersList");

let cfg=document.getElementById("configsList");

if(!box)return;

box.innerHTML="";

cfg.innerHTML="";

users.forEach((u,i)=>{

box.innerHTML+=`
<div class="user">
🦅 ${u.name}
<br>
${u.protocol}
-
${u.volume}GB
</div>
`;

cfg.innerHTML+=`
<div class="user">
کانفیگ ${u.name}
</div>
`;

});

}

function saveSettings(){

let link=document.getElementById("githubLink").value;

localStorage.setItem("githubLink",link);

document.getElementById("githubText").innerHTML=link;

}

window.onload=function(){

renderUsers();

let link=localStorage.getItem("githubLink");

if(link){

document.getElementById("githubText").innerHTML=link;

}

};
