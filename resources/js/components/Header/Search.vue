<template>
    <div class="header_browseSearch">
        <form class="browseSearch">
            <p class="browse">Browse</p>
            <input class="searchtop" type="text" placeholder="Search for item...">
            <button type="submit" class="buttopSearchTop" @prevent.default><i class="fas fa-search"></i></button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>

</style>
