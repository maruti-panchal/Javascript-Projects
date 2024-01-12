const input=document.getElementById("inputBox");
const btn=document.querySelectorAll("button");
let str="";
const convBtn=Array.from(btn);
convBtn.forEach(currentBtn=>{
    currentBtn.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            input.value=eval(str)
        }else if(e.target.innerText=="AC"){
            str="";
            input.value=str;
        }else{
            str+=e.target.innerText;
            input.value=str;
        }
 

    })
})
