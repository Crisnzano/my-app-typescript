import React from "react";
import { createContext, useState, useContext } from "react";



const AnimalContext = createContext<AnimalContextProps>({
  species:"",
  color: " ",
});

type Props = {
  children : React.ReactNode;
}
const AnimalProvider = ({ children }:Props) => {
    const [species, setSpecies] = useState("Cat");
    const [color, setColor] = useState("Black");
  
    return (
      <AnimalContext.Provider value={{ species, color }}>
        {children}
      </AnimalContext.Provider>
    );
  };

export {AnimalContext, AnimalProvider};
