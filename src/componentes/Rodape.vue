<template>
    <footer>Fábio Lima @ {{hoje}}</footer>
</template>

<script>


export default {
    name: 'Rodape',
    data(){
        return {
            hoje: new Date().getFullYear()
        }
    }
}
</script>
