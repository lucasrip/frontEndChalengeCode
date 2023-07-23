import { Container, Main } from './styles';
import Logo from '../../assets/logo.png';
import Draw from '../../assets/saleImage.png';
import Button from '../../components/Button';
import { useState } from 'react';
import Form from '../../components/Form';
import { IFormData } from '../../types/formData';
import { toast } from 'react-toastify';
import {Iuser} from '../../types/user';
import { loginUser, registerUser } from '../../server/user';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

interface IoptionsConfig
{
  label:string,
  action:(data:IFormData)=> void
}

export default function Home() 
{
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [optionsConfig, setOptionsConfig] = useState<IoptionsConfig>({} as {
    label:'',
    action:(data:IFormData)=> void
  });

  function handleRegister(data:IFormData)
  {
    registerMutate(data);
  } 

  function handleLogin(data:IFormData)
  {
    loginMutate(data);
  } 

  const {mutate:registerMutate } = useMutation((data:Iuser) => registerUser(data),{
    onSuccess:() => {
      toast.success('cadastro realizado com sucesso');
      setFormIsOpen(false);
    } ,
    onError: (data:AxiosError) => {
      const error = data?.response?.data as string;
      toast.error(error);
    },
  });

  const {mutate:loginMutate } = useMutation((data:Iuser) => loginUser(data),{
    onSuccess:(response) => {
      toast.success(`logado com sucesso, seja bem vindo ${response.data.nome}`);
      setFormIsOpen(false);
    } ,
    onError: (data:AxiosError) => {
      const error = data?.response?.data as string;
      toast.error(error);
    },
  });

  return (
    <Container>
      <header>
        <img 
          src={Logo} 
          alt="logo do sistema de gestao de venda" 
          title="logo do sistema de gestao de venda"
        />      
      </header>
      
      <Main>
        <div>
          <img 
            src={Draw} 
            alt='ilustração da home'
            title='ilustação da home'
          />
        </div>
        <div>
     
          {
            !formIsOpen?
              <>
                <h1>
                  A sales control management é um  sistema para
                  controle de venda de produtos vendidos pelo 
                  produtores e pelos seus afiliados
                </h1>
                <h2>
                  cadastrece para ser um afiliado e poder receber pelas suas 
                  vendas ou faça login para poder fazer a gestão das suas 
                  compras e vendas
                </h2>
                <div>
                  <Button
                    action={()=>{
                      setFormIsOpen(true);
                      setOptionsConfig({
                        label:'cadastrar',
                        action:(data:IFormData)=> (handleRegister(data))
                      });
                    }}
                    text="Cadastrar"
                    typeStyle='base'
                    title={{
                      noDisabled:'botao para se cadastrar no sistema'
                    }}
                  />
                  <span>
              ou
                  </span>
                  <Button
                    action={()=>{
                      setFormIsOpen(true);
                      setOptionsConfig({
                        label:'logar',
                        action:(data:IFormData)=> (handleLogin(data))
                      });
                    }}
                    text="Logar"
                    typeStyle='positive'
                    title={{
                      noDisabled:'botao para se logar no sistema'
                    }}
                  />
                </div>
              </>
              :
              <Form
                setFormIsOpen={(isOpen:boolean)=>setFormIsOpen(isOpen)}
                optionsConfig={optionsConfig}
                setOptionsConfig={setOptionsConfig}
              />
          }
        </div>
      </Main>
    </Container>);
}