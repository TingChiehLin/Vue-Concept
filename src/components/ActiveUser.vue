<template>
    <section>
        <h2>{{ username }}</h2>
        <div>{{ userage }}</div>
    </section>
</template>

<script>
    export default {
        props: ['username', 'userage']
    };
</script>

<style>

</style>