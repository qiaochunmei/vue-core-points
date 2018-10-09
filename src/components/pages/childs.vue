<template>
    <!-- 子组件传递到父组件
    在子组件中定义一个方法，传值给父组件 -->
    <button @click="childClick">点击</button>
</template>
<script>
export default {
    methods:{
        childClick(){
            this.$emit("childToParent","I am child")
        }
    }
}
</script>

