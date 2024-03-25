import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import Branch from "./Branch";


export const AppleTree = () => {
    const [color, setColor] = useState("Color is red");

    return <Branch color = {color} />;


};