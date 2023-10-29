<template>
    <p class="fw-bolder fs-1">Почему JavaScript очень крутой язык программирования?</p>
    <button v-on:click="showArticle()" v-on:mouseover="changeColor()" id="show" class="btn btn-outline-primary">{{ show }}</button>
    <button v-on:click="hideArticle()" v-on:mouseover="changeColor()" id="hide" class="btn btn-outline-primary">{{ hide }}</button>
    <article v-bind:style="display">
       <p>Язык JavaScript за последние года стал мега популярным и завоевал огромное доверие среди разработчиков. Почему он так крут? Узнаем в этой статье.</p>
       <p>По статистике, включающей свыше 10 миллионов часто посещаемых веб-страниц в интернете, около 95% из них прибегают к использованию JavaScript в большей или меньшей степени. Естественно, настолько популярную технологию поддерживают все браузеры: веб-обозреватели на базе Chromium, а также Internet Explorer, Mozilla Firefox, Safari и т. п. Изучение данного языка практически наверняка обеспечит ваше будущее финансами в больших количествах, но стать на путь к успеху следует уже сейчас.</p>
       <p>В последнее время активное распространение приобрели фреймворки, написанные на JavaScript. Среди них Angular, React, Node, Express. Часто новички пропускают этап изучения основного языка и просто переходят к использованию функций, заложенных в фреймворки.</p>
       <p>Фреймворк – это набор, включающий готовые решения базовых задач, которые ежедневно стоят перед программистами. Задача фреймворков заключается в упрощении разработки, а не вытеснении необходимости знания JavaScript.</p>
       <p>Что собой представляет JavaScript и почему он актуален?</p>
       <p>Не стоит мне верить на слово, что JS является популярным и востребованным, лучше понимать почему это именно так. Для понимания важности JavaScript придётся вкратце вспомнить о двух неразрывно связанных технологиях веб-программирования – CSS и HTML.</p>
       <img src="https://itproger.com/paid_courses/img/web_layout_foto.gif" alt="Phones">
       <p>CSS отвечает за визуальное отображение элементов и придания им стилей: размещение, цвет, форма, внешний вид и т. п. HTML позволяет создавать структуру страницы и передавать браузеру информацию о типе контента. Понять суть обоих языков поможет метафора: HTML является скелетом, а CSS – кожей.</p>
       <p>Оба языка позволяют создать красивый сайт или отдельную страницу, внешний вид которой ограничен лишь фантазией. При этом они не обеспечивают интерактивность веб-страницы. При каждом клике на кнопку страница должна обновиться, чтобы произошли изменения. JavaScript – это душа сайта, которая делает его интерактивным и живым.</p>
       <img src="https://itproger.com/paid_courses/img/javascript_anim.gif" alt="JS">
       <p>Запросы, отправленные через JS, обрабатываются независимо от состояния страницы, на ней могут сразу показываться результаты работы. Например, пользователь вводит логин, JS отправляет его на сервер и проверяет, есть ли такой же самый ник, затем возвращает ответ на страницу в режиме реального времени. Немаловажно и то, что JS обрабатывается прямо в браузере, создавая минимальную нагрузку на сервер (в отличии от PHP). Сфер применения JS очень много, поэтому он и является настолько популярным.</p>
       <p>Код JavaScript</p>
       <p>До сих пор на изучение JavaScript приходится тратить немало сил, это абсолютно нормально. Зато до тех пор, пока есть пользователи у сайтов, будет и спрос на разработчиков в сфере Front-end. Да, передовые компании стараются придумать замену JS. Если подобное и случится, то произойдёт это не скоро. Да и перейти на новый язык со знаниями старого не составит большой сложности.</p>
       <p>Обычно JavaScript работает с видимой стороной веб-сайта, но с выходом фреймворка Node.js для серверов, программисты могут выполнять и back-end работы. Таким образом на JS сейчас можно писать и довольно тяжёлый серверный код, выстраивая логику и поведение сайта.</p>
       <p>И в заключение</p>
       <p>Все разработчики с опытом становятся перед выбором: продолжить работать в офисе с 8-и часовым рабочим днём или заняться фрилансом. Программирование пригождается как крупным компаниям, так и небольшим заказчикам. Достоинства работы в офисе: социальный пакет, наличие спортзала, прямой контакт с командой и обучение от профессионалов. С другой стороны, фриланс позволяет «делать» деньги, не выходя из дома, при чём доход последних может перевешивать ставку офисного сотрудника.</p>
       <p>JavaScript является не просто важным языком, но и интересным, а также универсальным. Всем веб-программистам JS является обязательным навыком. При этом JavaScript относительно быстро можно запомнить и изучить. Безусловно, начинающему программисту следует запастись терпением и иметь в распоряжении достаточное количество времени для его изучения. Без увлечённости процессом обучения будет сложно достичь каких-то вершин в данной сфере. </p>
       <p>Интерес к работе должен присутствовать, вместе с целеустремлённостью и неотступностью.</p>
    </article>
    <form method="post" class="row g-3" autocomplete="off">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">Имя:</label>
          <input v-model="name"  type="text"  class="form-control" id="validationDefault01"  required>
          <p v-show="name.length < 4" class='text-info bg-dark'>Длинна имени должна быть не менее 4 символов</p>
          <label  for="alidationDefault02" class="form-label">Комментарий:</label>
          <textarea v-model="comment" class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
          <p v-show="comment.length == 0" class='text-info bg-dark'>Комментарий не может быть пустым</p>
          <button type="button" v-on:click="AddComment()" class="btn btn-primary">Добавить комментарий</button>
        </div>
    </form>
    <div v-for="(el,key) in NewComment" v-bind:key="key">
        <p>{{ el.Authors }}</p>
        <p>{{ el.comments }}</p>
        <p id="error"></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show: 'Показать',
            hide: 'Скрыть',
            display: '',
            name: '',
            comment: '',
            NewComment:[
                {
                    Authors:'',
                    comments: ''
                }
            ]
        }
    },
    methods:{
        showArticle(){
            this.display = 'display:block'
        },
        hideArticle(){
            this.display = 'display:none'
        },
        changeColor(){
            let show = document.getElementById('show')
            let hide = document.getElementById('hide')
            show.addEventListener('mouseover',function(){
                show.style.backgroundColor = '#dd00ff'
                show.style.color = '#00ff5e'
            })
            hide.addEventListener('mouseover',function(){
                hide.style.backgroundColor = '#dd00ff'
                hide.style.color = '#00ff5e'
            })
        },
        AddComment(){
            let error = document.getElementById("error")
            if(this.name && this.comment !== ""){
                    error.innerHTML = ""
                    this.NewComment.push({
                    Authors: this.name,
                    comments: this.comment
                })
             }
             else if(this.name.length < 4){
                error.innerHTML = "<p class='text-danger bg-dark'>Ошибка! Длинна имени должна быть минимум 4 символа</p>"
             }
             else{
                error.innerHTML = "<p class='text-danger bg-dark'>Ошибка! Имя и комментарий не могут быть пустыми</p>"
             }
        }
    }
}
</script>
<style scoped>
article{
    display: none;
}
</style>