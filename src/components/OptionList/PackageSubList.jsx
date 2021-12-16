import s from "./OptionsList.module.css";



function PackageSubList({ options }) {

    console.log(options);
    
    

    return (
        <div className={ s.packageSubList}>
     <ul className={s.packageList}>
            {Object.values(options).map((item, index) => (
                
                    <li key={item}>{item[index]}</li>
                
                 
                
            ))}
        
         </ul>
       
        </div>
  
    );
   
   
}




export default PackageSubList;