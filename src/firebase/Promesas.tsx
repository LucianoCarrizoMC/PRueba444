import { Estrella } from "../Interfaces/Interfaces";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";

export const registrarEstrella = async (estrella: Estrella) => {
    const docRef = await addDoc(collection(db, "estrella"), estrella);
};

export const obtenerEstrella = async () => {
    const colRef = collection(db, "estrella");
    const querySnapshot = await getDocs(colRef);

    let estrellas: Estrella[] = [];
    querySnapshot.forEach((doc) => {
        let estrella: Estrella = {
            nombre: doc.data().nombre,
            tipoEstrella: doc.data().tipoEstrella,
            constelación: doc.data().constelación,
            Tamaño: doc.data().Tamaño,
            edad: doc.data().edad,
            descubridor: doc.data().descubridor,
        };
        estrellas.push(estrella);
    });
    return estrellas;
};

export const obtenerPersona = async (key: string) => {
    const docRef = doc(db, "estrella", key);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        let estrella: Estrella = {
            nombre: docSnap.data().nombre,
            tipoEstrella: docSnap.data().tipoEstrella,
            constelación: docSnap.data().constelación,
            Tamaño: docSnap.data().Tamaño,
            edad: docSnap.data().edad,
            descubridor: docSnap.data().descubridor,
            key: docSnap.id,
        };
        return estrella;
    } else {
        return undefined;
    }
};

export const modificarPersona = async (p: Estrella) => {
    const ref = doc(db, "estrellas", p.key!);
    await updateDoc(ref, { ...p });
};
