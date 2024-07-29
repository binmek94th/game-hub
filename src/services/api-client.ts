import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '4bf42505ed18487e9263047431c8f749'
    }
})