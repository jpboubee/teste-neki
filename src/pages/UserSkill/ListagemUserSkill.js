import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import axios from "../../config/axiosMaquina/axios";


const ListagemUserSkill = () => {
  const [userSkills, setUserSkills] = useState([]);

  //const history = useHistory();
  const usuarioId = 2;

  const { username } = useParams();

  useEffect(() => {
    loadUserSkills();
  },[]);

  const loadUserSkills= async () => {
    const response = axios.get(`/userSkill` , {
        params:{
            username:username,
          },
        });
    }
  
  return (
      <Container>
          <Row>
              <Col></Col>
              <Col xs={8}>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Skill</th>
          <th>Knowledge Level</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {userSkills.map((us,index) => (
            <tr>
                <td>
                {us.skill.name}
                </td>
                <td>{us.knowledgeLevel}</td>
                <td>{us.createdAt}</td>
                <td>{us.updatedAt}</td>
            </tr>
        ))}

        
      </tbody>
    </Table>
    </Col>
    <Col></Col>
    </Row>
    </Container>
  );
};

export default ListagemUserSkill;
