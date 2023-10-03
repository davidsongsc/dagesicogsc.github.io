import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import Footer from "../Footer";
import BaseLogo from "../BaseLogo";
import Painel from "../usuario/Painel";
import { loginUser } from "../../redux/user/actions";



function Login({ api }) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [usuario, setUsername] = useState("");
  const [senha, setPassword] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const chave = 'abc123'

  const handleLoginState = (response) => {
    dispatch(
      loginUser(response)
    )
  }

  const handleLogin = (event) => {
    if (usuario != "" && senha != "") {
      event.preventDefault();
      $.ajax({
        url: "https://dagesico.pythonanywhere.com/login",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
          username: usuario,
          password: senha
        }),

        // Armazenar o token de acesso no cookie ou no armazenamento local

        success: function (response) {
          sessionStorage.setItem('usuario', response.usuario.toString());
          sessionStorage.setItem('id', JSON.stringify(response.id));
          sessionStorage.setItem('pedidoIdUsuario', JSON.stringify(response.pedido));
          sessionStorage.setItem('autenticado', true);
          localStorage.setItem('autenticado', true);
          localStorage.setItem('access_token', JSON.stringify(response.access_token));
          localStorage.setItem('usuario', JSON.stringify(response.usuario));
          localStorage.setItem('pedidoIdUsuario', parseInt(response.pedido).toString());
          setAutenticado(true);
          handleLoginState(response);
          history('/fila');
        },
        error: function (error) {
          
          setAutenticado(false);
          alert('Usuario ou Senha invalidos. Clique em "Esqueceu a senha?" para redefinir sua senha.');
        }
      });
    }
    else {
      alert("Por favor, entre com um usuario e senha validos!")
    }

  }
  const handleEsqueceuSenha = () => {
    if (usuario != "") {
      alert(`Um email sera enviado para o usuario: ${usuario}.`)
    }
  };
  useEffect(() => {
    // Recupere os dados do localStorage
    const autenticadoLocalStorage = localStorage.getItem('autenticado');
    const usuarioLocalStorage = JSON.parse(localStorage.getItem('usuario'));

    // Verifique se o usuário está autenticado
    if (autenticadoLocalStorage && usuarioLocalStorage) {
      setAutenticado(true);

    }
  }, []);

  useEffect(() => {
    const token = chave;
    

    fetch(`https://dagesico.pythonanywhere.com/usuario?nome=${JSON.parse(localStorage.getItem('usuario'))}&token=${token}`)
      .then(response => response.json())
      .then(data => {
        sessionStorage.setItem('usuario', data.nome);
      })
      .catch(error => {
        
      });

  }, []);


  function handleLogout() {
    // Limpa o cache da sessão
    window.sessionStorage.clear();

    // Limpa o cache do armazenamento local
    window.localStorage.clear();

    // Recarrega a página para aplicar as alterações
    window.location.reload();

    setAutenticado(false);



  }

  return (
    <div>
      <BaseLogo api={api} />
      {autenticado === false && (
        <div className='login-grupo-stantment'>

          <div className='area-login'>

            <div className='i-l-b-login-g'>
              <input
                type="text"
                placeholder="ID"
                value={usuario}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button onClick={handleLogin}>Login</button>
              <>
                <p>Entre com seu ID e Senha. <br /></p>
                <p>Ainda não é cadastrado? Cadastre-se aqui!</p>
                <button onClick={handleEsqueceuSenha}>Esqueceu a senha?</button>
              </>
            </div>
          </div>
        </div>
      )}
      <Painel
        autenticado={autenticado}
        handleLogout={handleLogout}
      />
      <Footer />
    </div>
  );
}

export default Login;
