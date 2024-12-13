import React from 'react';
import { Button, Text, View, Header, Icon, Left, Right, Body, Title, Card, CardItem, Thumbnail, Footer, FooterTab, Content } from 'native-base';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header style={{ backgroundColor: '#3F51B5' }}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Welcome</Title>
        </Body>
        <Right />
      </Header>

      {/* Main content */}
      <Content padder>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#3F51B5' }}>Explore the World!</Text>
          <Text style={{ fontSize: 16, color: '#888', marginTop: 10 }}>Find exciting places and discover new adventures.</Text>
        </View>

        {/* Card */}
        <Card style={{ marginBottom: 20 }}>
          <CardItem cardBody>
            <Thumbnail source={{ uri: 'https://placeimg.com/800/600/nature' }} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{ fontWeight: 'bold' }}>Beautiful Nature</Text>
              <Text note>
                Explore the untouched beauty of nature and enjoy its serenity.
              </Text>
            </Body>
          </CardItem>
        </Card>

        {/* Button */}
        <Button 
          style={{ backgroundColor: '#3F51B5', alignSelf: 'center', marginBottom: 20 }}
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name="person" />
          <Text style={{ marginLeft: 10 }}>Go to Profile</Text>
        </Button>

        {/* Another Card */}
        <Card style={{ marginBottom: 20 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://placeimg.com/100/100/tech' }} />
              <Body>
                <Text>Raja Akbar Febriano</Text>
                <Text note>Explorer & Adventurer</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Join our community of adventurers. Share your experiences and explore the world with us!
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>

      {/* Footer */}
      <Footer>
        <FooterTab style={{ backgroundColor: '#3F51B5' }}>
          <Button vertical onPress={() => navigation.navigate('Home')}>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Profile')}>
            <Icon name="person" />
            <Text>Profile</Text>
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

export default HomeScreen;
