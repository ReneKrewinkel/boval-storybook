import {TouchableOpacity, View, Text} from "react-native"
import {ButtonInterface} from "./Button.interface"
import ButtonStyle from "./Button.style"


const Button = ({text, style, action}: ButtonInterface) => {

    return(
        <TouchableOpacity style={[ButtonStyle.default, style]}>
            <Text style={
                // @ts-ignore
                style.text
            }>{ text }</Text>
        </TouchableOpacity>
    )

}

export default Button

