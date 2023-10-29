<template>
    <p class="fw-bolder fs-1">Изучение Git на реальных примерах</p>
    <button v-on:click="showArticle()" v-on:mouseover="changeColor()" id="show" class="btn btn-outline-primary">{{ show }}</button>
    <button v-on:click="hideArticle()" v-on:mouseover="changeColor()" id="hide" class="btn btn-outline-primary">{{ hide }}</button>
    <article v-bind:style="display">
       <p class="display-6 fw-bolder">Изучение Git на реальных примерах</p>
       <p>Git – это очень полезная система управления версиями, которая позволяет разработчикам эффективнее работать вместе. В статье вкратце на примерах, вы изучите основные моменты Git.</p>
       <p>Осознать всю мощь и гибкость предлагаемых решений в Git довольно трудно даже для матерых профессионалов в своей области. В данной статье мы постараемся разобраться в нескольких опциях <b>Git</b> на практических примерах.</p>
       <p>Сперва просмотрите большой обучающий ролик, позволяющий быстро и эффективно внедриться в систему Git и начать работать с ней уже сейчас:</p>
       <iframe width="1280" height="720" src="https://www.youtube.com/embed/JfpCicDUMKc" class="container container-sm container-md container-lg container-xxl " title="Изучение GitHub в одном видео уроке за 15 минут!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <p class="display-6 fw-bolder">Пример 1: Забыли внести правки в предыдущий коммит/нужно изменить сообщение коммита</p>
       <p>Довольно часто мы забываем добавить файл или внести какое-то изменение в коммит. Если вы оказались в подобной ситуации, то не волнуйтесь, ничего плохого здесь нет. Просто исправьте последний коммит с помощью флажка  — <mark>amend.</mark></p>
       <p>Допустим, у вас есть следующие незафиксированные файлы:</p>
       <ul>
         <li>FileA.txt</li>
         <li>FileB.txt</li>
       </ul>
       <p>Вы что-то в них меняете, а затем создаете коммит следующей командой:</p>
       <code>
        git commit -m ‘First Commit’
       </code>
       <p>Вдруг после создания коммита вы понимаете, что забыли внести какие-то исправления в файл <b>FileB.txt.</b> Тогда вместо создания нового коммита с изменениями <b>FileB.txt</b> можно обновить предыдущий коммит флажком  — <mark>amend:</mark></p>
       <code>
        git commit — amend
       </code>
       <p>Какое-то время спустя вы вдруг решаете изменить сообщение для последнего коммита. Здесь вам тоже поможет флажок  — <mark>amend</mark> и следующая команда:</p>
       <code>
        git commit —amend -m ‘First Commit Modified’
       </code>
       <p class="display-6 fw-bolder">Пример 2: Отправили изменения, которые не нужно фиксировать в коммитах</p>
       <p>Довольно часто бывает так, что мы случайно отправляем какие-то изменения или файлы, которые совершенно не нужно добавлять в коммиты. Например, <b>config</b> файлы, подписи AWS или <mark> .pem </mark>  файлы. Их не нужно заливать в репозиторий. Для удаления <u>.pem</u> файлов с удаленного репозитория многие люди делают следующее:</p>
       <ul>
        <li>Вытаскивают последний код из репозитория.</li>
        <li>Удаляют .pem файл.</li>
        <li>Создают новый коммит с удаленным <b>.pem</b> файлом.</li>
        <li>Отправляют изменения обратно в удаленный репозиторий.</li>
       </ul>
       <p>По сути, <b>.pem</b> файл все еще присутствует в репозитории, ведь Git хранит все загруженные файлы. Поэтому любой может порыться в истории Git коммитов и получить доступ к <b>.pem файлу.</b></p>
       <p>Однако Git позволяет изменять историю. Поэтому для окончательного удаления <b>.pem</b> файлов можно вернуться к старому коммиту и принудительно перезаписать его. <mark>git reset HEAD~n</mark> – это команда, которая позволяет откатываться к предыдущим n-коммитам. Поэтому <mark>git reset HEAD~2</mark> вернет вас на 2 коммита назад и покажет их изменения. <mark>git reset HEAD  —  hard</mark> удалит все изменения. Например, у вас есть следующие коммиты:</p>
       <img src="https://itproger.com/img/news/1543744828.png" class="img-thumbnail" alt="Error">
       <p>А теперь вам захотелось удалить 2 последних коммита: <u>Add aws secrets</u> и <u>Add .pem file.</u></p>
       <p>Для начала вы запускаете команду ниже и возвращаетесь на 2 коммита назад:</p>
       <code>
        git reset HEAD~2
       </code>
       <p>Теперь удаляете эти два коммита командой:</p>
       <code>
        git reset HEAD — hard
       </code>
       <p>Затем загружаете код на удаленный репозиторий. Вуаля – .pem файлы  пропали из истории.</p>
       <p><b>ВНИМАНИЕ:</b>принудительная отправка изменений на сервер ОЧЕНЬ ОПАСНА, т.к. изменяет Git историю на удаленной ветке. Запомните раз и навсегда, что запрещено принудительно менять ветки master и stage. Следите, чтобы новые изменения заливались только в ветку, созданную вами, а вы сами понимали суть вносимых изменений.</p>
       <p class="display-6 fw-bolder">Пример 3: Поделиться частью зависимого кода, которую пока что нельзя отправлять</p>
       <p>Бывает, что необходимо отправить коллеге-разработчику какие-то изменения в коде, а сам код по ряду причин нельзя загрузить в удаленный репозиторий.  В данном случае поможет патч. Вот, как он работает:</p>
       <p>Внесите нужные изменения и выполните следующее:</p>
       <code>
        git diff > filename.patch
       </code>
       <p>Эта команда создает файл со всеми незафиксированными изменениями, которые вы вносите. Затем перешлите коллеге данный файл привычным способом: почта/Slack/скиньте на флешку и т.д.</p>
       <p>Коллега скачивает файл с патчем и выполняет следующую команду:</p>
       <code>
        git apply filename.patch
       </code>
       <p>Так все ваши изменения применятся к коду, сохраненному у вашего коллеги.</p>
       <p class="display-6 fw-bolder">Пример 4. Перемещение коммита в другую ветку</p>
       <p>Перемещение коммита – очень мощная функция Git. С ней вы можете выбрать определенный коммит из одной ветки и присоединить его к другой. Допустим, ветка develop на 3 коммита больше master. И из этих 3 коммитов лишь второй по счету нужно объединить с master. Вот, как это решается в Git:</p>
       <ul>
         <li>Шаг 1: Переключаемся на ветку master через <mark>checkout.</mark></li>
         <li>Шаг 2: Выполняем <mark>git cherry-pick</mark>  для присоединения выбранного коммита к ветке <b>master.</b></li>
       </ul>
       <p><b>Примечание:</b> Для просмотра созданных коммитов и их хешей используется команда <b>git log.</b></p>
       <p>Поэтому если в дальнейшем вы захотите объединить остаток ветки <b>develop</b> с <b>master</b>, то просто выполните следующую команду:</p>
       <code>
        git rebase develop
       </code>
    </article>

    <form method="post" class="row g-3" autocomplete="off">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">Имя:</label>
          <input v-model="name"  type="text"  class="form-control" id="validationDefault01"  required>
          <label  for="alidationDefault02" class="form-label">Комментарий:</label>
          <textarea v-model="comment" class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
          <button type="button" v-on:click="AddComment()" class="btn btn-primary">Добавить комментарий</button>
        </div>
    </form>
    <div v-for="(el,key) in NewComment" v-bind:key="key">
        <p>{{ el.Authors }}</p>
        <p>{{ el.comments }}</p>
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
            this.NewComment.push({
               Authors: this.name,
               comments: this.comment
            })
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