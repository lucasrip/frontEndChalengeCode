import { ButtonsContainer, Container, RocoverPasswordContainer } from './styles';
import { useForm } from 'react-hook-form';

import Back from '../../assets/back.svg';
import Button from '../Button';
import { useState } from 'react';

import CloseEye from '../../assets/closeEye.svg';
import OpenEye from '../../assets/openEye.svg';
import { IFormData } from '../../types/formData';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { recoverUser } from '../../server/user';

interface Iform
{
   setFormIsOpen:(isOpen:boolean)=>void;
   optionsConfig:{
    label:string,
    action:(data:IFormData)=> void 
  };
  setOptionsConfig:(config:{
    label:string,
    action:(data:IFormData)=> void
  })=> void;
}
export default function Form({setFormIsOpen,optionsConfig, setOptionsConfig}:Iform) 
{
  const [recoverPassword,setRecoverPassword] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const {
    register,
    handleSubmit,
  } = useForm<IFormData>({
    defaultValues:{
     nome:"lucas",
     senha:"dddasd",
     email:"luDDcas32@gail.com"
    }
  });

  function handleRecoverPassword(data:IFormData)
  {
    recoverUserMutate(data);
  } 

  const {mutate:recoverUserMutate } = useMutation((data:IFormData) => recoverUser(data),{
    onSuccess:() => {
      toast.success('alteração de senha realizado com sucesso');
      setFormIsOpen(false);
    } ,
    onError: (data:AxiosError) => {

      const error = data?.response?.data as string;
      toast.error(error);
    },
  });

  const onSubmit = handleSubmit((data) => optionsConfig.action(data));
  
  return (
    <Container 
      onSubmit={onSubmit}
    >
      <header>
        <img 
          src={Back}
          alt="click aqui para voltar " 
          title="click aqui para voltar " 
          onClick={()=>setFormIsOpen(false)}
        />
        <p>
          {optionsConfig.label}
        </p>
      </header>
      <div>
        <div>
          <label htmlFor="nome">
          nome:
          </label>
          <input 
            type="text" 
            id="nome"
            {...register('nome')}
          />
        </div>
        <div>
          <label htmlFor="email">
           email:
          </label>
          <input 
            type="email"
            {...register('email')}
            id='email'
          />
        </div>
        {
          !recoverPassword?
            <div>
              <label htmlFor="senha">
          senha
              </label>
              <input 
                type={!seePassword?'password':'text'}
                {...register('senha')}
                id='senha'
              />
              {
                !seePassword?
                  <img 
                    src={OpenEye} 
                    alt="click para ver a senha" 
                    title="click para ver a senha"
                    onClick={()=> setSeePassword(true)}
                        
                  />
                  :
                  <img 
                    src={CloseEye} 
                    alt="click para fechar a senha" 
                    title="click para esconder a senha" 
                    onClick={()=> setSeePassword(false)}
                      
                  />
              }
            </div>
            :
            <RocoverPasswordContainer>
            
              <header>
                {
                  !seePassword?
                    <img 
                      src={OpenEye} 
                      alt="click para ver a senha" 
                      title="click para ver a senha"
                      onClick={()=> setSeePassword(true)}
                        
                    />
                    :
                    <img 
                      src={CloseEye} 
                      alt="click para fechar a senha" 
                      title="click para fechar a senha" 
                      onClick={()=> setSeePassword(false)}
                      
                    />
                }
              </header>
              <div>
                <label htmlFor="senhaAtual">
                  senha atual:
                </label>
                <input 
                  type={!seePassword?'password':'text'}
                  {...register('senhaAtual')}
                  id='senhaAtual'
                />
              </div>
              <div>
                <label htmlFor="novaSenha">
                  nova senha:
                </label>
                <input 
                  type={!seePassword?'password':'text'}
                  {...register('novaSenha')}
                  id='novaSenha'
                />
              </div>
              
            </RocoverPasswordContainer>
        }
        <ButtonsContainer>
          {
            !recoverPassword&&
          <Button
            action={()=> {
              setRecoverPassword(true);
              setOptionsConfig({
                label:'recuperar senha',
                action:(data:IFormData)=>handleRecoverPassword(data)
              });
            }}
            text="recuperar senha"
            typeStyle='default'
            title={{
              noDisabled:'botao para recuperar senha'
            }}
          />
          }

          <Button
            text={optionsConfig.label}
            typeStyle='base'
            title={{
              noDisabled:'botao para recuperar senha'
            }}
          />
          
        </ButtonsContainer>
      </div>
    </Container>);
}