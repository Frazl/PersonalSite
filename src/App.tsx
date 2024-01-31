import React from 'react';
import Header from './components/nav/Header';
import ResumeDisplayer from './components/resume/ResumeDisplayer';
import myResume from './components/resume/myResume';
import Sine from './components/misc/Sine';
import RankedTable from './components/rankedTable/Rankedtable';

function App() {
  const [activeApp, setActiveApp] = React.useState("resume")
  React.useEffect(() => {
    setActiveApp(window.location.hash.replace('#', ''))
  }, [])
  return (
    <div>
      <Sine />
      <Header setActiveApp={setActiveApp} />
      <Sine />
      {activeApp === 'resume' ? <ResumeDisplayer resume={myResume} /> : <RankedTable />}
    </div>
  );
}

export default App;
