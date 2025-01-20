window.onload = function () {
    var canva = document.getElementById('canva');
    var ctx = canva.getContext('2d');

    
    const BASE_WIDTH = 1920;
    const BASE_HEIGHT = 1080;

    var squares = [
        { x: 650, y: 110, width: 150, height: 100, color: 'transparent', url: "Islandia" },
        { x: 710, y: 500, width: 80, height: 80, color: 'transparent', url: "Irlanda" },
        { x: 800, y: 400, width: 120, height: 200, color: 'transparent', url: "UK" },
        { x: 820, y: 660, width: 200, height: 150, color: 'red', url: "Francia" },
        { x: 700, y: 820, width: 185, height: 150, color: 'black', url: "España" },
        { x: 1050, y: 520, width: 110, height: 180, color: 'yellow', url: "Alemania" },
        { x: 990, y: 550, width: 40, height: 60, color: 'green', url: "Holanda" },
        { x: 965, y: 610, width: 50, height: 30, color: 'purple', url: "Bélgica" },
        { x: 1025, y: 705, width: 80, height: 50, color: 'red', url: "Suiza" },
        { x: 1025, y: 770, width: 180, height: 280, color: 'green', url: "Italia" },
        { x: 1160, y: 725, width: 60, height: 50, color: 'green', url: "Slovenia" },
        { x: 620, y: 820, width: 60, height: 150, color: 'green', url: "Portugal" },
        { x: 1140, y: 680, width: 90, height: 50, color: 'yellow', url: "Austria" },
        { x: 1160, y: 620, width: 100, height: 50, color: 'purple', url:"Republica_Checa" },
        { x: 1250, y: 650, width: 100, height: 45, color: 'orange', url:"Eslovaquia" },
        { x: 1240, y: 700, width: 100, height: 45, color: 'black', url:"Hungria" },
        { x: 1240, y: 700, width: 100, height: 45, color: 'black', url:"Hungria" }, 
    ];

    function draw() {
        canva.width = window.innerWidth * 0.9;
        canva.height = window.innerHeight * 0.9;

        let scaleX = canva.width / BASE_WIDTH;
        let scaleY = canva.height / BASE_HEIGHT;

        var img = new Image();
        img.src = '71vs.webp';

        img.onload = function () {
            ctx.drawImage(img, 0, 0, canva.width, canva.height);

            squares.forEach(square => {
                ctx.fillStyle = square.color;
                ctx.fillRect(
                    square.x * scaleX,
                    square.y * scaleY,
                    square.width * scaleX,
                    square.height * scaleY
                );
            });
        };
    }

    window.addEventListener('resize', draw);

    canva.addEventListener('mousemove', function (event) {
        var rect = canva.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        var scaleX = canva.width / BASE_WIDTH;
        var scaleY = canva.height / BASE_HEIGHT;

        var isOverSquare = false;
        squares.forEach(square => {
            let scaledX = square.x * scaleX;
            let scaledY = square.y * scaleY;
            let scaledWidth = square.width * scaleX;
            let scaledHeight = square.height * scaleY;

            if (x >= scaledX && x <= scaledX + scaledWidth &&
                y >= scaledY && y <= scaledY + scaledHeight) {
                canva.style.cursor = 'pointer';
                isOverSquare = true;
            }
        });

        if (!isOverSquare) {
            canva.style.cursor = 'default';
        }
    });

    canva.addEventListener('click', function (event) {
        var rect = canva.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        var scaleX = canva.width / BASE_WIDTH;
        var scaleY = canva.height / BASE_HEIGHT;

        squares.forEach(square => {
            let scaledX = square.x * scaleX;
            let scaledY = square.y * scaleY;
            let scaledWidth = square.width * scaleX;
            let scaledHeight = square.height * scaleY;

            if (x >= scaledX && x <= scaledX + scaledWidth &&
                y >= scaledY && y <= scaledY + scaledHeight) {
                window.location.href = "urlFiltro.html?pais=" + square.url;
            }
        });
    });

    draw();
};
