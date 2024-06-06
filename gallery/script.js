var testupload = {
        "cover": "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F15.jpg?alt=media&token=325b7c9a-e4c7-4075-89b6-7d8f7687ca6a",
        "image1": "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F10.jpg?alt=media&token=cf1d80a2-3b35-42ee-839f-e994e2985057",
        "image2": "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F11.jpg?alt=media&token=e7734820-cbe5-4995-ac60-7c8aff39efef",
        "image3": "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F12.jpg?alt=media&token=e10330b1-7c2b-49f7-a951-7bd4dcf91a36",
        "image4": "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F13.jpg?alt=media&token=c986c145-b278-44a3-b87c-7bb28dd1a2c5",
        "image5": "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F14.jpg?alt=media&token=7e59b589-8948-4456-819e-5a46ff249d0b",
        "image6": "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F15.jpg?alt=media&token=325b7c9a-e4c7-4075-89b6-7d8f7687ca6a",
        "image7": "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F16.jpg?alt=media&token=c81b82ee-3e95-47f0-9e9e-3496b1f59ec2",
        "image8": "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F17.jpg?alt=media&token=a7d49102-4516-400f-b675-46dd5720997a",
        "image9": "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F18.jpg?alt=media&token=087bae75-d643-4d0b-b0c8-7844420703d2",
        "image10" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F19.jpg?alt=media&token=088c2804-6702-4224-b05a-5dab27ac1e4c",
        "image11" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F2.jpg?alt=media&token=93a0f4fd-aee7-461f-b308-592c24b0da99",
        "image12" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F20.jpg?alt=media&token=4d2606b4-c71b-4d84-9981-28ff928e8cd7",
        "image13" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F21.jpg?alt=media&token=4dcdd99d-cdb4-4cec-866d-0b856426d6d7",
        "image14" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F22.jpg?alt=media&token=4b99dae8-1779-4dce-bb9f-25575ee85e5f",
        "image15" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F23.jpg?alt=media&token=96405633-6cd2-458c-952c-5a6b3ef4e472",
        "image16" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F3.jpg?alt=media&token=618ffd9f-81f1-4d6b-a8d4-00b8961ac040",
        "image17" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F4.jpg?alt=media&token=a79053b4-3567-4acc-9a33-71159f038848",
        "image18" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F5.jpg?alt=media&token=dd1023d3-3dfc-4620-9684-9e4a6a37f322",
        "image19" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F6.jpg?alt=media&token=4e4fcb1f-61da-447f-9cbc-5e3e4839030f",
        "image20" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F7.jpg?alt=media&token=6237c348-088c-4627-9fbe-8507a9a7fa95",
        "image21" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F8.jpg?alt=media&token=d8a9b741-dc84-41a9-b3f1-22b83870b584",
        "image22" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F9.jpg?alt=media&token=1ff47c1c-29ca-444e-9d49-7ba17228d7ad",
        "image23" : "https://firebasestorage.googleapis.com/v0/b/patricktest-71ca6.appspot.com/o/concerts%2F15.jpg?alt=media&token=325b7c9a-e4c7-4075-89b6-7d8f7687ca6a"
}
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
