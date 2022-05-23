const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info"> 
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"}/>
                                        <div class="data"> 
                                            <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                                            <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                                        </div>
                                      </div>
                                      <div class="social-interaction">
                                        <div class="followers-info">
                                            <h2>👥 Seguidores</h2>
                                            <p>${user.followers ?? "Não possui seguidores 😢"}</p>
                                        </div>
                                        <div class="following-info">
                                            <h2>👥 Seguindo</h2>
                                            <p>${user.following ?? "Não está seguindo alguém 😢"}</p>
                                        </div>
                                      </div>`

        let repositoryItems = ''
        user.repositories.forEach(repo => repositoryItems += `<li>
                                                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                <span>🍴${repo.forks}</span>
                                                                <span>⭐${repo.stargazers_count}</span>
                                                                <span>👀${repo.watchers}</span>
                                                                <span>👩‍💻${repo.language ?? "Sem linguagem"}</span>
                                                              </li>`)                
       
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoryItems}</ul>
                                            </div>`
        }
    },
    renderNotFound (){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export { screen }