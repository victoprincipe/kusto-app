import React, { Component } from 'react'
import { Text, View, ScrollView, Animated } from 'react-native';
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
                }
            ]
        }
    }

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
                            <Card key={t.id} title={t.title}>
                                <View style={styles.cardInfo}>
                                    <Text style={styles.cardTitle}>Descrição:</Text>
                                    <Text>{t.description}</Text>
                                    <Text style={styles.cardTitle}>Recompensa:</Text>
                                    <Text>{t.prize}</Text>
                                    <Button 
                                    title="Recompensar"
                                    buttonStyle={{ backgroundColor: '#76D93A' }} 
                                    onPress={() => { 
                                        this.finishTaks(t.id)    
                                    }}></Button>
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