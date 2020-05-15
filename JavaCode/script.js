var array = new Array();
array[0]="Heyy";
array[1]=1;
array[2]=45;
array[3]="Bro";
array[4]=function(){
    console.log("In array 4");
};
var b,txt=" ";
for(var x in array){
    txt+=array[x];
};
console.log(txt);
array[4]();