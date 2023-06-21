<template>
    <v-container class="flex-column">
        <v-row class="align-center flex-column w-100">
            <h1 class="text-h1 font-weight-medium">AI Reviewer</h1>
        </v-row>
        <v-row class="align-center flex-column w-100">
            <v-form @submit.prevent class="w-50 d-flex">
                <v-text-field
                    label="Link to the public repo on GitHub"
                    variant="solo"
                    bg-color="white"
                    autofocus
                    clearable
                    v-model="url"
                ></v-text-field>
                <v-btn
                    type="submit"
                    @click="getRepo"
                    :loading="loading"
                    icon="arrow_forward"
                    width="56"
                    height="56"
                />
            </v-form>
        </v-row>
    </v-container>
</template>
<script>
import { mapActions, mapStores } from 'pinia';
import { useRepoStore } from '@/src/stores/repoStore';

export default {
    name: 'SearchPage',
    data() {
        return {
            loading: false,
            url: 'https://github.com/apalevich/react-chatgpt-clone/blob/main/package.json',
        }
    },
    computed: {
        ...mapStores(useRepoStore),
    },
    methods: {
        ...mapActions(useRepoStore, ['setRepo']),
        parseUrl() {
            const processedUrl = new URL(this.url);
            const [owner, repo] = processedUrl.pathname.slice(1).split('/');
            return {
                owner,
                repo
            };
        },
        async getRepo() {
            this.loading = true;
            const { owner, repo } = this.parseUrl();
            try {
                const response = await fetch(`http://localhost:8000/getrepo/${owner}/${repo}`);
                const data = await response.json();
                
                if (data.status) {
                    throw new Error(data.message);
                }

                this.setRepo(data);
                this.$router.push({ path: `/${owner}/${repo}` })
            } catch (error) {
                alert('Something wrong');
                console.error(error);
            }
            this.loading = false;
        }
    },
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 72px;
  background: -webkit-linear-gradient(#FAFBFC, #414040);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.v-form {
    gap: 12px;
}
</style>