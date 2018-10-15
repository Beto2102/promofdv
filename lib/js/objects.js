// Objetos Controlador
var user = "", email = "", pass = "";
var Objects = {
    init: function (ajax) {
        var that = this;
        if (ajax == true) {
            $(document).ajaxComplete(function () {
                setTimeout(function () {
                    $("#cargador").fadeOut(500);
                    that.calculatePoint();
                }, 500);
            });
            $(document).ajaxStart(function () {
                $("#cargador").show();
            });
        } else {
            that.calculatePoint();
            setTimeout(function () {
                $("#cargador").fadeOut(500);
            }, 500);
            $(document).ajaxComplete(function () {
                setTimeout(function () {
                    $("#cargador").fadeOut(500);
                }, 500);
            });
            $(document).ajaxStart(function () {
                $("#cargador").show();
            });
        }
    },
    calculatePoint: function () {
        if (localStorage['bto_ironman_tkn']) {
            var decoded = jwt_decode(localStorage['bto_ironman_tkn']);
            $("#my_points").html(decoded.data.points_user + " Ptos");
            $("#logout").on("click", function () {
                swal({
                    title: "¡Cerrar Sesión!",
                    text: '¿Estás seguro que deseas salir de IRONMAN?',
                    imageUrl: HomeUrl + 'lib/images/ironman-logo-black.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    showCancelButton: true,
                    confirmButtonClass: "btn-success",
                    confirmButtonText: "Si",
                    cancelButtonText: "No",
                    cancelButtonClass: "btn-danger",
                    closeOnConfirm: false,
                    html: true,
                    allowOutsideClick: true
                },
                        function () {
                            localStorage.clear();
                            window.location.href = HomeUrl + "Login";
                        });
            });
        }
    },
    intLogin: function () {
        this.init(false);
        $("#login").on("click", function () {
            var textfield = $("#email");
            var passfield = $("#pass");
            if (textfield.val() != "" && passfield.val() != "") {
                Services.getLogin(textfield.val(), passfield.val());
            } else {
                Mensages.generatePopUp("Iniciar Sesión", "Debe llenar la ficha de usuario y la contraseña", "error", "no");
            }
        });
        $("#recovery").on("click", function () {
            var html = '<label>Ficha de Usuario:</label><input class="col-md-12" type="number" id="stock_val"/>' +
                    '<small>Se le enviara a su correo electrónico la nueva contraseña</small>';
            swal({
                title: "Recuperar Contraseña",
                text: html,
                showCancelButton: true,
                confirmButtonClass: "btn-success",
                confirmButtonText: "Enviar",
                cancelButtonText: "Regresar",
                cancelButtonClass: "btn-danger",
                closeOnConfirm: false,
                allowOutsideClick: true,
                html: true
            }, function () {
                Services.getRecovery();
            });
        });
        $("#new_c").on("click", function () {
            var html = '<label>Ficha de Usuario:</label><input class="col-md-12" type="text" id="ficha2" value="' + user + '"/>';
            html += '<label>Correo:</label><input class="col-md-12" type="email" id="email2"  value="' + email + '"/>';
            html += '<label>Contraseña:</label><input class="col-md-12" type="password" id="pass2"  value="' + pass + '"/>';
            swal({
                title: "Registro de Usuario",
                text: html,
                showCancelButton: true,
                confirmButtonClass: "btn-success",
                confirmButtonText: "Enviar",
                cancelButtonText: "Regresar",
                cancelButtonClass: "btn-danger",
                closeOnConfirm: false,
                allowOutsideClick: true,
                html: true
            }, function () {
                user = $("#ficha2").val();
                email = $("#email2").val();
                pass = $("#pass2").val();
                Services.saveUser($("#ficha2").val(), $("#email2").val(), $("#pass2").val());
            });
        });
    },
    initHome: function () {
        this.init(true);
        Services.getStages();
        Services.getStageDescription();
    },
    initProduct: function () {
        this.init(true);
        Services.getProduct();
    },
    initProductDetail: function () {
        this.init(true);
        Services.getProductById(localStorage.getItem('bto_ironman_tmp_idProduct'));
        // Eventos
        $("#btn-buy").on("click", function () {
            swal({
                title: "¡Canjear premio!",
                text: '¿Esta seguro que desea canjear un ' + $(".unidos-awards-item-title").text() + ', por un total de ' + $(".unidos-awards-item-pts").text() + ' ?',
                imageUrl: HomeUrl + 'lib/images/ironman-logo-black.png',
                imageWidth: '500',
                imageHeight: 300,
                imageAlt: 'Custom image',
                showCancelButton: true,
                confirmButtonClass: "btn-success",
                confirmButtonText: "Si",
                cancelButtonText: "No",
                cancelButtonClass: "btn-danger",
                closeOnConfirm: false,
                allowOutsideClick: true
            }, function () {
                Services.buyProduct(localStorage['bto_ironman_tmp_idProduct']);
            });
        });
        $("#btn-regresar").on("click", function () {
            window.location.href = "./";
        });
    },
    initKpi: function () {
        this.init(true);
        Services.getKpiUser();
    },
    initProfile: function () {
        this.init(true);
        var decoded = jwt_decode(localStorage['bto_ironman_tkn']);
        $("#name_user").val(decoded.data.name_user);
        $("#lastname_user").val(decoded.data.lastname_user);
        $("#email_user").val(decoded.data.email_user);
        $("#ficha_user").val(decoded.data.ficha_user);
        $("#role_name").val(decoded.data.role_name);
        $("#name_sucursal").val(decoded.data.name_sucursal);
        Services.getStageUser();
    },
    intValidateUser: function () {
        this.init(true);
        Services.validateUser(getUrlParameter("tkn"));
    },
    intRecovery: function () {
        this.init(false);
        $("#reco").on("click", function () {
            Services.saveRecovery(getUrlParameter("tkn"), $("#pass2").val());
        });
    }
};
// Objeto Modelo O Servicios
var Services = {
    getLogin: function (login, pass) {
        var url = BaseUrl + 'user/login/';
        $.ajax({
            async: true,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            type: "POST",
            url: url,
            data: JSON.stringify({email_user: login, password_user: pass, type: "cliente"}),
            success: function (result) {
                var decoded = jwt_decode(result.data.token);
                localStorage['bto_ironman_tkn'] = result.data.token;
                localStorage['bto_ironman_name'] = decoded.data.name_user;
                localStorage['bto_ironman_lastname'] = decoded.data.lastname_user;
                localStorage['bto_ironman_role'] = decoded.data.role;
                // Mensaje de bienvenida
                swal({
                    title: "¡Bienvenido, " + decoded.data.name_user + "!",
                    text: 'Plataforma IRONMAN',
                    imageUrl: HomeUrl + 'lib/images/ironman-logo-black.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    confirmButtonClass: "btn-success",
                    confirmButtonText: "Entrar",
                    closeOnConfirm: false,
                    allowOutsideClick: false,
                    html: true
                }, function () {
                    window.location.href = "../";
                });
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "no");
            },
        });
    },
    getProduct: function () {
        var url = BaseUrl + 'product/list/min';
        $.ajax({
            contentType: "application/json",
            dataType: "json",
            type: "GET",
            headers: {"IronmanAuth": localStorage['bto_ironman_tkn']},
            url: url,
            success: function (result) {
                var html = "";
                var data = result.data;
                if (result.token) {
                    localStorage['bto_ironman_tkn'] = result.token;
                }

                // Pintar
                for (var i = 0; i < data.length; i++) {
                    html += Structures.productList(data[i].id_product, data[i].image_product, data[i].name_product, data[i].price_product, data[i].predesc_product, data[i].stock_product);
                }
                $("#products").html(html);
                // Ir para detalle
                $(".ver_pr").on("click", function () {
                    localStorage.setItem("bto_ironman_tmp_idProduct", $(this).data("id"));
                    window.location.href = "detail.php";
                });
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "../");
            }
        });
    },
    getProductById: function (id) {
        var url = BaseUrl + 'product/listById/' + id;
        $.ajax({
            contentType: "application/json",
            dataType: "json",
            type: "GET",
            async: false,
            crossDomain: true,
            headers: {"IronmanAuth": localStorage['bto_ironman_tkn']},
            url: url,
            success: function (result) {
                if (result.token) {
                    localStorage['bto_ironman_tkn'] = result.token;
                }
                var data = result.data;
                // Pintar
                $("#unidos-awards-img").attr('src', data.image_product);
                $(".unidos-awards-item-title").html(data.name_product);
                $(".unidos-awards-item-pts").html(data.price_product + " Puntos");
                if (data.stock_product < 1) {
                    $(".unidos-awards-item-stock").html("Disponibles : <strong class='text-danger'>" + (data.stock_product) + " Premios</strong>");

                } else {
                    $(".unidos-awards-item-stock").html("Disponibles : <strong class='text-success'>" + (data.stock_product) + " Premios</strong>");
                }
                $(".unidos-awards-item-description").html(data.description_product);
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "../Product/");
            },
        });
    },
    buyProduct: function (id) {
        var url = BaseUrl + 'product/buy';
        $.ajax({
            async: true,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            type: "POST",
            headers: {"IronmanAuth": localStorage['bto_ironman_tkn']},
            data: JSON.stringify({id_product: parseInt(id)}),
            url: url,
            success: function (result) {
                if (result.token) {
                    localStorage['bto_ironman_tkn'] = result.token;
                }
                Mensages.generatePopUp("¡Premio Canjeado!", result.message, "success", './');
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, '../Product/');
            },
        });
    },
    getKpiUser: function () {
        var url = BaseUrl + 'sop/ByUser';
        $.ajax({
            contentType: "application/json",
            dataType: "json",
            type: "GET",
            headers: {"IronmanAuth": localStorage['bto_ironman_tkn']},
            url: url,
            success: function (result) {
                if (result.token) {
                    localStorage['bto_ironman_tkn'] = result.token;
                }
                var html = '';
                var data = result.data;
                var por = 0, min_p = 0, mid_p = 0, max_p = 0;
                // Pintar
                if (data.length === 0) {
                    Mensages.generatePopUp("Mis KPI", "Este usuario no tiene asignados KPI.", "info", "../");
                    return;
                }
                var val;
                html += '<div class="col-md-10 text-center pb-5 pt-5">' +
                        '<div class="tf kpi-color-1">' +
                        '<div class="tbl t-1">' + data[0].role_name + '</div>' +
                        '<div class="tbl t-2">&nbsp;</div>' +
                        '<div class="tbl t-3">Mínimo</div>' +
                        '<div class="tbl t-4">Media</div>' +
                        '<div class="tbl t-5">Máximo</div>' +
                        '</div>';
                for (var h = 0; h < data[0].kpi_indicators.length; h++) {
                    val = data[0].kpi_indicators[h];
                    html += Structures.kpiIndicador(val.min_label, val.mid_label, val.max_label);
                    html += Structures.kpiValues(val.name_indicator, val.weight_indicator_value + "%", val.pto_min_indicator_value, val.pto_mid_indicator_value, val.pto_max_indicator_value);
                    por = por + parseInt(val.weight_indicator_value);
                    min_p += parseInt(val.pto_min_indicator_value);
                    mid_p += parseInt(val.pto_mid_indicator_value);
                    max_p += parseInt(val.pto_max_indicator_value);
//                    console.log(val.weight_indicator_value);
                }

                html += '<div class="tf kpi-color-2">' +
                        '<div class="tbl t-1">Total</div>' +
                        '<div class="tbl t-2">' + por + '%</div>' +
                        '<div class="tbl t-3">' + min_p + '</div>' +
                        '<div class="tbl t-4">' + mid_p + '</div>' +
                        '<div class="tbl t-5">' + max_p + '</div>' +
                        '</div>';
                html += " </div>";
                $("#rg").html("Región " + data[0].name_region);
                $("#su").html("" + data[0].name_sucursal);
                html += Structures.kpiObservations(data[0].desc_region);
                $("#table-kpi").html(html + "");
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "../");
            }
        });
    },
    getRecovery: function () {
        $.ajax({
            async: true,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            type: "GET",
            url: BaseUrl + 'recovery_pass/' + $("#stock_val").val() + '/client',
            success: function (result) {
                Mensages.generatePopUp("¡Recuperar Contraseña!", result['message'], "success", 'no');
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "no");
            },
        });
    },
    saveUser: function (ficha, email, pass) {
        $.ajax({
            async: true,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            type: "POST",
            data: JSON.stringify({ficha_user: ficha, email_user: email, pass: pass}),
            url: BaseUrl + 'user/web/',
            success: function (result) {
                Mensages.generatePopUp("¡Registro de Usuario!", result['message'], "success", '');
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "no");
            }
        });
    },
    saveRecovery: function (tkn, pass) {
        $.ajax({
            async: true,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            type: "POST",
            data: JSON.stringify({code: tkn, pass: pass}),
            url: BaseUrl + 'recovery_update/',
            success: function (result) {
                Mensages.generatePopUp("¡Cambio de Contraseña!", result['message'], "success", '../');
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "no");
            }
        });
    },
    validateUser: function (id) {
        $.ajax({
            async: true,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            type: "GET",
            url: BaseUrl + 'user/validate/' + id,
            success: function (result) {
                Mensages.generatePopUp("¡Validación de Usuario!", result['message'], "success", '../Login');
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "../Login");
            }
        });
    },
    getStages: function () {
        $.ajax({
            async: true,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            type: "GET",
            headers: {"IronmanAuth": localStorage['bto_ironman_tkn']},
            url: BaseUrl + 'home/totalStage',
            success: function (result) {
                if (result.token) {
                    localStorage['bto_ironman_tkn'] = result.token;
                }

                var html = '';
                var data = result.data;
                // Pintar
                for (var i = 0; i < data.length; i++) {
                    var porcentaje = (data[i].sum_points * 100) / data[i].max_points;
                    if (data[i].max_points == 0) {
                        porcentaje = 0;
                    }
                    html += Structures.StagesHome(data[i].name_region, porcentaje, data[i].sum_points);
                }
                $("#stages").html(html);
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "no");
            }
        });
    },
    getStageUser: function () {
        $.ajax({
            async: true,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            type: "GET",
            headers: {"IronmanAuth": localStorage['bto_ironman_tkn']},
            url: BaseUrl + 'home/totalStageByUser',
            success: function (result) {
                if (result.token) {
                    localStorage['bto_ironman_tkn'] = result.token;
                }

                var html = '';
                var data = result.data;
                // Pintar
                for (var i = 0; i < data.length; i++) {

                    html += Structures.StagesHome(data[i].name_stage, ((data[i].ptos * 100) / data[i].total).toFixed(2), data[i].ptos);
//                    html += Structures.stageProfile(data[i].name_stage, Math.floor(Math.random() * (100 - 0 + 1) + 0), Math.floor(Math.random() * (1000 - 0 + 1) + 0));
                }
                $("#stages").html(html);
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "no");
            }
        });
    },
    getStageDescription: function () {

        $.ajax({
            async: true,
            crossDomain: true,
            contentType: "application/json",
            dataType: "json",
            type: "GET",
            headers: {"IronmanAuth": localStorage['bto_ironman_tkn']},
            url: BaseUrl + 'home/descriptionStage',
            success: function (result) {
                if (result.token) {
                    localStorage['bto_ironman_tkn'] = result.token;
                }

                var html = '';
                var data = result.data;
                // Pintar
                for (var i = 0; i < data.length; i++) {
                    html += Structures.stageDescription(data[i].name_stage, data[i].description_stage, i + 1);
                }
                $("#desc_stage").html(html);
            },
            error: function (xhr) {
                Mensages.generateErrorMessage(xhr, "no");
            }
        });
    }
};
// Obejtos vista o estrcuturas HTML
var Structures = {
    productList: function (id, img, name, pts, desc, stock) {
        var html = '<div class="col-md-3 pt-5">' +
                '<div class="card">' +
                '<img class="card-img-top" src="' + img + '" alt="Card image cap">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + name + '</h5>' +
                '<h6 class="text-success">' + pts + ' ptos.</h6>' +
//                '<p class="card-text">' + desc + '</p><div class="text-center">';
                '<div class="text-center">';
        if (stock > 0) {
            html += '<a href="#" data-id="' + id + '" class="ver_pr btn btn-ironman mt-4 mb-3">Ver premio</a>';
        } else {
            html += '<a href="#" class="btn btn-ironman disabled" >Premio agotado</a>';
        }
        html += '</div></div></div></div>';
        return html;
    },
    kpiIndicador: function (min, mid, max) {
        var html = '<div class="tf kpi-color-2">' +
                '<div class="tbl t-1">Indicador</div>' +
                '<div class="tbl t-2">Peso</div>' +
                '<div class="tbl t-3">' + min + '</div>' +
                '<div class="tbl t-4">' + mid + '</div>' +
                '<div class="tbl t-5">' + max + '</div>' +
                '</div>';
        return html;
    },
    kpiValues: function (col1, col2, col3, col4, col5) {
        var html = '<div class="tf kpi-color-3">' +
                '<div class="tbl t-1">' + col1 + '</div>' +
                '<div class="tbl t-2">' + col2 + '</div>' +
                '<div class="tbl t-3">' + col3 + '</div>' +
                '<div class="tbl t-4">' + col4 + '</div>' +
                '<div class="tbl t-5">' + col5 + '</div>' +
                '</div>';
        return html;
    },
    kpiObservations: function (val) {
        var html = '<div class="col-10 pt-5">' +
                '<h4 class="pb-4">Observaciones</h4>' + val +
                '</div>';
        return html;
    },
    StagesHome: function (name, porc, puntos) {
        return '<div class="col-md-6 pt-4">' +
                '<h4>' + name + ' (' + puntos + 'pts.) </h4>' +
                '<div class="progress">' +
                '<div class="progress-bar" role="progressbar" style="width: ' + porc + '%;" aria-valuenow="' + porc + '" aria-valuemin="0" aria-valuemax="100">' + porc + '%</div>' +
                '</div>' +
                '</div>';
    },
    stageProfile: function (name, porc, puntos) {
        return '<div class="col-md-12 pt-4">' +
                '<h4>' + name + '</h4>' +
                '<div class="progress">' +
                '<div class="progress-bar" role="progressbar" style="width: ' + porc + '%;" aria-valuenow="' + porc + '" aria-valuemin="0" aria-valuemax="100">' + puntos + ' (' + porc + '%)</div>' +
                '</div>' +
                '</div>';
    },
    stageDescription: function (name, desc, int) {
        return '<div class="col-12 col-lg-4">' +
                '         <div class="card features">' +
                '             <div class="card-body">' +
                '                 <div class="media">' +
                '                     <span class="ti-3x mr-3 eta">' + int + '</span>' +
                '                     <div class="media-body">' +
                '                         <h4 class="card-title">' + name + '</h4>' +
                '                         <p class="card-text">' + desc + '</p>' +
                '                     </div>' +
                '                 </div>' +
                '             </div>' +
                '         </div>' +
                '     </div>';
    }
};
// Objeto Mensajes o notificaciones
var Mensages = {
    generatePopUp: function (title, text, type, url) {
        swal({
            title: title,
            text: text,
            type: type,
            closeOnConfirm: true,
            allowOutsideClick: true,
            html: true
        }, function (isConfirm) {
            if (url != "no") {
                window.location.href = url;
            }
        });
    },
    generateErrorMessage: function (xhr, url) {
        var that = this;
        var text = "";
        if (xhr.status == 0 || xhr.status == 500) {
            text = "Los servicios no se encuentran disponibles, intente nuevamente en unos minutos. (" + xhr.status + ")";
        } else if (JSON.parse(xhr.responseText).token == 'false') {
            localStorage.clear();
            sessionStorage.clear();
            swal({
                title: "<span class='text-danger'> ¡Su sesión se ha vencido! </span>",
                text: JSON.parse(xhr.responseText).message,
                imageUrl: '../lib/common/img/unidos-logo-black.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Salir",
                closeOnConfirm: false,
                allowOutsideClick: false,
                html: true
            }, function () {
                window.location.href = "";
            });
        } else {
            console.log(JSON.parse(xhr.responseText).token);
            console.log(JSON.parse(xhr.responseText).token == 'false');
            url = "no";
            text = JSON.parse(xhr.responseText).message + " (" + JSON.parse(xhr.responseText).code + ")";
        }
        if (text != "") {
            that.generatePopUp("¡Advertencia!", text, "error", url);
        }
    }
};
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};