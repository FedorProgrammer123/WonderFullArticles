<template>
    <img src="https://itproger.com/img/news/1509788048.jpg" class="img-thumbnail" alt="">
    <p class="fw-bolder fs-1">Что из себя представляет работа в Google?</p>
    <button v-on:click="showArticle()" v-on:mouseover="changeColor()" id="show" class="btn btn-outline-primary">{{ show }}</button>
    <button v-on:click="hideArticle()" v-on:mouseover="changeColor()" id="hide" class="btn btn-outline-primary">{{ hide }}</button>
    <article v-bind:style="display">
        <p>Многие мечтали работать на гигантскую корпорацию Google, правда никто толком и не знает особенностей сотрудничества с компанией. Мы выяснили что из себя представляет работа в Google.</p>
        <p>Для многих людей Google представляется большим зданием с прозрачными лоджиями и окнами от пола до потолка, которое усеяно уютными и красивыми креслами/столами. От представления кафетерия в этом здании, мечты становятся ещё красочнее, еда пестрит излишествами и деликатесами и всё это бесплатно. В окружении только доброжелательные, невероятно умные и весёлые коллеги-друзья. Что же здесь правда?</p>
        <p class="display-5 fs-bolder">Бонусы и поощрения</p>
        <p>Главный фактор – во всех офисах от компании Google только бесплатное питание. Меню действительно огромное, блюда самые разнообразные, а столы ломятся круглый день. Так, утром можно полакомиться жареным тунцом и лимонно-мятной минералкой, а речь идёт только про небольшое отделение корпорации. Главный офис вовсе содержит несколько пищевых блоков, часто сотрудников кормят курицей карри с шоколадным пудингом</p>
        <img src="https://itproger.com/img/news/572xNxwork-at-google-1.jpg.pagespeed.ic.MAy9qP0bay.webp" class="img-thumbnail" alt="">
        <p>Из комментариев одного из сотрудников <b>Google:</b> «В офисе всегда свежие фрукты, любимые овощи, орехи, а рядом расположена небольшая кухня. Преимущественно лежат банальные фрукты, например: яблоки, апельсины, бананы, но периодически завозят и экзотические лакомства – питайю, карамболь. Компания не пожалела денег на хумус, разнообразные сыры и остальное. Ассортимент хлебов завораживает, разнообразие большое и зависит от предпочтений сотрудников на завтрак. Поблизости офисного здания всегда находится много небольших кухонь – йогурт-бары, заведения с большим ассортиментом ягод и т.д.» </p>
        <img src="https://itproger.com/img/news/572xNxwork-at-google-3.jpg.pagespeed.ic._BxajIGLOd.webp" class="img-thumbnail" alt="">
        <p>Среди дополнительных преимуществ работы стоит выделить: отдельные комнаты для отдыха, неисчислимое количество конференц-залов, массажные комнаты (правда не бесплатно, но стоит дёшево), комнаты для игр, бильярд, абсолютно бесплатные услуги прачечной, кресла для массажа, техосмотр и обслуживание автомобилей.</p>
        <img src="https://itproger.com/img/news/work-at-google-2.jpg" class="img-thumbnail" alt="">
        <p>Более того, по вечерам пятницы в ассортименте может присутствовать алкоголь, хоть и некрепкий. Медицинская страховка всех сотрудников весьма внушительная, поэтому даже болезнь будет протекать максимально комфортно. В отношении подарков здесь тоже всё в порядке, смартфоны, планшеты и остальные технологичные вещи дарят достаточно част</p>
        <p class="display-5 fs-bolder">Проблемы и трудности</p>
        <p>Преимущественно сотрудники компании заняты работой в главном офисе, а именно в Mountain View. Отсюда выплывает первая проблема – приходится выбирать между проживанием поблизости работы с завышенной стоимостью, либо затрачивать колоссальное время на поездку из удалённых мест проживания в Сан-Франциско. Компания выделяет транспорт для сотрудников, но его мощности часто бывает недостаточно в условиях большого штата специалистов. В любом случае стоит учитывать, что большая часть дохода будет уходить на аренду квартиры.</p>
        <img src="https://itproger.com/img/news/572xNxwork-at-google-5.jpg.pagespeed.ic.kMUWpvAq3L.webp" class="img-thumbnail" alt="">
        <p>Офисы компании Google переполнены, так как штат расширяется быстрее, чем увеличивается пространство для работы. Часто можно наблюдать забитый под завязку многоэтажный офис, где для одного человека выделяется всего 1,5-2 м2. Этого пространства достаточно только для размещения стола и кресла. </p>
        <img src="https://itproger.com/img/news/work-at-google-4.jpg" class="img-thumbnail" alt="">
        <p>Курьёзы в компании тоже не редкость, к примеру, после отчетного периода выявляется, что отдел укомплектован частично и компания приглашает на работу сотни новых подопечных. Уже спустя месяц работы оказывается, что бюджет у компании не рассчитан на такое количество персонала. Приходится увольнять часть людей, в основном высококвалифицированных кадров. В конечном счете деньги экономятся недостаточно и происходит вторая волна увольнения. Агенты много раз обжигались об эту систему и немногие готовы связываться с компанией.</p>
        <p class="display-5 fs-bolder">Семья и работа</p>
        <p>Количество времени, проведённого на работе у каждого отдельно взятого сотрудника может сильно отличаться. На режим работы влияет руководство офиса или подразделения и тип задач, которые необходимо решить. На глаза попался отзыв сотрудника, который пишет о своей работе с 7:30 до 22:00 в штатном режиме, а при дедлайнах может задерживаться до 23:30, иногда 1:30, а в крайних случаях даже вся ночь уходит на работу. Начальник только пару раз проверяет результат работы и уходит в неизвестном направлении. Смешно, но это правда – сотрудник был вынужден установить на работе кровать, так как ехать куда-либо просто нет времени.</p>
        <img src="https://itproger.com/img/news/572xNxwork-at-google-6.jpg.pagespeed.ic.y9lcLh62h_.webp" class="img-thumbnail" alt="">
        <p class="display-5 fs-bolder">Начальники и подчиненные</p>
        <p>Отзывы от подопечных компании в отношении персонала приблизительно подобны и указывают на многочисленных людей, которые только и пытаются нажиться на чужом труде, самостоятельно ничего не желая или не умея делать. Заносчивость, эгоизм, жажда власти и многие другие негативные качества здесь не редкость.</p>
        <p>Со стороны компании отношение хорошее, в том числе и поощрения, и приятные бонусы. При этом сотрудники с низкой квалификацией нередко получают повышение или увеличение заработной платы, а другие остаются на месте годами. Во многом здесь влияет отношение с начальством.</p>
        <img src="https://itproger.com/img/news/work-at-google-7.jpg" class="img-thumbnail" alt="">
        <p>Google содержит не только квалифицированных инженеров, среди штата сотрудников присутствуют кодеры. Эти специалисты доукомплектовывают отдельные команды для выполнения поставленной задачи, преимущественно пишут код для старта программы, а по достижении цели, идут дальше. Из-за скорости работы таких специалистов остаётся большое количество кода, который разобрать крайне сложно и при любой поломке приходится тратить уйму времени. Видимо 5 минут времени для составления комментария или базовой оптимизации – это непозволительная роскошь. Зато в будущем специалисты тратят 5 часов, а порой и 5 месяцев для поиска неисправности в коде.</p>
        <p class="display-5 fs-bolder">Заключение</p>
        <p>Конечно, описать все сферы взаимодействия с Google не удастся, так как компания весьма большая и везде всё по-разному, но здесь были перечислены самые важные критерии, которые могут повлиять на решение в отношении будущих целей. Статья только даёт пищу для мозга, чтобы понять, как на самом деле обстоит ситуация. </p>
        <p>При всём этом попасть в Google крайне нелегко. От соискателя потребуется успешно пройти 3-4 собеседования, они нередко растягиваются на недели, а сложность предлагаемых задач значительно увеличивается с каждым разом. Если удача улыбнётся и человек попадёт сюда, стоит ожидать бесплатные кафетерии, комфортабельные офисы, правда сильно переполненные, места для развлечений и отдыха. </p>
        <img src="https://itproger.com/img/news/572xNxwork-at-google-8.jpg.pagespeed.ic.8tOFV8jZ-k.webp" class="img-thumbnail" alt="">
        <p>Главное достоинство – хорошая зарплата. Иногда собеседования становятся не самыми сложными испытаниями, а тяжелый коллектив отобьёт всякое желание развиваться и заниматься работой. Часто «специалисты» склонны унижать умственные навыки новичков, а про отношения с девушками приходится забывать. Компания крайне часто задерживает и забирает уйму времени, практически всё время приходится проводить на работе, поэтому с семьёй бывают трудности.</p>
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
img:hover{
    cursor: pointer;
}
</style>