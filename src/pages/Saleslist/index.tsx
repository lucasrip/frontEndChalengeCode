import { Container, SalesValuesContainer, TableBody } from "./styles";
import listIcon from '../../assets/list.svg'
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { aboutValues, findByFilter } from "../../server/sales";
import { IfindByFilter, IsalesData } from "../../types/sales";
import { useContext, useState } from 'react';

import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Context from "../../context";
import IsaleValue from "../../types/salesValues";
import SaleItemInformation from "../../components/SaleitemInformation";
import { useEffect } from 'react';

export default function SalesList() 
{
  
  const [salesData, setSelasData] = useState({} as IsalesData);
  const [salesValues, setSelasValues] = useState([] as IsaleValue[]);
  
  const tipos = ["Venda produtor","Venda afiliado","Comissão paga","Comissão recebida"]
  
  const {user,setUser} = useContext(Context);
  
    useEffect(()=>{
          const initialConfig:IfindByFilter = {
        id:user?.id,
        limit:5,
        offset:0,
        field:"vendedor",
        order:"asc"
      }
      searchMutate(initialConfig)
      searchSalesValuesMutation(user.id);

      
    },[]);

    
    const { mutate:searchMutate} = useMutation((config:IfindByFilter)=> findByFilter(config), {
    onSuccess:(dataResult:any) =>{ 
     
      setSelasData(dataResult.data)
    } ,
    onError: () => {toast.error("there was an unexpected error please try again later")},
   });

    const { mutate:searchSalesValuesMutation} = useMutation((id:string)=> aboutValues(id), {
    onSuccess:(dataResult:any) =>{ 
     
     setSelasValues(dataResult.data)
    } ,
    onError: () => {toast.error("there was an unexpected error please try again later")},
   });

 
  return (
   <Container>
      <header>
        <div/>
        <img 
          src={listIcon} 
          alt="pagina de submit de vendas" 
          title="pagina de submit de vendas" 
        />
        <h1>
          send sales
        </h1>

     </header>
     <SalesValuesContainer>
      {
        salesValues?.map((saleValue,index) =>(
          <SaleItemInformation
            key={index}
            count={saleValue.count}
            title={saleValue.name}
            icon={""}
            value={saleValue.valor}
            index={index}
          />
        ))
      }
     </SalesValuesContainer>
      <Pagination
       isFilter={true}
       numberPosts={Number(salesData.count)}
       changePage={(config:IfindByFilter) => searchMutate(config)}
       userId={user?.id}
      />
     <TableBody>
      
  

       <Table
         title="Todas as vendas"
         fields={["tipo","data","produto","valor","vendedor"]}
         length={salesData.count}
        >
        {
          salesData?.data?.map((sale,index)=>{
            const valor  =  (Number(sale.valor)/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });
            const saleTipo:string = tipos[(Number(sale.tipo) -1 ) as keyof string[]] as string;
            const key = sale.vendedor + index;
            return (
              <tr key={key}>
                <td>{saleTipo}</td>
                <td>{sale.data}</td>
                <td>{sale.produto}</td>
                <td>{valor}</td>
                <td>{sale.vendedor}</td>
              </tr>
            )
          })
        }
        </Table>
     </TableBody>
   </Container>)
}