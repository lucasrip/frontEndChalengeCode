import { createContext } from 'react';
import { IuserData } from '../types/user';

type MyContextProps = {
 user:IuserData;
 setUser: React.Dispatch<React.SetStateAction<IuserData>>;
};
const Context = createContext({} as MyContextProps);

export default Context;