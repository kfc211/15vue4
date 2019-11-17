<template>
    <div>
        <div>hello:{{this.$store.state.loginuser}}</div>
        <div><router-link to="/login" @click.native="logout()">登出</router-link></div>
    <div>
        <product v-for="(item,index) in showlist" :info="item" :key="index"></product>
    </div>
    <div>
        <Page :total="total" :current="current" :page-size="size"
              prev-text="上一页" next-text="下一页" @on-change="change"/>
    </div>
    </div>
</template>

<script>
    import Product from "../components/Product";
    import axios from 'axios';
    export default {
        components: {Product},
        name: "productlist",
        data(){
            return{
                productlist:[],
                current:1,
                size:4,
                showlist:[],
            }
        },
        computed:{
            total(){
                return this.productlist.length;
            }
        },
        mounted(){
            if(this.$store.state.username==''){
                this.$router.push('/');
            }else {
                axios.post("http://localhost:8080/api/getproductlist").then((res)=>{
                    this.productlist=res.data;
                    this.$store.commit('setProductlist',this.productlist);
                    this.change(this.current);
                })
            }

        },
        methods:{
            change(val){
                this.current=val;
                this.showlist=[];
                for(var i=0;i<this.size;i++){
                    var index=(this.current-1)*this.size+i;
                    if(index < this.productlist.length){
                        var prod=this.productlist[index];
                        this.showlist.push(prod);
                    }
                    else
                        break;
                }
            },
            logout(){
                if(this.$cookies.isKey("username")){
                    this.$cookies.remove("username");
                    alert(this.$cookies.get("username"));
                }
                this.$store.commit("setLoginUser","");
            }
        },
    }
</script>

<style scoped>

</style>