
    function validateEmail(){
    if(!document.getElementById("Email").value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    document.getElementById("p33").innerHTML="Enter a vaild email";
    return false;
}
    document.getElementById("p33").innerHTML="Vaild email";
    document.getElementById("account").innerHTML=document.getElementById("Email").value;
    return true;
}
    function check(){
    if(validateEmail()){
    document.getElementById("loginform").submit();
}}
