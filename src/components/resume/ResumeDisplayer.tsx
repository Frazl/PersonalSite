import React from 'react';
import { Resume } from './types';
import ThemeSelector, { ThemeOptions, ThemeStyling } from './ThemeSelector';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ResumeDisplayerProps {
    resume: Resume
}

function printDocument() {
    const input = document.getElementById('resume') as HTMLElement;
    html2canvas(input)
      .then((canvas) => {
        let imgWidth = 208;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('img/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 1, 1, imgWidth, imgHeight);
        pdf.save("download.pdf");
      })
    ;
  }

function ResumeDisplayer(props: ResumeDisplayerProps) {
    const [selectedTheme, selectTheme]: [ThemeOptions, Function] = React.useState('classic')
    const [themeStyles, setThemeStyles]: [ThemeStyling | undefined, Function] = React.useState({})
    
    const Theme = ThemeSelector(selectedTheme as ThemeOptions)
    
  return (
    <div>
      <input></input>
        <div style={{padding: '1em', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {'Select a Theme'}
                <select onChange={(e) => selectTheme(e.target.value)}>
                    <option value='classic'>Classic</option>
                    <option value='classicDark'>Classic Dark</option>
                </select>
                <button style={{marginTop: '.66em', backgroundColor: 'transparent', border: '1px solid #6F6F6F', borderRadius: '4px', outline: 'none', color: 'rgb(245, 245, 245)', cursor: 'pointer'}} onClick={printDocument}>Download Resume as PDF</button>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: themeStyles?.container?.backgroundColor, color: themeStyles?.container?.backgroundColor}}>
            <Theme resume={props.resume} setActiveStyles={setThemeStyles} />
        </div>
    </div>
  );
}


export default ResumeDisplayer;
