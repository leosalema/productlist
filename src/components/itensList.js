import React, { Component} from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import Itens from './itens'

export default class itemList extends Component {
    constructor(props) {
        super (props)

        this.state = { itensList: [] }
    }

    componentWillMount() {
        // requisição HTTP
        //var url = 'http://http://faus.com.br/recursos/c/dmairr/api/itens.html'
        const url = 'http://localhost:3000/api/product'
        axios.get(url)
            .then( response => { 
                //console.log( response ) 
                this.setState({ itensList: response.data })
                console.log(this.state)
            })
            .catch(() => { console.log( 'erro ao recuperar os dados' ) })
    }

    render() {
        return(
            <ScrollView  style={{ backgroundColor: '#DDD' }}>
                {this.state.itensList.map( iten => ( <Itens key={iten._id} details={iten}/> ))}
            </ScrollView>
        )
    }
}

