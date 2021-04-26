export default{
    login:(user)=>{
        return fetch("/login",{
    method:"post",
    body:JSON.stringify(user),
    headers:{
        "Content-Type":"application/json",
    },
}).then((res)=>{
    if(res.status !== 401) return res.json().then((data)=>data);
    else return {isAuthenticated : false, user:{username:""}}
        })
    },
    register :(user)=>{
        return fetch("/register",{
            method:"post",
            body:JSON.stringify(user),
            headers:{"Content-type":"application/json"},
        }).then((res) => res.json()).then((data)=>data)

    },
    logout:()=>{
        return fetch("/logout").then((res)=>{
            res.json()
        })
    },
    isAuthenticated:()=>{
        return fetch("/authenticated").then((res)=>{
            if(res.status !== 401)return res.json().then((data)=> data)
            else return {isAuthenticated:false, user:{username:"", _id:""}}
        })
    }
}