import { Container, FileModelContainer, FormFile } from "./styles";
import submitSalesIcon from '../../assets/submit.svg'
import { toast } from 'react-toastify';
import { AxiosError } from "axios";
import { useMutation } from 'react-query';
import { useForm } from "react-hook-form";
import Button from "../../components/Button";

import fileModel from '../../assets/salesModelo.txt'
import { formatItemsSales } from "./formatItemsSales";
import { tiposTrasacao } from "./tiposTransação";
import Table from "../../components/Table";
import { sendSales } from "../../server/sales";
import Context from "../../context";
import { useContext } from "react";

interface Ifile
{
  file:FileList;
}

interface IsendSales
{
  id:string,
  file:FileList,
}

export default function SubmitSales() 
{
  
  const {user,setUser} = useContext(Context);
  
  const {
    register,
    setValue,
    handleSubmit,
    watch,
  } = useForm<Ifile>();
  
  const fileState = watch("file")

  function dropFile(e:any)
  {
    e.preventDefault();
    let files:FileList = {} as FileList;
    if (e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === 'file') {
           files[0] = e.dataTransfer.items[i].getAsFile();
          }
        }
      } else {
        toast.error("o arquivo enviado não é valido")
      }
      setValue("file",files);
  }
  function dragOverHandler(e:any)
  {
    e.preventDefault();
  }

  const {mutate:sendSalesMutate } = useMutation((data:IsendSales) => sendSales(data),{
    onSuccess:() => {
      toast.success('vendas enviadas com sucesso');
    } ,
    onError: (data:AxiosError) => {

      const error = data?.response?.data as string;
      toast.error(error);
    },
  });
 

  const onSubmit = handleSubmit((data) => {

    const id = user?.id;
    const file = data.file;
    console.log(data)
    const salesData = {
      id,
      file
    }
    sendSalesMutate(salesData)

  });
  
  return (
   <Container>
     <header>
      <div/>
      <img 
        src={submitSalesIcon} 
        alt="pagina de submit de vendas" 
        title="pagina de submit de vendas" 
      />
      <h1>
        send sales
      </h1>
     </header>

     <FileModelContainer>
          <div>
            <strong>
              arquivo modelo :
            </strong>
            <a
            href={fileModel} 
            target="blank"
            download
            >
              arquivo 
            </a>
          </div>

          <Table
           fields={["campo","início","fim","tamanho","descrição"]}
           title={"Formato do arquivo de entrada"}
           >
            
          {
                  formatItemsSales?.map((field)=>(
                    <tr key={field.name}>
                      <td>{field.name}</td>
                      <td>{field.start}</td>
                      <td>{field.end}</td>
                      <td>{field.tamanho}</td>
                      <td>{field.descricao}</td>
                  </tr>
                  ))
                }
          </Table>

          <Table
           fields={["tipo","descrição","natureza"]}
           title={"Tipos de transação"}
           description="Esses são os valores possíveis para o campo Tipo"
           >   
           {
             tiposTrasacao?.map((field)=>(
                <tr key={field.tipo}>
                    <td>{field.descricao}</td>
                    <td>{field.natureza}</td>
                    <td>{field.natureza}</td>
                </tr>
              ))
            }
                         
          </Table>
          
        </FileModelContainer>

     <FormFile  onSubmit={onSubmit}>
  
        <label
         htmlFor="fileInput"
         title=" Jogue seu arquivo a baixo para cadastrar as suas vendas"
         id="drop_zone"
         onDrop={(e)=>dropFile(e)}
         onDragOver={(e)=>dragOverHandler(e)}
        >
          <img 
            src={submitSalesIcon} 
            alt="imagem de submit"
            title="imagem de submit do arquivo"
           />
             <p>
          Jogue seu arquivo a baixo para cadastrar as suas vendas
        </p>
        </label>
        <input 
          type="file" 
          id="fileInput"
          {...register("file")}
          name="file"
          accept=".txt"
          hidden
        />
       
       <Button
          disabled={fileState?false:true}
          text="Enviar"
          typeStyle='base'
          title={{
            noDisabled:'botao para enviar o seu arquivo de vendas',
            disabled:"voce precisa selecioanr um arquivo para enviar"
           }}
          />
    
     </FormFile>

   </Container>)
}