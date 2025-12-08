import { db } from "../../../database/firestore.js";

export async function suggestionsNumber(): Promise<string> {
    const docRef = db.collection("contagens").doc("sugestoes");
    const doc = await docRef.get();

    if (!doc.exists) {
        console.log('Houve um erro ao acessar o documento "ouvidoria", entre em contato com a DTIC.')
        return "";
    }

    const data = doc.data();

    if (!data) {
        console.log('O documento "ouvidoria" está vazio, entre em contato com a DTIC.')
        return "";
    }

    const suggestionsnumber = Number(data.suggestionsnumber) + 1;

    await docRef.update({
        "suggestionsnumber": String(suggestionsnumber)
    })

    return String(suggestionsnumber);
}