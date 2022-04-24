<template>
    <h1>这是父组件</h1>
    <child-vue from="father" msg="I am father" @popmsg="popmsg"></child-vue>
</template>

<script>
import ChildVue from "../components/Child.vue"

export default {
    methods: {
        popmsg() {
            alert('This Message is From Father.');
        }
    },
    components: {
        ChildVue,
    },
}
</script>