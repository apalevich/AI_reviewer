<template>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!</div>
    <v-form @submit.prevent>
        <v-text-field
        label="Link to the public repo on GitHub"
        variant="outlined"
        ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
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