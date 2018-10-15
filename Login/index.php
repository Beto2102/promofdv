<?php
$url = "../";
$name = "Login";
include $url . 'config.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <?php head($url, $name); ?>
        <style>

        </style>
    </head>
    <body data-spy="scroll" data-target="#navbar" data-offset="30">
        <?php loader(); ?>
        <div class="section">
            <div class="container">
                <div class="login-container">
                    <section class="content" >
                        <div id="output"></div>
                        <div class="avatar"> 
                            <img src="../lib/images/ironman-logo.png"/>
                            <p class="text-white">Iniciar Sesión</p>
                        </div>
                        <div class="form-box" id="login_div">
                            <div id="login-form">
                                <input id="email" name="email" type="text" placeholder="Ficha de usuario">
                                <input id="pass" name="pass" type="password" placeholder="Contraseña">
                                <input id="login" class="btn btn-cdice-blue btn-block login" value="Enviar" type="button">
                            </div>
                            <div style="margin-top: 10px;">
                                <small class="text-white" >¿olvidaste tu contraseña? <a id="recovery" href="#"> Recuperala.</a></small></br>
                                <small class="text-white" >¿Nuevo en el sitio? <a id="new_c" href="#"> Crea una cuenta</a></small>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <?php scripts($url); ?>
            <script>
                $(document).ready(function () {
                    Objects.intLogin();
                });
            </script>
    </body>
</html>
