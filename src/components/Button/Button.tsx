import {Text, TouchableOpacity} from "react-native";
import React from "react";

import {styles} from "./styles";

interface Props {
    style:{}, 
    pressHandler:()=>void, 
    buttonText:string,
}

export const Button:React.FC<Props> = ({style, pressHandler, buttonText}) => {
    return (
        <TouchableOpacity style={{...styles.button,...style,  }} onPress={pressHandler}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

