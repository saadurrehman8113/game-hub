import axios from 'axios'

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'809e58c9e012453fa1a6d384b3a5fb9a'
    }
})

