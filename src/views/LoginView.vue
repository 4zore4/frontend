<template>
  <a-row>
    <a-col :span="8"/>
    <a-col :span="8">
      <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            label="用户名"
            name="username"
            :rules="[{ required: true, message: '请输入用户名!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit" @click="doLogin">登录</a-button>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :span="8"/>
  </a-row>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import {Login} from '../api/admin'
export default defineComponent({
  //定义登录数据
  setup() {
    const formState = reactive({
      username: '',
      password: '',
    });

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    let doLogin = ()=>{
      Login(formState)
    }

    return {
      formState,
      onFinish,
      onFinishFailed,
      doLogin
    };
  },

});
</script>

<style scoped>

</style>
