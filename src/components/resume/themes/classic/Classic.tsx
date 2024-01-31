import React from 'react';
import { Education, Position, Project, ResumeLink, WorkExperience } from './../../types';
import { ResumeThemeProps } from '../../ThemeSelector';

const simpleFlexRow = {display: 'flex', width: '100%', justifyContent: 'space-between'}

const headerStyle = {padding: 0, margin: 0, marginTop: '.5em'}

const getLinks = (items: ResumeLink[], styles: any) => items.map((item) => <a href={item.href} style={{color: 'blue', ...styles}}>{item.name}</a>)

const handlePoints = (points: string[], forcePoints=false) => {
    if (points.length < 2 && !forcePoints) {
        return <p>{points[0]}</p>
    }
    return(
        <ul style={{paddingLeft: 24, marginTop: 0, marginBottom: 0}}>
            {points.map((point) => <li>{point}</li>)}
        </ul>
    )
}

function ClassicResumeTheme(props: ResumeThemeProps) {
    const {resume} = props
    const links = getLinks(resume.links, props.styles?.links)
    const headerStyleCombined = {...headerStyle, ...props.styles?.headers}
  return (
    <div id="resume" style={{color: 'black', backgroundColor: 'white', maxWidth: '595px', fontFamily: 'EB Garamond', fontSize: '12px', padding: '1em', margin: '1em', border: '1px solid black', boxShadow: '0px 2px 38px rgba(0, 0, 0, 0.2)', borderRadius: '1em', ...props.styles?.container}}>
      <div>
        <h1 style={{fontSize: '24px', textAlign: 'center', padding:0, margin:0}}>{resume.name}</h1>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {links.map((link, i) => {
            if (links[i+1]) {
                return(
                    <>
                    {link}
                    {' | '}
                    </>
                )
            }
            return(link)
        })}
        </div>
      </div>
      <hr style={props.styles?.dividers} />
      <h2 style={headerStyleCombined}>EXPERIENCE</h2>
      <hr style={props.styles?.dividers} />
      <div>{resume.experience.map((exp) => <SimpleExperienceDisplay experience={exp} />)}</div>
      <h2 style={headerStyleCombined}>PROJECTS</h2>
      <hr style={props.styles?.dividers} />
      <div>{resume.projects.map((project: Project) => <SimpleProjectDisplay project={project} linkStyles={props.styles?.links} />)}</div>
      <h2 style={headerStyleCombined}>EDUCATION</h2>
      <hr style={props.styles?.dividers} />
      <div>
        {resume.education.map((edu) => <SimpleEducationDisplay education={edu}/>)}
      </div>
      <h2 style={headerStyleCombined}>TECHNICAL SKILLS</h2>
      <hr style={props.styles?.dividers} />
      <div>
        <div><b>Languages: </b>{resume.languages.join(", ")}</div>
        <div><b>Frameworks: </b>{resume.frameworks.join(", ")}</div>
        <div><b>Technologies: </b>{resume.technology.join(", ")}</div>
        <div><b>Testing: </b>{resume.testing.join(", ")}</div>
      </div>
      <h2 style={headerStyleCombined}>INTERESTS</h2>
      <hr style={props.styles?.dividers} />
      <div>
        {resume.interests.join(", ")}
      </div>
    </div>
  );
}

function SimpleExperienceDisplay(props: {experience: WorkExperience}) {
    const {experience} = props
    let companyStart = experience.positions[0].start
    let companyEnd: string = experience.positions[experience.positions.length - 1].end !== undefined ? experience.positions[experience.positions.length - 1].end!.toLocaleString('default', { month: 'long', year: 'numeric' }) : 'Present'
    return(
        <div>
            <div style={simpleFlexRow}>
                <b>{experience.company}</b>
                <b>{companyStart.toLocaleString('default', { month: 'long', year: 'numeric' })} - {companyEnd}</b>
            </div>
            <div>
                {experience.positions.map((position) => <SimpleExperiencePositionDisplay position={position} />)}
            </div>

        </div>
    )
}

function SimpleExperiencePositionDisplay(props: {position: Position}) {
    const {position} = props
    const positionStart: string = position.start.toLocaleString('default', { month: 'long', year: 'numeric' })
    const positionEnd: string = position.end !== undefined ? position.end.toLocaleString('default', { month: 'long', year: 'numeric' }) : 'Present'
    return (
        <div>
            <div style={simpleFlexRow}>
                <i>{position.name} | {positionStart} - {positionEnd}</i>
                <i>{position.location}</i>
            </div>
            {handlePoints(position.points, true)}
        </div>
    )
}

function SimpleProjectDisplay(props: {project: Project, linkStyles?: React.CSSProperties}) {
    const {project} = props
    return(
        <div>
            {project.link ? <a style={{color: 'blue', ...props.linkStyles}} href={project.link}>{project.name}</a>: <b>{project.name}</b>}
            {handlePoints(project.points)}
        </div>
    )
}

function SimpleEducationDisplay(props: {education: Education}) {
    const {education} = props
    return(
        <div>
            <div style={simpleFlexRow}>
                <div><b>{education.name}</b></div>
                <div><b>{education.end ? <i>{education.end.toLocaleString('default', { month: 'long', year: 'numeric' })}</i> : undefined }</b></div>
                </div>
            <div style={simpleFlexRow}>
                <i>{education.title}</i>
                <i>{education.location}</i>
                </div>
            <div>
                {handlePoints(education.points)}
            </div>
        </div>
    )
}

export default ClassicResumeTheme;
