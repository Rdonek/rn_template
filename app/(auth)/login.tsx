import React from 'react';
import { View, Text, Button } from 'react-native';
import { ScreenWrapper } from '@/components/ui/ScreenWrapper';
import { AppInput } from '@/components/ui/AppInput';
import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export default function LoginScreen() {
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.replace('/(tabs)');
  };

  return (
    <ScreenWrapper>
      <View className="flex-1 justify-center gap-4">
        <Text className="text-2xl font-bold text-foreground">Welcome Back</Text>
        
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Email"
              value={value}
              onChangeText={onChange}
              error={errors.email?.message}
              placeholder="Enter your email"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Password"
              value={value}
              onChangeText={onChange}
              secureTextEntry
              error={errors.password?.message}
              placeholder="Enter your password"
            />
          )}
        />

        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScreenWrapper>
  );
}
