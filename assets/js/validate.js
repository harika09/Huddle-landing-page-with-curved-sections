/* Prevent the page when clicking button going up */
document.getElementById("validate-btn").addEventListener("click", function(event){
    event.preventDefault()
});



/* Validate Email */
function validate(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
    }
    else{
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = ("Please enter a valid email address");
        text.style.color = "red";
        document.getElementById("email").style.boderColor = "red";
    }
    
}