import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#11182A',
          borderTopColor: '#27324A',
          height: 72,
          paddingTop: 8,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#8EA2FF',
        tabBarInactiveTintColor: '#75819A',
        tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="grid-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="browser" options={{ title: 'Browser', tabBarIcon: ({ color, size }) => <Ionicons name="globe-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="downloads" options={{ title: 'Downloads', tabBarIcon: ({ color, size }) => <Ionicons name="download-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="library" options={{ title: 'Library', tabBarIcon: ({ color, size }) => <Ionicons name="folder-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} /> }} />
    </Tabs>
  );
}
