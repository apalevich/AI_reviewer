<template>
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
    <v-list>
        <v-list-item
            v-for="item in content"
            :key="item.sha"
            :title="item.name"
            :prepend-icon="item.type === 'file' ? 'description' : 'folder'"
        />
    </v-list>
    </v-navigation-drawer>

    <v-main >
        <h1>{{this.authorName}}</h1>
        <h2>{{this.repoName}}</h2>
    </v-main>
</template>
<script>
import { mapStores } from 'pinia';
import { useRepoStore } from '@/src/stores/repoStore';
// import FileListItem from './FileListItem.vue';

export default {
    name: 'OverviewPage',
    data() {
        return {
            repoLoading: false,
            authorName: 'apalevich',
            repoName: 'react-chatgpt-clone',
            content: null,
        }
    },
    computed: {
        ...mapStores(useRepoStore),
    },
    mounted() {
        this.repoStore.setAuthor(this.repoStore.getRepo.owner)
        this.getContent()
    },
    methods: {
        async getContent() {
            this.repoLoading = true;
            
            try {
                const response = await fetch(`http://localhost:8000/getcontent/${this.authorName}/${this.repoName}`);
                const data = await response.json();

                this.repoStore.setContent(data);
                this.content = data;
            } catch (error) {
                alert('Something wrong');
                console.error(error);
            }
            this.loading = false;
        }
    }
}
</script>