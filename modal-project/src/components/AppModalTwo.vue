<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale : theme === 'sale'}">
            <p>I am Modal Two</p>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default{
    props: ['header','text','theme'],
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    top:0;
    position: fixed;
    background: rgba(0,0,0,0.4);
    width: 100%;
    height: 100%;
}
.sale{
    background: crimson;
    color: white;
}
</style>