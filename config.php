<?php
$web_name = " IRONMAN";
$web_url_desarrollador = "https://btowebsolutions.com.ve";
$web_name_desarrollador = "btowebsolutions";
$rif = "RIF: J-00006748-1";
$version = "1.0.0";

// Metas
function head($base_url, $who_is) {
    global $web_name;
    ?>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
    <title><?php echo $web_name . " | " . $who_is; ?> </title>
    <link rel="shortcut icon" type="image/x-icon" href="<?= $base_url; ?>lib/images/favicon.png"/>

    <script type="text/javascript">
    <?php if ($who_is == "Login") { ?>
            if (localStorage['bto_ironman_tkn']) {
                window.location.href = "<?php echo $base_url; ?>";
            }
    <?php } elseif ($who_is == "Register") { ?>
            if (localStorage['bto_ironman_tkn']) {
                window.location.href = "<?php echo $base_url; ?>";
            }
    <?php } elseif ($who_is == "Recovery") { ?>
            if (localStorage['bto_ironman_tkn']) {
                window.location.href = "<?php echo $base_url; ?>";
            }
    <?php } else { ?>
            if (!localStorage['bto_ironman_tkn']) {
                localStorage.clear();
                window.location.href = "<?php echo $base_url; ?>Login";
            }
    <?php } ?>
    </script>

    <!-- Font -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500" rel="stylesheet">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<?= $base_url; ?>lib/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?= $base_url; ?>lib/SweetAlert/sweetalert.css">
    <link rel="stylesheet" href="<?= $base_url; ?>lib/bootstrap-table/bootstrap-table.min.css" >

    <!-- Themify Icons -->
    <link rel="stylesheet" href="<?= $base_url; ?>lib/css/themify-icons.css">

    <!-- Owl carousel -->
    <link rel="stylesheet" href="<?= $base_url; ?>lib/css/owl.carousel.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="<?= $base_url; ?>lib/css/style.css" >
    <link rel="stylesheet" href="<?= $base_url; ?>lib/css/bto_style.css" >
    <?php
}

// Menu
function menu($base_url, $who_is) {
    loader();
    ?>
    <div class="nav-menu fixed-top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-dark navbar-expand-lg">
                        <a class="navbar-brand" href="<?= $base_url; ?>"><img src="<?= $base_url; ?>/lib/images/ironman-logo.png" class="img-fluid" alt="logo"></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                        <div class="collapse navbar-collapse" id="navbar">
                            <ul class="navbar-nav ml-auto">

                                <?php if ($who_is == 'Home') { ?>
                                    <li class="nav-item"> <a class="nav-link active" href="<?= $base_url; ?>">HOME <span class="sr-only">(current)</span></a> </li>
                                <?php } else { ?>
                                    <li class="nav-item"> <a class="nav-link" href="<?= $base_url; ?>">HOME </a> </li>
                                <?php } ?>

                                <?php if ($who_is == 'Product') { ?>
                                    <li class="nav-item"> <a class="nav-link active" href="<?= $base_url; ?>Product">PREMIOS <span class="sr-only">(current)</span></a> </li>
                                <?php } else { ?>
                                    <li class="nav-item"> <a class="nav-link" href="<?= $base_url; ?>Product">PREMIOS </a> </li>
                                <?php } ?>

                                <?php if ($who_is == 'KPI') { ?>
                                    <li class="nav-item"> <a class="nav-link active" href="<?= $base_url; ?>Kpi">KPI <span class="sr-only">(current)</span></a> </li>
                                <?php } else { ?>
                                    <li class="nav-item"> <a class="nav-link" href="<?= $base_url; ?>Kpi">KPI </a> </li>
                                <?php } ?>

                                <?php if ($who_is == 'Profile') { ?>
                                    <li class="nav-item"> <a class="nav-link active" href="<?= $base_url; ?>Profile">PERFIL <span class="sr-only">(current)</span></a> </li>
                                <?php } else { ?>
                                    <li class="nav-item"> <a class="nav-link" href="<?= $base_url; ?>Profile">PERFIL </a> </li>
                                <?php } ?>
                                <li class="nav-item"> <a id="logout" class="nav-link" href="#">SALIR </a> </li> 
                                <li class="nav-item text-center"><a id="my_points" href="#" class="btn btn-ironman-outline disabled my-3 my-sm-0 ml-lg-3">1000 Ptos.</br></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <?php
}

// Footer
function footer($base_url) {
    global $web_url_desarrollador;
    ?>
    <footer class="my-5 text-center">
        <!-- Copyright removal is not prohibited! -->
        <p class="mb-2"><small>IRONMAN © 2018. Desarrollado por <a href="<?= $web_url_desarrollador; ?>">BTO</a>.</small></p>
    </footer>
    <?php
}

// Loader
function loader() {
    ?>
    <!--Logo cargando-->
    <div id="cargador" >
        <div id="loader-wrapper">
            <div id="loader"></div>
            <h4>IRONMAN ...</h4>
        </div>
    </div>
    <!--Logo cargando-->
    <?php
}

// Javascripts
function scripts($base_url) {
    ?>
    <!-- jQuery and Bootstrap -->
    <script type="text/javascript" src="<?= $base_url; ?>lib/js/BaseUrl.js"></script>

    <script type="text/javascript" src="<?= $base_url; ?>lib/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="<?= $base_url; ?>lib/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="<?= $base_url; ?>lib/bootstrap-table/bootstrap-table.min.js"></script>
    <script type="text/javascript" src="<?= $base_url; ?>lib/SweetAlert/sweetalert.js"></script>
    <!-- Plugins JS -->
    <script type="text/javascript" src="<?= $base_url; ?>lib/js/owl.carousel.min.js"></script>
    <!-- JWT -->
    <script type="text/javascript" src="<?= $base_url; ?>lib/js/jwt-decode.min.js"></script>
    <!-- Custom JS -->
    <script type="text/javascript" src="<?= $base_url; ?>lib/js/script.js"></script>
    <script type="text/javascript" src="<?= $base_url; ?>lib/js/objects.js"></script>
    <?php
}
?>
