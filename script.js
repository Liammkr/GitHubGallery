
  // Read initial data and update status

/*function findcover(galleryname){
    console.log(galleryname)
    database
    .ref(galleryname)
    .once("value")
    .then(function (snapshot) {
    var data = snapshot.val();
    console.log(data.cover);
    item = document.getElementById(galleryname)
    item.src = data.cover
    })
}*/
function opengallery(id){
    path = '/gallery/?gallery=' + id
    //console.log(path)
    window.location.href = path
}