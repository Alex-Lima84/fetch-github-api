import { baseUrl, repositoryQuantity, activityQuantity } from '/src/scripts/variables.js'


async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoryQuantity}`)
    return await response.json()
}

async function getRepositoriesActivities(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${activityQuantity}`)
    return await response.json()
}



export { getRepositories, getRepositoriesActivities }

