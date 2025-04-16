import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to fullscreen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = 150;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        if (canvas) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        } else {
          this.x = 0;
          this.y = 0;
        }
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        // Colors matching your theme: purples, blues, pinks
        const colors = [
          'rgba(120, 119, 198, 0.7)', // purple
          'rgba(105, 90, 166, 0.7)',  // indigo
          'rgba(99, 102, 241, 0.6)',  // indigo lighter
          'rgba(168, 85, 247, 0.6)',  // purple
          'rgba(236, 72, 153, 0.5)',  // pink
          'rgba(34, 211, 238, 0.5)',  // cyan
        ];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (canvas) {
          if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
          }
          if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
          }
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Connect particles with lines
    const connect = () => {
      if (!ctx) return;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particlesArray[a].color;
            ctx.lineWidth = 0.2;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient background from original design */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0.3))]" />
      </div>
      
      {/* Particle animation canvas on top of the gradient */}
      <canvas 
        ref={canvasRef} 
        className={`fixed inset-0 bg-transparent z-10 ${className}`}
      />
    </div>
  );
};

export default ParticleBackground;
