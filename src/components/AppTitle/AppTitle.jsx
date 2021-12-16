import s from './AppTitle.module.css';

const AppTitle = ({ text}) => {
    return <h2 className={ s.title}>{ text}</h2>;
};

export default AppTitle;