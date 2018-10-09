 <template>
  <div id="app">
    <div>
      一：父子组件(父组件给子组件传值)
    <parent></parent>
    </div>
    <br>
    <div>
      二：vue实现展开收起功能
    <open-close></open-close>
    </div>
    <br>
    <div>
     三： 组件之间传值
    <comTransfer-value></comTransfer-value>
    </div>
    <br>
    <div>
      四：父子组件传值（子组件传递给父组件）
      <parents></parents>
    </div>
    <br>
    <div>
      五：父组件调用子组件方法
      <mom></mom>
    </div>
  </div>
</template>

<script>
import parent from "./components/pages/parent.vue";
import parents from "./components/pages/parents.vue";
import mom from './components/pages/mom.vue';
import openClose from "./components/pages/openClose.vue";
import comTransferValue from "./components/pages/comTransferValue";
export default {
  name: "App",
  components: {
    parent,
    parents,
    mom,
    openClose,
    comTransferValue
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
