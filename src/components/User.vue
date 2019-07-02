<template>
    <transition name="fade">
        <div>
            用户{{ id}},{{nam}}
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['id', 'nam'],
        created() {

        }
    }
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>