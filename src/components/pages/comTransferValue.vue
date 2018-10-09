<template>
    <div class="transferValue"> 
        <!-- vue组件之间页面传值 -->
        <!-- 1.路由传值
        注：使用params传值时，在页面刷新时，参数会消失，用query不会这样，取值方式为this.$route.params.paramName和this.$route.query.paramName 
           使用params传值时，也可以做到页面刷新，参数不丢失，在命名路由时这么定义即可
           {
                path: '/OrderDetail/:orderId/:type',
                name: 'OrderDetail',
                component: OrderDetail,
                meta: {
                    title: '订单详情',
                    needAuth: true
                }
            }
            使用时：
            this.$router.push({name: 'OrderDetail', params: {orderId: id, type: 'buy'}})
        -->
        <!-- 2.通过$parent，$children等方法调取层级关系的组件内的数据和方法 
            通常这样调用
            this.$parent.$data.id获取父元素data中的id
            this.$children.$data.id获取子元素data中的id
            该方法比较灵活，但是易造成代码冗余，维护困难-->
        <!-- 3.通过eventBus传递数据
          首先：使用前可以在全局定义一个eventBus window.eventBus = new Vue() 
          然后：在需要传递参数的组件中，定义一个emit发送需要传递的值，键名可以自己定义（可以是对象）eventBus.$emit('eventBusName',id)
          最后：在需要接受的组件中，用on接受该值（或对象）
          eventBus.$on('eventBusName',function(val){val即是传递过来的值
              console.log(val);
          })
          记得要在beforeDestory()中关闭这个eventBus eventBus.$off('eventBusName')
          举个例子：this.$emit('contractInstall', {contractId: this.contractDetail.contractId})
          -->
          <!-- 4.通过localStorage或者sessionStorage来存储数据
          setItem存储value
          用途：将value存储到key字段；用法：.setItem(key,value) 
          比如：sessionStorage.setItem("key", "value"); localStorage.setItem("site", "js8.in");
          getItem获取value
          用途：获取指定key本地存储的值；用法：.getItem(key)
          var value = sessionStorage.getItem("key"); var site = localStorage.getItem("site");-->
        eeffff
    </div>
</template>
<script>
export default {
  name: "transferValue",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // console.log(this.$route);
    // console.log(this.$router);
  }
};
</script>
