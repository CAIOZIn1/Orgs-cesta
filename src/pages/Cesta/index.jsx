import React from "react";
import { StyleSheet, View } from "react-native-web";
import Detalhes from "./components/Detalhes";
import Itens from "./components/itens";

import Topo from "./components/Topo";

export default function Cesta( { topo, detalhes } ) {
    return <>
        
        <Topo {...topo}/>

        <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>

            <Itens />
        </View>


    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
})