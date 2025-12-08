import { db } from "../../../database/firestore.js";

export async function ouvidoriaCorregNumber() {
    const docRef = db.collection("contagens").doc("ouvidoria");
    const doc = await docRef.get();

    if (!doc.exists) {
        console.log('Houve um erro ao acessar o documento "ouvidoria", entre em contato com a DTIC.')
        return;
    }

    const data = doc.data();

    if (!data) {
        console.log('O documento "ouvidoria" está vazio, entre em contato com a DTIC.')
        return;
    }

    const ouvidoriacorregnumber = Number(data.ouvidoriacorregnumber) + 1;

    await docRef.update({
        "ouvidoriacorregnumber": String(ouvidoriacorregnumber)
    })

    return ouvidoriacorregnumber;
}

export async function ouvidoriaCorregNumberMinus() {
    const docRef = db.collection("contagens").doc("ouvidoria");
    const doc = await docRef.get();

    if (!doc.exists) {
        console.log('Houve um erro ao acessar o documento "ouvidoria", entre em contato com a DTIC.')
        return;
    }

    const data = doc.data();

    if (!data) {
        console.log('O documento "ouvidoria" está vazio, entre em contato com a DTIC.')
        return;
    }

    const ouvidoriacorregnumber = Number(data.ouvidoriacorregnumber) - 1;

    await docRef.update({
        "ouvidoriacorregnumber": String(ouvidoriacorregnumber)
    })
}

export async function ouvidoriaDPNumber() {
    const docRef = db.collection("contagens").doc("ouvidoria");
    const doc = await docRef.get();

    if (!doc.exists) {
        console.log('Houve um erro ao acessar o documento "ouvidoria", entre em contato com a DTIC.')
        return;
    }

    const data = doc.data();

    if (!data) {
        console.log('O documento "ouvidoria" está vazio, entre em contato com a DTIC.')
        return;
    }

    const ouvidoriadpnumber = Number(data.ouvidoriadpnumber) + 1;

    await docRef.update({
        "ouvidoriadpnumber": String(ouvidoriadpnumber)
    })

    return ouvidoriadpnumber;
}

export async function ouvidoriaDPNumberMinus() {
    const docRef = db.collection("contagens").doc("ouvidoria");
    const doc = await docRef.get();

    if (!doc.exists) {
        console.log('Houve um erro ao acessar o documento "ouvidoria", entre em contato com a DTIC.')
        return;
    }

    const data = doc.data();

    if (!data) {
        console.log('O documento "ouvidoria" está vazio, entre em contato com a DTIC.')
        return;
    }

    const ouvidoriadpnumber = Number(data.ouvidoriadpnumber) - 1;

    await docRef.update({
        "ouvidoriadpnumber": String(ouvidoriadpnumber)
    })
}

export async function ouvidoriaEMNumber() {
    const docRef = db.collection("contagens").doc("ouvidoria");
    const doc = await docRef.get();

    if (!doc.exists) {
        console.log('Houve um erro ao acessar o documento "ouvidoria", entre em contato com a DTIC.')
        return;
    }

    const data = doc.data();

    if (!data) {
        console.log('O documento "ouvidoria" está vazio, entre em contato com a DTIC.')
        return;
    }

    const ouvidoriaemnumber = Number(data.ouvidoriaemnumber) + 1;

    await docRef.update({
        "ouvidoriaemnumber": String(ouvidoriaemnumber)
    })

    return ouvidoriaemnumber;
}

export async function ouvidoriaEMNumberMinus() {
    const docRef = db.collection("contagens").doc("ouvidoria");
    const doc = await docRef.get();

    if (!doc.exists) {
        console.log('Houve um erro ao acessar o documento "ouvidoria", entre em contato com a DTIC.')
        return;
    }

    const data = doc.data();

    if (!data) {
        console.log('O documento "ouvidoria" está vazio, entre em contato com a DTIC.')
        return;
    }

    const ouvidoriaemnumber = Number(data.ouvidoriaemnumber) - 1;

    await docRef.update({
        "ouvidoriaemnumber": String(ouvidoriaemnumber)
    })
}