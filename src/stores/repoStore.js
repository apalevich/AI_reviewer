import { defineStore } from "pinia";

export const useRepoStore = defineStore({
    id: 'repo',
    state: () => ({
        data: null
    }),
    actions: {
        loadRepoData(data) {
            this.data = data;
        }
    },
    getters: {
        repoData () {
            return this.data;
        }
    }
})