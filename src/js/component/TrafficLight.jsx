import React, {useState} from "react";
const TrafficLight = () =>{
const [color, setColor] = useState ("red")
const lights = ["red", "yellow" , "green"]
return (
<div className="d-flex flex column align-items-center">
    <div className="traffic-light bg-dark p-3 rounded">
    {lights.map((ligthColor) =>(
          <div
              key={ligthColor}
              onClick={() => setColor(ligthColor)}
              className={`ligth ${ligthColor} ${color === ligthColor ? "glow" : ""}`}
          />
    )
        )}
    </div>
</div>
)
}
export default TrafficLight