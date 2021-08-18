import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import axios from "../../config/axiosMaquina/axios";


const Cadastro = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
  
    const history = useHistory();
  
    const cadastrarUsuario = async (event) => {
      try {
        event.preventDefault();
        const dados = {
          login: username,
          password: password,
        };
        await axios.post(`user`, dados);
        
        return;
      } catch (error) {}
    };
  
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col></Col>
          <Col xs={6}>
              <h1>Cadastro</h1>
            <Form onSubmit={cadastrarUsuario}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome de Usuário</Form.Label>
                <Form.Control value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        name="username"
                        type="text"
                        required
                        title="Preencha com o nome de Tecnologia de Ratreamento "
                        maxLength={12} />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        name="senha"
                        type="password"
                        required
                        title="Preencha com o nome de Tecnologia de Ratreamento "
                        maxLength={256}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
              <Link to="/" style={{paddingLeft:10}}>Já possui uma conta? Acesse</Link>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  };

export default Cadastro;
