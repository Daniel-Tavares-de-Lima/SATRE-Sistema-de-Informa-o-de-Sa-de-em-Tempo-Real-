import { View, Text, StyleSheet } from 'react-native';

export default function ConfiguracoesScreen() {
  return (
    <View style={styles.container}>
      <Text>Configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});