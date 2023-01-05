import axios from 'axios'
let backEndurl = "https://appicaso.onrender.com/api"
// let local = "http://127.0.0.1:8000/api"

// if(process.env.NODE_ENV === 'production'){
//     backEndurl = '/api'
//    }
// export const openAiReq = axios.create({
//     baseURL:url ,
//     headers: {
//       Authorization : `Bearer ${process.env.OPENAISERCRETKEY}`
//       }
//     },
//     )

    export const imageProcessing = axios.create({
      baseURL: backEndurl
    })
