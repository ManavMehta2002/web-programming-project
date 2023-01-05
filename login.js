function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if(username=="")
    {
        alert("Please Enter username.");
        return false;
    }
    if(username.length<3)
    {
       window.alert("Username should be greater than 3 characters.");
       return false;
    }
    if(username.length>20) 
    {
       window.alert("Username should not be greater than 20 characters.");
       return false;
    }
    


}