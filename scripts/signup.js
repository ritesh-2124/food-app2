//declearing globle vareable
let register_data;
//calling async function 
    async function register(){
        try{
             register_data = {
    name : document.querySelector("#name").value,
      email : document.querySelector("#email").value,
      password : document.querySelector("#pass").value,
       username : document.querySelector("#user").value,
      mobile : document.querySelector("#number").value,
      description : document.querySelector("#discription").value,

        }
    register_data = JSON.stringify(register_data);
        console.log(register_data);
        }
        catch(err){
            console.log(err)
        }
        //calling api for registration of user
        let reg_api = `https://masai-api-mocker.herokuapp.com/auth/register`;
        let response =  await fetch(reg_api,{
            method : "POST",
            body : register_data,
            headers : {
                "Content-Type" : "application/json",
            },

            
        })
        let data = await response.json()
        console.log(data)
        //declearing if registration success or fail
        if(data.error == false){
            alert("account creatiion successfully")
            document.querySelector("#massage").innerHTML =  data.message;
        }
        else{
            document.querySelector("#massage").innerHTML =  data.message;
        }
    }
//for login 
function login(){
    window.location.href = "authlogin.html";
}



