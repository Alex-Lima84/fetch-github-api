import { getUser } from '../scripts/services/user.js'
import { getRepositories, getRepositoriesActivities } from '../scripts/services/repositories.js'
import { user } from '../scripts/objects/user.js'
import { screen } from '../scripts/objects/screen.js'


document.getElementById('btn-search').addEventListener("click", () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener("keyup", (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert("Preencha o campo com um nome de usuário do Github")
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)
    
    if (userResponse.message === 'Not Found'){
        screen.renderNotFound() 
        return
    }

    const repositoriesResponse = await getRepositories(userName)    
    const repositoriesActivities = await getRepositoriesActivities(userName) 
    
    

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse) 
    user.setActivities(repositoriesActivities) 
    screen.renderUser(user)   
}
  

