import { ReactNode } from "react";
import { Container } from "./styles";

interface Itable
{
  children:ReactNode;
  fields:string[];
  title:string;
  description?:string;
  length?:number|string;
}

export default function Table({fields,children,title,description,length}:Itable) 
{
  return (
   <Container>
      <strong>
        {title}
      </strong>
      
      {
        description&&
        <p>
           {
            description
           }
        </p>
      }

      <table>
              <thead>
                  <tr>
                     {
                      fields.map(field =>(
                        <th key={field}>
                          {
                            field
                          }
                        </th>
                      ))
                     }
                  </tr>
              </thead>
                <tbody>
                 {
                  children
                 }
                 {
                  length&&(
                   <tr>
                    <td>
                     registros
                    </td>
                    <td>
                     {  length }
                    </td>
                   </tr>
                  )
                 }
                </tbody>
              </table>
   </Container>)
}