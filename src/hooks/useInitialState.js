import {useState,useEffect} from "react";
const axios = require('axios');

const useInitialState = async (URL)=>{
    const [dato,setDato]= useState([]);

    useEffect(()=>{

        
 

       axios.get(URL)
        .then(function (response) {
            setDato(response.data)
        })
        .catch((err)=> console.log(err))
    


        },[]);

        return dato
        
}

export default useInitialState;