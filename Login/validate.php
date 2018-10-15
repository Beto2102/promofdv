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
                            <p class="text-white">Validar Usuario</p>
                        </div>
                        <div class="form-box" id="login_div">
                            
                        </div>
                    </section>
                </div>
            </div>
            <?php scripts($url); ?>
            <script>
                $(document).ready(function () {
                    Objects.intValidateUser();
                });
            </script>
    </body>
</html>
