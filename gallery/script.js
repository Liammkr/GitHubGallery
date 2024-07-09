var galleryfolder
var numofitemsincategry = 100
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
fetch("https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/")
  .then((response) => response.json())
  .then((json) => galleryfolder = json)
  .then((json) => gallerylength = json.items.length)
  .then(findhowmany)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var gallerylength = galleryfolder

function findhowmany(){
  numofitemsincategry = 0
  for (let i = 0; i < gallerylength; i++) {
    if(galleryfolder.items[i].name.includes(testValue) == true){
      numofitemsincategry +=1
    }
  }
}
  // Initialize Firebase
  
  // Read initial data and update status
  // Update status whenever there's a change in the database
//database.ref("Concerts").update(testupload);
var url = document.location.href
//console.log(url)
// Creating a URLSearchParams object
var urlObj = new URL(url);

// Extracting the search parameters
var params = urlObj.searchParams;

// Getting the value of the 'test' parameter
var testValue = params.get('gallery');

// Removing the double quotes from the value

// Output the result
//console.log(testValue);
uppercaseletter = capitalizeFirstLetter(testValue)
document.title = uppercaseletter;
document.getElementById("name").innerHTML = uppercaseletter
document.getElementById("thing").innerHTML = uppercaseletter
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
findhowmany()
function findimg(imgnumber){
  element = document.getElementById(imgnumber)
  if(numofitemsincategry >= imgnumber){
    imgurl = "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/"+testValue+"%2F"+imgnumber+".jpg?alt=media"
    element.src = imgurl
  } else {
    element.remove()
  }
}
