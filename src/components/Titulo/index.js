import React from "react"
import { View, Text,StyleSheet} from "react-native"

export default function Titulo(){
    return(
        <View style={styles.view}>
            <Text style={styles.titulo}>Calculadora IMC</Text>
        </View>
    );
}
const styles = StyleSheet.create ({
    view:{
        backgroundColor: "#000000",
    },
        titulo:{
        textAlign: "center",
        fontFamily: "MontserratBold",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        padding: 16,            
    }
});