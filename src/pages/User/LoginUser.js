import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import axios from "../../config/axiosMaquina/axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(true);
  

  const history = useHistory();

  const fazerLogin = async (event) => {
    try {
      event.preventDefault();
      const dados = {
        login: username,
        password: password,
      };
      const response = await axios.post(`user/login`, dados);
      console.log(response.data)
      if(response.data == "acesso permitido"){
        history.push(`/home?username=${username}`)
      }else{
          setValidate(false);
      }
      return;
    } catch (error) {}
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col xs={6}>
            <h1>Login</h1>
          <Form onSubmit={fazerLogin}>
              {!validate &&
                 <small style={{color: "#f00"}}>Nome de usuario ou senha invalidos!</small>   
              }
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
              Acessar
            </Button>
            <Link to="/cadastro" style={{paddingLeft:10}}>Ainda não tem conta? Cadastre-se</Link>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
