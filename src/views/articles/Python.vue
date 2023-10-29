<template>
    <p class="fw-bolder fs-1">ИИ на Python для распознавания голоса и выполнения команд</p>
    <button v-on:click="showArticle()" v-on:mouseover="changeColor()" id="show" class="btn btn-outline-primary">{{ show }}</button>
    <button v-on:click="hideArticle()" v-on:mouseover="changeColor()" id="hide" class="btn btn-outline-primary">{{ hide }}</button>
    <article v-bind:style="display">
       <img src="https://itproger.com/img/news/x1545671924.jpg.pagespeed.ic.WyIQLMk7Wz.webp" class="img-thumbnail" alt="">
       <p class="display-5 fw-bolder">ИИ на Python для распознавания голоса и выполнения команд</p>
       <p>На Python можно строить как простые программы, так и сложные ИИ системы. В данной статье мы покажем как реализовать распознавание голоса и выполнение различных команд. </p>
       <p>Перед стартом работы, вам стоит убедиться в нескольких вещах:</p>
       <ul>
         <li>у вас установлен <span style="color:#F27B80">Python</span> на вашем компьютере;</li>
         <li>у вас установлен текстовый редактор, к примеру <span style="color:#F27B80">PyCharm;</span></li>
         <li>у вас установлен пакетный менеджер <span style="color:#F27B80">Pip.</span></li>
       </ul>
       <p class="display-5 fw-bolder">Установка библиотек</p>
       <p>Для распознавания голоса вам необходимо установить библиотеки:</p>
       <ol>
         <li>SpeechRecognition - команда <mark>pip install SpeechRecognition</mark>;</li>
         <li>gTTS - команда <mark>pip install gTTS</mark>;</li>
         <li>PyAudio - команда <mark>pip install PyAudio.</mark></li>
       </ol>
       <p>Все библиотеки стоит устанавливать через терминал в ваш проект через программу <b>PyCharm:</b></p>
       <img src="https://itproger.com/img/news/1545673251.png" class="img-thumbnail" alt="">
       <p>После установки всех библиотек начните прописывать код самой программы.  Ниже мы приведем весь код программы с комментариями, дабы вам было проще в нём разобраться:</p>
       <code>
        # Подключение всех необходимых библиотек
        # Нам нужно: speech_recognition, os, sys, webbrowser
        # Для первой бибилотеки прописываем также псевдоним
        import speech_recognition as sr
        import os
        import sys
        import webbrowser
        
        # Функция, позволяющая проговаривать слова
        # Принимает параметр "Слова" и прогроваривает их
        def talk(words):
            print(words) # Дополнительно выводим на экран
            os.system("say " + words) # Проговариваем слова
        
        # Вызов функции и передача строки 
        # именно эта строка будет проговорена компьютером
        talk("Привет, чем я могу помочь вам?")
        
        """ 
            Функция command() служит для отслеживания микрофона.
            Вызывая функцию мы будет слушать что скажет пользователь,
            при этом для прослушивания будет использован микрофон.
            Получение данные будут сконвертированы в строку и далее
            будет происходить их проверка.
        """
        def command():
            # Создаем объект на основе библиотеки
            # speech_recognition и вызываем метод для определения данных
            r = sr.Recognizer()
        
            # Начинаем прослушивать микрофон и записываем данные в source
            with sr.Microphone() as source:
                # Просто вывод, чтобы мы знали когда говорить
                print("Говорите")
                # Устанавливаем паузу, чтобы прослушивание
                # началось лишь по прошествию 1 секунды
                r.pause_threshold = 1
                # используем adjust_for_ambient_noise для удаления
                # посторонних шумов из аудио дорожки
                r.adjust_for_ambient_noise(source, duration=1)
                # Полученные данные записываем в переменную audio
                # пока мы получили лишь mp3 звук
                audio = r.listen(source)
        
            try: # Обрабатываем все при помощи исключений
                """ 
                Распознаем данные из mp3 дорожки.
                Указываем что отслеживаемый язык русский.
                Благодаря lower() приводим все в нижний регистр.
                Теперь мы получили данные в формате строки,
                которые спокойно можем проверить в условиях
                """
                zadanie = r.recognize_google(audio, language="ru-RU").lower()
                # Просто отображаем текст что сказал пользователь
                print("Вы сказали: " + zadanie)
            # Если не смогли распознать текст, то будет вызвана эта ошибка
            except sr.UnknownValueError:
                # Здесь просто проговариваем слова "Я вас не поняла"
                # и вызываем снова функцию command() для
                # получения текста от пользователя
                talk("Я вас не поняла")
                zadanie = command()
        
            # В конце функции возвращаем текст задания
            # или же повторный вызов функции
            return zadanie
        
        # Данная функция служит для проверки текста, 
        # что сказал пользователь (zadanie - текст от пользователя)
        def makeSomething(zadanie):
            # Попросту проверяем текст на соответствие
            # Если в тексте что сказал пользователь есть слова
            # "открыть сайт", то выполняем команду
            if 'открыть сайт' in zadanie:
                # Проговариваем текст
                talk("Уже открываю")
                # Указываем сайт для открытия
                url = 'https://itproger.com'
                # Открываем сайт
                webbrowser.open(url)
            # если было сказано "стоп", то останавливаем прогу
            elif 'стоп' in zadanie:
                # Проговариваем текст
                talk("Да, конечно, без проблем")
                # Выходим из программы
                sys.exit()
            # Аналогично
            elif 'имя' in zadanie:
                talk("Меня зовут Сири")
        
        # Вызов функции для проверки текста будет 
        # осуществляться постоянно, поэтому здесь
        # прописан бесконечный цикл while
        while True:
            makeSomething(command())
       </code>
       <p>Как видите, программа простая и не требует гигантского количества строчек кода. Сам код можете подстраивать в любую программу, дабы добавить в неё функционал прослушивания речи.</p>
       <p>Также предлагаем посмотреть видео, где все описано еще более детально:</p>
       <iframe width="1280" height="720" src="https://www.youtube.com/embed/iIOKHKwi2TE" class="container container-sm container-md container-lg container-xxl "   title="Простой искусственный интеллект на Python. Распознавание голоса на Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <p class="display-5 fw-bolder">Полезные ссылки из видео:</p>
       <ol>
        <li>Скачать редактор <a href="https://www.jetbrains.com/pycharm/" target="_blank"><span style="color:#F27B80">PyCharm;</span></a></li>
        <li>Скачать пакетный менеджер <a href="https://pip.pypa.io/en/stable/installing/" target="_blank"><span style="color:#F27B80">Pip;</span></a></li>
        <li>Скачать <a href="https://brew.sh/index_ru"><span style="color:#F27B80" target="_blank">Homebrew</span></a> для установки PyAudio;</li>
        <li>Пример установки библиотеки <a href="https://stackoverflow.com/questions/33851379/pyaudio-installation-on-mac-python-3" target="_blank"><span style="color:#F27B80">PyAudio;</span></a></li>
        <li>Поддержка различных <a href="https://cloud.google.com/speech-to-text/docs/languages" target="_blank"><span style="color:#F27B80">языков.</span></a></li>
       </ol>
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