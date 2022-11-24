import logo from './epicura.png';
import style from './main-header.module.css';
import clsx from 'clsx';

const MainHeader = () => {
    // Code JS =)

    const isDark = (new Date()).getHours() > 13;

    return (
        // <header className={`${style.banner} ${isDark ? style['banner-dark'] : ''}`}>
        <header className={clsx(style.banner, isDark && style['banner-dark'])}>
            <img className={style['logo-epicura']} src={logo} alt="Epicura" />
            <span className={style.title} >Demo 01 - Introduction</span>
        </header>
    );
};

const MainHeader2 = () => (
    <header>
        <img src={logo} alt="Epicura" />
        Demo 01 - Introduction
    </header>
);

export default MainHeader;