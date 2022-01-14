async function login(){

    try{
         let log_in_data = {
            password : document.querySelector("#pass").value,    
            username : document.querySelector("#email").value,
        
}  

log_in_data = JSON.stringify(log_in_data);
//for logi in fatch 
let login_url = `https://masai-api-mocker.herokuapp.com/auth/login`;

let response = await fetch(login_url , {
            method : "POST",
            body : log_in_data,
            headers : {
                "Content-Type" : "application/json",
            },

});
let data = await response.json()
console.log(data)

if(data.error == false){
      alert("ho gya bhai tera")
    window.location.href = "home.html"
}
else{
  alert("wrong filled")
}
    }catch(error){
        console.log(error)
    }
    }