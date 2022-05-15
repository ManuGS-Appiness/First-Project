const first=document.querySelector("#FirName");
const number=document.querySelector("#Number");
const second=document.querySelector("#SecName");
first.onclick=function(){
    alert("OHH NO");
}

second.onclick=function(){
    alret("OHH YES");
}

count=0
for (let i in number){
    count+=1
}
if (count===10)
{
alert("Good");
alert("Go to next section")
}
else{
    alert("hey noo enter correct num of digit")
}