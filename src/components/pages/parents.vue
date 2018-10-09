<template>
    <!--    子组件给父组件传值
    首先在父组件中引入子组件，定义一个方法接受子组件传递的值，如果只需要知道子组件完成某项操作，可以不传值，只定义方法 -->
    <childs @childToParent="child"></childs>
</template>
<script>
import childs from './childs';
export default {
    components:{
        childs
    },
    methods:{
        child(data){//接受子组件传递的参数
            console.log(data);
        }
    }
}
</script>

