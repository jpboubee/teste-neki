import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/User/LoginUser';
import Cadastro from '../pages/User/CadastroUser'
import ListagemUserSkill from '../pages/UserSkill/ListagemUserSkill';


function Rotas() {
	return (
		<Switch>
			<Route path="/" component={Login} exact/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/home" component={ListagemUserSkill}/>
		</Switch>
	)
}

export default Rotas;