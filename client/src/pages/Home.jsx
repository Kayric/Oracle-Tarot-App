import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Eye, ArrowRight } from 'lucide-react';
import Card3D from '../components/Card3D';

const Home = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center bg-slate-50">
        
        {/* Simple Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-yellow-100 rounded-full blur-[100px] opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-10">
          
          <div className="inline-block mb-4">
            <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-slate-200">
              Oracle Deck v2.0
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
            Reveal the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-600">Unseen</span>
          </h1>

          <p className="max-w-xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            A minimalist approach to ancient wisdom. Consult the 90-card deck to illuminate your path forward.
          </p>

          <div className="flex justify-center gap-4 mb-20">
            <Link to="/reading" className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center gap-2">
              Start Reading <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-medium rounded-lg hover:bg-slate-50 transition-all">
              Learn More
            </Link>
          </div>

          {/* 3D Cards */}
          <div className="relative h-[400px] w-full max-w-4xl mx-auto perspective-1000 flex justify-center items-center">
             <Card3D rotate="-15deg" translateX="-250px" translateZ="-50px" delay="0s" title="PAST" subtitle="Reflection" icon={<Moon className="w-12 h-12 text-yellow-100" />} />
             <Card3D rotate="15deg" translateX="250px" translateZ="-50px" delay="0.5s" title="FUTURE" subtitle="Vision" icon={<Sun className="w-12 h-12 text-yellow-100" />} />
             <Card3D rotate="0deg" translateX="0px" translateZ="50px" scale={1.1} delay="1s" isCenter={true} title="PRESENT" subtitle="Awareness" icon={<Eye className="w-16 h-16 text-yellow-400" />} />
          </div>
        </div>
      </section>
  );
};

export default Home;