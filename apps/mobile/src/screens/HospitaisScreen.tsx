import { View, Text, StyleSheet } from 'react-native';

export default function HospitaisScreen(){
    return(
        <View style={styles.container}>
            <Text>Hospitais</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
