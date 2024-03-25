import React from "react";
import { useState } from "react";

const Fruit = ({ color }: ColorProps) => {
    return <h2>
            The message from the tree is {color}
          </h2>;
    
};

export default Fruit;
