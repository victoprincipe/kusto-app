import React, { Component } from 'react'
import { View } from "react-native"
import { Input, Text, Button } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'


const DATE_FORMAT = "YYYY-MM-DD";

const styles = {
    a:{
        padding: 5
    }
}
class CardForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: '',
            validateDate: '',
        }
    }
    render(){
        return (
            <View style={styles.a}>
               <Input label="Título" placeholder="Insira o título da tarefa"></Input>
               <Input label="Descrição" multiline={true} placeholder="Insira uma breve descrição da tarefa." ></Input>
               <Text style={{padding: 10}}>Início</Text>
               <DatePicker placeholder="Selecione uma data" style={{padding: 10}}
               date={this.state.date}
        format={DATE_FORMAT}
        minDate="2016-06-01"
        maxDate="2016-06-01"
        onDateChange={(date) => {this.setState({date: date})}}
        ></DatePicker>
        <Text>Validade</Text>
        <DatePicker placeholder="Selecione uma data" style={{padding: 10}}
               date={this.state.validateDate}
        format={DATE_FORMAT}
        minDate="2016-06-01"
        maxDate="2016-06-01"
        onDateChange={(date) => {this.setState({validateDate: date})}}
        ></DatePicker>
        <Button title="Adicionar Tarefa"></Button>
            </View>
        )
    }
}

export default CardForm;
