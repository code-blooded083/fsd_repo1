function validate(){
    let login=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(login=="admin"&&pass=="admin"){
       p1.innerText="Login Successful";
    }else{
        p1.innerText="Invalid Login";
    }
}