export default function Layout() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
