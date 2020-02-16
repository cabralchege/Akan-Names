var maleAkanNames = ["Kwasi", "Kwanndo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]   
var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var daysOfTheWeek = ["Sunday", "Monday","Tuesady", "Wednesday", "Thursday", "Friday", "Saturday"]     

 
function outputName (){
  var month=parseInt(document.getElementById("Month").value)
  var day=parseInt(document.getElementById("Day").value)
  var year=parseInt(document.getElementById("Year").value)
  var gender =getGender();

  var date =new Date(year +"/" + month + "/"+day);

  var dayBorn = date.getDay();

  var akanName;

  if(gender ==="male"){
      akanName = female[dayBorn]
  }
  else{
      akanName = female[dayBorn]
  }

  alert("You were born on "+daysOfTheWeek[dayBorn])

  

}
 