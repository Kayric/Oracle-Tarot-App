import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { Moon, Eye, Sun, ArrowLeft } from 'lucide-react';

const ReadingResult = () => {
  const location = useLocation();
  const { cards } = location.state || {};

  // If no cards were passed (e.g. user went directly to url), redirect back
  if (!cards) return <Navigate to="/reading" />;

  return (
    <div className="min-h-screen py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8">
            <Link to="/reading" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Draw Again
            </Link>
            <h1 className="text-4xl font-serif font-bold text-slate-900">Your Reading</h1>
            <p className="text-slate-500 mt-2">The cards have revealed their wisdom for you.</p>
        </div>

        <div className="space-y-12">
          {cards.map((card, idx) => (
            <div key={card.id} className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
              
              {/* Card Visual / Image */}
              <div className="flex-shrink-0 w-full md:w-64 flex flex-col items-center">
                 <div className="w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg bg-slate-900 relative flex items-center justify-center">
                    {card.image ? (
                        <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="text-white opacity-50 flex flex-col items-center">
                            {idx===0 ? <Moon size={40} /> : idx===1 ? <Eye size={40} /> : <Sun size={40} />}
                            <span className="mt-2 text-xs uppercase tracking-widest">Card Image</span>
                        </div>
                    )}
                 </div>
                 <div className="mt-4 text-xs font-bold text-yellow-600 uppercase tracking-widest">{card.position}</div>
              </div>

              {/* Card Meaning */}
              <div className="flex-grow">
                 <h2 className="text-3xl font-serif font-bold text-slate-800 mb-2">{card.name}</h2>
                 <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
                    {card.type}
                 </span>

                 <div className="space-y-6">
                    <div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Core Meaning</h3>
                        <p className="text-lg font-medium text-slate-900 italic">"{card.meaning || 'Mystery...'}"</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Interpretation</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {card.description || "The ancient scrolls contain no further details for this card. Trust your intuition to fill in the silence."}
                        </p>
                    </div>
                 </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ReadingResult;