
function createDateOptions() {

  let dateoptions = "<option value='0'>select</option>";
  for (let i = 1; i <= 31; i++) {
    dateoptions = dateoptions + "<option value='" + i + "'>" + i + "</option>"
  }

  document.getElementById("select1").innerHTML = dateoptions;

}

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function createMonthOptions() {

  let Monthoption = "<option value='0'>select</option>"

  for (let i = 1; i <= 12; i++) {

    Monthoption += "<option value='" + months[i - 1] + "'>" + months[i - 1] + "</option>"

  }

  document.getElementById("select2").innerHTML = Monthoption;
}


function createYearOptions() {

  let d = new Date()

  let year = d.getFullYear()

  let yearoption = "<option value='0'>select</option>";

  for (let i = year; i >= 1905; i--) {
    yearoption = yearoption + "<option value='" + i + "'>" + i + "</option>"
  }
  document.getElementById("select3").innerHTML = yearoption;
}

// let months=["Jan","Feb", "Mar", "Apr",  "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// function createMonthOptions(){

//    let Monthoption= "<option value='0'>select</option>"

//    for(let x of months){

//        Monthoption +=  "<option value='"+x+"'>"+x+"</option>"
//    }
//    document.getElementById("select2").innerHTML=Monthoption;
// }

// another way
// function createYearOptions(){

//     let yearoption="<option value='0'>select</option>";
//     for(let i=2022;i>=1905;i--){

//         yearoption =yearoption+"<option value='"+i+"'>"+i+"</option>"
//     }
//     document.getElementById("select3").innerHTML=yearoption;
// }



function displayfunction() {

  displayoptionfunction()
  gendervalidity()
}

function displayoptionfunction() {

  let x = document.getElementById("selectbirthday");
  let y = document.getElementById("pronoun");
  let z = document.getElementById("genderOption");

  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";

}


function showorhidefunction() {
  let x = document.getElementById("selectbirthday");
  let y = document.getElementById("pronoun");
  let z = document.getElementById("genderOption");

  x.style.display = "block";
  y.style.display = "block";
  z.style.display = "block";
  pronounValidity();
  gendervalidity();
}



function gendervalidity() {
  document.getElementById("img9").src = "file:///C:/Users/pavan/Desktop/my%20projects/js/bro%20fb/Facebook/images/exclamatory.png";
  document.getElementById("img9").alt = "exclamatory image";

  if ((document.getElementById("female").checked) || (document.getElementById("male").checked) || (document.getElementById("custom").checked)) {
    document.getElementById("img9").style.display = "none";

  }
  else {
    document.getElementById("img9").style.display = "block";
  }
}

function DOBvalidity() {
  document.getElementById("img4").src = "file:///C:/Users/pavan/Desktop/my%20projects/js/bro%20fb/Facebook/images/exclamatory.png";
  document.getElementById("img4").alt = "exclamatory image";
  if (document.getElementById("select1").value == "0" && document.getElementById("select2").value == "0" && document.getElementById("select3").value == "0") {
    document.getElementById("img4").style.display = "block";

  }
  else {
    document.getElementById("img4").style.display = "none";

  }

}

function pronounValidity() {
  console.log("in")
  document.getElementById("img5").src = "file:///C:/Users/pavan/Desktop/my%20projects/js/bro%20fb/Facebook/images/exclamatory.png";
  document.getElementById("img5").alt = "exclamatory image";

  if ((document.getElementById("selectbirthday").value == "0") && (document.getElementById("custom").checked)) {
    document.getElementById("img5").style.display = "block";
  }
  else {
    document.getElementById("img5").style.display = "none";
    console.log("indian")
  }
}



function firstnamevalidity() {
  document.getElementById("img6").src = "file:///C:/Users/pavan/Desktop/my%20projects/js/bro%20fb/Facebook/images/exclamatory.png";
  document.getElementById("img6").alt = "exclamatory image";
  let letters = /^[A-Za-z]+$/;

  if (document.getElementById("fname").value.match(letters)) {
    document.getElementById("img6").style.display = "none";
    // return true;
  }
  else {
    document.getElementById("img6").style.display = "block";
    // return false;
  }
}


function surnamevalidity() {
  document.getElementById("img7").src = "file:///C:/Users/pavan/Desktop/my%20projects/js/bro%20fb/Facebook/images/exclamatory.png";
  document.getElementById("img7").alt = "exclamatory image";
  let letters = /^[A-Za-z]+$/;

  if (document.getElementById("sname").value.match(letters)) {
    document.getElementById("img7").style.display = "none";
  }
  else {
    document.getElementById("img7").style.value = "block";
  }
}

function mobileoremail_Validity() {
  document.getElementById("img8").src = "file:///C:/Users/pavan/Desktop/my%20projects/js/bro%20fb/Facebook/images/exclamatory.png";
  document.getElementById("img8").alt = "exclamatory";

  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (document.getElementById("mobileoremail").value.match(mailformat)) {
    document.getElementById("img8").style.display = "none"
  }
  else {

    document.getElementById("img8").style.display = "block"
  }
}

function passwordvalidity(){
document.getElementById("img10").src="file:///C:/Users/pavan/Desktop/my%20projects/js/bro%20fb/Facebook/images/exclamatory.png";
document.getElementById("img10").alt="execlamatory";

let password=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
if(document.getElementById("psswrd").value.match(password))
{
  document.getElementById("img10").style.display="none";document.getElementById("img10").style.display="none"
}
else{
  document.getElementById("img10").style.display="block";
}


}
function signupvalidity(){
  gendervalidity();
  DOBvalidity();
  pronounValidity();
  firstnamevalidity();
  surnamevalidity();
  mobileoremail_Validity() ;
  passwordvalidity();
  signup();
}

function signup(){
  let letters = /^[A-Za-z]+$/;
  let password=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(((document.getElementById("female").checked) || (document.getElementById("male").checked) ||
  ((document.getElementById("selectbirthday").value != "0") 
  &&(document.getElementById("custom").checked)))

   &&((document.getElementById("select1").value != "0" && 
   document.getElementById("select2").value != "0" && 
   document.getElementById("select3").value != "0"))


&&document.getElementById("fname").value.match(letters)

&&document.getElementById("sname").value.match(letters)

&&((document.getElementById("mobileoremail").value.match(mailformat))&& (document.getElementById("psswrd").value.match(password))))

   {
    alert("Registered Successfully!")
   }
}
    
    

