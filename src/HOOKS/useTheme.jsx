import  { useEffect, useState } from 'react';

const useTheme = () => {

    const[mode,setMode]=useState('light');

    const changeMode =()=>{
        const modeClass = document.documentElement;
       
        // localStorage.setItem("mode",dataTheme) ;
        // (localStorage.theme === 'dark') ? modeClass.setAttribute('data-theme', 'light'): modeClass.setAttribute('data-theme', 'dark');
      if(mode == 'light'){
        modeClass.removeAttribute('data-theme');
        modeClass.setAttribute('data-theme','dark');
        setMode('dark');
        localStorage.setItem('mode','dark')
    }else{
      modeClass.removeAttribute('data-theme');
      modeClass.setAttribute('data-theme','light');
      setMode('light');
      localStorage.setItem('mode','light')
    }

      }
      useEffect(()=>{
        const currentMode=localStorage.getItem('mode') || 'light';
        document.documentElement.setAttribute('data-theme',currentMode);
        setMode(currentMode)
      },[])
     
    return {changeMode,mode}
        
};

export default useTheme;