import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

const styles = {
    screen: {
        display: 'flex',
    },
    title: {
        alignSelf: 'center',
        fontSize: 32
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    cardInfo: {
        display: 'flex',
        flexDirection: 'column'
    }
}

class Tasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    id: Math.random().toString(36).substr(2, 16),
                    title: 'Passear com o cachorro', 
                    description: 'Passear com o cachorro durante 30 minutos', 
                    prize: 'R$5,00'
                },
                {
                    id: Math.random().toString(36).substr(2, 16),
                    title: 'Passear com o cachorro', 
                    description: 'Passear com o cachorro durante 30 minutos', 
                    prize: 'R$5,00'
                },
                {
                    id: Math.random().toString(36).substr(2, 16),
                    title: 'Passear com o cachorro', 
                    description: 'Passear com o cachorro durante 30 minutos', 
                    prize: 'R$5,00'
                },
                {
                    id: Math.random().toString(36).substr(2, 16),
                    title: 'Passear com o cachorro', 
                    description: 'Passear com o cachorro durante 30 minutos', 
                    prize: 'R$5,00'
                },
                {
                    id: Math.random().toString(36).substr(2, 16),
                    title: 'Passear com o cachorro', 
                    description: 'Passear com o cachorro durante 30 minutos', 
                    prize: 'R$5,00'
                },
            ]
        }
    }

    static navigationOptions = ( { navigation } ) => (
        {
            title: 'KUSTO',
            headerStyle: {
                backgroundColor: '#6b52ae'
            },
            headerTintColor: 'white',
            headerTitleStyle: { 
                textAlign: 'center', 
                flex:1 
            },
            headerRight: (
                <View></View>
            )
        }
    )

    addNewTask = (title, desc, prize) => {
        newTasks = this.state.tasks
        newTasks.push({ id: Math.random().toString(36).substr(2, 16), title: title, description: desc, prize: prize })
        this.setState({
            tasks: newTasks
        })
    }

    finishTaks = (id) => {
        newTasks = this.state.tasks.filter((t) => {
            return t.id !== id
        })
        this.setState({
            tasks: newTasks
        })
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={ styles.title }>TAREFAS</Text>
                <ScrollView style={{ padding: 10 }}>
                    {this.state.tasks.map((t) => {
                        return (
                            <Card key={Math.random().toString(36).substr(2, 16)} title={t.title}>
                                <View style={styles.cardInfo}>
                                    <Text style={styles.cardTitle}>Descrição:</Text>
                                    <Text>{t.description}</Text>
                                    <Text style={styles.cardTitle}>Recompensa:</Text>
                                    <Text>{t.prize}</Text>
                                    <Button 
                                    title="Recompensar"
                                    buttonStyle={{ backgroundColor: '#76D93A' }} ></Button>
                                </View>
                            </Card>
                        )
                    })}
                </ScrollView>
                <Button title="Nova Tarefa" 
                onPress={() => this.props.navigation.navigate('TaskForm', { addTask: this.addNewTask })}/>
            </View>
        )
    }
}

export default Tasks