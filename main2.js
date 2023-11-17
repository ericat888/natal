document.addEventListener('DOMContentLoaded', function () {
    const countdownDate = new Date('December 25, 2023 00:00:00').getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = formatTime(days);
        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('minutes').innerText = formatTime(minutes);
        document.getElementById('seconds').innerText = formatTime(seconds);

        // Atualizar a barra de progresso
        const progresso = 100 - (distance / (24 * 60 * 60 * 1000) * 100);
        document.getElementById('progresso').style.width = progresso + '%';

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('timer').innerText = 'Feliz Natal!';
            // Certifique-se de que a barra de progresso atinge 100% quando o Natal chega
            document.getElementById('progresso').style.width = '100%';
        }
    }, 1000);

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }
});