import {
    Alert,
    Pressable,
    StyleSheet,
    Text
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function ActionTile({
icon,
label
}) {

return (

<Pressable
style={styles.box}
onPress={()=>
Alert.alert(label)
}
>

<Ionicons
name={icon}
size={30}
color="white"
/>

<Text style={styles.text}>
{label}
</Text>

</Pressable>

)
}

const styles=StyleSheet.create({

box:{
width:"30%",
padding:20,
backgroundColor:"#1E1E1E",
marginVertical:8,
borderRadius:20,
alignItems:"center"
},

text:{
marginTop:10,
color:"white",
fontSize:14
}

})