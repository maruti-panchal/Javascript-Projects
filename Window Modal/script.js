const showModal=document.querySelectorAll(".show-modal");
const closeModal=document.querySelector(".close-modal");
const modalHidden=document.querySelector(".modal");
const overlayHidden=document.querySelector(".overlay ");

const showBtn=()=>{
    modalHidden.classList.remove("hidden");
    overlayHidden.classList.remove("hidden");
 }

 const closeBtn=()=>{
  modalHidden.classList.add("hidden");
  overlayHidden.classList.add("hidden");
 }

for(let i=0;i<showModal.length;i++)
  showModal[i].addEventListener("click",showBtn);


closeModal.addEventListener("click",closeBtn);