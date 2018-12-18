<template>
    <designer :name="name" :canvasWidth="canvasWidth" :canvasHeight="canvasHeight" :initData="initData"
              :image="image"
    @saveData="getSaveData"></designer>
</template>

<script>
    import Designer from './Designer'
    export default {
        name: "Example",
        components:{Designer},
        data(){
            return{
                name:'设备监控图',
                canvasWidth:'1000px',
                canvasHeight:'500px',
                initData:{},
                image:'https://n.sinaimg.cn/sinacn/w1023h632/20180308/5519-fxpwyhv6947114.jpg'
            }
        },
        created(){
            this.initData = JSON.parse(localStorage.getItem("dataInfo"))
        },
        methods:{
            getSaveData(saveData){
                localStorage.setItem("dataInfo", saveData);
            }
        }
    }
</script>

<style scoped>

</style>
