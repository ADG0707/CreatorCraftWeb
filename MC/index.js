

function DropClick(deg,a) {
  if (a == false) {
    var List = document.getElementById("Drop_ListBar")
    var DripImg = document.getElementById("Nav_I_Drop_Img");
    if (List.style.display == "none") {
        DripImg.style.transform = "rotate(180deg)";
        List.style.display = "flex";
        List.style.height = "500px";

    }else
     {
        DripImg.style.transform = "rotate(0deg)";
        List.style.display = "none";
        List.style.height = "0px";
    };
  }
  



  if(a == true){
    Button = document.getElementById("RuleButton");
    RulesPage = document.getElementById("RulePage");
    console.log(RulesPage, RulesPage.style.hidden)
    if(RulesPage.style.display == "none"){
      RulesPage.style.display = "flex"
    }else{
      RulesPage.style.display = "none"
    }
  }
};











//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/CreatorCraftWeb.undo.it	"; //insert  server here
$.getJSON(url, function(r) {
  //data is the JSON string
  if (r.error) {
    $('#rest').html('Server Offline');
    return false;
  }
  console.log(r)
  
  if (r.players.sample.length > 0) {
    for (let index = 0; index < r.players.sample.length; index++) {
      var id = r.players.sample[index].id
      var li = document.createElement("li");
      li.innerHTML = r.players.sample[index].name;
      li.id = "PLi"
      document.getElementById("PlistCont").append(li);
      
      var im2 = document.createElement("img")
      
      im2.src = "https://api.mineatar.io/body/full/" + id;
      //img.src = "https://api.mineatar.io/skin/" + id
      im2.id = "im2"
      
      document.getElementById(r.players.sample[index].name).append(im2);
      
      

      
  }
  }
  
  $('#SPMb').html( '<br><b>Players Online:</b> ' + r.players.online);
  $('#SIM').attr('src', r.favicon);
  
  $('#Desc').html(r.description)
});
