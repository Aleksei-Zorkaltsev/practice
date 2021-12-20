<template>
    <div class="header_browseSearch">
        <form class="browseSearch">
            <a class="browse" href="#">Browse<i class="fa fa-caret-down" aria-hidden="true"></i>
            </a>
            <input class="searchtop" type="text" placeholder="Search for item...">
            <button type="submit" class="buttopSearchTop" @prevent><i class="fas fa-search"></i></button>
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
