alert("welcome to my  clock project");



setInterval(() => {

 

d= new Date();
htime= d.getHours();
mtime= d.getMinutes();
stime= d.getSeconds();

rotation1=30*htime+mtime/2;
rotation2=6*mtime;
rotation3=6*stime;


first.style.transform=`rotate(${rotation1}deg)`;
second.style.transform=`rotate(${rotation2}deg)`;
third.style.transform=`rotate(${rotation3}deg)`;

}, 1000);