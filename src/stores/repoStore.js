import { defineStore } from "pinia";

export const useRepoStore = defineStore({
    id: 'repo',
    state: () => ({
        author: null,
        repoData: null,
        content: null
    }),
    actions: {
        setAuthor () {
            if (this.repoData) {
                this.author = this.repoData.owner;
            }
        },
        setRepo(data) {
            this.repoData = data;
            this.setAuthor();
        },
        setContent(data) {
            this.content = data;
        },
        updateContent(name, content, location = this.content) {
            const idx = location.findIndex(el => el.name === name);
            location[idx].content = content;
        }
    },
    getters: {
        authorName: (s) => s.author.login,
        repoName: (s) => s.repoData.name,
    }
})