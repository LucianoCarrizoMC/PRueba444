import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/Firebase';

interface Star {
  id: string;
  nombre: string;
  tipo: string;
}

interface UpdateStarProps {
  editStar: Star | null;
  setPage: (page: string) => void;
}

const UpdateStar: React.FC<UpdateStarProps> = ({ editStar, setPage }) => {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    if (editStar) {
      setNombre(editStar.nombre);
      setTipo(editStar.tipo);
    }
  }, [editStar]);

  const handleUpdate = async () => {
    try {
      if (editStar) {
        const starRef = doc(db, 'estrellas', editStar.id);
        await updateDoc(starRef, {
          nombre,
          tipo
        });
        setPage('view');
      }
    } catch (err) {
      console.error(err);
      alert('Error actualizando estrella');
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

      <Button variant="primary" onClick={handleUpdate}>
        Actualizar
      </Button>
    </Form>
  );
};

export default UpdateStar;
