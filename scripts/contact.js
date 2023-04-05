const buttonSend = document.querySelector("#send");

buttonSend.addEventListener("click", ()=>{
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const cellPhone = document.querySelector("#cell-phone").value;
    const message = document.querySelector("#message").value;
    
    if (name!="" && email!="" && cellPhone!="" && message!=""){
        document.querySelector(".message-sent").classList.toggle("to-show");
    }
});