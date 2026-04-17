import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

// 1. Evita que la pantalla de carga se oculte automáticamente al instante
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // 2. Configura un temporizador para ocultar el splash screen después de 3 segundos (3000 ms)
    const hideSplashScreen = async () => {
      const timer = setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 3000);

      return () => clearTimeout(timer); // Limpieza por seguridad
    };

    hideSplashScreen();
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
