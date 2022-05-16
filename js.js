const first=document.querySelector("#FirName");
const number=document.querySelector("#Number");
const second=document.querySelector("#SecName");
// first.onclick=function(){
//     alert("OHH NO");
// }

// second.onclick=function(){
//     for(let i in second){
//         if (type(first)===string)
//         {
            
//         }
//     }
//     alert("OHH YES");
// }

// count=0
// for (let i in number){
//     count+=1
// }
// if (count===10)
// {
// alert("Good");
// alert("Go to next section")
// }
// else{
//     alert("hey noo enter correct num of digit")
// }



const bookData = [];


function getAppointmentData(e ){
e.preventDefault()
const FirstName = document.getElementById("FirName")
const SecondName = document.getElementById("SecName")
const email = document.getElementById("Email")
const number = document.getElementById("number")
const password=document.getElementById("Passwordss")

const data = { name: FirstName.value,SecondName:SecondName.value, email: email.value, number: number.value,password:password.value

}
bookData.push(data)
// console.log(name.value, email.value,number.value);

console.log(bookData)
}

