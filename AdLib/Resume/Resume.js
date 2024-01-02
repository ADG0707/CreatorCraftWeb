var currentElement = null;

function show(Id) {
  var element = document.getElementById(Id);



  if (element.classList == "CatItem Close") {
    // Show the clicked element
    element.classList.remove("Close")
    element.classList.add("Open")
 
  } else {
    // Hide the clicked element
    element.classList.remove("Open")
    element.classList.add("Close")

  }
}