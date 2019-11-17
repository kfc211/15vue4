<!--suppress ALL -->
<template>
    <div>
        <div>
            <p>名称：{{prod.name}}</p>
            <p>价格：{{prod.price}}</p>
            <p>描述：{{prod.desc}}</p>
            <p><button @click="addCart()">点击购买</button></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return{
                prod:null
            }
        },
        created(){
            var id=this.$route.query.id;
            this.prod=this.getProdById(id);
        },
        methods:{
            getProdById(id) {
                var prod = this.$store.state.productlist.find((item) => {
                    return (item.id == id);
                });
                return prod;
            },
            addCart(){
                this.$store.commit('addCart',{
                    id:this.prod.id,
                    name:this.prod.name,
                    price:this.prod.price,
                    count:1
                });
                this.$router.push('/cart')
            }
        }
    }
</script>

<style scoped>

</style>