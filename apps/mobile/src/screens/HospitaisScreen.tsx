import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, FlatList } from 'react-native';
import { getUnits } from '../services/api';

interface Unit{
    id: string;
    name: string;
    type: string;
    waitEstimateMinutes: number;
    doctorsAvailable: number;
}

//Objetivo é fazer com que as buscas ignorem os acentos
function normalize(text: string): string{
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
export default function HospitaisScreen(){
    const [units, setUnits] = useState<Unit[]>([]); //hospitais carregados da API
    const [search, setSearch] = useState(''); // texto de pesquisa  
    const [loading, setLoading] = useState(false); // carregamento  
    const [error, setError] = useState(false); // erro de carregamento

    useEffect(() => {
        getUnits().then(setUnits).catch(() => setError(true)).finally(() => setLoading(false));
    }, []);

    const filtered = units.filter((unit) => normalize(unit.name).includes(normalize(search)));

    //-- early return
    if(loading){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    if(error){
        return(
            <View style={styles.container}>
                <Text>Não foi possível carregar as unidades.</Text>
            </View>
        );
    }

    return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Buscar unidade..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma unidade encontrada</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.type}>{item.type === 'upa' ? 'UPA' : 'Instituição Privada'}</Text>
            <Text>Espera estimada: {item.waitEstimateMinutes} min</Text>
            <Text>Médicos disponíveis: {item.doctorsAvailable}</Text>
          </View>
        )}
      />
    </View>
  );

}

const styles = StyleSheet.create({
    container: {flex: 1},
    search: {
        margin: 16,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    list: { paddingHorizontal: 16, paddingBottom: 16 },
    card: { backgroundColor: '#f2f2f2', padding: 16, borderRadius: 8, marginBottom: 12 },
    name: { fontWeight: 'bold', fontSize: 16 },
    type: { color: '#666', marginBottom: 4 },
    empty: { textAlign: 'center', marginTop: 32, color: '#666' },
    
});
