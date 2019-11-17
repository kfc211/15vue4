<template>
    <div>
        <div>
            <router-link to="/register">zc</router-link>
            <router-link to="/login">登录</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "index",
        mounted(){
            if(this.$cookies.isKey('username')){
                let loginuser=this.$cookies.get('username');
                this.$store.commit('setLoginUser',loginuser);
                alert(loginuser);
                this.$router.push('productlist');
    }
        }
    }
</script>

<style scoped>

</style>