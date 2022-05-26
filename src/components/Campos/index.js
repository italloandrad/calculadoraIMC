import { Montserrat_600SemiBold_Italic } from "@expo-google-fonts/montserrat";
import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Linking, Image, } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import Modal from "react-native-modal";

export default function () {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    function calcularIMC() {
        
        const imc = (peso / (altura * altura)).toFixed(2);
        

        if (imc < 20) {
            return 'Você esta abaixo do peso!';
        }
        else if (imc > 20 && imc <= 25) {
            return "Seu IMC é: " + imc + "\n Considerado como Peso Ideal";
        }
        else if (imc > 25 && imc <= 30) {
            return "Seu IMC é: " + imc + "\n Considerado como Sobrepeso";
        }
        else if (imc > 30 && imc <= 35) {
            return "Seu IMC é: " + imc + "\n Considerado como Obesidade Moderada";
        }
        else if (imc > 35 && imc <= 40) {
            return "Seu IMC é: " + imc + "\n Considerado como Obesidade Severa";
        }
        else if (imc > 40 && imc <= 50) {
            return "Seu IMC é: " + imc + "\n Considerado como Obesidade Morbida";
        }
        else {
            return 'IMC invalido.';
        }
    }
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Seu Peso:</Text>
            <TextInput style={styles.input}
                value={peso}
                onChangeText={(peso) => setPeso(peso)}
                placeholder="Peso(kg)"
                placeholderTextColor="#A9A9A9"
                keyboardType={'numeric'}

            />
            <Text style={styles.text}>Sua Altura:</Text>
            <TextInputMask
                style={styles.input}
                type={'money'}
                options={{
                    precision: 2,
                    separator: '.',
                    delimiter: '',
                    unit: '',
                    suffixUnit: ''
                }}
                value={altura}
                onChangeText={(altura) => setAltura(altura)}
                placeholder="Altura(cm)"
                placeholderTextColor="#A9A9A9"
                keyboardType={'numeric'}
            />
            <TouchableOpacity
                style={styles.botao}
                onPress={() => {
                    toggleModal()
                }}
            >
                <Text style={styles.textBotao}>Calcular</Text>
            </TouchableOpacity>

            <Modal
                isVisible={isModalVisible}
                onBackdropPress={
                    () => setModalVisible(false)
                }
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            {calcularIMC()}
                        </Text>

                        <TouchableOpacity style={styles.buttonModal} onPress={toggleModal}>
                            <Text style={styles.buttonTextStyle}>Fechar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonWhatsappStyle}
                            
                            onPress={() =>
                                Linking.canOpenURL('whatsapp://send?text=oi').then((supported) => {
                                    if (supported) {
                                        return Linking.openURL(
                                            'whatsapp://send?phone=5534999999999&text=Oi! Segue o calculado do meu ' +  calcularIMC() + ' \n Obrigado!'
                                        );
                                    } else {
                                        return Linking.openURL(
                                            'https://api.whatsapp.com/send?phone=5534999999999&text=Oi'
                                        );
                                    }
                                })
                            }
                        >
                            <Image
                                source={require('../Image/whatsapp.png')}
                                style={styles.buttonImageIconStyle}
                                
                            />
                            <Text style={styles.buttonWpp}>Compartilhar Resultado no WhatsApp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: "100%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        padding:10,
        margin: 10,
        marginBottom: 15,
        textAlign: "center",
        fontFamily: "MontserratRegular",
    },
    buttonModal: {
        width: '50%',
        height: 50,
        borderRadius: 20,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '5%',
        flexDirection: 'row'
    },
    buttonWhatsappStyle: {
        flexDirection: 'row',
        paddingHorizontal: 0,
        alignItems: 'center',
        height: 50,
        borderRadius: 33,
        margin: 50,
    },
    buttonImageIconStyle: {
        height: 60,
        margin: 15,
        width: 60,
        borderRadius:50,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        fontFamily: "MontserratBold",
        textTransform: 'uppercase'
    },
    buttonWpp:{
        color:'#000',
        fontFamily: "MontserratBold",
    },
    view: {
        paddingTop: 35,
        width: "50%",

    },
    input: {
        backgroundColor: '#121212',
        margin: 10,
        padding: 16,
        color: '#F0FFF0',
        fontSize: 19,
        fontFamily: "MontserratRegular",
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#F0FFF0',
        fontFamily: "MontserratRegular",
    },

    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#0000FF',
        borderRadius: 25,
        padding: 16,

    },
    textBotao: {
        color: 'white',
        fontFamily: "MontserratBold",
        fontSize: 20,
        textAlign: 'center',
    }
});