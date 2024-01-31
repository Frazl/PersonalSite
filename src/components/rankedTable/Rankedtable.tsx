import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Person, Sample_Scores_Over_Weeks, Week } from './types';

interface PersonPosition extends Person {
    x: number
    y: number
}

const ROW_HEIGHT = 20
const STEP = 1;

function sortByScore(people: PersonPosition[]) {
    return people.sort((a, b) => b.score - a.score)
}

function scoresToPersonPosition(week: Week) {
    return week.scores.map((day) => {
        return({name: day.name, score: day.score, x: 0, y:0})
    })
}

const weeklyScores = Sample_Scores_Over_Weeks

function RankedTable() {
    const [currentDay, setCurrentDay] = React.useState(0)
    const [currentScores, setCurrentScores] = React.useState(scoresToPersonPosition(weeklyScores[0]))
    // Render
    
    React.useEffect(() => {
        const cleanup = setInterval(() => {
            // Close the gap between current position and target position 
            const newScores = [...currentScores]
            for(let i = 0; i < currentScores.length; i++) {
                let target_x = i * ROW_HEIGHT
                if (currentScores[i].x > target_x) {
                    // increase 
                    currentScores[i].x -= STEP
                } 
                if (currentScores[i].x < target_x) {
                    // decrease
                    currentScores[i].x += STEP
                }
                setCurrentScores(newScores)
            }
        }, 15)
        return () => clearInterval(cleanup)
    }, [currentScores])
    

    const startRef = React.useRef(null)

    const setScoresToCurrent = (week: Week) => {
        for (let i=0; i < week.scores.length; i++) {
            const weekPerson = week.scores[i]
            let person = currentScores.find((p) => {
                return p.name == weekPerson.name
            })
            if (person) {
                person.score = weekPerson.score
            }
        }
        
    }

    const incrementDay = () => {
        const nextDay = Math.min(weeklyScores.length - 1, currentDay+1)
        setCurrentDay(nextDay)
        setScoresToCurrent(weeklyScores[nextDay])
        setCurrentScores(sortByScore(currentScores))
    }

    const decrementDay = () => {
        const nextDay = Math.max(0, currentDay-1)
        setCurrentDay(nextDay)
        setScoresToCurrent(weeklyScores[nextDay])
        setCurrentScores(sortByScore(currentScores))

    }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', color: '#7D7B89', paddingTop: '1em'}}>
        <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', paddingBottom: '1em'}}>
            <div style={{margin: 'auto'}}>This is an animated ranked table based on the changing of scores over a period of time built for a friend</div>
            <div style={{margin: 'auto', marginTop: '1em'}}>
                <label style={{marginRight: '1em'}}>Data Source</label><input style={{maxWidth: '300px'}}></input>
                </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{display: 'flex'}}>
                
                <button onClick={decrementDay} style={{border: 0, backgroundColor: 'transparent', cursor: 'pointer'}}><FontAwesomeIcon icon={faCircleArrowLeft} style={{fontSize: '20px', color: '#EE5C6E'}} /></button>
                <div>Swap Days</div>
                <button onClick={incrementDay} style={{border: 0, backgroundColor: 'transparent', cursor: 'pointer'}}><FontAwesomeIcon icon={faCircleArrowRight} style={{fontSize: '20px', color: '#EE5C6E'}} /></button>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <table ref={startRef} style={{fontFamily: "'Open Sans', sans-serif"}}>
                <thead>
                    <tr>
                        <th style={{textAlign: 'center', width: '100vw', color: '#C2BFD5'}}>Activity Table For Marge</th>
                    </tr>
                </thead>
                <tbody>
                {currentScores.map((person, i) => 
                    <Row key={person.name} position={i} name={person.name} score={person.score} x={person.x} heightOffset={startRef.current ? (startRef.current as any).offsetTop + (ROW_HEIGHT * 2) : 0} y={person.y} height={ROW_HEIGHT} />)
                }
                </tbody>
            </table>
        </div>
    </div>
  );
}

interface RowProps {
    x: number,
    y: number,
    height: number 
    name: string
    score: number
    position: number
    heightOffset: number
}

function Row(props: RowProps) {
    const increasing = props.x > (props.position * ROW_HEIGHT) 
    const decreasing = props.x < (props.position * ROW_HEIGHT)
    
    const getBackgroundColor = () => {
        if (increasing) {
            return "hsla(121, 100%, 50%, 1)"
        }
        if (decreasing) {
            return "#FF0046"
        }
        if (props.position % 2 == 0) return "#313C4E"
        return "#495974"
    }

    return(
        <tr style={{position: 'absolute', top: props.x + props.heightOffset + (props.position * 10), paddingBottom: '5px', left: '33vw', height: props.height, minWidth: '33vw', borderEndEndRadius: '25px', backgroundColor: getBackgroundColor(), display: 'flex'}}>
            <td style={{marginLeft: '15px'}}>{props.position + 1}</td>
            <td style={{marginLeft: '15px', minWidth: '200px', textAlign: 'center'}}>{props.name}</td>
            <td style={{marginLeft: '15px', minWidth: '40px'}}>{props.score}</td>
            <td style={{marginLeft: '20px'}}>
                {increasing ? <FontAwesomeIcon icon={faArrowUp} style={{color: '#20273A'}} /> : undefined}
                {decreasing ? <FontAwesomeIcon icon={faArrowDown} style={{color: '#20273A'}} /> : undefined}
            </td>
        </tr>
    )
}

export default RankedTable;
