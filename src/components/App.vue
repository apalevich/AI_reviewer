<template>
    <div class="w-screen h-screen bg-indigo-500 flex items-center justify-center flex-col">
        <form @submit.prevent="getRepo" class="flex flex-col">
            <label for="url">Paste link to a public GitHub repository</label>
            <input type="url" name="url" id="url" v-model="url" required placeholder="https://github.com/">
            <button type="submit">Get data</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'EntryPage',
    data() {
        return {
            url: '',
            res: {},
        }
    },
    methods: {
        async getRepo() {
            const url = new URL(this.url);
            const [owner, repo] = url.pathname.slice(1).split('/');
            console.log(owner, repo);

            try {
                const response = await fetch(`http://localhost:8000/getrepo/${owner}/${repo}`);
                const data = await response.json();
                this.res = data;
                console.log('data', data);
            } catch (error) {
                console.error(error)
            }
        }
    },
}
</script>
<style scoped>

</style>