import store from "../stores/RobotStore";
import {useState} from 'react';

function RobotForm () {
    const [roboName, setRoboName] = useState('');
    const [roboType, setroboType] = useState('');
    const [roboMass, setroboMass] = useState('');
    
    const handleChangeName = event => {
        setRoboName(event.target.value);
    }

    const handleChangeType = event => {
        setroboType(event.target.value);
    }

    const handleChangeMass = event => {
        setroboMass(event.target.value);
    }

    function adaugareComponenta() {
        const robotNou = {
            id : 0,
			type : roboType,
			name : roboName,
			mass : parseInt(roboMass)
		};
        console.log(robotNou);
        store.addRobot(robotNou);
        console.log(store.getRobots());
        setRoboName("");
        setroboType("");
        setroboMass("");
    }

    return (
      <div>
        <p>Robot form</p>
        <label>Name</label>
        <input type="text" aria-label="name" id="name" name="name" onChange={handleChangeName} value={roboName}/>

        <label>Type</label>
        <input type="text" aria-label="type" id="type" name="type" onChange={handleChangeType} value={roboType}/>
            
        <label>Mass</label>
        <input type="text" aria-label="mass" id="mass" name="mass" onChange={handleChangeMass} value={roboMass}/>
            
        <button id="add" onClick={adaugareComponenta}>add</button>
        
      </div>
    )
  }
  
  export default RobotForm
  