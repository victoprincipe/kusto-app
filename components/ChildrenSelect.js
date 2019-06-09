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
    },
    description: {
        
    }
}

class Tasks extends Component {
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

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={ styles.title }>TAREFAS</Text>
                <ScrollView style={{ padding: 10 }}>
                    <Card title="Passear com o cachorro">
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Descrição:</Text>
                            <Text>Passear com o cachorro durante 30 minutos</Text>
                            <Text style={styles.cardTitle}>Recompensa:</Text>
                            <Text>R$5,00</Text>
                        </View>
                    </Card>
                    <Card title="Passear com o cachorro">
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Descrição:</Text>
                            <Text>Passear com o cachorro durante 30 minutos</Text>
                            <Text style={styles.cardTitle}>Recompensa:</Text>
                            <Text>R$5,00</Text>
                        </View>
                    </Card>
                    <Card style={styles.card} title="Passear com o cachorro">
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Descrição:</Text>
                            <Text>Passear com o cachorro durante 30 minutos</Text>
                            <Text style={styles.cardTitle}>Recompensa:</Text>
                            <Text>R$5,00</Text>
                        </View>
                    </Card>
                    <Card style={styles.card} title="Passear com o cachorro">
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Descrição:</Text>
                            <Text>Passear com o cachorro durante 30 minutos</Text>
                            <Text style={styles.cardTitle}>Recompensa:</Text>
                            <Text>R$5,00</Text>
                        </View>
                    </Card>
                    <Card style={styles.card} title="Passear com o cachorro">
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Descrição:</Text>
                            <Text>Passear com o cachorro durante 30 minutos</Text>
                            <Text style={styles.cardTitle}>Recompensa:</Text>
                            <Text>R$5,00</Text>
                        </View>
                    </Card>
                    <Card style={styles.card} title="Passear com o cachorro">
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Descrição:</Text>
                            <Text>Passear com o cachorro durante 30 minutos</Text>
                            <Text style={styles.cardTitle}>Recompensa:</Text>
                            <Text>R$5,00</Text>
                        </View>
                    </Card>
                </ScrollView>
                <Button title="Nova Tarefa" 
                onPress={() => this.props.navigation.navigate('TaskForm')}/>
            </View>
        )
    }
}

export default Tasks