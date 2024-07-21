import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [eNombre, setEnombre] = useState("");

    const validarNombre = (valor) => {
        if (valor.length > 4) {
            setEnombre("");
        } else {
            setEnombre("Debes ingresar al menos 4 caracteres");
        }
        setNombre(valor);
    };

    const registrar = () => {
        console.log(nombre + " " + apellido);
        alert("Registraste: " + nombre + " " + apellido);
    };

    return (
        <>
            <Form>
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        value={nombre}
                        onChange={(e) => validarNombre(e.target.value)}
                        isInvalid={!!eNombre}
                    />
                    <Form.Control.Feedback type="invalid">
                        {eNombre}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers,
                        and must not contain spaces, special characters, or emoji.
                    </Form.Text>
                </Form.Group>
                <button type="button" onClick={registrar}>Registrar</button>
            </Form>
        </>
    );
};

export default Login;
