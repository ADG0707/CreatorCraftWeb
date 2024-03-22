<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="cc.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CC-Contact</title>
    <link rel="stylesheet" href="../Style.css">
    <script src="../index.js"></script>

    <link rel="stylesheet" href="Contact.css">

</head>

<body id="Mbody">
    <nav id="NavBar">
        <div id="Nav_Icon">
            <img id="Icon_Img" src="../Material/CreatorCraftLogo.png" alt="">
        </div>
        <ul id="Nav_List">
            <li class="Nav_I" id="Nav_I_Drop">

                <img id="Nav_I_Drop_Img" onclick="DropClick(180,false)" src="../Material/DropSym.png" alt="">
                <ul id="Drop_ListBarNone">
                    <b class="DLi" id="HomeBut">
                        <a class="DliB" id="HLink" href="../">Home <div id="Dli_Line"></div> </a>

                    </b>
                    <b class="DLi" id="Infobut">
                        <a class="DliB" href="../About/info.html">Info<div id="Dli_Line"></div> </a>

                    </b>
                    <!--<b class="DLi" id="NewsBut"><a class="Dli" id="NLink" href="http://creatorcraftmc.us.to:8123/?worldname=CreatorCraft&mapname=Overworld&flat&zoom=1&x=-502&y=64&z=-218&nopanel=true&hidechat=true">Map</a></b>
                        -->
                </ul>

            </li>




    </nav>
    </ul>
    <section id="Form">
        <b>Contact</b>
        <div id="BlockCon">
            <form id="Form_Items" action="../../MC\BAck\Input.inc.php" method="POST">
                <b id="FormS"><i id="FormS">If you have any suggestions or want to ask a question. Send me a
                        message</i></b>
                <div id="NamePromt" class="Promt">
                    <b>Name:</b>
                    <input class="Inp" name="Name" id="Name" cols="30" rows="10"></input>
                </div>
                <div id="MessagePromt" class="Promt">
                    <b id="Mes">Message:</b>
                    <input class="Inp" name="Message" id="Message" cols="30" rows="10"></input>
                </div>

                <button id="Sub" method="">Submitt</button>
            </form>
        </div>
    </section>




</html>