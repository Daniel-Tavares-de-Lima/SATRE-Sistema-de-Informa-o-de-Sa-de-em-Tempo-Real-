const API_URL = "http://192.168.0.3:3000";

export async function getUnits(){
    const response = await fetch(`${API_URL}/units`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar unidades: ${response.status}`);
    }
    return response.json();
}