<template>
    <div class="w-screen h-screen bg-indigo-500 flex items-center justify-center">
        <form action="/getrepo" method="get">
            <label for="url">Paste link to a public GitHub repository</label>
            <input type="url" name="url" id="url" required>
            <button type="submit">Get data</button>
        </form>
    </div>
</template>
<script>
</script>
<style scoped>

</style>