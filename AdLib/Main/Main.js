var current = null;
function show(Id) {
  var element = document.getElementById(Id);
  if (current != null && current != element) {
    current.classList.remove("Open")
    current = null
  }

  if (element.classList.contains("Open")) {
    // Hide the current open element, if any
    element.classList.remove("Open")
    element.classList.add("Close")
    current = null
  }else{

    element.classList.remove("Close")
    element.classList.add("Open")
    current = element
  }



  }




  

  
