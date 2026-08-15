import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { getUnits } from '../services/api';

interface Unit{
    id: string;
    name: string;
    type: string;
    waitEstimateMinutes: number;
    doctorsAvailable: number;
}

export default function InicioScreen(){

    const [units, setUnits] = useState<Unit[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getUnits().then(setUnits).catch(() => setError(true)).finally(() => setLoading(false));
    }, []);

    if(loading){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }

    if(error){
        return(
            <View style={styles.container}>
                <Text>Não foi possível carregar as unidades. A API está rodando?</Text>
            </View>
        );
    }

      return (
    <FlatList
      data={units}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>Espera estimada: {item.waitEstimateMinutes} min</Text>
          <Text>Médicos disponíveis: {item.doctorsAvailable}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  list: { padding: 16 },
  card: { backgroundColor: '#f2f2f2', padding: 16, borderRadius: 8, marginBottom: 12 },
  name: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
});