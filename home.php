<?php
session_start();

$usr = $_SESSION['usr'];
$type = $_SESSION['type'];

$filename = "user.txt";

$file = fopen($filename, "r");
$admin = false;

while (($line = fgets($file)) !== false) {
    list($us, $pw, $ty, $em) = explode(':', trim($line));
    if ($us === $usr) {
        if (strpos($ty, "admin") !== false) {
            $admin = true;
            break;
        }
    }
}

fclose($file);

if ($admin === true) {
    echo "<h3>Admin page</h3>";
} else {
    echo "<h3>Client page</h3>";
}

echo '<br><a href="logout.php">Logout</a>';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="home.css">
    <title>Factores del Crecimiento Poblacional</title>
</head>
<body>
    <header>
        <div class="header-left">
            <img src="pj10-removebg-preview.png" alt="Logo">
            <ul>
                <li><a href="#historicos">Históricos</a></li>
                <li><a href="#economicos">Económicos</a></li>
                <li><a href="#culturales">Culturales</a></li>
                <li><a href="#tecnologicos">Tecnológicos</a></li>
                <li><a href="#desafios">Desafíos y Oportunidades</a></li>
            </ul>
        </div>
        <div class="header-right">
            <a href="<?php echo isset($_SESSION['usr']) ? 'logout.php' : 'login.php'; ?>"><?php echo isset($_SESSION['usr']) ? 'Logout' : 'Login'; ?></a>
        </div>
    </header>
    <main>
        <canvas id="canva" width="1"></canvas>
        
        <section class="about-section light-background">
            <div class="about-content reverse">
                <img src="https://img.freepik.com/free-photo/close-up-man-polishing-shoe_23-2149007466.jpg?t=st=1731443060~exp=1731446660~hmac=3be74acf8bd09b39d8d54975e3cca65e1dd943840af3d31d755bf6356eba0ec1&w=1380" >
                <div class="text">
                    <h2>Factores históricos</h2>
                    <p>At LegacyCars, we blend the latest in automotive technology with the timeless design elements of classic cars...</p>
                </div>
            </div>
        </section>
        
        <section class="about-section dark-background">
            <div class="about-content">
                <img src="https://img.freepik.com/free-photo/beautiful-sexy-fashion-blond-girl-model-with-bright-makeup-curly-hairstyle-retro-style-sitting-old-car_158538-9269.jpg?t=st=1731443214~exp=1731446814~hmac=7e01ecd10c2364f659fe11efbf57c702a963e001b5b5d185ea9ed53931c047c0&w=2000" >
                <div class="text">
                    <h2>The Legacy of Excellence</h2>
                    <p>With each car we create, we honor the legacy of automotive excellence, combining performance with beauty.</p>
                </div>
            </div>
        </section>
        
        <section class="about-section light-background">
            <div class="about-content reverse">
                <img src="https://img.freepik.com/free-photo/young-girl-wearing-brown-suit-lean-car-desert_144627-77183.jpg?t=st=1731443426~exp=1731447026~hmac=42833f2322698224a7d55516f2b47802f0e8e4df47bbc213d1bf8cbd38726a0c&w=2000" >
                <div class="text">
                    <h2>Innovation Meets Tradition</h2>
                    <p>We push the boundaries of automotive engineering while staying true to the aesthetic charm of classic cars.</p>
                </div>
            </div>
        </section>
    </main>

    <table>
        <thead>
            <tr>
                <th>Historia</th>
                <th>Economía</th>
                <th>Cultura</th>
                <th>Tecnológicos</th>
                <th>Desafíos y Oportunidades</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="td"></td>
                <td class="td"></td>
                <td class="td"></td>
                <td class="td"></td>
                <td class="td"></td>
            </tr>
        </tbody>
    </table>
    <div style="text-align: center; margin-top: 20px;">
        <div class="draggable" draggable="true" id="phrase1">La Revolución Industrial</div>
        <div class="draggable" draggable="true" id="phrase2">Impacto de la Globalización</div>
        <div class="draggable" draggable="true" id="phrase3">Lenguas Indígenas</div>
        <div class="draggable" draggable="true" id="phrase4">Avances en IA</div>
        <div class="draggable" draggable="true" id="phrase5">Cambio Climático</div>
    </div>

    <script src="home.js"></script>
    
</body>
</html>
