<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$asunto = $_POST['asunto'] ?? '';
$content = $_POST['content'] ?? '';
$email = $_POST['email'] ?? '';

$mailSent = false;

$mail = new PHPMailer(true);

try {
    // Configuración SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.dondominio.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contacto@loesport.es';
    $mail->Password = ')r]7SlP6Xo6k/c';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // Destinatario y remitente
    $mail->setFrom('contacto@loesport.es');
    $mail->addAddress('loesport@gmail.com');  

    // Contenido del correo
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $asunto;
    $mail->Body = "
        <!DOCTYPE html>
        <html lang='es'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    color: #333;
                }
                .container {
                    max-width: 600px;
                    margin: auto;
                    background-color: #d8e472;
                    padding: 0;
                    border-radius: 10px;
                }
                header {
                    background-color: #418e8e;
                    text-align: center;
                    padding: 20px;
                    border-radius: 10px 10px 0 0;
                }
                .content {
                    padding: 20px;
                }
                .content span {
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class='container'>
                <header>
                    <h2>Mensaje del formulario WEB</h2>
                </header>
                <section class='content'>
                    <p><span>Remitente: </span>$email</p>
                    <p><span>Asunto: </span>$asunto</p>
                    <p><span>Mensaje: </span>$content</p>
                </section>
            </div>
        </body>
        </html>
        ";
    
    // Enviar el correo
    $mail->send();
    $mailSent = true;
} catch (Exception $e) {
    $mailSent = false;
    echo "
    <!DOCTYPE html>
    <html lang='es'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Enviar email</title>
    </head>
    <body>
        <div class='modal-envio-correcto'>
            <span>❗❗❗</span>
            <h6>Ha habido un error al enviar el mensaje</h6>
            <p>Contáctanos a través de loesport@gmail.com</p>
            <button class='modal-envio-correcto__button'>Aceptar</button>
        </div>

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap');

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Epilogue';
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100dvh;
                background-color: #aaa;
            }

            .modal-envio-correcto {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;

                width: 500px;
                max-width: 95%;
                background-color: #fff;
                padding: 50px;
                border-radius: 10px;    

                text-align: center;
            }

            .modal-envio-correcto span {
                font-size: 3rem;
            }

            .modal-envio-correcto h6 {
                font-size: 1.5rem;
                font-weight: 400;
            }

            .modal-envio-correcto p {
                color: #0008;
                font-size: .8rem;
                text-align: center;
            }

            .modal-envio-correcto button {
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #000;
                color: #fff;
                border: none;
                border-radius: 100px;

                cursor: pointer;
            }
        </style>
    </body>
    ";
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviar email</title>
</head>
<body>
    <div class="modal-envio-correcto" style="display: <?php echo $mailSent ? 'flex' : 'none'; ?>;">
        <span>🎉🎉🎉</span>
        <h6>Email enviado correctamente</h6>
        <p>Muchas gracias por contactar con nosotros. Le escribiremos en breve.</p>
        <button class="modal-envio-correcto__button">Aceptar</button>
    </div>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Epilogue';
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100dvh;
            background-color: #aaa;
        }

        .modal-envio-correcto {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;

            width: 500px;
            max-width: 95%;
            background-color: #fff;
            padding: 50px;
            border-radius: 10px;    

            text-align: center;
        }

        .modal-envio-correcto span {
            font-size: 3rem;
        }

        .modal-envio-correcto h6 {
            font-size: 1.5rem;
            font-weight: 400;
        }

        .modal-envio-correcto p {
            color: #0008;
            font-size: .8rem;
            text-align: center;
        }

        .modal-envio-correcto button {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 100px;

            cursor: pointer;
        }
    </style>

    <script>
        const modal = document.querySelector('.modal-envio-correcto');
        const modalButton = document.querySelector('.modal-envio-correcto__button');

        modalButton.addEventListener('click', () => {
            modal.style.display = 'none';
            window.location.href = '<?php echo $_POST['referer']; ?>' || 'http://loesport.es/';
        });
    </script>
</body>
</html>
