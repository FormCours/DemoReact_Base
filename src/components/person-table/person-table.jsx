import clsx from 'clsx';
import PropTypes from 'prop-types';
import style from './person-table.module.css';

const PersonTableHead = () => (
    <thead>
        <tr className={style.head}>
            <th>Prenom</th>
            <th>Nom</th>
            <th>Age</th>
        </tr>
    </thead>
);

const PersonTableRow = ({ id, firstname, lastname, age, gender }) => {

    const rowColor = gender === 'f' ? style['woman'] :
        (gender === 'h' ? style['man'] : style['neutral']);

    // const rowColor = clsx(
    //     gender === 'f' && style['woman'],
    //     gender === 'h' && style['man'],
    //     gender !== 'f' && gender !== 'm' && style['neutral']
    // );

    return (
        <tr className={rowColor}>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{age}</td>
        </tr>
    );
};

const PersonTable = ({ people }) => {

    return (
        <table className={style['person-table']}>
            <PersonTableHead />
            <tbody >
                {people.map(person => <PersonTableRow {...person} key={person.id} />)}
            </tbody>
        </table>
    );
};

PersonTable.defaultProps = {
    people: []
};

PersonTable.propTypes = {
    people: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        gender: PropTypes.string,
    }))
};

export default PersonTable;