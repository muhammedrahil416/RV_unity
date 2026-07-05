import {
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";

export default function Card({
title,
subtitle,
image
}) {

return(

<View style={styles.card}>

<Image
source={{uri:image}}
style={styles.image}
/>

<Text style={styles.title}>
{title}
</Text>

<Text
style={{
color:"#bbb",
marginTop:5
}}
>
{subtitle}
</Text>

</View>

)

}

const styles=StyleSheet.create({

card:{
backgroundColor:"#1E1E1E",
margin:15,
padding:15,
borderRadius:25
},

image:{
width:"100%",
height:170,
borderRadius:20
},

title:{
fontSize:22,
fontWeight:"bold",
marginTop:15,
color:"white"
}

})