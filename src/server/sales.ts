import { api } from "./axios";

interface IsendSales
{
  id:string,
  file:FileList
}
export async function sendSales({id,file}:IsendSales)
{
  const formData = new FormData();
   
  formData.append("id",id);
  formData.append("file",file[0]);

  const response = await api.post("/sales",formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  
  return response
}