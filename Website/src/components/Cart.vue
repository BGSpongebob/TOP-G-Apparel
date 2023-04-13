<template>
    <div>
        <div v-if="items.length !== 0" 
            class="cart-content">
            <div class="cart-content__main-row">
                <div class="cart-content__row-image"></div>
                <div class="cart-content__row-name">Продукт</div>
                <div class="cart-content__row-size">Размер</div>
                <div class="cart-content__row-price">Цена</div>
                <div class="cart-content__row-quantity">Количество</div>
                <div class="cart-content__row-total">Тотал</div>
                <div class="cart-content__row-delete"></div>
            </div>
            <div
                class="cart-content__row"
                v-for="(item, key) in items"
            >
                <div class="cart-content__row-image">
                    <img :src="item.image">
                </div>
                <div class="cart-content__row-name">
                    {{ item.name }}
                </div>
                <div class="cart-content__row-size">
                    {{ item.size }}
                </div>
                <div class="cart-content__row-price">
                    <span v-if="item.sale">
                        {{ (item.price * ((100 - item.sale) / 100)).toFixed(2) }} лв.
                    </span>
                    <span v-else>
                        {{ item.price.toFixed(2) }} лв.
                    </span>
                </div>
                <div class="cart-content__row-quantity">
                    {{ item.quantity }}
                </div>
                <div class="cart-content__row-total">
                    <span v-if="item.sale">
                        {{ ((item.price * ((100 - item.sale) / 100)) * item.quantity).toFixed(2) }} лв.
                    </span>
                    <span v-else>
                        {{ (item.price * item.quantity).toFixed(2) }} лв.
                    </span>
                </div>
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
                <p>ЕИК</p>
                <input type="text" placeholder="това поне не е задължително">
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
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);
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
    text-align: center;
}

.cart-content {
    float: left;
    width: calc(100% - 20px);
    margin: 0 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.cart-content__main-row {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    min-width: 820px;
    padding: 10px 0;
}

.cart-content__row {
    display: flex;
    justify-content: space-between;
    min-width: 820px;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
}

.cart-content__row:last-child {
    border-bottom: none;
}

.cart-content__row-image {
    width: 100px;
}

.cart-content__row-image img {
    width: 100%;
}

.cart-content__row-name {
    width: 150px;
    text-align: left;
}

.cart-content__row-size {
    width: 80px;
}

.cart-content__row-price {
    width: 100px;
}

.cart-content__row-quantity {
    width: 100px;
}

.cart-content__row-total {
    width: 120px;
}

.cart-content__row-delete {
    width: 100px;
}

.cart-content__row-delete div{
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
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