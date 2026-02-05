import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ScreenWrapper } from '@/components/ui/ScreenWrapper';
import { Card } from '@/components/ui/Card';

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <ScrollView contentContainerClassName="gap-4 py-4">
        <Text className="text-3xl font-bold text-foreground">Dashboard</Text>
        
        <Card>
            <Text className="text-lg font-semibold text-card-foreground">Recent Activity</Text>
            <Text className="text-muted-foreground mt-2">No recent activity found.</Text>
        </Card>

        <View className="flex-row gap-4">
            <Card className="flex-1">
                <Text className="text-2xl font-bold text-primary">12</Text>
                <Text className="text-sm text-muted-foreground">Pending</Text>
            </Card>
            <Card className="flex-1">
                <Text className="text-2xl font-bold text-primary">5</Text>
                <Text className="text-sm text-muted-foreground">Completed</Text>
            </Card>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}