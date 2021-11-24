function fun1(){
    alert("Hi, Hello!");
}

function fun2(name){
    alert("Hi "+ name);
}

fun1();
fun2('Samba');

const task3Element = document.getElementById('task3');

task3Element.addEventListener('click',fun1);

function fun3(str1,str2,str3){
    return str1 + str2 + str3;
}

alert(fun3('Revanth','Kumar','Reddy'));