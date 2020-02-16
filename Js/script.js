var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]   
var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var daysOfTheWeek = ["Sunday", "Monday","Tuesady", "Wednesday", "Thursday", "Friday", "Saturday"]     

 
function outputName (){
  var month=parseInt(document.getElementById("Month").value)
  var day=parseInt(document.getElementById("Day").value)
  var year=parseInt(document.getElementById("Year").value)
  var gender =getYourGender();

  var date =new Date(year +"/" + month + "/"+day);

  var dayBorn = date.getYourDay();

  var akanName;

  if(gender ==="male"){
      akanName = female[dayBorn]
  }
  else{
      akanName = female[dayBorn]
  }

  alert("You were born on "+daysOfTheWeek[dayBorn]+ "your Akan Name is" +akanName);
}

function getYourGender(){
    var gender = document.getElementsByName("gender");

    for(i = 0; < gender.length; i++){
        if(gender[i].checked){
            return(gender[i].value)
        }
    }
}
 