
import React, {useState} from 'react';
import AppTitle from './components/AppTitle/AppTitle';
import Section from './components/Section/Section';
import ColorOptionsList from './components/OptionList/ColorOptionsList';
import PowerOptionsList from './components/OptionList/PowerOptionsList';
import WarpDriveOptionsList from './components/OptionList/WarpDriveOptionsList';
import PackageOptionsList from './components/OptionList/PackageOptionsList';
import TotalBoard from './components/TotalList/TotalBoard'
import colorOptions from './components/data/colorData';
import powerOptions from './components/data/powerData';
import warpOptions from './components/data/warpData';
import packageOptions from './components/data/packageData';
import './App.css';


function App() {

   

 const [config, setConfig] = useState({
    basePrice: 1000,
    color: 0,
    power: 0,
    warpDrive: 0,
    optionPackage: 0
 });
  
  
   return(
    < div className = "Wrapper" >
          <AppTitle text ='Spaceship configurator'/>
        
        <Section title="Select color:">
         <ColorOptionsList setConfig={setConfig} options={colorOptions} />
         </Section>

         <Section title="Select power:">
          <PowerOptionsList setConfig={setConfig} options={powerOptions}/>
         </Section> 
        
          <Section title="Warp drive:"> 
          <WarpDriveOptionsList setConfig={setConfig} options={warpOptions}/>
        </Section>
        
          <Section title="Select option package:"> 
          <PackageOptionsList setConfig={setConfig} options={packageOptions} />
        </Section>
        
        <TotalBoard titles={['Base price', 'Color', 'Power', 'Warp drive', 'Option package']}
        config={config}
      
    
    />
      </div>
    )
};
  


export default App;