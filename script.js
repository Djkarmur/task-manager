const inputValue = document.querySelector("#title");
const createTask = document.querySelector(".create");
const listed= document.querySelector(".wrapper");
const desc=document.querySelector("#desc");
const complete=document.getElementsByClassName(".completed");
const deleted =document.getElementsByClassName(".deleted");
const newTask = document.querySelector(".newtask");

function newtask() {
    
    if (inputValue.value == '') {
      alert("You must write something!");
     
    } else { 
    const newtask = document.createElement("div");
    newtask.classList.add("newtask");
    listed.appendChild(newtask);
    
   const paragraph = document.createElement('p');
   paragraph.innerText = `${inputValue.value}` + ' ==> ' + `${desc.value}`;
   newtask.appendChild(paragraph);

   
   const inputdiv = document.createElement('div');

   
   const comp = document.createElement('button');
   comp.innerText = "Completed";
   comp.classList.add("completed");

   const removebtn = document.createElement('button');
   removebtn.innerText = "Deleted";
   removebtn.classList.add("deleted");

   inputdiv.appendChild(comp);
   inputdiv.appendChild(removebtn);
   

   newtask.appendChild(inputdiv);

   inputValue.value='';
   desc.value='';

   removebtn.addEventListener('click', function(){
      newtask.remove();
   });
   comp.addEventListener('click',function(){
      newtask.classList.add("taskComplete");
      comp.remove();
   })
    }    
  }

  
    




