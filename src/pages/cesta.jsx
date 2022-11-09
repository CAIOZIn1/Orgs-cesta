import React from "react";
import { StyleSheet, Image, Dimensions, Text } from "react-native-web";
import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>
            Detalhe da cesta
        </Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width : "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: "4vw",
        lineHeight: 26,
        color: "#fff",
        fontWeight: "bold",
        padding: "16px"

    }
})