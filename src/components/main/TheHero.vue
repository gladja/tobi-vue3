<script setup>
</script>

<template>
<section class="container wrap">
    <div class="colum-one">
        <ul class="question">
            <li class="question-one">Скоро свято!</li>
            <li class="question-two">Що подарувати?</li>
            <li class="question-three">Де знайти?</li>
        </ul>
        <h1 class="title">Гарній людині - <span class="title-text">Гарний Подарунок!!!</span></h1>
        <p class="text">Де б ти не був - завжди є можливість привітати близьких своєю увагою!</p>
        <p class="text">Наш сервіс допоможе вибрати індивідуальний подарунок з урахуванням особистих характеристик людини.</p>
    </div>
    <div class="colum-two">
        <img class="img" src="../../assets/images/hero.jpeg" alt="" height="594">
    </div>
</section>
</template>

<style scoped>
.wrap {
    width: 1440px;
    height: 700px;
    display: flex;
    justify-content: left;
}
.colum-one {
    width: 560px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.question {
    font-size: 15px;
    font-style: italic;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 50px;
    margin: 24px;
    height: 100px;
}

.question-one {
    transform: rotate(21deg);
}

.question-two {
    transform: rotate(-15deg);
}

.question-three {
    transform: rotate(14deg);
}

.title {
    font-size: 40px;
    line-height: 150%;
    font-weight: 400;
}

.title-text {
    color: var(--font-simorange);
    font-weight: 700;
}

.text {
    font-size: 24px;
    line-height: 150%;
    font-weight: 300;
}

.colum-two {
    position: relative;
}

.img {
    position: absolute;
}
</style>