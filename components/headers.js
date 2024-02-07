import { StyleSheet, Text, View} from 'react-native';


export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>MY Tools</Text>
        </View>
    )


}

const styles =StyleSheet.create({
    header:{
        height:90,
        padding:28,
        backgroundColor:'coral'
    },
    title:{
        textAlign:'center',
        color:'black',
        fontSize:30,
        fontWeight:'bold'
    }

})