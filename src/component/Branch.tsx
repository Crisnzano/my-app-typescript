import React from "react";
import { useState } from "react";
import Leaf from "./Leaf";

const Branch = ({ color }: ColorProps) => {
    return <Leaf color={color} />;
};


export default Branch;