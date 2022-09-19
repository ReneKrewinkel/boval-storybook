import StorybookUIRoot from "./.ondevice/Storybook";
export { StorybookUIRoot as default }
import { View,Text } from 'react-native'
import Label from './components/atoms/Label'
import LabelStyle from './components/atoms/Label/Label.style'
import Input from "./components/atoms/Input/Input";
import InputStyle
    from "./components/atoms/Input/Input.style";

const App = () => {

    return(

        <View>
            <Label text="hi" style={ LabelStyle.default} />
            <View style={{backgroundColor: "#F00"}}>
                <Text>enne??</Text>
            <Input value={"userName"} type={"text"} style={InputStyle.default} action={null} />
            </View>
       </View>
    )


}