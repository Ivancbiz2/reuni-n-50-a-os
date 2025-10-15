document.addEventListener('DOMContentLoaded', function () {
    // Cuenta regresiva para el 16 de octubre de 2025
    function startCountdown(targetDate) {
        const countdownElement = document.getElementById('countdown');
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdownElement.textContent = "¡La fecha ha llegado!";
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }

    // Fecha objetivo: 16 de octubre de 2025, 00:00:00
    const targetDate = new Date(2025, 9, 16, 0, 0, 0).getTime(); // Mes 9 = Octubre
    startCountdown(targetDate);

    // Contador de visitas (localStorage)
    function updateVisitCounter() {
        let visits = localStorage.getItem('visits');
        visits = visits ? parseInt(visits) + 1 : 1;
        localStorage.setItem('visits', visits);
        document.getElementById('visitCounter').textContent = visits;
    }
    updateVisitCounter();
});