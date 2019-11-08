// var day = new Date();
// var hr = day.getHours();
// if (hr >= 0 && hr < 12) {
//    time();
// } else if (hr == 12) {
//     document.write("Good Afternoon!");
// } else if (hr >= 12 && hr <= 17) {
//     document.write("Good Evening!"+"<br>"+ " user");
// } else {
//     document.write("Good night !");
// }
// document.write();

// function time(){
//     document.write("Good Morning!");
// }
// function funboi()
// {
//   document.getElementById("pp").innerHTML = "";
// }



function displayCalendar()
{
var htmlContent ="";
var FebNumberOfDays ="";
var counter = 1;
var dateNow = new Date();
var month = dateNow.getMonth();

var nextMonth = month+1; 
var prevMonth = month -1;
var day = dateNow.getDate();
var year = dateNow.getFullYear();

if (month == 1){
if ( (year%100!=0) && (year%4==0) || (year%400==0)){
FebNumberOfDays = 29;
}else{
FebNumberOfDays = 28;
}
}
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]

var nextDate = new Date(nextMonth +' 1 ,'+year);
var weekdays= nextDate.getDay();
var weekdays2 = weekdays
var numOfDays = dayPerMonth[month];

while (weekdays>0){
htmlContent += "<td class='monthPre'></td>";

weekdays--;
}

while (counter <= numOfDays){

if (weekdays2 > 6){
weekdays2 = 0;
htmlContent += "</tr><tr>";
}

if (counter == day){
htmlContent +="<td class='dayNow' onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' "+
"onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";
}else{
htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"#FF0000\"'"+
" onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>"; 
}

weekdays2++;
counter++;
}

var calendarBody = "<table class='calendar'> <tr class='monthNow'><th colspan='7'>"
+monthNames[month]+" "+ year +"</th></tr>";
calendarBody +="<tr class='dayNames'> <td>S</td> <td>M</td> <td>T</td>"+
"<td>W</td> <td>T</td> <td>F</td> <td>S</td> </tr>";
calendarBody += "<tr>";
calendarBody += htmlContent;
calendarBody += "</tr></table>";
document.getElementById("calendar").innerHTML=calendarBody;
}