import React from "react";
import { useState } from "react";
import Fruit from "./Fruit";

const Leaf = ({ color }: ColorProps) => {
    return <Fruit color={color} />;
};

export default Leaf;