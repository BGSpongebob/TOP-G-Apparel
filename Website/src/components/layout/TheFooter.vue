<template>
    <footer>
        <div class="footer-info">
            <div>
                <b>Контакти</b>
                <ul>
                    <li>Телефон: +359 888 9999 22</li>
                    <li>E-mail: info@top-g-apparel.bg</li>
                </ul>
            </div>
            <div>
                <b>Адрес</b>
                <ul>
                    <li>Grand Mall Varna</li>
                    <li>ул. „Академик Андрей Сахаров“ 2, 9000 Варна</li>
                </ul>
            </div>
            <div>
                <b>Работно време</b>
                <ul>
                    <li>Понеделник до Петък - 10:00 до 20:00</li>
                    <li>Събота и Неделя - 10:00 до 22:00</li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © Top G Apparel 2023</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    max-width: 1200px;
    background-color: #ccc;
    padding: 10px;
    border-radius: 5px 5px 0 0;
    margin-top: 30px;
}

.footer-info {
    width: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    margin: 20px 0;
}

.footer-info ul {
    list-style-type: none;
}

.footer-info div {
    width: 340px;
}

.copyright {
    float: left;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0 10px;
}

@media screen and (min-width: 920px) {
    .footer-info {
        flex-direction: row;
        gap: 10px;
    }
    .footer-info div {
        width: auto;
    }
}
</style>