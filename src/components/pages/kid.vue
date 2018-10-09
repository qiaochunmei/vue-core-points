<template>
    <p>{{name}}</p>
</template>
<script>
export default {
    data(){
        return{
            name:''
        }
    },
    methods:{
        init(){
            this.name="jack";
        }
    }
}
</script>

