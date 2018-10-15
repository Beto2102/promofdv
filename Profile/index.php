<?php
//error_reporting(E_ALL);
//ini_set('display_errors', '1');
$url = "../";
$name = "Profile";
include $url . 'config.php';
?>

<!doctype html>
<html lang="es">
    <?php head($url, $name); ?>
    <link rel="stylesheet" href="../lib/bootstrap-table/bootstrap-table.min.css" >

    <body data-spy="scroll" data-target="#navbar" data-offset="30">

        <?php menu($url, $name); ?>

        <div class="parallax ironman-title parallax-image-3" >
            <h2>
                MI PERFIL IRONMAN
            </h2>
            <hr>
        </div>

        <div class="section light-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center pb-4">
                        <h3>Datos Personales</h3>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name_user">Nombres:</label>
                            <input type="text" class="form-control" id="name_user" disabled>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="lastname_user">Apellidos:</label>
                            <input type="text" class="form-control" id="lastname_user" disabled>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="email_user">Correo Electrónico:</label>
                            <input type="text" class="form-control" id="email_user" disabled>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="ficha_user">Ficha de Usuario:</label>
                            <input type="text" class="form-control" id="ficha_user" disabled>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="role_name">Cargo:</label>
                            <input type="text" class="form-control" id="role_name" disabled>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name_sucursal">Sucursal:</label>
                            <input type="text" class="form-control" id="name_sucursal" disabled>
                        </div>
                    </div>
                    <div class="col-12 text-center pt-4 mt-5 pb-4">
                        <h3 >¡Asi vas en las etapas!</h3>
                    </div>
                    <div class="col-12">
                        <div class="container">
                           <div id="stages" class="row">
<!--                                <div class="col-md-4 text-center">
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
                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <?php footer($url); ?>
        <?php scripts($url); ?>
        <script>
           $(document).ready(function () {
               Objects.initProfile();
           });
        </script>
    </body>
</html>
