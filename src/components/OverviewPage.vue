<template>
    <h1>Repo Overview page</h1>
    <p>
        Passed info:
        <ul>
            <li>author: {{ userName }}</li>
            <li>repository: {{ repoName  }}</li>
        </ul>
    </p>
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