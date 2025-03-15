import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    return(
        <button onClick={() => setIsActive(!isActive)}>
            {isActive ? (<><FaCheckCircle/>Activo</>) 
            : 
            (<><FaTimesCircle/>Inactivo</>)}
        </button>
    )
}

export default ToggleButton;
