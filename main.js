setInterval(function () {
    if (document.getElementById('p1').style.color === 'red') {
        document.getElementById('p1').style.color = 'black';
    } else {
        document.getElementById('p1').style.color = 'red';
    }

    if (document.getElementById('p2').style.color === 'black') {
        document.getElementById('p2').style.color = 'red';
    } else {
        document.getElementById('p2').style.color = 'black';
    }
}, 1000);
