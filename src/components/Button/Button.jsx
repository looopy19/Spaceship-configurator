import s from './Button.module.css'
import classNames from 'classnames';



const colorButton = ({ color, price, colorName, onColorClick}) => (

        <button className={s.button} type="button" onClick={onColorClick}>

            <span className={s.color} style={{backgroundColor: color}}>
        </span>
        <p className={s.price}>+{price}&#8364;</p>
            <p className={s.colorName}>{colorName}</p>

            </button>
    );

export default colorButton;

