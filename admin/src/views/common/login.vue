<template>
    <div class="admin-login">
        <h3 class="title">博客后台管理</h3>
        <Form class="formInline" ref="formInline" :model="loginData" :rules="ruleInline" >
            <FormItem prop="email">
                <Input size="large" type="text" v-model="loginData.email" placeholder="请输入邮箱">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input size="large" type="password" v-model="loginData.password" @on-enter="handleSubmit('formInline')" placeholder="请输入密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button class="submit-btn" size="large" type="primary" @click="handleSubmit('formInline')">登录</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    name: 'login',
    data () {
        return {
            loginData: {
                email: '',
                password: ''
            },
            ruleInline: {
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blue' },
                    { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blue' },
                    { type: 'string', min: 6, message: '密码长度不能小于6位' }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$post('/api/admin/login', this.loginData).then(res => {
                        if (res.code === 200) {
                            this.$Message.success('登录成功!')
                            this.$Lockr.set('token', res.token)
                            this.$Lockr.set('userinfo', res.data)
                            this.$router.push({path: '/home'})
                        } else {
                            this.$Message.error(res.msg)
                        }
                    })
                }
            })
        }
    },
    watch: {}
}
</script>
<style lang="less">
.admin-login {
    width: 100%;
    height: 100%;
    background: url('./../../assets/images/login-bg.jpg') no-repeat;
    background-size: cover;
    .title {
        text-align: center;
        font-size: 30px;
        padding-top: 100px;
    }
    .formInline {
        width: 300px;
        margin: 0 auto;
        padding-top: 100px;
    }
    .submit-btn {
        width: 100%;
    }
}
</style>
