import { useRef, useState } from 'react';

const Calculatrice = () => {

    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState('multi');
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
        let result;

        switch (operation) {
            case 'add':
                result = val1 + val2;
                break;
            case 'sub':
                result = val1 - val2;
                break;
            case 'multi':
                result = val1 * val2;
                break;
            case 'div':
                if (val2 === 0) {
                    result = 'Division par zero (╬▔皿▔)╯';
                }
                else {
                    result = val1 / val2;
                }
                break;
            default:
                result = 'Operation non supporté';
                break;
        }

        return result;
    }

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
                        <option value="add">+</option>
                        <option value="sub">-</option>
                        <option value="multi">x</option>
                        <option value="div">/</option>
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