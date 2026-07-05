import { StyleSheet, Text, View } from "react-native";

export default function StatTile({label,value}){

return(

<View style={styles.box}>

<Text style={styles.number}>
{value}
</Text>

<Text
style={{
color:"#bbb",
marginTop:5
}}
>
{label}
</Text>

</View>

)
}


const styles=StyleSheet.create({

box:{
flex:1,
margin:5,
padding:18,
backgroundColor:"#1E1E1E",
borderRadius:20,
alignItems:"center"
},

number:{
fontSize:24,
fontWeight:"bold",
color:"white"
}

})