<?php
// Проверяем, есть ли запрос и не пустой ли он
if (isset($_POST['type']) && !empty($_POST['type'])) {
    // Очищаем тип запроса от всего, кроме букв
    $type = preg_replace('/[^a-zA-Z]/', '', $_POST['type']);
    switch ($type) {
        // Если запрос на получение капчи
        case 'get':
            require_once('captcha.php');
            // Генерируем капчу и отправляем ответ
            if (generateCaptcha()) {
                http_response_code(200);
            } else {
                http_response_code(500);
            }
            break;
        // Если запрос на отправку данных формы
        case 'put':
            session_start();
            // Проверяем, есть ли капча в запросе и не пустая ли она
            if (isset($_POST['Captcha']) && !empty($_POST['Captcha'])) {
                // Очищаем капчу от всего, кроме цифр
                $userCaptcha = preg_replace('/[^0-9]/', '', $_POST['Captcha']);
                // Если введенная капча совпадает с той, что была сгенерирована
                if ($userCaptcha == $_SESSION['captcha']) {
                    // Проверяем, есть ли все необходимые поля в запросе и не пустые ли они
                    if (isset($_POST['phone']) && !empty($_POST['phone']) && isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['email']) && !empty($_POST['email'])) {
                        // Очищаем номер телефона от всего, кроме цифр
                        $phone = preg_replace('/[^0-9]/', '', $_POST['phone']);
                        // Очищаем имя от всего, кроме букв
                        $name = preg_replace('/[^a-zA-Zа-яА-ЯЁё]/u', '', $_POST['name']);
                        // Очищаем email от нежелательных символов
                        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
                        // Формируем сообщение для отправки
                        $message = "Телефон: " . $phone . "\nИмя: " . $name . "\nEmail: " . $email;
                        // Формируем заголовки для отправки письма
                        $headers = "From: " . $email . "\r\n" . "Reply-To: " . $email . "\r\n";
                        // Отправляем письмо на указанный email
                        if (mail('pgv856@gmail.com', 'New Contact Form Submission', $message, $headers)) {
                            header('HTTP/1.1 200 OK');
                            echo "Success";
                        } else {
                            for ($i = 1; $i <= 3; $i++) {
                                if (mail('pgv856@gmail.com', 'New Contact Form Submission', $message, $headers)) {
                                    header('HTTP/1.1 200 OK');
                                    echo "Success";
                                    break;
                                } else {
                                    header('HTTP/1.1 500 Internal Server Error');
                                    echo "Error Sending Email";
                                }
                            }
                        }
                        // if (mail('pgv856@gmail.com', 'New Contact Form Submission', $message, $headers)) {
                        //     header('HTTP/1.1 200 OK');
                        //     echo "Success";
                        // } else {
                        //     header('HTTP/1.1 500 Internal Server Error');
                        //     echo "Error Sending Email";
                        // }
                    } else {
                        header('HTTP/1.1 400 Bad Request');
                        echo "Missing Required Fields";
                    }
                } else {
                    header('HTTP/1.1 400 Bad Request');
                    echo "Invalid Captcha";
                }
            } else {
                header('HTTP/1.1 400 Bad Request');
                echo "Missing Captcha Field";
            }
            break;
        // Если запрос с неверным типом
        default:
            header('HTTP/1.1 400 Bad Request');
            echo "Invalid Request Type";
    }
} else {
    header('HTTP/1.1 400 Bad Request');
    echo "Missing Request Type";
}
?>