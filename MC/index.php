<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CCraft</title>
    
    <link rel="shortcut icon" href="cc.ico" type="image/x-icon">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> 

    <script src="sql.js"></script>
    

</head>
<!--Här är min navigation bar som visar loggan och har en dropdown till menyer till de andra delarna av sidan -->

<nav id="NavBar">
    <div id="Nav_Icon">
        <img id="Icon_Img" src="Material/CreatorCraftLogo.png" alt="">
    </div>
    <ul id="Nav_List">
        <li class="Nav_I" id="Nav_I_Drop">

            <img id="Nav_I_Drop_Img" onclick="DropClick(180,false)" src="Material/DropSym.png" alt="">
            <ul id="Drop_ListBarNone">
                <b class="DLi" id="HomeBut">
                <a class="DliB" id="HLink" href="index.php">Home <div id="Dli_Line"></div> </a>
                   
                </b>
                <b class="DLi" id="Infobut">
                    <a class="DliB" href="./About/Info.html">Info<div id="Dli_Line"></div> </a>
                    
                </b>
                <!--<b class="DLi" id="NewsBut"><a class="Dli" id="NLink" href="http://creatorcraftmc.us.to:8123/?worldname=CreatorCraft&mapname=Overworld&flat&zoom=1&x=-502&y=64&z=-218&nopanel=true&hidechat=true">Map</a></b>
                -->
                </ul>

        </li>


        <li class="Nav_I" id="Nav_I_Info"></li>
        <li class="Nav_I" id="Nav_I_Discord"></li>
    </ul>
</nav>
<main>
    <!--Det här är välkommnad texten som visar var man har kommit-->
    <div id="Welcome2">
        <h1>Welcome to CreatorCrafts Website</h1>
        <h2>Explore and fantesise with your creations</h2>
        <h3>Unlimited Experiences</h3>
    </div>
    <!--Här har vi visandet av Server skaparn, sid skaparen, och generll information om minecraft servern -->
    <div id="PresentDev">
        <div id="Dev">
            <img src="Material/ff5a1f19-9f23-41dd-9376-1e71681790ea.png" id="WebDev" alt="" srcset="">
            <b>WaterUnivers</b>
        </div>
        <img id="ServerBan" src="http://status.mclive.eu/CreatorCraft/Creatorcraftmc.us.to/25565/banner.png" alt="" srcset="">
        <ol id="MSS">
            <img src="" alt="" srcset="" id="SIM">
            <div id="SN"><b id="SNb"></b></div>
            <div id="SPM"><b id="SPMb"></b></div></ol>
        
        <div id="Dev">
            <img src="Material/3da48d35-cbea-4f47-8641-420d1344e905.png" id="WebDev" alt="" srcset="">
            <b>ADG211</b>
        </div>
    </div>
    <!--Här har vi en lista som är intigrerad med javascript som tar och pingar servern, kollar vilka som är inne söker deras uuid för att hitta deras bild osen skapar element som visar vilka spelare som är inne-->
    <Div id="Plist">
        <b>Players</b>
        <i>Ip: Creatorcraft.us.to</i>
        <div id="PlistCont">

        </div>
    </Div>
    <!--Här visas reglerna för sidan-->
    <div id="Info">
        <b id="RulTit">Rules</b >
        <ol id="Rules">
            <li class="Rule"><b>Rules for the server are quite loose, relying mostly on the honor-system. We trust our players to
                behave and treat each other with respect</b></li>
            <li class="Rule"><b>Any issues, exploits or cheats should be reported to the @Minecraft Admins, we'll proceed to handle it from there</b></li>
            <li class="Rule"><b>Pulling pranks and light griefing is perfectly allowed, although retaliation should be expected. You're 
                also expected to help clean up the messes you make if asked</b></li>
            <li class="Rule"><b>Cheats will not be highly moderated although if caught you'll be warned. You get two warnings 
                and if caught a third time you'll be banned permanently.</b></li>
        </ol>
        
    </div>

</main>
<!--Här har vi en nedre snabbare navigation till discord modsen och contakt information-->
<div id="Bottom">
    <ol id="B_Cont">
        <li class="B_txt" id="Discord"><a href="https://discord.gg/zy9CFtFDcB"><b>Discord</b></a></li>
        <li class="B_txt" id="Contact"><a href="./Contact/Contact.php"><b>Contacts</b></a></li>
        <li class="B_txt" id="Mods"><a href="./About/"><b>Mods</b></a></li>
    </ol>
</div>
<body>
   
</body>
<script src="index.js"></script>
<link rel="stylesheet" href="Style.css">
</html>