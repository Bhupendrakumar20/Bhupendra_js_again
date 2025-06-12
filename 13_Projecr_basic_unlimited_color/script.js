const randomColor = function () {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    let intervalid;
    
    const startchangingColor = function () {
        intervalid = setInterval(changeByColor, 1000);
        
        function changeByColor() {
            const color = randomColor();
            document.body.style.backgroundColor = color;
    }
    };

    const stopChangingColor = function () {
        clearInterval(intervalid);
    };

document.getElementById('start').addEventListener('click', startchangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);

