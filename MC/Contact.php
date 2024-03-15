<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="shortcut icon" href="cc.ico" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CC-Contact</title>
        <link rel="stylesheet" href="style.css">
        <script src="index.js"></script>
        
        <link rel="stylesheet" href="Contact.css">
    
    </head>
    <body id="Mbody">
        <nav id="NavBar">
            <div id="Nav_Icon">
                <img id="Icon_Img" src="Material/CreatorCraftLogo.png" alt="">
            </div>
            <ul id="Nav_List">
                <li class="Nav_I" id="Nav_I_Drop">
        
                    <img id="Nav_I_Drop_Img" onclick="DropClick(180,false)" src="Material/DropSym.png" alt="">
                    <ul id="Drop_ListBarNone">
                        <b class="DLi" id="HomeBut">
                        <a class="DliB" id="HLink" href="index.html">Home <div id="Dli_Line"></div> </a>
                           
                        </b>
                        <b class="DLi" id="Infobut">
                            <a class="DliB" href="Info.html">Info<div id="Dli_Line"></div> </a>
                            
                        </b>
                        <!--<b class="DLi" id="NewsBut"><a class="Dli" id="NLink" href="http://creatorcraftmc.us.to:8123/?worldname=CreatorCraft&mapname=Overworld&flat&zoom=1&x=-502&y=64&z=-218&nopanel=true&hidechat=true">Map</a></b>
                        -->
                        </ul>
        
                </li>
        
        
                <li class="Nav_I" id="Nav_I_Info"></li>
                <li class="Nav_I" id="Nav_I_Discord"></li>
            </ul>
            <section id="Title"><b>Contact</b></section>
            <div id="BlockCon">
                <form action="BAck/Input.inc.php" method="POST">
                    <input name="Name" id="Name" cols="30" rows="10"></input>
                    <input name="Message" id="Message" cols="30" rows="10"></input>
                    <button method="">Submitt</button>
</form>
               
            </div>
        </nav>
        
</html>