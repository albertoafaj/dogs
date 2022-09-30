import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setKey(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validade()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const response = await request(url, options)
      if (response.ok) navigate('/login');
    }
  }

  return (
    <div>
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}></form>
      <Input label="Nova Senha" type="password" name="password" {...password} />
      {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      <Error error={error} />
    </div>
  )
}

export default LoginPasswordReset
