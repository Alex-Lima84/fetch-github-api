import { getUser } from './src/scripts/services/user.js'
import { getRepositories, getRepositoriesActivities } from './src/scripts/services/repositories.js'
import { user } from './src/scripts/objects/user.js'
import { screen } from './src/scripts/objects/screen.js'


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
    
    const activitiesList = document.querySelector(".activities-list")
    activitiesList.innerHTML = `<h2>Atividades</h2>`

    for (let i = 0; i < repositoriesActivities.length; i++) {
        const repositoriesInfo = repositoriesActivities[i];
        
        const getActivities = repositoriesInfo.payload.push_id
        if (getActivities === undefined){
           continue
        } 
        const commits = repositoriesInfo.payload.commits[0].message  
        const repoName = repositoriesActivities[i].repo.name;

        activitiesList.innerHTML += `<ul>
                                        <li>${repoName}: <span>${commits}</span></li>
                                     </ul>`       
      }  

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)  
    screen.renderUser(user)   
}
  

