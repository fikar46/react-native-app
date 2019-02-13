import React, {Component} from 'react'
import  {Text, View} from 'react-native'
import {Container, Header, Left, Title, Body} from 'native-base'
import {Icon} from 'react-native-elements'
class User extends Component{
    render(){
        return(
            <Container>
            <Header  >
            <Left>
                <Icon name='menu' color='white' size={35} onPress={() => this.props.navigation.toggleDrawer()}/>              
            </Left>
                <Body>
                    <Title>NFChat</Title>
                </Body>
            </Header>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>halaman User</Text>
            </View>
            </Container>
        )
    }
}
export default User