import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.orange[500],
      tabBarInactiveTintColor: colors.gray[400],
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        minHeight: 74,
      },
      tabBarItemStyle: {
        paddingBottom: 32,
        paddingTop: 14,
      },
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="email" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'chat',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="chat-bubble" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="meeting"
        options={{
          title: 'meeting',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="videocam" color={color} />
          )
        }}
      />
    </Tabs>
  );
}
