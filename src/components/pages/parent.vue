<template>
    <!-- 父子组件传值
    1.父组件给子组件传值
    父组件中引入子组件，父组件的js中定义要传递的属性值，如下的写法是动态的传递，name可以通过定义方法，在方法里动态修改，如不需要动态的传递，则直接
    使用属性定义值 -->
    <child v-bind:name="name" v-bind:age="age" v-bind:sex="sex"></child>
</template>
<script>
    import child from './child.vue';
    export default {
        components: {
            child
        },
        data() {
            return {
                name:'里斯',
                age:12,
                sex:'男'
            };
        }
    };
</script>