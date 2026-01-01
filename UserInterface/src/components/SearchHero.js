import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

const SearchHero = ({ topic, setTopic, startBriefing }) => {
  return (
    <div className="hero-section">
      <h1>Global News <span className="highlight">Agent</span></h1>
      <p className="subtitle">Autonomous AI Investigative Journalist</p>
      
      <div className="search-bar-container">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          placeholder="What topic should I investigate today?" 
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && startBriefing()}
        />
        <button onClick={startBriefing} className="start-btn">
          <ArrowRight size={20} />
        </button>
      </div>
      
      <div className="suggestions">
        <span>Try:</span>
        <button onClick={() => setTopic("NVIDIA Stock 2025 Prediction")}>NVIDIA Stock</button>
        <button onClick={() => setTopic("SpaceX Starship Launch Updates")}>SpaceX Starship</button>
        <button onClick={() => setTopic("Quantum Computing Breakthroughs")}>Quantum Computing</button>
      </div>
    </div>
  );
};

export default SearchHero;