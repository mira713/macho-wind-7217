
import  axios  from 'axios';
import { ADDCART, GET_COMBO, GET_DISEASE, GET_MEDICINE, GET_PRODUCT } from './ProductType';
export const getProductFun=()=>async(dispatch)=>{

    try {
        let res=await axios.get("https://link-ten-zeta.vercel.app/vitamins-suppliments")
        dispatch({type:GET_PRODUCT,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

export const getComboFun=()=>async(dispatch)=>{

    try {
        let res=await axios.get("https://link-ten-zeta.vercel.app/combo")
        dispatch({type:GET_COMBO,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

export const getMedicineFun=()=>async(dispatch)=>{

    try {
        let res=await axios.get("https://link-ten-zeta.vercel.app/medicine")
        dispatch({type:GET_MEDICINE,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}

export const getDiseaseFun=()=>async(dispatch)=>{

    try {
        let res=await axios.get("https://link-ten-zeta.vercel.app/disease")
        dispatch({type:GET_DISEASE,payload:res.data})
        
    } catch (error) {
        console.log(error)
    }
}




  