window.addEventListener('load', function () {
    const canvas = document.getElementById('snow');
    const ctx = canvas.getContext('2d');
    const particles = [];
    let opacity = 1; // Valor inicial de la opacidad

    class Particle {
        constructor(x, y, size, speedY, opacity) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedY = speedY;
            this.opacity = opacity;
        }

        update() {
            this.y += this.speedY;
            if (this.y > canvas.height) {
                this.y = -10;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();
        }
    }

    function createParticles() {
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 5 + 1;
            const speedY = 0.2;
            const opacity = 0.1; // Cambiar este valor
            particles.push(new Particle(x, y, size, speedY, opacity));
        }
    }

    function updateParticles() {
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].draw();
        }
    }

    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    createParticles();
    animate();

});