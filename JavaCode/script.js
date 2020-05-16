function sayHello(){
    var mane=document.getElementById("name").value;
    var message = "Hello "+mane+"!";
    document.getElementById("content").textContent=message;
};
