import {
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";

export default function ProfileHeader({user}){

return(

<View style={styles.container}>

<Image
source={{uri:user.avatar}}
style={styles.image}
/>

<View style={styles.info}>

<Text style={styles.name}>
{user.name}
</Text>

<Text style={styles.details}>
{user.branch} • {user.semester}
</Text>

<Text style={styles.usn}>
{user.usn}
</Text>

<View style={styles.badge}>
<Text style={styles.badgeText}>
RV Unity+ Member
</Text>
</View>

</View>

</View>

)
}

const styles=StyleSheet.create({

container:{
flexDirection:"row",
alignItems:"center",
padding:20,
marginTop:20
},

image:{
width:70,
height:70,
borderRadius:35,
marginRight:15
},

info:{
flex:1
},

name:{
fontSize:22,
fontWeight:"bold",
color:"white"
},

details:{
fontSize:15,
color:"#bbbbbb",
marginTop:3
},

usn:{
fontSize:13,
color:"#888",
marginTop:2
},

badge:{
marginTop:8,
backgroundColor:"#2D6CDF",
paddingHorizontal:10,
paddingVertical:6,
borderRadius:20,
alignSelf:"flex-start"
},

badgeText:{
color:"white",
fontSize:12
}

})