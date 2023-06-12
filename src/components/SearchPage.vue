<template>
    <div class="w-screen h-screen bg-indigo-500 flex items-center justify-center flex-col">
        <form @submit.prevent="getRepo" class="flex flex-col">
            <label for="url">Paste link to a public GitHub repository</label>
            <input type="url" name="url" id="url" v-model="url" required placeholder="https://github.com/">
            <button type="submit">Get data</button>
        </form>
        <pre>{{ res }}</pre>
    </div>
</template>
<script>
export default {
    name: 'SearchPage',
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

            try {
                const response = await fetch(`http://localhost:8000/getrepo/${owner}/${repo}`);
                const data = await response.json();
                this.res = atob(data.content);
                console.log('data', atob(data));
            } catch (error) {
                console.error(error)
            }
        }
    },
}
</script>