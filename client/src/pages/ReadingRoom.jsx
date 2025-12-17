import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { deck } from '../data/deck'; 

const ReadingRoom = () => {
  const navigate = useNavigate();
  const [shuffledDeck, setShuffledDeck] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [phase, setPhase] = useState('idle'); 

  const startReading = () => {
    setPhase('shuffling');
    setSelectedCards([]);
    setTimeout(() => {
      setShuffledDeck([...deck].sort(() => 0.5 - Math.random()));
      setPhase('picking');
    }, 1000);
  };

  const pickCard = (card) => {
    if (selectedCards.length >= 3 || selectedCards.find(c => c.id === card.id)) return;
    
    const pos = ["Past", "Present", "Future"][selectedCards.length];
    const newCards = [...selectedCards, { ...card, position: pos }];
    setSelectedCards(newCards);

    // If 3 cards are picked, navigate to result page
    if (newCards.length === 3) {
      setTimeout(() => {
        navigate('/result', { state: { cards: newCards } });
      }, 800);
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-slate-50 flex flex-col items-center">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">The Reading Room</h2>
        <p className="text-slate-500 mb-12">
            {phase === 'idle' && "Clear your mind and begin."}
            {phase === 'picking' && `Select ${3 - selectedCards.length} more card(s) from the deck below...`}
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
        </div>
      </div>
    </div>
  );
};

export default ReadingRoom;