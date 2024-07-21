import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { db } from '../firebase/Firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

interface Star {
  id: string;
  nombre: string;
  tipo: string;
}

interface ViewStarsProps {
  setPage: (page: string) => void;
  setEditStar: (star: Star) => void;
}

const ViewStars: React.FC<ViewStarsProps> = ({ setPage, setEditStar }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const fetchStars = async () => {
      const colRef = collection(db, 'estrellas');
      const snapshot = await getDocs(colRef);
      const starsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Star));
      setStars(starsList);
    };
    fetchStars();
  }, []);

  const handleEdit = (star: Star) => {
    setEditStar(star);
    setPage('edit');
  };

  const handleDelete = async (id: string) => {
    const docRef = doc(db, 'estrellas', id);
    await deleteDoc(docRef);
    setStars(stars.filter(star => star.id !== id));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {stars.map(star => (
          <tr key={star.id}>
            <td>{star.nombre}</td>
            <td>{star.tipo}</td>
            <td>
              <Button variant="warning" onClick={() => handleEdit(star)}>Editar</Button>
              <Button variant="danger" onClick={() => handleDelete(star.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ViewStars;
