const API_URL = "http://192.168.0.4:3000";

export async function getUnits(){
    const response = await fetch(`${API_URL}/units`);
    if (!response.ok) {
        throw new Error(`Erro ao buscar unidades: ${response.status}`);
    }
    return response.json();
}

export async function getUnitById(id: string){
    const response = await fetch(`${API_URL}/units/${id}`);
    if (!response.ok){
        throw new Error(`Erro ao buscar unidade: ${response.status}`);
    }
    return response.json();
}