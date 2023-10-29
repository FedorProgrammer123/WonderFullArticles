<template>
    <div>
        <p class="fw-bolder fs-1">Последние опубликованные</p>
        <hr class="firsthr"/>
    </div>
    <div class="published_articles1">
        <div class="p-2">
            <div class="card" style="width: 18rem;">
                <img src="../assets/Languages.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fw-bolder">Какие языки программирования ненавидят больше и почему?</h5>
                  <p class="card-text">Авторитетный веб-ресурс Stack Overflow решил заняться опросом в отношении языков программирования. В этот раз в центре внимания нелюбимые языки.</p>
                  <router-link to="/languages"><button class="btn btn-outline-primary">Далее</button></router-link>
                </div>
              </div>
        </div>
        <div class="p-2">
            <div class="card" style="width: 18rem;">
                <img src="../assets/Camera.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fw-bolder">Надо ли заклеивать камеру на ноутбуке?</h5>
                  <p class="card-text">Заклеивать камеру ноутбука - паранойя или эффективное средство защититься от хакеров? Мы рассмотрим аспекты за и против и ответим на этот вездесущий вопрос.</p>
                  <router-link to="/Camera"><button class="btn btn-outline-primary">Далее</button></router-link>
                </div>
              </div>
        </div>
       
    </div>
    <div class="published_articles1">
        <div class="p-2">
            <div class="card" style="width: 18rem;">
                <img src="../assets/It-Specialists.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fw-bolder">5 будущих профессий для IT специалистов</h5>
                  <p class="card-text">Профессии постоянно пополняются и IT сфера вовсе не исключение. Мы подготовили список из 5 возможных будущих профессий, к которым можно подготовиться уже сейчас.</p>
                  <router-link to="/ItSpecialists"><button class="btn btn-outline-primary">Далее</button></router-link>
                </div>
              </div>
        </div>
        <div class="p-2">
            <div class="card" style="width: 18rem;">
                <img src="../assets/PythonVoice.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fw-bolder">ИИ на Python для распознавания голоса и выполнения команд</h5>
                  <p class="card-text">На Python можно строить как простые программы, так и сложные ИИ системы. В данной статье мы покажем как реализовать распознавание голоса и выполнение различных команд.</p>
                  <router-link to="/Python"><button class="btn btn-outline-primary">Далее</button></router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="published_articles1">
        <div class="p-2">
            <div class="card" style="width: 18rem;">
                <img src="../assets/Git.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fw-bolder">Изучение Git на реальных примерах</h5>
                  <p class="card-text">Git – это очень полезная система управления версиями, которая позволяет разработчикам эффективнее работать вместе. В статье вкратце на примерах, вы изучите основные моменты Git.</p>
                  <router-link to="/LearnGit"><button class="btn btn-outline-primary">Далее</button></router-link>
                </div>
              </div>
        </div>
        <div class="p-2">
            <div class="card" style="width: 18rem;">
                <img src="../assets/JS.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fw-bolder">Почему JavaScript очень крутой язык программирования?</h5>
                  <p class="card-text">Язык JavaScript за последние года стал мега популярным и завоевал огромное доверие среди разработчиков. Почему он так крут? Узнаем в этой статье.</p>
                  <router-link to="/JSSuperLanguage"><button class="btn btn-outline-primary">Далее</button></router-link>
                </div>
              </div>
        </div>
    </div>
    <hr/>
    <div class="published_articles1">
      <div class="p-2">
        <div class="card" style="width: 18rem;">
          <img src="../assets/Frontend.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bolder">Front-end</h5>
            <p class="card-text">Lorem ipsum dolor, consectetur magma etiam elit. Etiam sed ultricus.</p>
            <a href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#FrontEnd">Детали</a>
          </div>
        </div>
      </div>
      <div class="p-2">
        <div class="card" style="width: 18rem;">
          <img src="../assets/Swift.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bolder">Swift</h5>
            <p class="card-text">Lorem ipsum dolor, consectetur magma etiam elit. Etiam sed ultricus.</p>
            <a href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Swift">Детали</a>
          </div>
        </div>
      </div>
      <div class="p-2">
        <div class="card" style="width: 18rem;">
          <img src="../assets/Python.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bolder">Python</h5>
            <p class="card-text">Lorem ipsum dolor, consectetur magma etiam elit. Etiam sed ultricus.</p>
            <a href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Python">Детали</a>
          </div>
        </div>
      </div>
      <div class="p-2">
        <div class="card" style="width: 18rem;">
          <img src="../assets/Angular.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bolder">Angular</h5>
            <p class="card-text">Lorem ipsum dolor, consectetur magma etiam elit. Etiam sed ultricus.</p>
            <a href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Angular">Детали</a>
          </div>
        </div>
      </div>
      <div class="p-2">
        <div class="card" style="width: 18rem;">
          <img src="../assets/Php.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bolder">Php &amp; MySQL</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Php">Детали</a>
          </div>
        </div>
      </div>
    </div>
    <!--Модальные окна-->
    <div class="modal" id="FrontEnd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Front-end</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
              FrontEnd разработчик создает видимую для пользователя часть веб-страницы и его главная задача – точно передать в верстке то, что создал дизайнер, а также реализовать пользовательскую логику.
            </p>
            <p>
              Для того, чтобы стать FrontEnd разработчиком, не нужны знания математики. Освоить специальность Вы сможете за 3-6 месяцев, в зависимости от того, сколько времени будете уделять теории и кодингу. Наша программа обучения выверена на практике и включает в себя самые необходимые и современные технологии
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" id="Swift" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Swift</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
              Swift — это язык программирования от компании Apple с открытым исходным кодом. Предназначен для разработки приложений для iOS и macOS, реже используется в других проектах. Язык появился всего в 2014 году как альтернатива Objective-C.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" id="Python" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Python</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
              Python — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" id="Angular" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Angular</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
              Angular — открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google, а также сообществом разработчиков из различных компаний. Angular — полностью переписанный фреймворк от той же команды, которая написала AngularJS.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" id="Php" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Php &amp; MySQL</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
              PHP — C-подобный скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.
            </p>
            <p>
              MySQL — свободная реляционная система управления базами данных. Разработку и поддержку MySQL осуществляет корпорация Oracle, получившая права на торговую марку вместе с поглощённой Sun Microsystems, которая ранее приобрела шведскую компанию MySQL AB.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
.firsthr{
  width: 18em;
  height: 1em;
  background-color: #012757
}
.published_articles1{
  img{
    cursor: pointer;
    &:hover{
      border: 5px solid #f01dd4;
      transform: scale(2);
    }
  }
}
</style>