import { useRoute, RouteProp } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getUnitById } from '../services/api';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';


//---Tipo DetalheRoute
type DetalheRouteParams = {Detalhe: {unitId: string}};

//--Interface Unit
interface Unit{
    id: string;
    name: string;
    type: string;
    waitEstimateMinutes: number;
    doctorsAvailable: number;
}

export default function DetalheScreen(){
    //Pega a rota atual e diz ao TypeScript que essa rota é a rota Detalhe, cujos parâmetros seguem o tipo DetalheRouteParams
    const route = useRoute<RouteProp<DetalheRouteParams, 'Detalhe'>>();
    const unitId = route.params.unitId;

    //--UseState permite que um componente tenha memória
    const [unit, setUnit] = useState<Unit | null>(null);
    const [loading, setLoading] = useState(true);

    //--executa uma ação depois da renderização, de acordo com determinadas dependencias.
    useEffect(() => {
        getUnitById(unitId)
            .then(setUnit)
            .finally(() => setLoading(false));
    }, [unitId]);

    if(loading){
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    if(!unit){
        return (
            <View style={styles.container}>
                <Text>Unidade não encontrada</Text>
            </View>
        )
    }


    return (
    <View style={styles.container}>
      <Text style={styles.name}>{unit.name}</Text>
      <Text style={styles.type}>{unit.type === 'upa' ? 'UPA' : 'Instituição Privada'}</Text>
      <Text style={styles.info}>Espera estimada: {unit.waitEstimateMinutes} min</Text>
      <Text style={styles.info}>Médicos disponíveis: {unit.doctorsAvailable}</Text>
      <View style={styles.reportButton}>
        <Button title="Reportar situação" onPress={() => {}} disabled />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  type: { color: '#666', marginBottom: 16 },
  info: { fontSize: 16, marginBottom: 8 },
  reportButton: { marginTop: 24 },
});
