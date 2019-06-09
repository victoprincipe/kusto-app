import React, { Component } from 'react'
import { View, Picker } from "react-native"
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
            title: '',
            desc: '',
            prize: ''
        }
    }

    render(){
        const { navigation } = this.props;
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.a}>
               <Input value={this.state.title} 
               label="Título" 
               placeholder="Insira o título da tarefa"
               onChangeText={text => this.setState({ title: text })}></Input>
               <Input value={this.state.desc} 
               label="Descrição" 
               multiline={true} 
               placeholder="Insira uma breve descrição da tarefa." 
               onChangeText={text => this.setState({ desc: text })}></Input>
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
                    <Text>Atribuir Tarefa:</Text>
                    <Picker
                    selectedValue={this.state.language}
                    style={{height: 50, width: 300}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                        <Picker.Item label="Enzo" value="java" />
                        <Picker.Item label="Valentina" value="js" />
                    </Picker>
                    <Input 
                    keyboardType='numeric' 
                    label="Recompensa:"
                    onChangeText={text => this.setState({ prize: 'R$' + text })}></Input>
                    <Button title="Adicionar Tarefa"
                    onPress={() => { 
                        params.addTask(this.state.title, this.state.desc, this.state.prize) 
                        navigation.goBack()
                    }}></Button>
            </View>
        )
    }
}

export default CardForm;
