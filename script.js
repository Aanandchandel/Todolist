const inputbox=document.getElementById("inputBox");
const listC=document.getElementById("list");
 const addtask=()=>{
    if(inputbox.value ===''){
        alert("you must enter somthing")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML= inputbox.value;
        listC.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span); 

    }
    save();
    inputbox.value="";
 }


const save=()=>{
    localStorage.setItem("data",listC.innerHTML)
}
const show=()=>{
    listC.innerHTML=localStorage.getItem("data");
}


show();