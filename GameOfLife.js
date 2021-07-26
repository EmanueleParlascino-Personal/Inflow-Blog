import './Gol.css';


function GameOfLife(){

    const rows = 40;
    const cols = 40;
    
    function createWorld() {
        let world = document.querySelector('#world');
        
        let tbl = document.createElement('table');
        tbl.setAttribute('id','worldgrid');for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
                let cell = document.createElement('td');
                    
                tr.appendChild(cell);
            }
            tbl.appendChild(tr);
        }
        world.appendChild(tbl);
    }
    window.onload=()=>{
        createWorld();
    }
    return(
        <div className = "world">
            
        </div>
    )
}

export default GameOfLife;