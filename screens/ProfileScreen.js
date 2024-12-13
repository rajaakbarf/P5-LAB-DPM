import React from 'react';
import { View, Text, Button, Icon, Body, Header, Left, Right, Title, Content, Card, CardItem, Thumbnail, Footer, FooterTab } from 'native-base';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header style={{ backgroundColor: '#3F51B5' }}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Profile</Title>
        </Body>
        <Right />
      </Header>

      {/* Main content */}
      <Content padder>
        {/* Profile Photo */}
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Thumbnail large source={{ uri: 'https://placeimg.com/200/200/people' }} />
        </View>

        {/* User */}
        <Card>
          <CardItem>
            <Body>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Raja Akbar Febriano</Text>
              <Text note style={{ marginTop: 5 }}>Email: rajaakbarfebriano@student.uir.ac.id</Text>
              <Text note style={{ marginTop: 5 }}>Bio: A passionate traveler and tech enthusiast!</Text>
            </Body>
          </CardItem>
        </Card>

        {/* Edit Profile */}
        <Button block style={{ backgroundColor: '#3F51B5', marginTop: 20 }} onPress={() => navigation.navigate('EditProfile')}>
          <Text>Edit Profile</Text>
        </Button>

        {/* Logout Button */}
        <Button block danger style={{ marginTop: 20 }} onPress={() => navigation.navigate('Login')}>
          <Text>Logout</Text>
        </Button>
      </Content>

      {/* Footer */}
      <Footer>
        <FooterTab style={{ backgroundColor: '#3F51B5' }}>
          <Button vertical onPress={() => navigation.navigate('Home')}>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Settings')}>
            <Icon name="settings" />
            <Text>Settings</Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
};

export default ProfileScreen;
