import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native-web";

import Texto from "../../../components/Texto";


export default function Detalhes( { nome, nomefazenda, logoFazenda, descricao, preco, botao } ) {
    return <>
        <Texto style={estilos.nome}>
            {nome}
        </Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemfazenda} />
            <Texto style={estilos.nomeFazenda}>
                {nomefazenda}
            </Texto>
        </View>
        <Texto style={estilos.descricao}>
            {descricao}
        </Texto>
        <Texto style={estilos.preco}>
            {preco}
        </Texto>

        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>
                {botao}
            </Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemfazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 16,
        marginLeft: 12,
        marginTop: 7,
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
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        boderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        color: "ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})