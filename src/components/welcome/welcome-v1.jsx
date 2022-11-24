
const Welcome = (props) => {
    const firstname = props.firstname;
    const lastname = props.lastname;

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