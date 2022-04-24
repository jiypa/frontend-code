<template>
    <h3>这是孙组件</h3>
    <h3>{{$attrs.from}}-{{$attrs.msg}}</h3>
    <button @click="$attrs.onPopmsg">点我一下</button>
</template>