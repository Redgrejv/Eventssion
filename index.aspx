<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head lang="ru">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Главная страница</title>
	<meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="style/main.css" />

    <script type="text/javascript" src="lib/jquery.js"></script>
    <script type="text/javascript" src="lib/jquery-ui.js"></script>

    <script src="script/script.js" type="text/javascript"></script>
</head>
<body>
    <div class="header">

        <div class="title_ico">
            <img src="style/image/logo.png" alt="RiverSoft" class="logo" />
            <img src="style/image/Eventssion.png" alt="EVENTSSION" class="event"/>
        </div>

        <div class="message">
            <img src="style/image/logo.png" alt="O" />
            <span>Здравствуйте,</span>
            <br />
            <span id="user_name">Гость</span>
        </div>

        <div class="control_form">
            <form action="index.aspx" method="get">
                <table>
                    <tr>
                        <td>
                            <input type="text" name="login"  required/>
                        </td>
                        <td>
                            <input type="password" name="password" required/>
                        </td>
                        <td>
                            <input type="button" name="submit" id="singn_in"><b>ВОЙТИ</b></input>
                        </td>
                    </tr>
                </table>
            </form>
            <table class="social">
                <%--<tr>
                    <td colspan="3">
                        <button id="login_facebook">
                            <img src="#" alt="F" /></button>
                        <button id="login_vkontakte">
                            <img src="#" alt="VK" /></button>
                        <button id="login_google">
                            <img src="#" alt="G" /></button>
                    </td>
                </tr>--%>
            </table>
        </div>
    </div>

    <div id="main_block">
        <div id="block_registration">
            <div class="block_sky gradient">

            </div>
        </div>
    </div>
</body>

</html>