document.addEventListener('DOMContentLoaded', function() {
    // strict mode
    'use strict';

    // Create canvas and context
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Style the canvas to be a background
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none'; // Allow clicks to pass through
    canvas.style.backgroundColor = '#0b0c10'; // Set background on canvas itself
    
    // We need the body to be transparent for the canvas to show through if it's behind.
    // However, we can also just rely on the canvas providing the color.
    
    document.body.appendChild(canvas);

    let particles = [];
    const particleCount = 100; // Adjust for density
    const connectionDistance = 150;
    const speed = 0.5;

    // Resize handling
    let width, height;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    
    window.addEventListener('resize', resize);
    resize();

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * speed;
            this.vy = (Math.random() - 0.5) * speed;
            this.size = Math.random() * 2 + 1;
            this.color = '#66fcf1'; // Cyan-ish tech color
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Draw connections first
        ctx.strokeStyle = '#45a29e'; // Darker cyan for lines
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    // Fade out line based on distance
                    const opacity = 1 - (dist / connectionDistance);
                    ctx.globalAlpha = opacity;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }

        // Update and draw particles
        for (const p of particles) {
            p.update();
            p.draw();
        }

        requestAnimationFrame(animate);
    }

    animate();
});
