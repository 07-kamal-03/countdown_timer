// window.onload=function(){
//     document.getElementById("autoplay").play(); 
// }

function setTimer()
{
    var enteredDate=new Date(document.getElementById("inputDate").value);
    console.log(enteredDate);
    var countdowndate = enteredDate.getTime();
    var x = setInterval(function () {
    var today = new Date().getTime();
    var distance = countdowndate - today;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);
}
// alert("IQOO 12 launching... event...");