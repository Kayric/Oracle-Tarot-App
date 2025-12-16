import React, { useState } from 'react';
import { Sparkles, Moon, Eye, Sun, RotateCcw } from 'lucide-react';
import { deck } from '../data/deck'; 

const ReadingRoom = () => {
  const [shuffledDeck, setShuffledDeck] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [phase, setPhase] = useState('idle'); // idle, shuffling, picking, revealed

  const startReading = () => {
    setPhase('shuffling');
    setSelectedCards([]);
    setTimeout(() => {
      // Shuffle the imported deck
      setShuffledDeck([...deck].sort(() => 0.5 - Math.random()));
      setPhase('picking');
    }, 1000);
  };

  const pickCard = (card) => {
    if (selectedCards.length >= 3 || selectedCards.find(c => c.id === card.id)) return;
    const pos = ["Past", "Present", "Future"][selectedCards.length];
    const newCards = [...selectedCards, { ...card, position: pos }];
    setSelectedCards(newCards);
    if (newCards.length === 3) setTimeout(() => setPhase('revealed'), 500);
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-slate-50 flex flex-col items-center">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">The Reading Room</h2>
        <p className="text-slate-500 mb-12">
            {phase === 'idle' && "Clear your mind and begin."}
            {phase === 'picking' && `Select ${3 - selectedCards.length} more card(s)...`}
            {phase === 'revealed' && "Your path is revealed."}
        </p>

        {/* Action Area */}
        <div className="min-h-[400px] flex flex-col items-center justify-center">
            
            {/* Idle State */}
            {phase === 'idle' && (
                <button onClick={startReading} className="px-10 py-5 bg-slate-900 text-white rounded-xl shadow-xl hover:scale-105 transition-transform flex flex-col items-center gap-2">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                    <span className="font-bold tracking-widest">CONSULT DECK</span>
                </button>
            )}

            {/* Picking Grid */}
            {phase === 'picking' && (
                <div className="flex flex-wrap justify-center gap-1 max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
                    {shuffledDeck.map((card) => {
                        const isSelected = selectedCards.find(c => c.id === card.id);
                        return (
                            <div 
                                key={card.id} 
                                onClick={() => pickCard(card)}
                                className={`w-12 h-20 rounded bg-slate-800 border border-slate-700 cursor-pointer transition-all hover:-translate-y-2 ${isSelected ? 'opacity-0' : 'opacity-100'}`}
                            ></div>
                        );
                    })}
                </div>
            )}

            {/* Revealed Cards */}
            {phase === 'revealed' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in-up">
                    {selectedCards.map((card, idx) => (
                        <div key={card.id} className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center">
                            <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-4">{card.position}</span>
                            
                            {/* Check if image exists, otherwise show icon */}
                            {card.image ? (
                                <img 
                                    src={card.image} 
                                    alt={card.name} 
                                    className="w-32 h-48 object-cover rounded-lg mb-4 shadow-md"
                                />
                            ) : (
                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-800">
                                    {idx===0 ? <Moon /> : idx===1 ? <Eye /> : <Sun />}
                                </div>
                            )}

                            <h3 className="text-xl font-serif font-bold text-slate-900">{card.name}</h3>
                            <p className="text-sm text-slate-500 mt-2">{card.type}</p>
                        </div>
                    ))}
                </div>
            )}
            
            {phase === 'revealed' && (
                <button onClick={() => setPhase('idle')} className="mt-12 flex items-center gap-2 text-slate-500 hover:text-slate-900">
                    <RotateCcw className="w-4 h-4" /> Start Over
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ReadingRoom;