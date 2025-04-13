const input=document.querySelector(".input-bar")
const add=document.querySelector(".add")
const allTasks=document.querySelector(".tasks")
const array=[]
add.addEventListener("click",()=>{
    if(input.value.length>1){
        const element=document.createElement("div");
    const para=document.createElement("p");
    const check=document.createElement("input")
    check.setAttribute("type","radio")
    para.append(check);
    const icon=document.createElement("i")
    icon.classList.add("fa-solid")
    icon.classList.add("fa-trash")
    icon.classList.add("delete")
    para.appendChild(document.createTextNode(""+input.value));
    element.append(para);
    element.append(icon)
    allTasks.append(element);
    icon.addEventListener("click",()=>{
        element.remove();
    })
    check.addEventListener("click",()=>{
        para.classList.add("line-through");
    })
    }
    
})
