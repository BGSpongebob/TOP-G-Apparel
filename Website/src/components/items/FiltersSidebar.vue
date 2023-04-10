<template>
    <div class="sidebar">
        <div class="filters__control">
            <div>
                <select class="filters__sort-select" name="" id="">
                    <option value="price-asc">Цена (по възходящ ред)</option>
                    <option value="price-desc">Цена (по низходящ ред)</option>
                    <option value="new">Най-нови</option>
                    <option value="recommended">Препоръчваме ви</option>
                </select>
            </div>
            <div 
                class="filters__open-filters"
                @click="filtersShow = !filtersShow"    
            >Филтри</div>
        </div>
        <div class="filters" v-if="filtersShow">
            <div class="filters__box">
                <p>Категории</p>
                <div 
                    class="filters__options-list" 
                    v-for="(category, key) in store.categories"
                >
                    <a :href="'/items/' + key">
                        {{ category }}
                    </a>
                </div>
            </div>
            <div class="filters__box">
                <p>Размер</p>
                <div class="filters__options-list">
                    <label 
                        class="custom-checkbox__container" 
                        v-for="size in store.clothes_sizes"
                    >
                        {{ size }}
                        <input type="checkbox" :value="size">
                        <span class="custom-checkbox__checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="filters__box">
                <p>Пол</p>
                <div class="filters__options-list">
                    <label 
                        class="custom-checkbox__container" 
                        v-for="gender in store.genders"
                    >
                        {{ gender }}
                        <input type="checkbox" :value="gender">
                        <span class="custom-checkbox__checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="filters__box">
                <p>Възраст</p>
                <div class="filters__options-list">
                    <label 
                        class="custom-checkbox__container" 
                        v-for="age in store.ages"
                    >
                        {{ age }}
                        <input type="checkbox" :value="age">
                        <span class="custom-checkbox__checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="filters__box">
                <p>Марки</p>
                <div class="filters__options-list">
                    <label 
                        class="custom-checkbox__container" 
                        v-for="brand in store.brands"
                    >
                        {{ brand }}
                        <input type="checkbox" :value="brand">
                        <span class="custom-checkbox__checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="filters__box">
                <p>Цена</p>
                <label class="custom-checkbox__container">
                    до 50 лв.
                    <input type="checkbox" value="50">
                    <span class="custom-checkbox__checkmark"></span>
                </label>
                <label class="custom-checkbox__container">
                    до 100 лв.
                    <input type="checkbox" value="100">
                    <span class="custom-checkbox__checkmark"></span>
                </label>
                <label class="custom-checkbox__container">
                    до 200 лв.
                    <input type="checkbox" value="200">
                    <span class="custom-checkbox__checkmark"></span>
                </label>
            </div>
        </div>    
    </div>
</template>

<script setup>
import { useClothesStore } from '../../stores/clothes';
import { ref, onBeforeMount } from 'vue';

const store = useClothesStore();
const filtersShow = ref(true);
const windowWidth = ref(window.innerWidth);

onBeforeMount(() => {
    if(window.innerWidth <= 768)
        filtersShow.value = false;

    window.addEventListener('resize', onResize);
})

function onResize() {
    windowWidth.value = window.innerWidth;
    if(windowWidth.value <= 768)
        filtersShow.value = false;
    else 
        filtersShow.value = true;
}
</script>

<style scoped>
.sidebar {
    float: left;
    width: 100%;
}

.filters__control {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
}

.filters__control div {
    width: 100%;
}

.filters__sort-select {
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
}

.filters__open-filters {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 9px 10px;
    border: 1px solid black;
    color: white;
    background-color: black;
    border-radius: 3px;
    cursor: pointer;
}

.filters {
    /*display: none;*/
    width: calc(100% - 20px);
    margin: 10px;
    float: left;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    max-height: 400px;
    overflow: auto;
}

.filters__box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 10px 0 15px;
    border-top: 1px solid #ccc;
}

.filters__box p {
    float: left;
    font-weight: bold;
    width: 100%;
    font-size: 18px;
    text-transform: uppercase;
}

.filters__options-list {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.filters__options-list label {
    float: left;
}

@media screen and (min-width: 768px) {
    .sidebar {
        width: 200px;
    }
    .filters {
        display: block;
        width: 100%;
        margin: 0;
        border: none;
        max-height: none;
    }
    .filters__open-filters {
        display: none;
    }
}

</style>