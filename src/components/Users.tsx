
interface Props{
    users : {id:number,username:string,password:string,role:string}[];
}

function Users(props:Props){

    return(
        <div>{props.users.map((user:{id:number,username:string,password:string,role:string}) => <ul key={user.id}>{user.username}</ul>)}</div>
    )
}

export default Users;