const ulList=document.getElementById("list-container");
const inputvalue = document.getElementById("input-box");
const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    if(!inputvalue.value){
        alert("Please! Create Task ");
    }
    let newList=document.createElement("li");
    newList.innerHTML=inputvalue.value;
    ulList.appendChild(newList);
    inputvalue.value = "";

})
