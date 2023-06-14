<template>
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer>
    <v-list>
        <v-list-item><v-list-item-title>File 1</v-list-item-title></v-list-item>
        <v-list-item><v-list-item-title>File 2</v-list-item-title></v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-main >
        <h1>{{userName}}</h1>
        <h2>{{repoName}}</h2>
    </v-main>
</template>
<script>
export default {
    name: 'OverviewPage',
    data() {
        return {
            userName: '',
            repoName: '',
        }
    },
    created() {
        this.author = this.$route.params.author;
        this.repoName = this.$route.params.repo;
    },
}
</script>