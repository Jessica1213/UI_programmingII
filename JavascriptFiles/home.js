name = sessionStorage.getItem("username");
pic = sessionStorage.getItem("pic");

console.log(name);
console.log(pic);

$(function(){
    //show login user name
    document.getElementById("usernameLogin").innerHTML = name;
    document.getElementById("usericon").src = pic;
});
