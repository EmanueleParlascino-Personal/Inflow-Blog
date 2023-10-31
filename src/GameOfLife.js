import './Gol.css';
import React, {useCallback, useState, useRef, useEffect} from "react"
import produce from 'immer'




    let numRows = Math.floor(window.innerHeight/19);
    let numCols = Math.floor(window.innerWidth/20);

    const operations = [
        [0,1],
        [0,-1],
        [1,-1],
        [-1,1],
        [1,1],
        [-1,-1],
        [1,0],
        [-1, 0],
    ]


   
    const generateEmptyGrid = () =>{
        const rows = [];
            for (let i = 0; i< numRows; i++) {
                rows.push(Array.from(Array(numCols),() => 0 ));
            }
        return rows;
    }

    const generateRandomGrid = () =>{
        const rows = [];
            for (let i = 0; i< numRows; i++) {
                rows.push(Array.from(Array(numCols),() =>  Math.random() > .6 ? 1 : 0 ));
            }
        return rows;
    }


function GameOfLife(){
    const [grid, setGrid] = useState(() => {
        return generateRandomGrid()
    });
    const [ run, setRun] = useState(true)

    const runningRef = useRef(run);
    runningRef.current = run;

    const runSimulation = useCallback(() => {
        if(!runningRef.current){
            return;
        }
        setGrid((g) => {
            return produce(g, gridCopy =>{
                for (let i=0; i< numRows; i++){
                    for (let k=0; k< numCols; k++){
                        let neighbors = 0;
                        operations.forEach(([x,y])=>{
                            const newI = (i + x + numRows) % numRows;
                            const newK = (k + y + numCols) % numCols;
                            if (newI >= 0 && newI < numRows && newK >= 0 &&newK < numCols){
                                neighbors += g[newI][newK]
                            }
                        })
                        if (neighbors < 2 || neighbors > 3 ){
                            gridCopy[i][k] = 0
                        }
                        else if (g[i][k] ===0 && neighbors ===3){
                            gridCopy[i][k] = 1;
                        }
                    }
                }
            })
        })
        
        setTimeout(runSimulation, 1000)
    }, [])
    

    useEffect(() => {
        runSimulation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div>
        <div className = "gol-container">
            <div style = {{display: 'grid', gridTemplateColumns: `repeat(${numCols}, 20px )`, position: 'absolute', zIndex: -1, backgroundColor: "#E3E0DD" }}>
            {grid.map((rows, i) => rows.map( (col, k) =>
                <div 
                    key={`${i}-${k}`} 
                    onClick= {()=>{
                        const newGrid = produce(grid, gridCopy => {
                            gridCopy[i][k] = grid[i][k] ? 0 : 1;
                        })
                        setGrid(newGrid)
                    }}
                    style = {{width: 20, height: 20, backgroundColor: grid[i][k] ? "#1a1a1a" : '#080401', transition: "all .3s ease",
                    WebkitTransition: "all .5s ease",
                    MozTransition: "all .5s ease"}} />))}
            </div>  
        </div>
        <div className = "buttons-container">
            <p className = "comands">Background Controls</p>
            <div className = "buttons">
                <button className = "button"
                        onClick = {() => {
                        setRun(!run);
                        if (!run){
                        runningRef.current = true; 
                        runSimulation()}}}>
                    {run ? '⏹' : '▶'}
                </button>
                <button className = "button"
                    onClick = {() => {
                    setGrid(generateEmptyGrid())
                }}>
                    ❌
                </button>
                <button className = "button"
                    onClick= {() => {
                    setGrid(generateRandomGrid())
                }}>
                    🔄
                </button>
            </div>
        </div>
    </div>    

    )
}

export default GameOfLife;