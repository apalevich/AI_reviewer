<template>
    <v-app-bar title="Application bar">
        <v-btn @click="console.log(fileList)">LOG</v-btn>
    </v-app-bar>

    <v-navigation-drawer>
        <div v-if="repoLoading" class="text-center">
            <v-progress-circular indeterminate />
        </div>
        <v-list v-else v-model:opened="open" open-strategy="single">
            <template v-for="item in content">
                <v-list-group v-if="item.type === 'dir'" :value="item.name">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :title="item.name" />
                    </template>
                    <div class="text-center" v-if="!item.content">
                        <v-progress-circular indeterminate></v-progress-circular>
                    </div>
                    <v-list-item v-else prepend-icon="description" />
                </v-list-group>

                <v-list-item v-if="item.type === 'file'" :key="item.sha" :value="item.name" :title="item.name"
                    prepend-icon="description" @click="() => getFileContent(item.name)" />
            </template>
        </v-list>
    </v-navigation-drawer>

    <v-main class="pa-4">
        <template v-if="!selection.length">
            No file selected.
        </template>
        <template v-else>
            <pre v-html="selection" />
        </template>
    </v-main>
</template>
<script>
    import {mapStores, mapActions, mapState} from 'pinia';
    import {useRepoStore} from '@/src/stores/repoStore';
    // import FileListItem from './FileListItem.vue';

    export default {
        name: 'OverviewPage',
        data() {
            return {
                repoLoading: false,
                open: [],
                selection: '',
            }
        },
        computed: {
            ...mapStores(useRepoStore),
            ...mapState(useRepoStore, ['content', 'author', 'authorName', 'repoName'])
        },
        mounted() {
            this.loadContent();
        },
        methods: {
            ...mapActions(useRepoStore, ['setContent', 'updateContent', 'setAuthor']),
            async loadContent() {
                this.repoLoading = true;

                try {
                    const response = await fetch(`http://localhost:8000/getcontent/${this.authorName}/${this.repoName}`);
                    const data = await response.json();

                    this.setContent(data);
                } catch (error) {
                    alert('Something wrong');
                    console.error(error);
                }
                this.repoLoading = false;
            },
            async getFileContent(filename) {

                try {
                    const response = await fetch(`http://localhost:8000/getfile/${this.authorName}/${this.repoName}/${filename}`);
                    const data = await response.json();

                    console.log(data)
                    this.selection = data;
                } catch (error) {
                    alert('Something wrong');
                    console.error(error);
                }
            }
        }
    }
</script>
