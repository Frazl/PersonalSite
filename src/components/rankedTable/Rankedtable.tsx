import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Person, Week, Weeks } from './types';

interface PersonPosition extends Person {
    x: number
    y: number
}

const ROW_HEIGHT = 5
const STEP = 0.25;

function sortByScore(people: PersonPosition[]) {
    return people.sort((a, b) => b.score - a.score)
}

function scoresToPersonPosition(ps: Person[]) {
    return(ps.map((p) => {
        return {name: p.name, score: p.score, x: 0, y:0}
    }))
}

const defaultDataSource = "https://raw.githubusercontent.com/Frazl/PersonalSite/master/src/components/rankedTable/data.json"

function RankedTable() {
    const [dataSourceURL, setDataSourceURL] = React.useState(defaultDataSource)
    const [data, setData]: [Weeks, Function] = React.useState([])
    const [currentDay, setCurrentDay] = React.useState(0)
    const [currentScores, setCurrentScores]: [PersonPosition[], Function] = React.useState([])

    const [animationSpeed, setAnimationSpeed] = React.useState(10)
    // Render

    React.useEffect(() => {
        fetch(dataSourceURL).then((resp) => resp.json()).then((js) => {
            setCurrentDay(0)
            setCurrentScores(sortByScore(scoresToPersonPosition(js[0].scores)))
            setData(js as Weeks)
        })
    }, [dataSourceURL])
    
    React.useEffect(() => {
        const cleanup = setInterval(() => {
            // Close the gap between current position and target position 
            const newScores = [...currentScores]
            for(let i = 0; i < currentScores.length; i++) {
                let target_y = i * ROW_HEIGHT
                if (currentScores[i].y > target_y) {
                    // increase 
                    currentScores[i].y -= STEP
                } 
                if (currentScores[i].y < target_y) {
                    // decrease
                    currentScores[i].y += STEP
                }
                setCurrentScores(newScores)
            }
        }, animationSpeed)
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
        const nextDay = Math.min(data.length - 1, currentDay+1)
        setCurrentDay(nextDay)
        setScoresToCurrent(data[nextDay])
        setCurrentScores(sortByScore(currentScores))
    }

    const decrementDay = () => {
        const nextDay = Math.max(0, currentDay-1)
        setCurrentDay(nextDay)
        setScoresToCurrent(data[nextDay])
        setCurrentScores(sortByScore(currentScores))

    }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', color: '#7D7B89', paddingTop: '1em', marginBottom: '2em'}}>
        <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', paddingBottom: '1em'}}>
            <div style={{margin: 'auto'}}>This is an animated ranked table based on the changing of scores over a period of time that I built in 2 hours for a friend.</div>
            <div style={{margin: 'auto', marginTop: '1em'}}>
                <label style={{marginRight: '1em'}}>Data Source</label><input value={dataSourceURL} onChange={(e) => setDataSourceURL(e.target.value)} style={{maxWidth: '300px'}}></input>
                </div>
            <div style={{margin: 'auto', marginTop: '1em'}}>
                <label style={{marginRight: '1em'}}>Animation Step Delay</label><input type='number' value={animationSpeed} onChange={(e) => setAnimationSpeed(parseInt(e.target.value))} style={{maxWidth: '300px'}}></input>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{display: 'flex'}}>
                <button onClick={decrementDay} style={{border: 0, backgroundColor: 'transparent', cursor: 'pointer'}}><FontAwesomeIcon icon={faCircleArrowLeft} style={{fontSize: '2rem', color: '#EE5C6E'}} /></button>
                <div style={{fontSize: '2rem'}}>Swap Days</div>
                <button onClick={incrementDay} style={{border: 0, backgroundColor: 'transparent', cursor: 'pointer'}}><FontAwesomeIcon icon={faCircleArrowRight} style={{fontSize: '2rem', color: '#EE5C6E'}} /></button>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <table ref={startRef} style={{fontFamily: "'Open Sans', sans-serif"}}>
                <thead>
                    <tr>
                        <th style={{textAlign: 'center', width: '100vw', color: '#C2BFD5'}}>{data.length ? data[currentDay].daySubtitle : 'No Data'}</th>
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
    const [increasing, setIncreasing] = React.useState(0)

    React.useEffect(() => {
        const increasing = props.y > (props.position * ROW_HEIGHT) 
        const decreasing = props.y < (props.position * ROW_HEIGHT)
        if (increasing) {
            setIncreasing(1)
        } else if (decreasing) {
            setIncreasing(-1)
        } else {
            setTimeout(() => {
                setIncreasing(0)
            }, 1000)
        }
        
    }, [props.y, props.position])


    const getBackgroundColor = () => {
        if (increasing === 1) {
            return "hsla(121, 100%, 50%, 1)"
        }
        if (increasing === -1) {
            return "#FF0046"
        }
        if (props.position % 2 == 0) return "#313C4E"
        return "#495974"
    }

    return(
        <tr style={{maxWidth: '500px', margin: 'auto', transform: `translateY(${props.y + (props.position * 2)}px)`, padding: '.2em', borderEndEndRadius: '25px', backgroundColor: getBackgroundColor(), display: 'flex'}}>
            <td style={{marginLeft: '15px', minWidth: '20%'}}>{props.position + 1}</td>
            <td style={{marginLeft: '15px', minWidth: '40%', textAlign: 'center'}}>{props.name}</td>
            <td style={{marginLeft: '15px', minWidth: '10%'}}>{props.score}</td>
            <td style={{marginLeft: '20px'}}>
                {increasing === 1 ? <FontAwesomeIcon icon={faArrowUp} style={{color: '#20273A'}} /> : undefined}
                {increasing === -1 ? <FontAwesomeIcon icon={faArrowDown} style={{color: '#20273A'}} /> : undefined}
            </td>
        </tr>
    )
}

export default RankedTable;
