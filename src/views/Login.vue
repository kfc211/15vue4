<template>
    <div>
    <div>
        <Input prefix="ios-contact" placeholder="请输入姓名" style="width: auto" v-model="username"/>
    </div>
    <div>
        <Input prefix="md-cog" placeholder="请输入密码" style="width: auto" v-model="password"/>
    </div>
        <p><Checkbox v-model="save">登录名和密码保留一周</Checkbox></p>
        <div>
            <Button type="primary" shape="circle" @click="doLogin()">登录</Button>
            <Button type="primary" shape="circle" @click="doRegister()">注册</Button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "login",
        data(){
            return{
                username:'',
                password:'',
                save:false,
            }
        },
        methods:{
            doLogin(){
                axios.post('http://localhost:8080/api/login',{username:this.username,password:this.password})
                    .then((res)=>{
                        if(res.data){
                            if(this.save){
                                this.$cookies.set("username",this.username,'7d');
                            }
                            this.$store.commit("setLoginUser",this.username);
                            alert("dlcg")
                            this.$router.push("/productlist")
                        }
                        else {
                            alert("用户名或者密码不正确");
                            this.username='';
                            this.password='';
                        }
                    })

            },
            doRegister(){
                this.$router.push("/register");
            }
        }
    }
</script>

<style scoped>

</style>