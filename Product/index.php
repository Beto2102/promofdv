<?php
$url = "../";
$name = "Product";
include $url . 'config.php';
?>

<!doctype html>
<html lang="es">
    <?php head($url, $name); ?>

    <body data-spy="scroll" data-target="#navbar" data-offset="30">

        <?php menu($url, $name); ?>

        <div class="parallax ironman-title parallax-image-1" >
            <h2>Catálogo de premios</h2>
            <hr>
        </div>

        <div class="section light-bg">
            <div class="container">
                <div class="container">
                    <div id="products" class="row">
                    </div>
                </div>

            </div>
        </div>

        <?php footer($url); ?>

        <?php scripts($url); ?>
        <script>
           $(document).ready(function () {
               Objects.initProduct();
           });
        </script>
    </body>
</html>
