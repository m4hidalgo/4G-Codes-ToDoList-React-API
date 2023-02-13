export const getList = async () => {
    try {
        const URL = "https://assets.breatheco.de/apis/fake/todos/user/"
        const myUserName = "m4hidalgo"
        const response = await fetch(`${URL}${myUserName}`); 
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        console.error("GET error: ", error);
    }
    
}