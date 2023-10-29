<template>
    <div class="portal">
        <p class="fs-1 fw-bolder">CMI Portal</p>
        <hr class="firsthr"/>
    </div>
    <div  class="Google">
       <p class="display-5 fw-bolder work">Работа мечты с компанией Google</p>
       <p>Что из себя представляет работа в Google?</p>
       <p class="for-more">Для многих людей Google представляется большим зданием с прозрачными лоджиями и окнами от пола до потолка, которое усеяно уютными и красивыми креслами/столами. От представления кафетерия в этом здании, мечты становятся ещё красочнее, еда пестрит излишествами и деликатесами и всё это бесплатно. В окружении только доброжелательные, невероятно умные и весёлые коллеги-друзья. Что же здесь правда?</p>
      <RouterLink to="/Google"><button type="button" class="btn btn-outline-primary">Читать далее</button></RouterLink>
    </div>
    <hr class="secondhr"/>
</template>
<script>
export default {
    data(){
        return{
            GoogleArticle:[
                {
                    title: 'Работа мечты компания Google',
                    dopinfo: 'Что из себя представляет работа в Google?',
                    description: 'Для многих людей Google представляется большим зданием с прозрачными лоджиями и окнами от пола до потолка, которое усеяно уютными и красивыми креслами/столами. От представления кафетерия в этом здании, мечты становятся ещё красочнее, еда пестрит излишествами и деликатесами и всё это бесплатно. В окружении только доброжелательные, невероятно умные и весёлые коллеги-друзья. Что же здесь правда?',
                    readmore: 'Читать далее',
                    photo: '../src/assets/Google.jpg'
                }
            ]
        }
    }
}
</script>
<style scoped>
.firsthr{
        width: 18em;
        height: 1em;
        background-color: #012757
}
.for-more{
    width: 24%;
}
.work{
    width: 25%
}
</style>