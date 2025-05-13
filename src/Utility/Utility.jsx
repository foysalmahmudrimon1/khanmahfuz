
import { toast, Zoom } from "react-toastify"



const getDataFromDB = ()=>{
    const jsonData = localStorage.getItem('lawyer') 
   
    return jsonData ? JSON.parse(jsonData) : []
}

const setDataToDB = (id,name='', navigate) =>{
    const data = getDataFromDB()
    if(data.includes(id)){
        toast.warning(`You have already an appoinment with ${name}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            });
    }else{
        data.push(id)
        localStorage.setItem('lawyer',JSON.stringify(data))

        toast.success(`You have successfully booked an appoinment with ${name}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            });

        navigate('/my-bookings')
    }
  
}

export {getDataFromDB,setDataToDB}