import { useState,useEffect } from "react";
import axios from "axios";
import utilities from "./utilities";


const useFetch = (endpoint,query,find) => {

    const {BearerKey,ipAdresse}=utilities();
    const [data,setData]=useState([]);
    const [isloading,setIsloading]=useState(false);
    const [error,setError]= useState(null);
    //const BearerKey="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxMTIyNTQ5MywiaWF0IjoxNzExMTg5NDkzfQ.KCc_HCYPUGRVSbjCI23lY7R_jcrYAors6EBfga76WgY";
    //console.log('test num 1',isloading);
    const options={
        method:'GET',
        url:`http://${ipAdresse}:8080/muslimApi/v1/${endpoint}`,
        headers:{
            //'Authorization':'Bearer '+BearerKey
        },
        params: {...query}, 
    };

    const fetchData=async() => {
        setIsloading(true);

        try{
            const response=await axios.request(options);
            if(find){
                setData(response.data);
            }else
            setData(response.data.content);
            setIsloading(false);
        }catch(error) {
            setError(error)
            //console.log(error);
            alert('un probleme est survenu lors du fetch, '+error)
        }finally {
            setIsloading(false);
        }
    }

    useEffect(() => {
        fetchData();

    }, []);
    const refetch = () => {
        setIsloading(true);
        fetchData();
    }


    return {data,isloading,error,refetch};
}
export default useFetch


//LOGIN
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "login": "root",
//   "password": "test"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://localhost:8080/muslimApi/v1/authentication/authenticate", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


//Get request with bearer Token


// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290IiwiZXhwIjoxNzA5MzIxMzg2LCJpYXQiOjE3MDkyODUzODZ9.PMb2c-gfY86W0rVsKKa7l5iT7MwXrFQj5aYnDxFtkOg");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("http://localhost:8080/muslimApi/v1/localisation/all?sortColumn=pays&page=0&taille=2&sortDirection=ascending", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));