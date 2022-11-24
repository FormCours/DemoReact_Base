import { useEffect, useState } from 'react';

const displayTwoInteger = (nb) => nb.toLocaleString('fr-be', {
    minimumIntegerDigits: 2
});

const Horloge = () => {

    const [now, setNow] = useState(new Date());

    const hours = displayTwoInteger(now.getHours())
    const minutes = displayTwoInteger(now.getMinutes())
    const secondes = displayTwoInteger(now.getSeconds())

    useEffect(() => {
        console.log(`Effet ! ${secondes}`);
        const timerId = setTimeout(() => {
            setNow(new Date());
            console.log(`Tick ! ${secondes}`);
        }, 5000);

        return () => {
            console.log(`Cleanup ! ${secondes}`);
            clearTimeout(timerId);
        }
    })

    return (
        <p>{hours} : {minutes} : {secondes}</p>
    );
};

export default Horloge;