import s from "./OptionsList.module.css";
import { useEffect, useState } from "react";



function WarpDriveOptionsList({ options, setConfig }) {

    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    useEffect(() => {
    const activeItemPrice = options[activeItem]["price"];

    setConfig((prevState) => ({
      ...prevState,
      warpDrive: activeItemPrice
    }));
  }, [activeItem, options, setConfig]);

    return (
        <ul className={s.optionList}>
       
            {options.map(({ isOn, price }, index) => (
                <li key={price}>
                    <button type='button'
                    className={activeItem === index ? 'powerButton is-active' : 'powerButton'}
                        onClick={() => onSelectItem(index)}>
                        <p className={s.power}>{isOn}</p>
                        <p className={s.price}>+{price}€</p>
                    </button>
                </li>
            ))}
       
     
        </ul>
    );
   
}



export default WarpDriveOptionsList;