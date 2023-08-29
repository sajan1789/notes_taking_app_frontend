import React from "react";
import { useLocation ,Navigate} from "react-router-dom";
import { useToast } from "@chakra-ui/react";
export const PrivateRoute=({children})=>{
    const toast = useToast()
    const location=useLocation();
    const token=localStorage.getItem("token")
    if(!token){
          
        toast({
            position: 'top',
            title: "Please Login First",
           
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
          return <Navigate state={location.pathname} to={"/login"} replace/>
    }
    return children;
}







