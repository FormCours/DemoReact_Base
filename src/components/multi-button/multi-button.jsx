import { useState } from 'react';

const MultiButton = () => {
    const [nb, setNb] = useState(1);

    const handleMulti = (multi) => {
        setNb(nb => nb * multi);

        // setNb(nb => {
        //     const resultat = nb * multi;
        //     return resultat;
        // })
    };

    const handleReset = () => {
        setNb(1);
    };

    return (
        <>
            <p>La valeur : {nb}</p>
            <button onClick={function() { handleMulti(2) }} >X 2</button>
            <button onClick={() => handleMulti(3)} >X 3</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default MultiButton;