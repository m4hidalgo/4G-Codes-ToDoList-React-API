export const updateList = (newList) => {
    const URL = "https://assets.breatheco.de/apis/fake/todos/user/"
    const myUserName = "m4hidalgo"
    
    const requestParams = {
        method: "PUT",
        body: JSON.stringify(newList),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch(`${URL}${myUserName}`, requestParams)
}