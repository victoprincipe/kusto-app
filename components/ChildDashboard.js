import React, { Component } from 'react'
import { Dimensions } from "react-native";
import { Text, View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import {
    LineChart
} from 'react-native-chart-kit'

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


class ChildDashboard extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={styles.title}>DASHBOARD</Text>
                <LineChart
                data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                    ]
                }]
                }}
                width={Dimensions.get('window').width} // from react-native
                height={300}
                yAxisLabel={'$'}
                chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
            <Text>SALDO: R$50,00</Text>
            </View>
        )
    }
}

export default ChildDashboard