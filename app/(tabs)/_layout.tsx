import { Tabs } from 'expo-router';
import { Home, Settings } from 'lucide-react-native';
import { View } from 'react-native';

export default function TabLayout() {
  // Using hex for tab bar active tint color to match --primary (indigo-600)
  const primaryColor = '#4f46e5'; 

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primaryColor,
        tabBarStyle: {
            borderTopWidth: 1,
            // We might want to use a dynamic color here if possible, but for now hardcoded light border
            borderTopColor: '#e4e4e7', 
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Settings size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}