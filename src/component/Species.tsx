import React from "react";
import { createContext, useState, useContext } from "react";
import { AnimalContext } from "../provider/AnimalContextProvider";

// Define custom hooks to consume the context
const useAnimalContext = () => useContext(AnimalContext);

// Example of a component consuming the context
const Species = () => {
  const { species } = useAnimalContext();
  return <div>Species: {species}</div>;
};

export default Species;