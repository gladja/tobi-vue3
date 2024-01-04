<script setup>
import TheButton from '../../components/main/TheButton.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useGiftStore } from '../../stores/gifts'
import axios from 'axios'
const router = useRouter()
const giftStore = useGiftStore()
const FormData = reactive({
  budget: '',
  age: '',
  male: '',
  date_type: '',
  hobbies: '',
  favorite_color: '',
  related_gifts: ''
})

const props = defineProps({ openPopup: Function })
const postData = async () => {
  try {
    const contentString = JSON.stringify(FormData)
    const data = await axios.post('https://team-2-backend-dn.vercel.app/api/get_gifts/', {
      _content: contentString
    })
    let giftData = reactive(data.data)
    giftStore.setGiftData(giftData)
    console.log(giftData)
    router.push('/gifts')
  } catch (error) {
    console.error(error)
    props.openPopup()
  }
}
</script>
<template>
  <div class="popup">
    <div class="wrap-select">
      <div class="select-head">Допоможіть нам вибрати подарунок</div>
      <div class="input-fields">
        <div class="input-point">
          <label for="budget">Вкажіть бюджет</label>
          <input
            type="text"
            inputmode="numeric"
            maxlength="7"
            class="select"
            id="budget"
            v-model="FormData.budget"
          />
        </div>
        <div class="input-point">
          <label for="age">Вкажіть вік </label>
          <input
            type="text"
            inputmode="numeric"
            maxlength="2"
            class="select"
            id="age"
            v-model="FormData.age"
          />
        </div>
      </div>
      <div class="input-fields">
        <div class="select-point">
          <label for="male">Вкажіть стать</label>
          <select id="male" class="selected" v-model="FormData.male">
            <option value="1">Чоловік</option>
            <option value="2">Жінка</option>
          </select>
        </div>
        <div class="select-point">
          <label for="date_type">Вкажіть подію</label>
          <select id="date_type" class="selected" v-model="FormData.date_type">
            <option value="birthday">День Народження</option>
            <option value="anniversary">Річниця</option>
            <option value="New Year">Новий Рік</option>
            <option value="8 of March">8 Марта</option>
            <option value="without a reason">Без приводу</option>
          </select>
        </div>
      </div>
      <div class="input-fields">
        <div class="select-point">
          <label for="hobbies">Вкажіть хоббі</label>
          <select name="" id="hobbies" class="selected" v-model="FormData.hobbies">
            <option value="Sport">Спорт</option>
            <option value="Handicraft">Рукоділля</option>
            <option value="Tourism">Туризм</option>
            <option value="homebody">Сидіти дома</option>
            <option value="Technology">Технологіі</option>
          </select>
        </div>
        <div class="select-point">
          <label for="related_gifts">Вкажіть різновид подарунку</label>
          <select id="related_gifts" class="selected" v-model="FormData.related_gifts">
            <option value="useful things">Корисні</option>
            <option value="original">Оригінальні</option>
            <option value="Coupon'">Купони</option>
            <option value="Funny">Забавні</option>
          </select>
        </div>
      </div>
      <div class="input-fields">
        <div class="select-point">
          <label for="favorite_color">Вкажіть коллір</label>
          <select name="" id="favorite_color" class="selected" v-model="FormData.favorite_color">
            <option value="green">Зелений</option>
            <option value="blue">Синій</option>
            <option value="yellow">Жовтий</option>
            <option value="orange">Оранжевий</option>
            <option value="black">Чорний</option>
            <option value="white">Білий</option>
            <option value="violet">Фіолетовий</option>
          </select>
        </div>
      </div>
      <TheButton
        text="Підібрати подарунок"
        bg="#2C2D5B"
        color="#fff"
        size="14px"
        @click.self="postData"
      />
      <TheButton text="Закрити" bg="#2C2D5B" color="#fff" size="14px" @click="openPopup" />
    </div>
  </div>
</template>

<style scoped>
label {
  font-size: 12px;
}

.popup {
  font-family: 'Lato', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  margin: auto;
  background-color: rgba(46, 47, 66, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  overflow: scroll;
}

.wrap-select {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  background-color: rgb(213, 219, 239);
  padding: 30px;
  border-radius: 15px;
}

.select-head {
  color: #141414;
  font-family: 'Lato', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  padding-left: 29px;
  padding-top: 6px;
}

.input-fields {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
}

.input-point {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.select {
  border-radius: 15px;
  padding: 8px 12px;
  border: none;
  color: #4f4f4f;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}

.selected {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  min-width: 180px;
  padding: 15px 19px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #fff;
  cursor: pointer;
}

.select-point {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
