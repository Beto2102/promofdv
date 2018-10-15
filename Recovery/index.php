<?php
$url = "../";
$name = "Recovery";
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
                            <p class="text-white">Cambiar Contraseña</p>
                        </div>
                        <div class="form-box" id="login_div">
                            <div id="login-form">
                                <input id="pass2" type="password" placeholder="Nueva Contraseña">
                                <input id="reco" class="mt-5 btn btn-cdice-blue btn-block login" value="Actualizar" type="button">
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <?php scripts($url); ?>
            <script>
                $(document).ready(function () {
                    Objects.intRecovery();
                });
            </script>
    </body>
</html>
