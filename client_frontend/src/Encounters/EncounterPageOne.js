import React from "react";
import { useEffect, useState } from "react";

const EncounterPageOne = () => {

    const [firstEncounter, setFirstEncounter] = useState({})


    useEffect(() => {
        fetch("/api/encounter/1")
        .then((resp) => resp.json())
        .then(encounter => setFirstEncounter(encounter))
    })

    return (
        <div id="encounter-one">
            {firstEncounter.map(() => {
                return (
                    
                )
            })}
        </div>
    )

}

export default EncounterPageOne;