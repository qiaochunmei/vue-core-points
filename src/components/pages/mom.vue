<template>
    <!-- 父组件调用子组件方法
    首先在子组件中定义好方法，在父组件里引入子组件后，在使用子组件时，绑定一个ref，这样就可以实现父组件调用子组件的方法 -->
    <div>
        <kid ref="child"></kid>
        <button @click="click">click</button>
    </div>
</template>
<script>
import kid from "./kid.vue";
export default {
  components: {
    kid
  },
  methods: {
    click() {
      this.$refs.child.init();
    }
  }
};
</script>

