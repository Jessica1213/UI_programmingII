name = localStorage.getItem("username");
icon = localStorage.getItem("picture");

console.log(name);
console.log(icon);
//$(name).appendTo("#usernameLogin");
//$(icon).appendTo("#usericon");

$(function(){
    document.getElementById("usernameLogin").innerHTML = name;
    document.getElementById("usericon").innerHTML = icon;
    //get login user name

});


