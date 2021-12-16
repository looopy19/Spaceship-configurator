import s from "./OptionsList.module.css";
import { useEffect, useState } from "react";



function PowerOptionsList({ options, setConfig }) {

    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    useEffect(() => {
    const activeItemPrice = options[activeItem]["price"];

    setConfig((prevState) => ({
      ...prevState,
      power: activeItemPrice
    }));
  }, [activeItem, options, setConfig]);

    return (
        <ul className={s.optionList}>
       
            {options.map(({ power, price }, index) => (
                <li key={price}>
                    <button type='button'
                    className={activeItem === index ? 'powerButton is-active' : 'powerButton'}
                        onClick={() => onSelectItem(index)}>
                        <p className={s.power}>{power}</p>
                        <p className={s.price}>+{price}€</p>
                    </button>
                </li>
            ))}
       
     
        </ul>
    );
   
}



export default PowerOptionsList;