
import s from './TotalBoard.module.css'
import { configMap, totalCount } from "../utils";
import { useMemo } from "react";

function TotalBoard({ config }) {

    const total = useMemo(() => totalCount(config), [config]);


 
    
    return (
        <div className={s.totalBoard}>
            <ul className={s.totalBoard__titles}>
             
                {Object.values(configMap).map((title) => (
                    <li key={title} className={s.totalBoard__title}>{title}:</li>
                ))}
                <li className={s.totalTitle}>
                    Total:
                </li>
          
            </ul>
            <ul className={s.totalBoard__values}>
                {Object.values(config).map((value, index) => (
                    <li key={`${index}`} className={s.totalBoard__values}>+{value}€</li>
                )
                )}
         
                <li className={s.totalValue}>{ total}€</li>
            </ul>
        </div>
    )
};

export default TotalBoard;