
var Objects = module.import.Objects
var Images = module.import.Images




var currentElement = null;

function show(Id) {
  var element = document.getElementById(Id);

  if (currentElement != null && currentElement != element) {
    // Hide the current open element, if any
    currentElement.setAttribute("hidden", true);
  }

  if (element.hidden) {
    // Show the clicked element
    element.removeAttribute("hidden");
    currentElement = element;
  } else {
    // Hide the clicked element
    element.setAttribute("hidden", true);
    currentElement = null;
  }
}


function Process(Selection) {
  console.log(Selection)
  if (!document.getElementById("Cont_Jst_Childs")) {
    const ParentElement = document.createElement("div")
    ParentElement.setAttribute("id", "Cont_Jst_Childs")

    document.getElementById("Storage").appendChild(ParentElement)
    const myNode = ParentElement
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }


    Taskid0(ParentElement, Selection)
  } else {
    const ParentElement = document.getElementById("Cont_Jst_Childs")
    document.getElementById("Storage").appendChild(ParentElement)
    const myNode = ParentElement
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }


    Taskid0(ParentElement, Selection)
  }








}



function Taskid0(ParentElement, Selection) {
  var Extendss = []
  for (let Obj = 0; Obj < Objects.length; Obj++) {
    console.log(Obj)
    console.log(Objects[Obj])

    if (Objects[Obj].name == Selection) {
      let Output = []
      let ObjSize = Object.keys(Objects[Obj]).length
      var OutputIndex;
      for (let attr = 0; attr < ObjSize; attr++) {



        if (!document.getElementById("JsT-Output-" + attr)) {
          OutputIndex = Object.values(Objects[Obj])
          Output[attr] = document.createElement("a")
          Output[attr].setAttribute("href", "")
          Output[attr].setAttribute("id", "JsT-Output-" + attr)
          Output[attr].setAttribute("class", "JsT-Output")
          Output[attr].style.color = "Cyan"
          if (OutputIndex[attr] === "Clear") {
            Output[attr].style.color = "transparent"
          }
          ParentElement.appendChild(Output[attr])
          
          Output[attr].innerHTML = OutputIndex[attr]
          Output[attr].href = OutputIndex[attr]
        } else {
          Output[attr] = document.getElementById("JsT-Output-" + attr)


          var OutputIndex = Object.values(Objects[Obj])
          Output[attr].href = OutputIndex[attr]
        }
      }




    }
  }
}

function ImgCreate() {
  let ParentElement = document.getElementById("ImgCont")


  for (let i = 0; i < Images.length; i++) {
    if (!document.getElementById("ImgItem" + i)) {
      let newImg = document.createElement("img")
      newImg.setAttribute("id", "ImgItem" + i)

      newImg.setAttribute("class", "ImgItem")
      ParentElement.appendChild(newImg)
      console.log(Images[i])
      newImg.src = Images[i]

    } else {
      let newImg = document.getElementById("ImgItem" + i)

      newImg.src = Images[i]


    }


  }


}
var CurrentSong

audioplayer();
Play();
var Slider = document.getElementById("Volume")
var CurrentSong = 1
Songplayer = document.getElementById("SongPlayer").s
function audioplayer() {

    CurrentSong = Math.floor(Math.random() * 157)
    
    $("#SongPlayer")[0].src = "/AdLib/Songs/Låt" + CurrentSong + ".mp3"


    $("#SongPlayer")[0].addEventListener("ended", function () {



        CurrentSong = Math.floor(Math.random() * 157)
        console.log(CurrentSong)

        $("#SongPlayer")[0].src = "/AdLib/Songs/Låt" + CurrentSong + ".mp3"
        $("#SongPlayer")[0].play()
        console.log(CurrentSong)


    })

}

function Play(Bool, Skip, Volume) {
    if (Bool == true) {
        $("#SongPlayer")[0].play()
    } else {
        $("#SongPlayer")[0].pause()
    }
    if (Skip == true) {
        $("#SongPlayer")[0].currentTime = 1000
    }
    if (Volume) {
        $("#SongPlayer")[0].volume = Volume / 100
    }
}
