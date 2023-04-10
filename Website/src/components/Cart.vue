<template>
    <div v-if="items.value.length !== 0" 
        class="cart-content">
        <div class="cart-content__main-row">
            <div></div>
            <div>Продукт</div>
            <div>Размер</div>
            <div>Цена</div>
            <div>Количество</div>
            <div>Тотал</div>
            <div></div>
        </div>
        <div
            class="cart-content__row"
            v-for="(item, key) in items.value"
        >
            <div class="cart-content__row-image">
                <img :src="item.image">
            </div>
            <div>{{ item.name }}</div>
            <div>{{ item.size }}</div>
            <div>{{ item.price.toFixed(2) }} лв.</div>
            <div>{{ item.quantity }}</div>
            <div>{{ (item.price * item.quantity).toFixed(2) }} лв.</div>
            <div class="cart-content__row-delete">
                <div @click="cartStore.removeItemFromCart(key)">
                    Изтрии
                </div>
            </div>
        </div>
    </div>
    <div 
        v-else
        class="cart-empty"
    >
        Твоята количка е празна!
    </div>

    <div class="delivery-info">
        <p class="delivery-info__title">ВАШАТА ИНФОРМАЦИЯ</p>
        <div>
            <p>Име</p>
            <input type="text">
        </div>
        <div>
            <p>Фамилиа</p>
            <input type="text">
        </div>
        <div>
            <p>ЕИК - това поне не е задължително</p>
            <input type="text">
        </div>
        <div>
            <p>Имейл</p>
            <input type="text">
        </div>
        <div>
            <p>Телефон</p>
            <input type="text">
        </div>
        <div>
            <p>Град</p>
            <input type="text">
        </div>
        <div>
            <p>Пощенски код</p>
            <input type="text">
        </div>
        <div>
            <p>Адрес</p>
            <input type="text">
        </div>
    </div>

    <div class="payment-method">
        <label class="custom-radio__container">
            Наложен платеж
            <input type="radio" name="payment_method" checked>
            <span class="custom-radio__checkmark"></span>
        </label>
        <p>Платете на куриера по време на доставката. Моля, подгответе точната сума, ако можете.</p>

        <label class="custom-radio__container">
            Плащане с Кредитна/Дебитна карта онлайн
            <input type="radio" name="payment_method">
            <span class="custom-radio__checkmark"></span>
        </label>

        <p>Всички плащания се извършват в българския лева (BGN). Ако сте платили с платежна карта издадена от банка в чужбина, сумата на транзакцията ще бъде превалутирана в български лева по обменния курс на Българска Народна Банка</p>

        <p>Когато изтегляме сумата по поръчката ви от кредитната или дебитната ви карта, конвертираната сума ще бъде пресмятана спрямо вашата наьионална валута и всички такси които следват ще бъдат начилсени от операторите, които са издали вашата карта. Посочените цени в сайта са с информативна цел.</p>
    </div>

    <div 
        class="total"
        v-if="cartStore.getTotal() != 0"    
    >
        <div><b>Тотал:</b> {{ cartStore.getTotal() }} лв.</div>
    </div>

    <div class="confirm-order-wrapper">
        <div class="confirm-order">
            <label class="custom-checkbox__container">
                Кликайки върху бутона, се съгласявате с <u>условията за ползване</u>
                <input type="checkbox">
                <span class="custom-checkbox__checkmark"></span>
            </label>

            <p>Всички продукти, визуализирани в сайта, са част от нашите предложения, но това не означава, че те са постоянно достъпни.</p>

            <div
                class="confirm-button" 
                @click="confirmOrder()"
            >
                ПОТВЪРЖДАВАМ
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
const items = ref(null);

onBeforeMount(() => {
    items.value = ref(cartStore.items);
});

watch(
    () => cartStore.items,
    () => {
        items.value = ref(cartStore.items);
    }    
);
</script>

<style scoped>
.cart-empty {
    float: left;
    width: 100%;
    padding: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.cart-content {
    float: left;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.cart-content__main-row {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
}

.cart-content__row {
    display: flex;
    justify-content: space-between;

}

.cart-content__row-image {
    width: 100px;
}

.cart-content__row-image img {
    width: 100%;
}

.cart-content__row-delete div{
    cursor: pointer;
}

.delivery-info {
    float: left;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 30px 0;
}

.delivery-info__title {
    width: 100%;
    font-weight: bold;
    text-align: center;
}

.delivery-info div {
    width: calc(50% - 5px);
    padding: 5px 0px;
}

.delivery-info div input {
    width: 100%;
    border: 1px solid gray;
    padding: 5px;
    border-radius: 3px;
}

.payment-method {
    float: left;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.payment-method label {
    font-weight: bold;
}

.payment-method p {
    font-size: 14px;
}

.total {
    width: 100%;
    float: left;
    padding: 10px;
    display: flex;
    flex-direction: row-reverse;
    font-size: 24px;
}

.confirm-order-wrapper {
    float: left;
    width: 100%;
    display: flex;
    justify-content: center;
}

.confirm-order {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    gap: 10px;
    padding: 10px;
    margin: 30px 0;
    align-items: center;
    text-align: center;
}

.confirm-button {
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
}
</style>