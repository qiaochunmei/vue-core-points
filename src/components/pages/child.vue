<template>
    <!-- 子组件定义props接受父组件传递的值 -->
    <div>
        {{name}}
        {{age}}
        {{sex}}
    </div>
</template>
<script>
    export default {
        props: ['name','age','sex'],
        data() {
            return {
            };
        },
    };
</script>