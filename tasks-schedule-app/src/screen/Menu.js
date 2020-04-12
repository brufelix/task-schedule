import React from 'react';
import { ScrollView, View, Text, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import { DrawerItems } from 'react-navigation-drawer';
import axios from  'axios';
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyles from '../commonStyles';

export default props =>{
    
    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData');
        props.navigation.navigate('Loading')
    }

    return(
        <ScrollView>
            <View>
                <Text style={styles.header}>Tasks</Text>
                <Gravatar style={styles.avatar} options={{
                    email: props.navigation.getParam('email'),
                }} />
            </View>
            <View style={styles.userInfo}>
                <View>
                    <Text style={styles.name}>{ props.navigation.getParam('name')}</Text>
                    <Text style={styles.email}>{ props.navigation.getParam('email')}</Text>
                </View>
                <TouchableOpacity onPress={() => logout()}>
                    <View style={styles.iconLogout}>
                        <Icon name='sign-out' size={30} color='#800'/>
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerItems {...props}/>
        </ScrollView>
    )  
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
    },
    title: {
        backgroundColor: '#FFF',
        color: '#000',
        fontSize: 30,
        paddingTop: 20,
        padding: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: '#AAA',
        borderRadius: 30,
        margin: 10,
    },
    name: {
        color: commonStyles.color.mainText,
        fontSize: 20,
        marginLeft: 10,
    },
    email: {
        color: commonStyles.color.mainText,
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10,
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconLogout: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
});