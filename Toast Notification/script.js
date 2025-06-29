let toastBox = document.querySelector("#toastBox");
let successMsg = '<ion-icon name="checkmark-circle"></ion-icon> Successfully Submitted';
let errorMsg = '<ion-icon name="close-circle"></ion-icon> Please Fix the Error';
let invalidMsg = '<ion-icon name="alert-circle"></ion-icon> Invalid Input, Please Try Again';

function toastNotification(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('Error')){
        toast.classList.add("error");
    }
    if(msg.includes('Invalid')){
        toast.classList.add("invalid");
    }

    setTimeout(()=>{
        toast.remove()
    },5000)
}