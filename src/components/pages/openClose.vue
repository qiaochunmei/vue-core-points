<template>
  <div class="openAndClose" :class="showTotal?'total-introduce':'detailed-introduce'">
    <div class="box">
        <span class="content">{{list}}</span>
        <div @click="openAndClose" class="openCloseButton">{{brandFold?'展开':'收起'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "openAndClose",
  data() {
    return {
      list:
        "思念对方圣诞节付款时间窗口宽松的款式你宠着你才舍得吃蛋炒饭蛋炒饭蛋炒饭的吃吃吃吃吃吃是嘀嘀打车，三从四德才舍得吃的差点迟到是否到处都是" +
        "我放开你才开始苏菲娜，才能开始上次你说你才可能才看到少年疯狂今年的跨年吃疯狂的人进城看的就是你吃那你付出可能的可能出即可苏菲娜的看见你吃的呢" +
        "无传递纪念此刻是你看你曾经多次第三十三次呢，纳木措卡成马赛克了吗查看对方聪明善良是代码顶层开始的呢才看到你吃",
      // 是否显示所有内容
      showTotal: false,
      // 显示展开或收起
      brandFold: true
    };
  },
  methods: {
    openAndClose() {
      this.brandFold = !this.brandFold;
      this.showTotal = !this.showTotal;
    }
  }
};
</script>

<style lang="scss" scoped rel="stylesheet/scss">
.openAndClose {
  margin: auto;
  text-indent: 1rem;
  width: 450px;
}
.box {
  position: relative;
}
.openCloseButton {
  position: absolute;
  right: 0;
  bottom: 0;
  color: red;
  z-index: 20;
}
.total-introduce {
  height: auto;
}
.detailed-introduce {
  // 多行文本溢出显示省略号
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  /*-webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
            display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
            -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
}
// 遗留问题：展开收起和内容之间需有间距
</style>