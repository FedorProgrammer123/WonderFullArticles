<template>
<h1>Помощь</h1>
<p class="questions">Если у вас возникли какие-либо вопросы и вы хотите связаться с нами для уточнения всех моментов, то ниже представлены все контактные данные для связи с нами.</p>
<div v-for="(el,key) in contact" v-bind:key="key" class="information">
    <img v-bind:src="el.image" alt="">
    <span>{{ el.subscribe }}</span>
    <hr/>
</div>
<p class="protected">Все права защищены ©. При использовании данных указывайте ссылку на первоисточник </p>
</template>
<script>
export default {
    data(){
        return({
            contact:[
                {
                    image: 'https://img.icons8.com/?size=52&id=499&format=png',
                    subscribe: 'test@itproger.com'
                },
                {
                    image: 'https://img.icons8.com/?size=48&id=5402&format=png',
                    subscribe: '(000) 000-0000'
                },
                {
                    image: 'https://img.icons8.com/?size=48&id=84005&format=png',
                    subscribe: 'USA Washington Seattle Northway 13002'
                }
            ]
        })
    }
}
</script>
<style lang="scss" scoped>
.questions{
    width: 14%;
}
hr{
    width: 20em;
}
h1{
    font-weight: bolder;
}
.protected{
    width: 15%;
}
</style>