const form= document.getElementById('form1');
const Fname= document.getElementById('1stName');
const Lname= document.getElementById('lastn');
const Abt=document.getElementById('about1');
const sbmt= document.getElementById('submit');

const formval= document.getElementById('form1').value;
const Fnameval= document.getElementById('1stName').value;
const Lnameval= document.getElementById('lastn').value;
const Abtval=document.getElementById('about1').value;

const email= document.getElementById("em");
const phnm=document.getElementById("ph");

const emailval=document.getElementById("em").value;
const phnmval=document.getElementById("ph").value;


 sbmt.addEventListener('click', (Event)=>
{
   Event.preventDefault();
   validatee();
});
function  validatee(){

if(Fnameval.trim()==="")
{
   success(Fname);
   return false;
   
}
else
{
  
   error(Fname);
   document.getElementById("error1").innerHTML= "Please enter the first name";
   return true;

}
};
function error(element)
{
   element.style.border="2px solid red";
}
function success(element)
{
   element.style.border="2px solid green";
}





 /* form.addEventListener('submit', function(check)

{
 check.preventDefault();
 confirm();
 confirmL();
 confirmA();
});

function confirm()
{
 if (Fnameval === "")
 {
    setErrormsg(Fname, 'Please enter first name');
    

 }

 if (Lnameval === "")
 {
    setErrormsg(Lname, 'Please enter last name');
    

 }

 if (Abtval === "")
 {
    setErrormsg(Abt, 'Please enter info about you');
    

 }
}

function setErrormsg( input, errormsg)
{
 const formControl= input.parentElement;
 const smmall= formControl.querySelector('small');
 formControl.className= ""
 smmall.innerText= errormsg;
 
}

*/


 
  /* inputElement.addEventListener("input", function () {
      // Check if the input is not empty
      if (inputElement.value.trim() !== "") {
          // If it's not empty, change the border to green
          
  
          inputElement.style.border = "2px solid green";
         }} 
        ); */
         /* if (Fnameval === "")
 {
document.getElementById("error1").innerHTML= "Please enter the first name";
$("#1stName").css("border", "1.5px solid red");
           

} */

/*if (Fnameval === "")
{
document.getElementById("error1").innerHTML= "Please enter the first name";
$("#1stName").css("border", "1.5px solid red");
}
 
if(Fnameval !=="")
{
   $("#1stName").css("border", "1.5px solid green");
}

 if (Lnameval === "")
 {
   document.getElementById("error2").innerHTML= "Please enter the last name";
   $("#lastn").css("border", "1.5px solid red");
 }

 if(Lnameval !=="")
{
   $("#lastn").css("border", "1.5px solid green");
}
if (Abtval === "")
{
   document.getElementById("error3").innerHTML= "Please enter the about name";
   $("#about1").css("border", "2px solid red");
}



/*else{
   $("#1stName, #about1, #lastn").css("border", "2px solid green");
   formval.readonly;

} */
function validate()
{

//date
var dateField = document.getElementById("date1");

// Get the current date and format it as "YYYY-MM-DD"
var currentDate = new Date();
var formattedDate = currentDate.toISOString().slice(0, 10);

// Set the date field's value to the current date
dateField.value = formattedDate;
}



const txt=document.getElementById("about1"),
      numleft=document.getElementById("numleft"),
      submit=document.getElementById("submit");
txt.oninput=showComment;

function showComment(){ 
  submit.disabled=((numleft.textContent=50-txt.value.length)==0);

}  
//function readImage(file) {
   // Check if the file is an image.
   /*if (file.type && !file.type.startsWith('image/')) {
     console.log('File is not an image.', file.type, file);
     return;
   }
 
   const reader = new FileReader();
   reader.addEventListener('load', (event) => {
     img.src = event.target.result;
   });
   reader.readAsDataURL(file);
 

 const fileInput = document.getElementById('file-selector');

  fileInput.addEventListener('change', (e) =>
 doSomethingWithFiles(e.target.files),
  ); */

  const cardimage= document.getElementById("iamge1");
  const imginput= document.getElementById("file-selector");
  const changeImageButton = document.getElementById("imgbtn");

// Add an event listener to the "Change Image" button
changeImageButton.addEventListener("click", function () {
    // Trigger the hidden file input to open the file picker dialog
    imginput.click();
});


  imginput.addEventListener("change", function () {
   const selectedFile = imginput.files[0];
   
   // Check if a file was selected
   if (selectedFile) {
       // Create a URL for the selected image
       const imageUrl = URL.createObjectURL(selectedFile);
       
       // Set the card's image source to the selected image
       cardimage.src = imageUrl;
   }
});


var inputElement = document.getElementById("1stName");

// Add an event listener to detect when the user types
/*inputElement.addEventListener("input", function () {
    // Check if the input is not empty
    if (inputElement.value.trim() !== "") {
        // If it's not empty, change the border to green
        

        inputElement.style.border = "2px solid green";
    } else {
        // If it's empty, reset the border to its default style
        document.getElementById("error1").innerHTML= "Please enter the first name";
        inputElement.style.border = "1px solid #ccc"; // You can use any default style you prefer
    }
}); */

// date


