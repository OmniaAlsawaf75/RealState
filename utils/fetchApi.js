import axios from "axios";

export const baseUrl ='https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '94040de489msh45755f1e8de478dp17c26bjsn5659960ca1b4',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}