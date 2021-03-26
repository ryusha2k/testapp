import { useState, useEffect } from "react";
import './Users.css'


const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(async () => {
        setIsLoading(true);
        await fetch("https://watchlater.cloud.technokratos.com/get/array")
            .then(response => response.json()).then(data => {
                setUsers(data);
                setIsLoading(false);
            })
    }, []);
    if (isLoading) {
        return <div> ..loading </div>;
    }


    const Users = (data) => {
        switch (data) {
            case 0:
                return "заблокировано"
            case 1:
                return "подписка активна"
            case 2:
                return "приостановлена"
                default:
                    break;
        }
    }



    return (<div className="content"> {
        users.map(el => < ul >
            <li className="spisok" >
                <img className="avka" src={el["avatar"]} />
                <div className="name">{el["fname"]}</div>
                <div className="balance">Баланс: {el["balance"].toFixed(1)}</div>
                <div className="time">Последнее изменение: {el["lastUpdatedAt"]}</div>

                <select className="status">
                    <option value="Приостановлена">{el["status"]}</option>
                    <option value="Подписка активна">{el["status"]}</option>
                    <option value="Заблокирована">{el["status"]}</option>
                </select>
            </li> </ul>)
    } </div>);
};
export default Users;