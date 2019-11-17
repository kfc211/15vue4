<template>
    <div>
        <div>
            <Input prefix="ios-contact" placeholder="请输入姓名" style="width: auto" v-model="username" @on-blur="checkdataUser()"/>
            <span>{{errmsg1}}</span>
        </div>
        <div>
            <Input prefix="md-cog" placeholder="请输入密码" style="width: auto" v-model="password" @on-blur="checkdataPass()"/>
            <span>{{errmsg2}}</span>
        </div>
        <div>
            <Input prefix="md-cog" placeholder="请再输入密码" style="width: auto" v-model="passwordagin" @on-blur="checkdataPassagin()"/>
            <span>{{errmsg3}}</span>
        </div>
        <div>
            <Button type="primary" shape="circle" @click="doRegister()">注册</Button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "register",
        data(){
            return{
                username:'',
                password:'',
                passwordagin:'',
                errmsg1:'',
                errmsg2:'',
                errmsg3:''
            }
        },
        methods:{
            checkdataUser(){
                let mycheck=true;
                if(this.username==''){
                    this.errmsg1="用户名不能为空";
                    mycheck=false;
                }
                else {
                    axios.get("http://localhost:8080/api/isexist",{params:{username:this.username}})
                        .then((res)=>{
                            if(res.data){
                                this.errmsg1="用户名已存在";
                                mycheck=false;
                            }
                        })
                }
                if(mycheck){
                    this.errmsg1="";
                }
                return mycheck;
            },
            checkdataPass(){
                let mycheck=true;
                if(this.password==''){
                    this.errmsg2='密码不能为空';
                    mycheck=false;
                }
                else {
                    var reg=new RegExp(/^\w{6,16}$/);
                    mycheck=reg.test(this.password);
                    if(!mycheck){
                        this.errmsg2='密码为6-16位字符';
                    }
                }
                if(mycheck){
                    this.errmsg2='';
                }
                return mycheck;
            },
            checkdataPassagin(){
                let mycheck=true;
                if(this.passwordagin==''){
                    this.errmsg3="请输入确认密码";
                    mycheck=false;
                }
                if(this.password!=this.passwordagin){
                    this.errmsg3="两次密码不一致";
                    mycheck=false;
                }
                if(mycheck){
                    this.errmsg3=''
                }
                return mycheck;
            },
            doRegister(){
                axios.post('http://localhost:8080/api/register',{username:this.username,password:this.password})
                    .then((res)=>{
                        if(res.data){
                            alert('注册成功');
                            this.$router.push('/login');
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>