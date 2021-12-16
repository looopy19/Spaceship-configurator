import { useEffect, useState } from "react";
import s from "./OptionsList.module.css";



function ColorOptionsList({ options, setConfig}) {

   

    const [activeItem, setActiveItem] = useState(0);

   

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    useEffect(() => {
    const activeItemPrice = options[activeItem]["price"];

    setConfig((prevState) => ({
      ...prevState,
      color: activeItemPrice
    }));
  }, [activeItem, options, setConfig]);
    

    return (
        <ul className={s.optionList}>
       
            {options.map(({ color, price, colorName}, index) => (
                <li key={color}>
                    <button
                        className={activeItem === index ? 'button is-active' : 'button'}
                        onClick={() => onSelectItem(index)}
                        type='button'
                         >
                        
                        <span className={s.color} style={{ backgroundColor: color }}></span>
                        <p className={s.price}>+{price}€</p>
                        <p className={s.colorName}>{colorName}</p>
                    </button>
                </li>
            ))}
       
     
        </ul>
    );
   
}



export default ColorOptionsList;