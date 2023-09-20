let form = document.getElementById("form");
let title = document.getElementById("textInput")
let msg = document.getElementById("message");
let dateInput = document.getElementById("dateInput");
let textAreaInput = document.getElementById("textAreaInput");
let tasks = document.getElementById("lowerbox");
let add = document.getElementById("addButton");
let close = document.getElementById("closeButton")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted");
  formValidation();
});

let formValidation = ()=>{
    if(title.value === ""){
        msg.innerHTML = "Message cannot be blank";
        console.log("Failure");
    }
    else{
        msg.innerHTML = "";
        console.log("Success");
        accepData();
        // when we click to teh add button the form should get closed automatically
        // so we had set attribute whose attributes are copied from close button from the FORM

        // Now we are using IIFE so that when we don't write anything then 
        // it sould not be closing the form
        (()=>{
            add.setAttribute("data-bs-dismiss", "modal");
            add.click(); // this is used so that we dont click to add twice to close the form
        })();
    }
};

let data = {};

let accepData = () =>{
    data["title"] = title.value;
    data["date"] = dateInput.value;
    data["description"] = textAreaInput.value;
    console.log(data);
    uploadData();
}

let uploadData = () =>{
    tasks.innerHTML +=
    `   <div>
          <span class="fw-bold">${data.title}</span>
          <br />
          <span class="small text-secondary">${data.date}</span>
          <p>${data.description}</p>
          <span class="options">
            <i onclick="update(this)" data-bs-toggle="modal"
            data-bs-target="#form" class="fas fa-edit"></i>
            <i onclick="Delete(this)" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `
    // These lines of code to reset the form when we click on add dbutton
    title.value="";
    dateInput.value="";
    textAreaInput.value="";    
}

let Delete = (e) =>{
    e.parentElement.parentElement.remove();
}

// now wehen I click on the edit button it should reoppening
// the form so edit modal to the button to reopen the form
let update = (e) =>{
    let selectedTask = e.parentElement.parentElement;

    title.value= selectedTask.children[0].innerHTML;
    dateInput.value= selectedTask.children[2].innerHTML;
    textAreaInput.value= selectedTask.children[3].innerHTML;
    selectedTask.remove();
}

