import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Menu from './Menu';
import RegisterStar from './Registrar';
import ViewStars from './Registro';
import UpdateStar from './Actualizar';

interface Star {
  id: string;
  nombre: string;
  tipo: string;
}

function App() {
  const [user, setUser] = useState<boolean | null>(null);
  const [page, setPage] = useState('register');
  const [editStar, setEditStar] = useState<Star | null>(null);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div>
      <Menu setPage={setPage} />
      {page === 'register' && <RegisterStar />}
      {page === 'view' && <ViewStars setPage={setPage} setEditStar={setEditStar} />}
      {page === 'edit' && <UpdateStar editStar={editStar} setPage={setPage} />}
    </div>
  );
}

export default App;
