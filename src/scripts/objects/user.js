const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: 0,
    following: 0,
    repositories: [],
    activities: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setActivities(activities) {
        this.activities = activities
    }
}

export { user }