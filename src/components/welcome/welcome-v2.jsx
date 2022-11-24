import PropTypes from 'prop-types';

const Welcome = ({ firstname, lastname }) => {
    return (
        <p>Bienvenue {firstname} {lastname}</p>
    );
};

Welcome.defaultProps = {
    firstname: 'Jo'
};

Welcome.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string.isRequired
};

export default Welcome;