let userName=document.getElementById("txtUserName");
let Listname=document.getElementById("txtListname");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function validateInput(){
    
    if(userName.value.trim()===""){
       onError(userName,"Firstname cannot be empty");
    }else{
        onSuccess(userName);
    }

    if(Listname.value.trim()===""){
        onError(Listname,"Listname cannot be empty");
     }else{
         onSuccess(Listname);
     }
     

    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

    
    if(pwd.value.trim()===""){
        onError(pwd,"Password cannot be empty");
     }else{
         onSuccess(pwd);
     }
     if(conPwd.value.trim()===""){
        onError(conPwd,"Passwordcheck cannot be empty");
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"The Password does not match the PasswordCheck");
         }
         else
         onSuccess(conPwd);
     }
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
     return window.open("http://www.aztu.edu.az/azp/#/azp/main.do")
}

function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   .test(email);
}
