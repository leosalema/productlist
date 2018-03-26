import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Itens extends Component {
    render() {
        console.log(this.props.details.img)
        return (
            <View style={styles.container}>
                <View style={styles.img}>
                    <Image style={{ height: 60, width: 100 }} source={{uri: this.props.details.img }} />
                </View>
                <View style={styles.details}>
                    <Text style={styles.description}>{this.props.details.description}</Text>
                    <Text style={styles.category}>{this.props.details.category}</Text>
                    <Text style={styles.price}>R$ {this.props.details.price}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
    },
    img: {
        width: 102,
        height: 102,
    },
    details: {
        marginLeft: 20,
        flex: 1,
    },
    description: {
        fontSize: 20,
        color: 'green',
        marginBottom: 5,
    },
    category: {
        fontSize: 13,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})