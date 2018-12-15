<template>
    <designer :name="name" :canvasWidth="canvasWidth" :canvasHeight="canvasHeight" :initData="initData"
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
                initData:{}
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
