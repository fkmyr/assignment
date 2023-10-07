const form= document.getElementById('form1');
const Fname= document.getElementById('1stName');
const Lname= document.getElementById('lastn');
const Abt=document.getElementById('about1');
const sbmt= document.getElementById('submit');

const formval= document.getElementById('form1').value;
const Fnameval= document.getElementById('1stName').value;
const Lnameval= document.getElementById('lastn').value;
const Abtval=document.getElementById('about1').value;

sbmt.addEventListener('click', (Event)=>
{
   Event.preventDefault();
   validatee();
})
function  validatee(){

if(Fnameval.trim()==="")
{
   success(Fname);
   
   
}
else
{ if(Fnameval.trim()!=="")
  
   error(Fname);
   document.getElementById("error1").innerHTML= "Please enter the first name";
  

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
