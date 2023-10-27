
let editvalue=true
function add(){
    // get div 
    const text=document.getElementById("Input").value
    document.getElementById("Input").value=""
    if(text=="")
    {
      alert("PLEASE ENTER TASK")
    }
    else
    {
    const div=document.getElementById("div1") //  TO TASK DIV ..
 
    // CREATE ELEMENT
    const divv=document.createElement("div") // MAIN
    divv.classList.add("list")
    div.appendChild(divv)

    const inputTask=document.createElement("input")
    inputTask.classList.add("input-field")
    inputTask.value=text
    inputTask.setAttribute("readonly","readonly")

    const deleteButton=document.createElement("button")
    deleteButton.classList.add("del")
    deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>'

    const editButton=document.createElement("button")
    editButton.classList.add("edit")
    editButton.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'

    const completeButton=document.createElement("button")
    completeButton.classList.add("compl")
    completeButton.innerHTML='<i class="fa-solid fa-check"></i>'
     
    const para=document.createElement("p")
    para.innerHTML="true"
    para.style.display="none"
    // APPPNED
   
    divv.appendChild(deleteButton)
    divv.appendChild(inputTask)
    divv.appendChild(editButton)
    divv.appendChild(completeButton)
    divv.appendChild(para)

   
    //  DELETE
    divv.querySelector(".del").addEventListener("click",()=>{
         divv.remove()
    })      
    divv.querySelector(".edit").addEventListener("click",()=>{
        if(para.innerHTML=="true")
        {
        if(editvalue==true)
        {
           inputTask.removeAttribute("readonly","readonly");editButton.innerHTML='<i class="fa-solid fa-bookmark"></i>'
           editvalue=false
        }
        else{
            inputTask.setAttribute("readonly","readonly")
            editButton.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
            editvalue=true
        }
    }
    else{
        alert("YOUR TASK ALREADY COMPLETED BUDDY")
    }
    })

    divv.querySelector(".compl").addEventListener("click",()=>{
        console.log("Hello i am complete")
        inputTask.style.textDecoration="line-through"
         para.innerHTML=""
    })
}
 }