import { IfindByFilter, IsendSales } from '../types/sales';
import { api } from './axios';

export async function sendSales({id,file}:IsendSales)
{
  const formData = new FormData();
   
  formData.append('id',id);
  formData.append('file',file[0]);

  const response = await api.post('/sales',formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  
  return response
}

export async function findByFilter(data:IfindByFilter)
{
  const response = await api.get('/sales/findBy', { params:data});
  
  return response
}

export async function aboutValues(id:string)
{

  const response = await api.get('/sales/aboutValues', { params:{id}});

  return response

}