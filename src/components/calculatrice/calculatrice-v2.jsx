import { useRef, useState } from 'react';

const operations = [
    { value: 'add', display: '+', action: (v1, v2) => v1 + v2 },
    { value: 'sub', display: '-', action: (v1, v2) => v1 - v2 },
    { value: 'multi', display: 'x', action: (v1, v2) => v1 * v2 },
    { value: 'div', display: '/', action: (v1, v2) => v1 / v2 },
];

const Calculatrice = () => {

    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState('');
    const [res, setRes] = useState('');
    
    const inputNb1 = useRef();

    const handleCalc = (event) => {
        event.preventDefault();

        const val1 = parseFloat(nb1);
        const val2 = parseFloat(nb2);
        setRes(calculate(val1, val2, op));

        inputNb1.current.focus();
    };

    const calculate = (val1, val2, operation) => {
        // if(!operations.map(o => o.value).includes(operation)) {
        if (!operations.find(o => o.value === operation)) {
            return 'Operation non supporté';
        }
        
        const operationSelected = operations.find(o => o.value === operation); 

        if (operationSelected.value === 'div' && val2 === 0) {
            return 'Division par zero (╬▔皿▔)╯';
        }

        return operationSelected.action(val1, val2);
    };

    return (
        <>
            <h3>Exo calculatrice</h3>
            <form onSubmit={handleCalc}>
                <div>
                    <label htmlFor="calc-nb1">Nb1 : </label>
                    <input type="text" id='calc-nb1' ref={inputNb1}
                        value={nb1} onChange={(e) => setNb1(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="calc-op">Op : </label>
                    <select id='calc-op' value={op} onChange={(e) => setOp(e.target.value)}>
                        <option value='' disabled>---</option>
                        {operations.map(
                            o => <option key={o.value} value={o.value}>{o.display}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label htmlFor="calc-nb2">Nb2 : </label>
                    <input type="text" id='calc-nb2'
                        value={nb2} onChange={(e) => setNb2(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Calculer</button>
                    <input type="text"
                        value={res} readOnly />
                </div>
            </form>
        </>
    );
};

export default Calculatrice;