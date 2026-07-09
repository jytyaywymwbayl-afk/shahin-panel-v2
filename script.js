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

if(box) box.innerHTML="";
if(cfg) cfg.innerHTML="";

users.forEach((u,i)=>{

if(box){

box.innerHTML+=`
<div class="user">

<b>${u.name}</b><br>

پروتکل : ${u.protocol}<br>

حجم : ${u.volume}GB<br><br>

<button onclick="exportConfig(${i})">
کپی کانفیگ
</button>

<button onclick="deleteUser(${i})">
حذف
</button>

</div>
`;

}

if(cfg){

cfg.innerHTML+=`
<div class="user">

🔗 کانفیگ ${u.name}

</div>
`;

}

});

document.getElementById("usersCount").innerHTML=users.length;
document.getElementById("configsCount").innerHTML=users.length;
document.getElementById("activeCount").innerHTML=users.length;

}

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
function deleteUser(index){

if(confirm("کاربر حذف شود؟")){

users.splice(index,1);

localStorage.setItem("users",JSON.stringify(users));

renderUsers();

}

}
window.onload=function(){

let savedUsers=localStorage.getItem("users");

if(savedUsers){

users=JSON.parse(savedUsers);

}

renderUsers();

let github=localStorage.getItem("githubLink");

if(github){

document.getElementById("githubText").innerHTML=
`<a href="${github}" target="_blank">${github}</a>`;

document.getElementById("githubLink").value=github;

}

showPage("dashboard");

}
document.addEventListener("DOMContentLoaded",()=>{

document.querySelectorAll(".menu-item").forEach(item=>{

item.addEventListener("click",function(){

document.querySelectorAll(".menu-item").forEach(i=>i.classList.remove("active"));

this.classList.add("active");

});

});

});
function updateCards(){

document.getElementById("usersCount").innerHTML=users.length;

document.getElementById("configsCount").innerHTML=users.length;

document.getElementById("activeCount").innerHTML=users.length;

}

const oldRenderUsers=renderUsers;

renderUsers=function(){

oldRenderUsers();

updateCards();

}
function openGithub(){

let link=localStorage.getItem("githubLink");

if(link && link.trim()!==""){

window.open(link,"_blank");

}else{

alert("ابتدا لینک GitHub را در تنظیمات وارد کنید.");

}

}
function createConfig(name){

return `vless://${name}@shahin-panel`;

}

function exportConfig(index){

const cfg=createConfig(users[index].name);

navigator.clipboard.writeText(cfg);

alert("کانفیگ کپی شد.");

}
function searchUsers(text){

text=text.toLowerCase();

document.querySelectorAll("#usersList .user").forEach(item=>{

if(item.innerText.toLowerCase().includes(text)){

item.style.display="block";

}else{

item.style.display="none";

}

});

}
function clearAllUsers(){

if(confirm("تمام کاربران حذف شوند؟")){

users=[];

localStorage.removeItem("users");

renderUsers();

}

}
