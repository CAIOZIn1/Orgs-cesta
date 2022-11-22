import React from "react";
import topo from '../../../../assets/topo.png'
import Texto from "../../../components/Texto";
import { Image, StyleSheet, Dimensions } from "react-native-web";

const width = Dimensions.get('screen').width

export default function Topo( { titulo } ) {
    return <>
        <Image source={topo} style={estilo.topo} />
        <Texto style={estilo.titulo}>
            {titulo}
        </Texto>
    </>
}

const estilo = StyleSheet.create({
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
})