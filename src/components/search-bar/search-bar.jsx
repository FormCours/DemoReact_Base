import PropTypes from 'prop-types';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import style from './search-bar.module.css';

const schema = yup.object({
    query: yup.string().trim().required(),
}).required();

const SearchBar = ({ label, placeholder, onSearch }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            query: ''
        },
        resolver: yupResolver(schema)
    });
    const formId = useId();

    const handleQuerySubmit = (data) => {
        console.log('test');
        onSearch(data.query);
    };

    return (
        <form role='search' onSubmit={handleSubmit(handleQuerySubmit)}>
            <label htmlFor={formId + 'search'} className={style.label}>
                {label}
            </label>
            <input id={formId + 'search'} {...register('query')} 
                placeholder={placeholder} />
            <button type='submit'>Recherche</button>
        </form>
    );
};

SearchBar.defaultProps = {
    placeholder: '',
    label: 'Recherche',
    onSearch: () => { }  // NOOP
};

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onSearch: PropTypes.func
};

export default SearchBar;