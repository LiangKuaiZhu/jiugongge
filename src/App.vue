<script setup lang="ts">
  import { useRouter } from 'vue-router';
import{ref, h} from 'vue';
import { NIcon } from 'naive-ui';
import { GameControllerOutline,BugSharp } from '@vicons/ionicons5';
  const router = useRouter();
  const collapsed = false;
  const activeKey = ref("");
function renderIcon (icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
  const menuOptions =  [
    {
      label:'九宫格',
      key:'Avatar',
      icon:renderIcon(GameControllerOutline),
   },
   {
      label:'按钮',
      key:'Button',
      icon:renderIcon(BugSharp),
   },
   {
      label:'卡片',
      key:'Card'
   },
   {
      label:'轮播图',
      key:'Carousel'
   },
   {
      label:'折叠面板',
      key:'Collapse'
   },
    {
      label:'分割线',
      key:'Divider'
   },
    {
      label:'下拉菜单',
      key:'Dropdown'
   },
    {
      label:'文本省略',
      key:'Ellipsis'
   },
  ]
  function handleUpdate(params: any, params2: any) {
    console.log(params)
    console.log(params2)
    router.push({name: params});
  }
 




</script>


<template>
  <n-layout>
      <n-layout-header bordered>
        <div style="width: 100%; height: 64px; padding: 0 32px">
          <img src="@/assets/naivelogo.svg" class="naive-logo">
          <span>naive-ui</span>
        </div>
      </n-layout-header>
      
      <n-layout has-sider >
          <n-layout-sider  collapse-mode="width"
          :width="240"
          show-trigger="arrow-circle"
          content-style="maxHeight: calc(100vh - 65px)"
          :show-collapsed-content="false"
          :native-scrollbar="false"
          bordered>
            <n-menu 
            v-model:value="activeKey"
            :options="menuOptions"
            @update:value="handleUpdate"
            />
          </n-layout-sider>
          <n-layout-content content-style="padding: 24px;">
            <router-view></router-view>
          </n-layout-content>
      </n-layout>
  </n-layout>
</template>

<style>
  .naive-logo{
    height: 32px;
    margin-right: 12px;
    width: 32px;
  }
  .naive-header {
    border-bottom: solid 1px rgb(239,239,245)
  }
  .n-scrollbar1 {
    max-height: calc(100vh - 64px);
    width: auto;
  }
</style>
