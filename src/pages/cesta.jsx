import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native-web";

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>
            Detalhe da cesta
        </Text>

        <View style={estilos.cesta}>
            <Text style={estilos.nome}>
                Cesta de Verduras
            </Text>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemfazenda}/>
                <Text style={estilos.nomeFazenda}>
                    Jenny Jack Farm
                </Text>
            </View>
            <Text style={estilos.descricao}>
                Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha
            </Text>
            <Text style={estilos.preco}>
                R$40,00
            </Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width

    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: "4vw",
        lineHeight: 26,
        color: "#fff",
        fontWeight: "bold",
        padding: "16px"
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold"
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemfazenda :{
        width: 32,
        height: 32
    },  
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 16,
        marginLeft:12,
        marginTop: 7,
        fontFamily: "MontserratRegular"
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 16
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})