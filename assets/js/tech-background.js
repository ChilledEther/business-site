document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Canvas setup
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    canvas.style.backgroundColor = '#1d2228'; // Dark metallic/blue grey
    
    document.body.appendChild(canvas);

    let width, height;
    let hexagons = [];
    
    // K8s brand colors (approx) and complementary tech colors
    const colors = [
        '#326ce5', // K8s Blue
        '#ffffff', // White
        '#b7d0f9', // Light Blue
        '#568af2'  // Mid Blue
    ];

    const hexSize = 25; // Size of individual hexagons
    const spacing = 100; // General spacing between potential hex centers on the grid
    const connectionDist = 180;
    
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initHexagons();
    }
    
    window.addEventListener('resize', resize);

    class Hexagon {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            // Add some drift velocity
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.size = hexSize * (0.8 + Math.random() * 0.4);
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.opacity = Math.random() * 0.5 + 0.1;
            this.pulseDir = 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges (with buffer)
            if (this.x < -50 || this.x > width + 50) this.vx *= -1;
            if (this.y < -50 || this.y > height + 50) this.vy *= -1;
            
            // Pulse opacity
            this.opacity += 0.005 * this.pulseDir;
            if (this.opacity > 0.6 || this.opacity < 0.1) this.pulseDir *= -1;
        }

        draw() {
            ctx.beginPath();
            const angle = Math.PI / 3; // 60 degrees
            for (let i = 0; i < 6; i++) {
                const px = this.x + this.size * Math.cos(angle * i);
                const py = this.y + this.size * Math.sin(angle * i);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1.5;
            ctx.globalAlpha = this.opacity;
            ctx.stroke();
            
            // Randomly fill some
            if (Math.random() > 0.98) {
                 ctx.fillStyle = this.color;
                 ctx.globalAlpha = this.opacity * 0.3;
                 ctx.fill();
            }
            ctx.globalAlpha = 1;
        }
    }

    function initHexagons() {
        hexagons = [];
        const numHexagons = Math.floor((width * height) / 12000); // Density control
        
        for (let i = 0; i < numHexagons; i++) {
            hexagons.push(new Hexagon(Math.random() * width, Math.random() * height));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections (Service Mesh look)
        ctx.strokeStyle = '#326ce5';
        ctx.lineWidth = 0.5;

        for (let i = 0; i < hexagons.length; i++) {
            const h1 = hexagons[i];
            h1.update();
            h1.draw();

            for (let j = i + 1; j < hexagons.length; j++) {
                const h2 = hexagons[j];
                const dx = h1.x - h2.x;
                const dy = h1.y - h2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDist) {
                    ctx.beginPath();
                    ctx.moveTo(h1.x, h1.y);
                    ctx.lineTo(h2.x, h2.y);
                    const alpha = (1 - dist / connectionDist) * 0.3;
                    ctx.globalAlpha = alpha;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    resize();
    animate();
});
