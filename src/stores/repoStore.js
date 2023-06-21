import { defineStore } from "pinia";

export const useRepoStore = defineStore({
    id: 'repo',
    state: () => ({
        author: null,
        repo: null,
        content: null
    }),
    actions: {
        setAuthor (data) {
            this.author = data
        },
        setRepo(data) {
            this.repo = data
        },
        setContent(data) {
            this.content = data
        },
    },
    getters: {
        getAuthor: (s) => s.author,
        getRepo: (s) => s.repo,
        getContent: (s) => s.content,
    }
})