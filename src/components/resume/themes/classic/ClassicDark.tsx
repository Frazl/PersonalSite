import React from 'react';
import ClassicResumeTheme from './Classic';
import { ResumeThemeProps, ThemeStyling } from '../../ThemeSelector';

function ClassicDarkTheme(props: ResumeThemeProps) {
    const darkModeStyles: ThemeStyling = {
        container: {
            color: '#C091FC', backgroundColor: '#212121',
            border: '1px solid white', boxShadow: '0px 2px 38px rgba(255, 255, 255, 0.2)'
        },
        links: {
            color: '#03DAC6',
        },
        dividers: {
            borderTop: '2px solid #3700B3',
            borderBottom: 0,
            borderLeft: 0,
            borderRight: 0,
        }
    }
    return (
        <ClassicResumeTheme styles={darkModeStyles} resume={props.resume} setActiveStyles={props.setActiveStyles} />
    )
    
}


export default ClassicDarkTheme;
