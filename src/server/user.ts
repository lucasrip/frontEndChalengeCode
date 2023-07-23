import { IFormData } from '../types/formData';
import {Iuser} from '../types/user';
import { api } from './axios';

export async function registerUser({nome,email,senha}:Iuser)
{
  return await api.post('/users',{nome,senha,email});
}

export async function loginUser({nome,email,senha}:Iuser)
{
  const response = await api.get('/findUser',{params:{nome,senha,email}});
  return response;
}

export async function recoverUser(data:IFormData)
{
  const recoverDataFormat ={
    nome:data.nome,
    email:data.email,
    senhaAtual:data.senhaAtual,
    novaSenha:data.novaSenha
  };

  const response = await api.put('/recoverUser',recoverDataFormat);
  return response;
}