<template>
    <div class="flex bg-grey-lighter h-full w-full fixed items-center content-center justify-center">
        <AppForms></AppForms>
    </div>
</template>

<script>
    import AppForms from './components/Forms.vue'
    export default {
        name: "App",
        components: {
            AppForms
        }
    }
</script>

<style scoped>

</style>
