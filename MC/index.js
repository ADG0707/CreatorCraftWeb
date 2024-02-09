

var down = false;
function DropClick(deg, a) {
  
  if (a == false) {
    
    var DripImg = document.getElementById("Nav_I_Drop_Img");
    if (down == false) {
      if (document.getElementById("Drop_ListBarDown")) {
        var List = document.getElementById("Drop_ListBarDown")
      }
      if (document.getElementById("Drop_ListBar")) {
        var List = document.getElementById("Drop_ListBarUp")
      }
      if (document.getElementById("Drop_ListBarNone")) {
        var List = document.getElementById("Drop_ListBarNone")
      }
      DripImg.style.transform = "rotate(180deg)";
      
      down = true;
      List.id = "Drop_ListBarUp"
      console.log(down)
    } else {
      var List = document.getElementById("Drop_ListBarUp")
      DripImg.style.transform = "rotate(0deg)";
      List.id = "Drop_ListBarDown"
      down = false

    };
  }




  if (a == true) {
    Button = document.getElementById("RuleButton");
    RulesPage = document.getElementById("RulePage");
    console.log(RulesPage, RulesPage.style.hidden)
    if (RulesPage.style.display == "none") {
      RulesPage.style.display = "flex"
    } else {
      RulesPage.style.display = "none"
    }
  }
};











//based on a pen by @robinselmer
var url = "https://api.mcsrvstat.us/3/creatorcraftmc.us.to	"; //insert  server here
$.getJSON(url, function (r) {
  //data is the JSON string
  if (r.error) {
    $('#rest').html('Server Offline');
    return false;
  }
  console.log(r)

  if (r.players.online > 0 && r.players.list.length > 0) {
    for (let index = 0; index < r.players.list.length; index++) {
      var id = r.players.list[index].uuid
      var li = document.createElement("li");
      li.innerHTML = r.players.list[index].name;
      li.id = r.players.list[index].name
      li.className = "PLi"
      document.getElementById("PlistCont").append(li);

      var im2 = document.createElement("img")

      im2.src = "https://api.mineatar.io/body/full/" + id;
      //img.src = "https://api.mineatar.io/skin/" + id
      im2.id = "im2"

      document.getElementById(r.players.list[index].name).append(im2);




    }
  }
  function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
      pos = 0,
      step = allowOverlapping ? 1 : subString.length;

    while (true) {
      pos = string.indexOf(subString, pos);
      if (pos >= 0) {
        ++n;
        pos += step;
      } else break;
    }
    return n;
  }
  $('#SPMb').html('<br><b>Players Online:</b> ' + r.players.online);
  $('#SIM').attr('src', r.icon);
  var Sname = r.motd.clean[0]
  var ht = r.motd.html[0]
  var colors = []
  for (let i = 0; i < occurrences(r.motd.html, "color:"); i++) {
    colors.push(ht.slice(ht.indexOf("color:") + 7, (ht.indexOf("color:") + 14)))
    ht = ht.replace(ht.slice(ht.indexOf("color:"), (ht.indexOf("color:") + 7)), " ")
    console.log()
  }
  console.log(occurrences(ht, "color"))
  console.log(colors)
  var Creator = Sname.slice(0, 7)
  var Craft = Sname.slice(7, 13)
  var Minecraft = Sname.slice(24)
  var Modded = Sname.slice(17,24)
  var CrB = document.createElement("b")
  var CB = document.createElement("b")
  var MB = document.createElement("b")
  var MD = document.createElement("b")
  CrB.style = "color: " + colors[0]
  CB.style = "color: " + colors[1]
  MB.style = "color: " + colors[2]
  MD.style = "color: " + colors[4]
  CrB.innerHTML = Creator
  CB.innerHTML = Craft
  MB.innerHTML = Minecraft
  MD.innerHTML = Modded

  $('#SNb').append(CrB, CB,MD, MB)
});
//kjasdnkasjhdiuashd


