<template>
    <div class="backdrop">
        <div class="modal" :class="{sale : theme === 'sale'}">
            <p>Modal Content</p>
            <p>{{ header }}</p>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default{
    props: ['header','text','theme']
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