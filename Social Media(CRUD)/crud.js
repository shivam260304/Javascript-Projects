let post = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");



// submit (EVENTLISTENER)
post.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("Submitted");
    formValidation();
})

// VALIDATING FORM (success or failure)
let formValidation =()=>{
    if (input.value === "") {
        msg.innerHTML = "Message is not submitted";
        console.log("Failure");
    }
    else{
        msg.innerHTML = "";
        console.log("Success");
        accepData();
    }
};

// DATA ACCEPTED IN THE data OBJECT
let data ={};
let accepData = () =>{
    data["text"] = input.value;
    console.log(data);
    createPost();
}

// Displaying Data on the Screen (Very IMPORTANT)
let createPost =()=>{
    posts.innerHTML += 
    `<div>
    <p>${data.text}</p>
    <span class="options">
      <i onclick="up(this)" data-bs-toggle="modal"
      data-bs-target="#form" class="fas fa-edit"></i>
      <i onclick="d(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;
    input.value="";
}

// delete (inline event Listener)
let d =(e) =>{
    e.parentElement.parentElement.remove();
}

let up = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}



