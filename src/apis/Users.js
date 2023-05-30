import axios from "axios";
 export function createUser(user){
    return new Promise ((resolve,reject)=>{
        axios({
            url:"https://reqres.in/api/users",
            method:"POST",
            data: user,
            // headers:{
            //     'Authorization':``
            // }
        }).then((resp) => {
            resolve(resp.data);
        });
    });
}