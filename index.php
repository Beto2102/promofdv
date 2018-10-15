<?php
//
$url = "./";
$name = "Home";
include $url . 'config.php';
?>

<!doctype html>
<html lang="es">
    <?php head($url, $name); ?>
    <style>
        .itmc{
            height: 500px;
            background-size: cover;
            background-position: top;
        }
        .itm1{
            background-image: url(lib/images/slider1.jpg);
        }
        .itm2{
            background-image: url(lib/images/slider2.jpg);
        }
        .itm3{
            background-image: url(lib/images/slider3.jpg);
        }
        .itm4{
            background-image: url(lib/images/slider4.jpg);
        }
        .nav-menu{
            background: rgba(0, 0, 0, 0.5);
        }
    </style>
    <body data-spy="scroll" data-target="#navbar" data-offset="30">

        <?php menu($url, $name); ?>
        <div class="img-gallery owl-carousel owl-theme">
            <div class="itmc itm1"></div>
            <div class="itmc itm2"></div>
            <div class="itmc itm3"></div>
            <div class="itmc itm4"></div>
        </div>

        <div class="section light-bg" id="features">
            <div class="container">
                <div class="section-title">
                    <small>FASES</small>
                    <h3>IRONMAN</h3>
                </div>
                <div class="row" id="desc_stage"></div>
            </div>
        </div>
        <!-- // end .section -->
        <div class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-8 text-center">
                        <p style="font-size: 25px;color:#FAF6FB;font-style: italic">" No hay distancia que no se pueda recorrer... Ni meta que no se pueda alcanzar "</p>
                        <small style="color:#96FF4D">IRONMAN 2018</small>
                    </div>
                </div>
            </div>
        </div>
        <!-- // end .section -->

        <div class="section light-bg">
            <div class="container">
                <div class="section-title">
                    <small>RESULTADOS</small>
                    <h3>¡Así van las etapas!</h3>
                </div>
                <div class="container-fluid">
                    <div id="stages" class="row">
                    </div>
                </div>


                <!--                <ul class="nav nav-tabs nav-justified" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#communication">Centro</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#schedule">Caracas</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#messages">Oriente</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#livechat">Occidente</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="communication">
                                        <div class="d-flex flex-column flex-lg-row">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-4 text-center">
                                                        <div class="etapas">
                                                            100
                                                        </div>
                                                        <h4>Natacion</h4>
                                                    </div>
                                                    <div class="col-md-4 text-center">
                                                        <div class="etapas">
                                                            100
                                                        </div>
                                                        <h4>Natacion</h4>
                                                    </div>
                                                    <div class="col-md-4 text-center">
                                                        <div class="etapas">
                                                            100
                                                        </div>
                                                        <h4>Natacion</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="schedule">
                                        <div class="d-flex flex-column flex-lg-row">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-4 text-center">
                                                        <div class="etapas">
                                                            11
                                                        </div>
                                                        <h4>Natacion</h4>
                                                    </div>
                                                    <div class="col-md-4 text-center">
                                                        <div class="etapas">
                                                            123
                                                        </div>
                                                        <h4>Natacion</h4>
                                                    </div>
                                                    <div class="col-md-4 text-center">
                                                        <div class="etapas">
                                                            231
                                                        </div>
                                                        <h4>Natacion</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>-->
            </div>
        </div>
        <!-- // end .section -->

        <?php footer($url); ?>
        <?php scripts($url); ?>
        <script>
            Objects.initHome();
        </script>
    </body>
</html>
