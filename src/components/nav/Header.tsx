import React from 'react';

const headerStyle = {
    fontFamily: 'Amatic SC, sans-serif',
    minHeight: '2em',
    width: '100%',
    display: 'flex',
    paddingTop: '1em',
    paddingBottom: '1.5em',
    justifyContent: 'space-around',
}

const menuItemStyle: React.CSSProperties = {
  marginTop: '.5em',
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
      <div style={headerStyle} className="header smartDirection">
        <a href="#resume" onClick={() => props.setActiveApp('resume')} style={menuItemStyle}>Resume & Generator</a>
        <a href="#resume" onClick={() => props.setActiveApp('resume')} style={menuItemStyle}>Home</a>
        <a href="#rankedTable" onClick={() => props.setActiveApp('rankedTable')} style={menuItemStyle}>Animated Ranked Table</a>
      </div>
    </div>
  );
}

export default Header;
