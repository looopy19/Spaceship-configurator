import s from "./OptionsList.module.css";
import { useEffect, useState } from "react";
import PackageSubList from "./PackageSubList";
import packageSubData from '../data/packageSubData';



function PackageOptionsList({ options, setConfig }) {

  const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    useEffect(() => {
    const activeItemPrice = options[activeItem]["price"];

    setConfig((prevState) => ({
      ...prevState,
      optionPackage: activeItemPrice
    }));
  }, [activeItem, options, setConfig]);

  return (
    <ul className={s.optionList}>
       
      {options.map(({ packageName, price }, index) => (
        <li key={price}>
          <button type='button'
          className={activeItem === index ? 'packageButton is-active' : 'packageButton'}
                        onClick={() => onSelectItem(index)}>
            <p className={s.power}>{packageName}</p>
            <p className={s.price}>+{price}€</p>
            <PackageSubList options={ packageSubData}/>

          </button>
        </li>
      ))}
        
         
       
     
    </ul>
  )
}



export default PackageOptionsList;