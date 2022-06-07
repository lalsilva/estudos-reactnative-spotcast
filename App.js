import PlayerScreen from './screens/Player';

import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>
        Hi I'm your home!
      </Text>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate('PlayerScreen')
            }}
          >
            <Text>
              Podcast: 0{item}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
}

function DiscoverScreen() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Hi I'm your discover screen!</Text>
    </View>
  );
}

const PodcastsStack = createStackNavigator();

function PodcastsTabStack() {
  return (
    <PodcastsStack.Navigator>
      <PodcastsStack.Screen name="HomeScreen" component={HomeScreen} />
      <PodcastsStack.Screen name="PlayerScreen" component={PlayerScreen} />
    </PodcastsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={PodcastsTabStack} />
      <Tab.Screen name="DiscoverScreen" component={DiscoverScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <PlayerScreen />
//   );
// }
