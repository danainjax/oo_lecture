   
class User {
    static all = []
    constructor(name, age, hobby){
        this.name = name
        this.age = age
        this.hobby = hobby
        User.all.push(this)
        
    }
    render(){
       
        return list.innerHTML += `
            <tr>
                <td>${this.name}</td>
                <td>${this.age}</td>
                <td>${this.hobby}</td>
            </tr>
            `
    }

    static listUsers(){
        const list = document.getElementById("list");
        list.innerHTML = " "
        User.all.forEach(u=> list.innerHTML += u.render())
       
    }
   
    
}

function createUser() {
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let hobby = document.getElementById("hobby");

    const user = new User(name.value, age.value, hobby.value)
    // user.render()
    // console.log(user)
    User.listUsers()
    
    name.value = " "
    age.value = " "
    hobby.value = " "
}
// function User(name, age, hobby) {
//     this.name = name
//     this.age = age
//     this.hobby = hobby
// }
// User.prototype.addUser = function(){
//     const list = document.getElementById("list");
//     list.innerHTML = `
//         <tr>
//             <td>${this.name}</td>
//             <td>${this.age}</td>
//             <td>${this.hobby}</td>
//         </tr>
//         `
//         console.log(this.name)
// }




    

    



