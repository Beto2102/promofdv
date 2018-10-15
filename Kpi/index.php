<?php
$url = "../";
$name = "KPI";
include $url . 'config.php';
?>

<!doctype html>
<html lang="es">
    <?php head($url, $name); ?>


    <body data-spy="scroll" data-target="#navbar" data-offset="30">

        <?php menu($url, $name); ?>

        <div class="parallax ironman-title parallax-image-2" >
            <h2>
                MIS KPI
            </h2>
            <hr>
        </div>

        <div class="section light-bg">
            <div class="container">

                <div class="section-title">
                    <small id="rg">REGIÓN</small>
                    <h3 id="su"></h3>
                </div>
                <div class="container">
                    <div class="row justify-content-center" id="table-kpi">
                    </div>
                </div>
            </div>
        </div>
        <?php footer($url); ?>
        <?php scripts($url); ?>
        <script>
            $(document).ready(function () {
                Objects.initKpi();
            });
        </script>
    </body>
</html>
