<template>
    <h2>这是子组件</h2>
    <grandchild-vue v-bind="$attrs"></grandchild-vue>
</template>

<script>
import GrandchildVue from "./Grandchild.vue"

export default {
    components: {
        GrandchildVue,
    },
}
</script>