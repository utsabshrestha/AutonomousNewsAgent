import React from 'react';
import { Cpu } from 'lucide-react';

const TerminalView = ({ topic, logs, logsEndRef }) => {
  return (
    <div className="processing-section">
      <div className="loader-icon">
        <Cpu className="spin-slow" size={48} />
      </div>
      <h2>Investigating: "{topic}"</h2>
      
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
          <span>agent_core.exe</span>
        </div>
        <div className="terminal-content">
          {logs.map((log, index) => (
            <div key={index} className="log-line">
              <span className="timestamp">[{new Date().toLocaleTimeString()}]</span>
              <span className="message">{log}</span>
            </div>
          ))}
          <div className="log-line blink">_</div>
          {/* The dummy div for auto-scrolling */}
          <div ref={logsEndRef} />
        </div>
      </div>
    </div>
  );
};

export default TerminalView;