import React from 'react';

const headerStyle = {
    fontFamily: 'Amatic SC, sans-serif',
    minHeight: '2em',
    width: '100%',
    display: 'flex',
    marginTop: '1em',
    marginBottom: '1.5em',
    justifyContent: 'space-around',
}

const refStyle: React.CSSProperties = {
  fontSize: '1.4em',
  display: 'flex',
  justifyContent: 'space-around'
}

interface HeaderProps {
  setActiveApp: Function
}

function Header(props: HeaderProps) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <img src="./SeanFradlLogoWhite.png" alt="Sean Fradl Logo" style={{margin: 'auto'}} />
      <div style={headerStyle} className="header">
        <a href="#resume" onClick={() => props.setActiveApp('resume')} style={refStyle}>Resume & Generator</a>
        <a href="#resume" onClick={() => props.setActiveApp('resume')} style={refStyle}>Home</a>
        <a href="#rankedTable" onClick={() => props.setActiveApp('rankedTable')} style={refStyle}>Animated Ranked Table</a>
      </div>
    </div>
  );
}

export default Header;
