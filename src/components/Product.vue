<template>
    <div>
        <img :src="info.imgurl" alt=""/>
        <p>商品名称:{{info.name}}</p>
        <p>商品价格:{{info.price}}</p>
        <p><router-link :to="{name:'detail',query:{id:info.id}}">查看详情</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "product",
        data(){
          return{

          }
        },
        props:['info'],
    }
</script>

<style scoped>

</style>