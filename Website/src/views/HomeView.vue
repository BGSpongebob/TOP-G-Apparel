<template>
<div class="wrapper">
    <div class="inner-wrapper">
        <h1>TOP G APPAREL</h1>
        <p>За млади и смели ценители на модата, които искат да покоряват света всеки ден!</p>
        <router-link to="/items">
            Напред
        </router-link>
    </div>
</div>

<Sales />
</template>

<script setup>
import Sales from '../components/Sales.vue'
</script>

<style scoped>
.wrapper {
    position: relative;
    width: 100%;
    min-height: 500px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/images/Andrew Tate.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.inner-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 20px 30px;
    gap: 30px;
    border-radius: 5px;
    max-width: 600px;
    text-align: center;
}

.inner-wrapper h1 {
    font-size: 40px;
}

.inner-wrapper p {
    font-size: 18px;
}

.inner-wrapper a {
    background-color: white;
    padding: 15px 30px;
    font-size: 24px;
    border-radius: 4px;
    margin-top: 10px;
}

@media screen and (min-width: 600px) {
    .wrapper {
        min-height: 800px;
    }

    .inner-wrapper {
        padding: 30px 50px;
        gap: 40px;
    }
    .inner-wrapper h1 {
        font-size: 50px;
    }

    .inner-wrapper p {
        font-size: 24px;
    }

    .inner-wrapper a {
        font-size: 30px;
    }
}
</style>