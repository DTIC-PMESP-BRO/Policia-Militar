import { db } from "../../database/firestore.js";

export async function createCautelaDocument(memberId: string, militares: string, opm: string, modelo: string, prefixo: string, motivo: string, timestamp: string): Promise<void> {
    try {
        await db.collection("cautelas").doc(memberId).set({
            memberId: memberId,
            militares: militares,
            opm: opm,
            modelo: modelo,
            prefixo: prefixo,
            motivo: motivo,
            timestamp: timestamp
        });
        console.log("Documento de cautela criado com sucesso!");
    } catch (error) {
        console.error("Erro ao criar documento de cautela:", error);
        throw error;
    }
}
