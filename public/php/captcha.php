<?php

function generateCaptcha()
{
    session_start();

    // Генерируем случайное число из 5 символов
    $code = rand(10000, 99999);

    // Создаем картинку размером 200x50
    $image = imagecreatetruecolor(200, 50);

    // Заливаем картинку случайным цветом
    $bg_color = imagecolorallocate($image, rand(0, 255), rand(0, 255), rand(0, 255));
    imagefill($image, 0, 0, $bg_color);

    // Рисуем 5 случайных линий с левого края до правого случайного цвета
    for ($i = 0; $i < 5; $i++) {
        $line_color = imagecolorallocate($image, rand(0, 255), rand(0, 255), rand(0, 255));
        imageline($image, rand(0, 10), rand(0, 50), rand(190, 200), rand(0, 50), $line_color);
    }

    // Рисуем каждый символ случайным цветом и случайным положением по вертикали
    $font = 'arial.ttf'; // путь к шрифту
    $code = strval($code);
    for ($i = 0; $i < strlen($code); $i++) {
        $char_color = imagecolorallocate($image, rand(0, 255), rand(0, 255), rand(0, 255));
        imagettftext($image, 25, rand(-10, 10), ($i * 35) + rand(-5, 5), rand(30, 40), $char_color, $font, $code[$i]);
    }

    // Рисуем 3 произвольные линии случайного цвета
    for ($i = 0; $i < 3; $i++) {
        $line_color = imagecolorallocate($image, rand(0, 255), rand(0, 255), rand(0, 255));
        imageline($image, rand(0, 200), rand(0, 50), rand(0, 200), rand(0, 50), $line_color);
    }

    // Сохраняем полученное значение в сессии
    $_SESSION['captcha'] = $code;

    // Возвращаем полученный рисунок
    header('Content-type: image/png'); // Set the content type header to PNG image
    imagepng($image); // Output the image in PNG format
    imagedestroy($image); // Free up memory
}