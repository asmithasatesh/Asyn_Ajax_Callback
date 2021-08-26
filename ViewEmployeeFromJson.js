let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function makeAjaxCall(methodType,url,callBack,async=true,data=null){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        console.log("State Change Called. Ready State: "+xhr.readyState+" Status: "+xhr.status);
        if( xhr.readyState == 4){
            if( xhr.status==200 ||xhr.status==201){
                callBack(xhr.responseText);
            }
            else if(xhr.status>=400){
                console.log("Handle 400 client error or 500 server error");
            }
        }
    }
    xhr.open(methodType,url,async);
    if(data)
    {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(JSON.stringify(data));
    }
    else
    {
        xhr.send();
    }
    console.log(methodType+" request send to the server");
}


const getURL = "http://localhost:3000/employees/1";
//Method for call back
function getUserDetails(data){
    console.log("Get User Data: "+data);
}
//Performing GET operation
makeAjaxCall("GET",getURL,getUserDetails);

const delURL = "http://localhost:3000/employees/3";
//Method for call back
function userDeleted(data){
    console.log(" User Deleted: "+data);
}
//Performing DELETE operation
makeAjaxCall("DELETE",delURL,userDeleted,false);

const postURL = "http://localhost:3000/employees";
const empData = {"first_name":"Rakesh","last_name":"Kumar","salary":550000};
//Method for call back
function addUser(data){
    console.log(" User Posted: "+data);
}
//Performing POST operation
makeAjaxCall("POST",postURL,addUser,true,empData);
