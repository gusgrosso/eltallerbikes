<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="bicicletas, contacto, comunicacíon, mensaje, redes sociales">
        <meta name="description" content="Te brindamos distintos tipos de forma de contactarnos. Elegí la que te resulte más cómoda y nos comunicaremos!">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/32bca8093b.js" crossorigin="anonymous"></script>
        <title>El Taller Bikes</title>
    </head>
    
    <body>

        <!-- Encabezado -->    
        <header class="pb-2">                

            <!-- Logo -->
            <div class="header__contenedorLogo">
                <a href="../index.html"><img src="../img/logo.jpg" alt="Logo El taller bikes"></a>     
            </div>
            
            <!--La barra de navegación-->
            <nav class="header__nav__menuNavegacion">               
                <ul>
                    <li><a class="header__nav__a--botonPrincipal" href="../index.html">Inicio</a></li>
                    <li><a class="header__nav__a--botonPrincipal" href="nosotros.html">Nosotros</a></li>
                    <li class="openSubmenu"><a class="header__nav__a--botonPrincipal" href="servicios.html">Servicios</a>
                        <ul class="header__nav__subMenuServicios">
                            <li><a class="header__nav__a--botonPrincipal" href="servicios.html#servRepara">Reparación</a></li>
                            <li><a class="header__nav__a--botonPrincipal" href="servicios.html#servLimp">Limpieza</a></li>
                            <li><a class="header__nav__a--botonPrincipal" href="servicios.html#servPuesta">Puesta a punto</a></li>
                            <li><a class="header__nav__a--botonPrincipal" href="servicios.html#servVenta">Venta y asesoramiento</a></li>
                        </ul>
                    </li>
                    <li><a class="header__nav__a--botonPrincipal" href="productos.html">Productos</a></li>
                    <li><a class="header__nav__a--botonPrincipal" href="sucursales.html">Sucursales</a></li>
                    <li><a class="header__nav__a--botonPrincipal" href="contacto.html">Contacto</a></li>
                </ul>
            </nav>

        
        </header> 
        

        <!-- Cuerpo de la página -->
        <main>             
            <section class="seccionFormulario">           
                <h1>Contacto</h1>           
                <?php
                    if(isset($_POST['email'])) {    
                        $email_to = "gustygrosso@yahoo.com.ar";
                        $email_subject = "Contacto desde el sitio web El Taller Bikes";

                        // Aquí se deberían validar los datos ingresados por el usuario
                        if(!isset($_POST['nombre']) ||
                            !isset($_POST['telefono']) ||
                            !isset($_POST['mail']) ||
                             {

                                echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
                                echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
                            die();
                            }

                        $email_message = "Detalles del formulario de contacto:\n\n";
                        $email_message .= "Nombre: " . $_POST['nombre'] . "\n";
                        $email_message .= "Teléfono: " . $_POST['telefono'] . "\n";
                        $email_message .= "E-mail: " . $_POST['mail'] . "\n";
                        $email_message .= "Red Social: " . $_POST['redsocial'] . "\n";
                        $email_message .= "Usuario: " . $_POST['usuario'] . "\n\n";
                        $email_message .= "Mensaje: " . $_POST['mensaje'] . "\n\n";
                        $email_message .= "Como contactar: " . $_POST['comocontacto'] . "\n\n";
                        $email_message .= "Newsletter: " . $_POST['newsletter'] . "\n\n";        



                        // Se envía el e-mail usando la función mail() de PHP
                        $headers = 'From: '.$email_from."\r\n".
                        'Reply-To: '.$email_from."\r\n" .
                        'X-Mailer: PHP/' . phpversion();
                        @mail($email_to, $email_subject, $email_message, $headers);

                        echo "¡El formulario se ha enviado con éxito!";
                    }
                ?>
            </section>
        </main>
        

        <!-- El footer -->    
        <footer>      

            <!-- Primera columna del footer -->
            <div class="footer__box__mapaSitio">
                <h5 class="footer__h5">Mapa de sitio</h5>
                <ul class="footer__ul">
                    <li><a class="footer__ul__a" href="../index.html">Inicio</a></li>
                    <li><a class="footer__ul__a" href="nosotros.html">Nosotros</a></li>
                    <li><a class="footer__ul__a" href="servicios.html">Servicios</a></li>
                    <li><a class="footer__ul__a" href="productos.html">Productos</a></li>
                    <li><a class="footer__ul__a" href="sucursales.html">Sucursales</a></li>
                    <li><a class="footer__ul__a" href="contacto.html">Contacto</a></li>
                </ul>
            </div>

            <!-- Segunda columna del footer -->
            <div class="footer__box__casaCentral">
                <h5 class="footer__h5">Casa Central</h5>
                <ul class="footer__ul">
                    <li class="footer__box__casaCentral__li"><i class="fas fa-sign"></i><p>Monroe 1555, Nuñez</p></li>
                    <li class="footer__box__casaCentral__li"><i class="fas fa-phone"></i><p>4413-4402</p></li>
                    <li class="footer__box__casaCentral__li"><i class="fas fa-at"></i><p>monroe@eltallerbikes.com.ar</p></li>
                </ul>
            </div>

            <!-- Tercera columna del footer -->
            <div class="footer__box__nuestrasRedes">
                <h5 class="footer__h5">Nuestras redes</h5>
                <ul class="footer__ul">
                    <li><i class="fab fa-facebook-f footer__ul__li__i"></i><a class="footer__ul__a" href="https://www.facebook.com/ElTallerBikes/" target="_blank">Facebook</a></li> 
                    <li><i class="fab fa-instagram footer__ul__li__i"></i><a class="footer__ul__a" href="https://www.instagram.com/eltallerbikes/?hl=es" target="_blank">Instagram</a></li> 
                    <li><i class="fab fa-whatsapp footer__ul__li__i"></i><a class="footer__ul__a" href="https://wa.me/5491135822146" target="_blank">Whatsapp</a></li>    
                </ul>   
            </div>                     
        
        </footer> 

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

    </body>

</html>