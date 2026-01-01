import './App.css';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import SearchHero from './components/SearchHero';
import TerminalView from './components/TerminalView';
import ReportDashboard from './components/ReportDashboard';
import { useAgentStream } from './hooks/useAgentStream';

function App() {
  const [topic, setTopic] = useState("");
  const logsEndRef = useRef(null);

  // get reference form the custom hooks.
  const {
    status,
      logs,
      report,
      sources,
      startStream,
      resetStream
  } = useAgentStream();

  // auto scroll 
  useEffect(() => {
    if(status === 'processing' && logsEndRef.current){
      logsEndRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, [logs, status]);

  // Handler wrapper
  const handleStart = () => {
    startStream(topic);
  };

  const handleReset = () => {
    setTopic("");
    resetStream();
  };

  return (
    <div className="app-container">
      {status === 'idle' && (
        <SearchHero 
          topic={topic} 
          setTopic={setTopic} 
          startBriefing={handleStart} 
        />
      )}

      {status === 'processing' && (
        <TerminalView 
          topic={topic} 
          logs={logs} 
          logsEndRef={logsEndRef} 
        />
      )}

      {status === 'finished' && (
        <ReportDashboard 
          report={report} 
          sources={sources} 
          resetSearch={handleReset} 
        />
      )}
    </div>
  );
}

export default App;
