"use client"


export default function Chat ({username,room} : {username:string,room:string}){
    return(
        <>
            <div>
                <p>{username}</p>
                <p>{room}</p>
            </div>
            <div>

            </div>
        </>
    )
}