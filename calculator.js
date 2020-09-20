var display = window.document.getElementById('display');
var calculation = "";
display.innerHTML = calculation;




function fun1() {
    calculation = calculation + "1";
    display.innerHTML = calculation;
}
function fun2() {
    calculation = calculation + "2";
    display.innerHTML = calculation;
}
function fun3() {
    calculation = calculation + "3";
    display.innerHTML = calculation;
}
function fun4() {
    calculation = calculation + "4";
    display.innerHTML = calculation;
}
function fun5() {
    calculation = calculation + "5";
    display.innerHTML = calculation;
}
function fun6() {
    calculation = calculation + "6";
    display.innerHTML = calculation;
}
function fun7() {
    calculation = calculation + "7";
    display.innerHTML = calculation;
}
function fun8() {
    calculation = calculation + "8";
    display.innerHTML = calculation;
}
function fun9() {
    calculation = calculation + "9";
    display.innerHTML = calculation;
}
function fun0() {
    calculation = calculation + "0";
    display.innerHTML = calculation;
}
function funplus(){
    calculation = calculation + "+";
    display.innerHTML = calculation;
}
function funslash() {
    calculation = calculation + "-";
    display.innerHTML = calculation;
}
function fundiv() {
    calculation = calculation + "/";
    display.innerHTML = calculation;
}
function funrs() {
    calculation = "";
    display.innerHTML = calculation;
}
function funx() {
    calculation = calculation + "*";
    display.innerHTML = calculation;
}
function funs() {
    calculation = eval(calculation);
    display.innerHTML = calculation;
}
function funp(){
    calculation = calculation + ".";
    display.innerHTML = calculation;
}
