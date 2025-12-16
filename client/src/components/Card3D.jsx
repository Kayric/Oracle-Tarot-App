import React from 'react';
import { Sparkles } from 'lucide-react';

const Card3D = ({ rotate, translateX, translateZ, delay, isCenter, title, subtitle, icon }) => {
  return (
    <div 
      className="absolute transition-all duration-1000 ease-out hover:z-50"
      style={{ 
        transform: `perspective(1000px) rotateY(${rotate}) translateX(${translateX}) translateZ(${translateZ})`
      }}
    >
      <div 
        className={`relative w-[240px] h-[360px] rounded-xl`}
        style={{ 
          animation: `float 6s ease-in-out infinite ${delay}`,
          // A clean, solid gradient card back
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', 
          boxShadow: isCenter ? '0 20px 50px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-between p-6">
          {/* Subtle gold accent ring */}
          <div className="absolute inset-2 border border-yellow-500/20 rounded-lg"></div>
          
          <div className="z-10 relative opacity-50"><Sparkles className="w-5 h-5 text-yellow-500" /></div>
          
          {/* Icon Area */}
          <div className="z-10 relative p-4 bg-white/5 rounded-full backdrop-blur-sm">
            {icon}
          </div>

          <div className="z-10 text-center">
            <h3 className="text-xl font-serif font-bold text-yellow-50 tracking-wide mb-1">{title}</h3>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3D;

