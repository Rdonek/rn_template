import React from 'react';
import { View, Text, Button } from 'react-native';
import { ScreenWrapper } from '@/components/ui/ScreenWrapper';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  
  return (
    <ScreenWrapper>
      <View className="gap-4">
        <Text className="text-2xl font-bold text-foreground">Settings</Text>
        <Button title="Logout" onPress={() => router.replace('/(auth)/login')} />
      </View>
    </ScreenWrapper>
  );
}
