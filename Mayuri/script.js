const form= document.getElementById('form1');
const Fname= document.getElementById('1stName');
const Lname= document.getElementById('lastn');
const Abt=document.getElementById('about1');
const sbmt= document.getElementById('submit');
//values of input field
const formval= document.getElementById('form1').value;
const Fnameval= document.getElementById('1stName').value;
const Lnameval= document.getElementById('lastn').value;
const Abtval=document.getElementById('about1').value;

sbmt.addEventListener('click', (Event)=>
{
   Event.preventDefault();
   validatee();
   validate();
   phonenum();
   email();
})
//validation for first name, last name and about section
function  validatee()
{
   if(Fname.value.trim()==="")
   {
   Fname.style.border="2px solid red";
   document.getElementById("error1").innerHTML= "Please enter the first name";
   }
   else
   {
    Fname.style.border="2px solid green";
    document.getElementById("error1").innerHTML= "";
    Fname.readOnly=true;

   }

   if(Lname.value.trim()==="")
   {
      Lname.style.border="2px solid red";
   document.getElementById("error2").innerHTML= "Please enter the last name";
   }
   else
   {
      Lname.style.border="2px solid green";
    document.getElementById("error2").innerHTML= "";
    Lname.readOnly=true;

   }
   
   if(Abt.value.trim()==="")
   {
      Abt.style.border="2px solid red";
   document.getElementById("error3").innerHTML= "Please enter info about you";
   }
   else
   {
      Abt.style.border="2px solid green";
    document.getElementById("error3").innerHTML= "";
    Abt.readOnly=true;
   }
  
}

//function for validation of phone number
function phonenum()
    {  const num=document.getElementById('ph');
    const phone= document.getElementById('ph').value;
    const emreg= /^\+91\d{10}$/
    if (emreg.test(phone))
    {
      num.style.border="2px solid green";
      document.getElementById("error4").innerHTML= "";
    }
   else
    {
     num.style.border="2px solid red";
     document.getElementById("error4").innerHTML= "please enter a valid mobile number";
    }
   }
   //function for the validation of email id
    function email()
    {
      const email=document.getElementById('em');
      const emailval=document.getElementById('em').value;
      const emregx= /^([a-zA-Z0-9\.+_@]+)@([a-zA-Z0-9]+)\.([a-z)]{2,20})$/;

      if(emregx.test(emailval))
      {
         email.style.border="2px solid green";
         document.getElementById("error5").innerHTML= "";
   
   
      }
      else
       {
         email.style.border="2px solid red";
        document.getElementById("error5").innerHTML= "please enter a valid mobile number";
       }

   }
   //function for the Date
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
//code for the about section 
const txt=document.getElementById("about1"),
      numleft=document.getElementById("numleft"),
      submit=document.getElementById("submit");
      txt.oninput=showComment;

function showComment()
{ 
  submit.disabled=((numleft.textContent=50-txt.value.length)==0);

} 

//code for the image upload
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
