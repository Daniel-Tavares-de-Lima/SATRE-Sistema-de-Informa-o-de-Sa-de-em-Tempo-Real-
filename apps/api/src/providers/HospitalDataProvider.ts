//ISSO É TIPO UM FORMULÁRIO EM BRANCO(CONTINUA EM MockProvider.ts)

export interface Unit{
    id: string;
    name: string;
    type: "upa" | "private";
    lat: number; 
    lng: number;
    waitEstimateMinutes: number;
    doctorsAvailable: number;
}

export interface HospitalDataProvider {
    getUnits(): Promise<Unit[]>;
    getUnitById(id: string): Promise<Unit | null>;
}