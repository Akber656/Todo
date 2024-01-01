
let form  = document.getElementById("form");
let input = document.getElementById("input");
let msgs  = document.getElementById("msg");
let posts = document.getElementById("post");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formValidation();
});

let formValidation = () =>{
    if(input.value === ""){
        msgs.innerHTML = "TODO cant be blank";
    }else{
        msgs.innerHTML="";
        acceptData();
        createPosts();
    }
}
let data = {};

let acceptData = () =>{
    data["text"] = input.value;
}
let createPosts = ()=>{
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i class="far fa-edit" onClick="editPost(this)"></i>
        <i class="far fa-trash-alt" onClick="deletePost(this)"></i>
    </span>
    </div>
    `;
    input.value="";
}
let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}

let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

































