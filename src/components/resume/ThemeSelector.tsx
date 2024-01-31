import ClassicResumeTheme from './themes/classic/Classic';
import ClassicDarkTheme from './themes/classic/ClassicDark';
import { Resume } from './types';


export type ThemeOptions = 'classic' | 'classicDark'

export interface ResumeThemeProps {
    resume: Resume
    styles?: ThemeStyling
    setActiveStyles: Function
}

export interface ThemeStyling {
    container?: React.CSSProperties
    links?: React.CSSProperties
    sections?: React.CSSProperties
    headers?: React.CSSProperties
    dividers?: React.CSSProperties
}

const whiteThemeOverride: ThemeStyling = {
    container: {
        backgroundColor: 'white',
        color: 'black'
    }
}

function ThemeSelector(themeID: ThemeOptions) {
    switch(themeID) {
        case 'classic': return ClassicResumeTheme
        case 'classicDark': return ClassicDarkTheme
    }
}

export default ThemeSelector;
