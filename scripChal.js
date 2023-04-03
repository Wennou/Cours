const url = 'https://jsonplaceholder.typicode.com/todos';
let todo = document.querySelector('#todos');
const lien = (url) => {
let api = fetch(url)
.then((res) => res.json())
.then((res) => {
    const data = {}
    let i = 0;
    for(const {title, completed, userId} of res) {
        i++ ;
        if(i <= 3){
            data[i] = {title, completed, userId}
        }
        }
        
        return data;
    }
)
return api
}

function f1(url2){
    let api2 = fetch(url2)
.then((res) => res.json())
.then((res) => {
    return res.username
})
return api2
}
async function f2() {
    
    let data = await lien(url)
    for(let i = 1; i <= 3; i++){
    const url2 = `https://jsonplaceholder.typicode.com/users/${data[i]['userId']}`
    let data2 = await f1(url2)
    todo.innerHTML += `<li>${data2} : ${data[i]['title']}</li>`
    console.log(data2," : ", data[i]['title'])
}}
const data = f2()
