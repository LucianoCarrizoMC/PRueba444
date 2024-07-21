import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/Firebase';

const RegisterStar: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');

    const handleRegister = async () => {
        try {
            const colRef = collection(db, "estrellas");
            await addDoc(colRef, {
                nombre,
                tipo,
            });
            setNombre('');
            setTipo('');
            alert('Estrella registrada exitosamente');
        } catch (err) {
            console.error(err);
            alert('Error registrando estrella');
        }
    };

    return (
        <Form>
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formTipo">
                <Form.Label>Tipo</Form.Label>
                <Form.Control type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
            </Form.Group>

            <Button variant="primary" onClick={handleRegister}>
                Registrar
            </Button>
        </Form>
    );
};

export default RegisterStar;
