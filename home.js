window.onload = function() {
    var canva = document.getElementById('canva');
    var ctx = canva.getContext('2d');
    
    var squares = [
        { x: 720, y: 130, width: 170, height: 100, color: 'transparent', url: "filter=Islands" },
        { x: 800, y: 430, width: 250, height: 200, color: 'transparent', url: "filter=Islands" },
        { x: 950, y: 650, width: 200, height: 220, color: 'transparent', url: "filter=France" },
        { x: 1110, y: 530, width: 220, height: 200, color: 'transparent', url: "filter=Spain" },
        { x: 720, y: 835, width: 250, height: 170, color: 'transparent', url: "filter=Gernamny" },
        { x: 1150, y: 780, width: 200, height: 100, color: 'transparent', url: "filter=Italy" },
        { x: 1310, y: 880, width: 120, height: 150, color: 'transparent', url: "filter=Italy" },
        { x: 1530, y: 900, width: 150, height: 150, color: 'transparent', url: "filter=Italy" },
        { x: 1330, y: 550, width: 190, height: 210, color: 'transparent', url: "filter=Poland" },
        { x: 1180, y: 220, width: 190, height: 310, color: 'transparent', url: "filter=Poland" },
        { x: 1350, y: 70, width: 190, height: 310, color: 'transparent', url: "filter=Poland" },
        { x: 1550, y: 50, width: 440, height: 650, color: 'tranparent', url: "filter=Russia" },
        { x: 1440, y: 390, width: 120, height: 140, color: 'transparent', url: "filter=Russia" },
        { x: 1530, y: 700, width: 180, height: 180, color: 'transparent', url: "filter=Romania" },
        { x: 1360, y: 770, width: 180, height: 90, color: 'transparent', url: "filter=Romania" },
        { x: 1460, y: 850, width: 90, height: 70, color: 'transparent', url: "filter=Romania" }
    ];

    function draw() {
        canva.width = window.innerWidth * 0.9;
        canva.height = window.innerHeight * 0.9;

        var img = new Image();
        img.src = '71vs.webp';
        img.onload = function() {
            ctx.drawImage(img, 0, 0, canva.width, canva.height);

            squares.forEach(square => {
                ctx.fillStyle = square.color;
                ctx.fillRect(square.x, square.y, square.width, square.height);
                
            });
        };
    }

    window.addEventListener('resize', draw);

    canva.addEventListener('mousemove', function(event) {
        var rect = canva.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        var isOverSquare = false;
        squares.forEach(square => {
            if (x >= square.x && x <= square.x + square.width &&
                y >= square.y && y <= square.y + square.height) {
                canva.style.cursor = 'pointer';
                isOverSquare = true;

            }
        });
        if (!isOverSquare) {
            canva.style.cursor = 'default';
        }
    });

    canva.addEventListener('click', function(event) {
        var rect = canva.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        squares.forEach(square => {
            if (x >= square.x && x <= square.x + square.width &&
                y >= square.y && y <= square.y + square.height) {
                window.location.href = square.url;
            }
            
        })

    })

    draw();


    let options = document.querySelectorAll('.draggable');
    let tds = document.querySelectorAll('.td');

    let check = {
    phrase1: "Historia",
    phrase2: "Economía",
    phrase3: "Cultura",
    phrase4: "Tecnológicos",
    phrase5: "Desafíos y Oportunidades",
    };

    options.forEach(o => {
        o.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('answer', e.target.id);
        });
    });

    tds.forEach(td => {
        td.addEventListener('dragover', (e) => {
            e.preventDefault();
            td.classList.add('drag-over');
        });

        td.addEventListener('dragleave', () => {
            td.classList.remove('drag-over');
        });

        td.addEventListener('drop', (e) => {
            e.preventDefault();
            td.classList.remove('drag-over');
            let id = e.dataTransfer.getData('answer');
            let dragAnswer = document.getElementById(id);

            if (!td.hasChildNodes()) {
                td.appendChild(dragAnswer);

                let table = td.closest('table');
                let ths = table.querySelectorAll('th');
                let spot = ths[td.cellIndex].innerText;

                if (check[id] === spot) {
                    td.style.backgroundColor = 'green';
                } else {
                    td.style.backgroundColor = 'red';
                    setTimeout(() => {
                        td.style.backgroundColor = "#d1e7dd";
                    }, 1000);
                } return 
            }
        });
    });
    
};
