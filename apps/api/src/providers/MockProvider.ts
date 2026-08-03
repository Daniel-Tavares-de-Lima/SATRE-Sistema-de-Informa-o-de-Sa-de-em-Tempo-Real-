//---ISSO AQUI É O FORMULÁRIO PREENCHIDO

import {HospitalDataProvider, Unit} from "./HospitalDataProvider";

const MOCK_UNITS: Unit[] = [
  { id: '1', name: 'UPA Caxangá', type: 'upa', lat: -8.0476, lng: -34.9505, waitEstimateMinutes: 25, doctorsAvailable: 5 },
  { id: '2', name: 'Hospital Esperança Recife', type: 'private', lat: -8.0522, lng: -34.9057, waitEstimateMinutes: 5, doctorsAvailable: 10 },
  { id: '3', name: 'UPA Torrões', type: 'upa', lat: -8.0644, lng: -34.9339, waitEstimateMinutes: 13, doctorsAvailable: 7 },
];

export class MockProvider implements HospitalDataProvider {
    async getUnits() {
        return MOCK_UNITS;
    }

    async getUnitById(id: string){
        return MOCK_UNITS.find(unit => unit.id === id) ?? null;
    }
}