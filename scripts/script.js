let all_second_news_cards = document.getElementById("all_second_news_cards");
let news_now_cards_block = document.getElementById("news_now_cards_block");
let allnews_slider = document.getElementById("allnews_slider");
let favor_block_content = document.getElementById("favor_block_content");
let tabloid_head_news = document.getElementById("tabloid_head_news");
let favor_block_content_tabloid = document.getElementById("favor_block_content_tabloid");
let number_day = document.getElementById("number_day");
let slider_popular_slider_all = document.getElementById("slider_popular_slider_all");
let slider_progects_all_block = document.getElementById("slider_progects_all_block");

const News_Info = [
    {
    id: 1,
    time: "xx:xx",
    img: "images/news_images/1_1159896.webp",
    text: "«Через 24 часа все восстанавливается»: невролог объяснил настоящий диагноз Ефремова",
    href:"#"
    },  
    {
    id: 2,
    time: "xx:xx",
    img: "images/news_images/1_1159928.webp",
    text: "Какие уроки из COVID-19 вынесли главы регионов России",
    href:"#"
    },
    {
    id: 3,
    time: "xx:xx",
    img: "images/news_images/1_1159934.webp",
    text: "Пчеловод рассказал, как выбрать неподдельный мед",
    href:"#"
    },
    {
    id: 4,
    time: "xx:xx",
    img: "images/news_images/1_1156455.webp",
    text: "Опасный грибной сезон: как безопасно ходить в лес",
    href:"#"
    },
    {
    id: 5,
    time: "xx:xx",
    img: "images/news_images/1_1159768.webp",
    text: "От зерна до каравая: Как благодаря нацпроекту удалось повысить качество российского хлеба",
    href:"#"
    },
    {
    id: 6,
    time: "xx:xx",
    img: "images/news_images/1_1159919.webp",
    text: "Помощница Галустяна прокомментировала состояние шоумена",
    href:"#"
    },
]
const NewsNow = [
    {
        id: 1,
        href: "#",
        time: "21:10",
        text: "Заседание по делу Ефремова прервали из-за эвакуации в суде"
    },
]
const AllNewsSlide_block = [
    {
        id: 1,
        href: "#",
        slide: "images/news_images/3002_963844.webp"
    },
    {
        id: 2,
        href: "#",
        slide: "images/news_images/3001_1154597.webp"
    },{
        id: 3,
        href: "#",
        slide: "images/news_images/3001_1158872.webp"
    },
    {
        id: 4,
        href: "#",
        slide: "images/news_images/3001_1159866.webp"
    },
    
]
const FavorNewsBlock = [
    {
        id: 1,
        href: "#",
        text_small: "Точка зрения",
        slide: "images/news_images/1_1158781.webp",
        text_news: "«Зенит» — ЦСКА: Первая супербитва сезона"
    },
    {
        id: 2,
        href: "#",
        text_small: "Лонгрид",
        slide: "images/news_images/1_1160382.webp",
        text_news: "Звездный криминал: Громкие убийства среди знаменитостей"
    },
    {
        id: 3,
        href: "#",
        text_small: "Интервью",
        slide: "images/news_images/1_1161953.webp",
        text_news: "Сергей Соловьев: «„Асса“ — чисто индийская картина»"
    },
    {
        id: 4,
        href: "#",
        text_small: "Лонгрид",
        slide: "images/news_images/1_1158940.webp",
        text_news: "Беспощадная красота: Макияж в советских фильмах"
    },
]
const Tabloid_head_news_block = [
    {
        id: 1,
        href: "#",
        image: "images/news_images/1_1161355.webp",
        text: "«Спартак» — «Локомотив»: Первое дерби сезона"
    },
    {
        id: 2,
        href: "#",
        image: "images/news_images/1_1089304.webp",
        text: "Пять фактов о Ким Ё Чжон — сестре Ким Чен Ына"
    },
]
const Favor_block_inf = [
    {
        id: 1,
        href: "#",
        time: "5:00",
        image: "images/news_images/1_1160927.webp",
        text: "В кругосветку — на «копейке», в Антарктику — на «Ниве»"
    },
    {
        id: 2,
        href: "#",
        time: "14:20",
        image: "images/news_images/1_1161381.webp",
        text: "«Смех и радость мы приносим людям»: Юрию Энтину — 85 лет"
    },
    {
        id: 3,
        href: "#",
        time: "8:00",
        image: "images/news_images/1_1161384.webp",
        text: "Приготовьте чечевичный крем-суп, как в турецком отеле — пошаговый рецепт"
    },
    {
        id: 4,
        href: "#",
        time: "20 авг",
        image: "images/news_images/1_1161420.webp",
        text: "Тест: Угадайте фильм с Юрием Никулиным"
    }
]
const Number_day_info_block = [
    {
        id: 1,
        href: "#",
        text_href: "Цифры дня",
        number_day_link: "#",
        img: "images/news_images/2826_1162227.webp",
        number_day_link_text: "Понедельник только с Пятым!",
        day_text_p: "Эфирные предложения Пятого канала в понедельник, 17 августа, собрали у экранов 9,6% телезрительниц столицы, что принесло Пятому первое место среди всех федеральных телеканалов страны в аудитории «Женщины 35-50» за сутки в целом.",
        mark_link: "#",
        text_mark_link: "Для рекламодателей"
    }, 
    {
        id: 2,
        href: "#",
        text_href: "Новости канала",
        number_day_link: "#",
        img: "images/news_images/114_1162144.webp",
        number_day_link_text: "Новый сезон программы «Светская хроника» на Пятом канале!",
        day_text_p: "21 августа состоится премьера нового сезона информационно-развлекательной программы «Светская хроника». Тележурнал выходит в прайм-тайм — в 23:45 по пятницам на Пятом канале.",
        mark_link: "#",
        text_mark_link: "5-tv.ru"
    }, 
    {
        id: 3,
        href: "#",
        text_href: "Пресса о компании",
        number_day_link: "#",
        img: "images/news_images/3006_757271.webp",
        number_day_link_text: " Почти 4 000 000 зрителей посмотрели фестиваль «Легенды Ретро FM» на Пятом канале",
        day_text_p: "Летний показ супершоу на телеканале, подготовленный ко Дню России, вошёл в топ национальных ТВ-рейтингов.",
        mark_link: "#",
        text_mark_link: "5-tv.ru"
    }, 
    {
        id: 4,
        href: "#",
        text_href: "Лента новостей",
        number_day_link: "#",
        img: "images/news_images/1_1163803.webp",
        number_day_link_text: "Дональд Трамп стал кандидатом в президенты США",
        day_text_p: "",
        mark_link: "#",
        text_mark_link: "Мировые новости"
    }, 
]
const Slide_pop = [
    {
        id: 1,
        href: "#",
        img: "images/news_images/1_1158307.webp",
        text: "Умер внук первого президента Казахстана Нурсултана Назарбаева",
        tag: "Общество"
    },
    {
        id: 2,
        href: "#",
        img: "images/news_images/1_1158850.webp",
        text: "Кому достанется наследство Валентины Легкоступовой?",
        tag: "Шоу-бизнес"
    },
    {
        id: 3,
        href: "#",
        img: "images/news_images/1_961440.webp",
        text: "Какие обряды проводить на Яблочный Спас, чтобы привлечь любовь и деньги?",
        tag: "Общество"
    },
    {
        id: 4,
        href: "#",
        img: "images/news_images/1_1161717.webp",
        text: "«Семья не хотела, чтобы знала пресса»: Кравец раскрыла предсмертную тайну Легкоступовой",
        tag: "Шоу-бизнес"
    },
    {
        id: 5,
        href: "#",
        img: "images/news_images/1_1159813.webp",
        text: "«Я вам сочувствую!» — Ефремов вдруг встал и высказался в суде",
        tag: "Общество"
    },
    {
        id: 6,
        href: "#",
        img: "images/news_images/1_961314.webp",
        text: "День святого Евстигнея: что категорически нельзя делать 18 августа",
        tag: "Общество"
    },
    {
        id: 7,
        href: "#",
        img: "images/news_images/1_1184913.webp",
        text: "«Можно и в ложке воды захлебнуться»: нарколог об алкоголе и снотворном в крови Конкиной",
        tag: "Общество"
    },
    {
        id: 8,
        href: "#",
        img: "images/news_images/1_1186061.webp",
        text: "Серьезно болен? Актера Андрея Чернышова не узнали в худощавом старике",
        tag: "Шоу-бизнес"
    },
]

const Slide_prog =[
    {
        id: 1,
        href: "#",
        img: "images/films_images/3021_1155862.webp",
        head: "Билет в будущее",
        text: "Проект «Билет в будущее» — уникальная возможность осознанно выбрать профессию для подростков. В каждом выпуске руководители проекта рассказывают о востребованности разных специальностей, квалифицированные наставники делятся лайфхаками, а сами подростки пробуют себя в различных практикумах."
    },
    {
        id: 2,
        href: "#",
        img: "images/films_images/3021_1155862.webp",
        head: "След",
        text: "Один из самых успешных российских криминальных сериалов — это не просто набор увлекательных детективных историй. Все они объединены основной идеей — идеальных преступлений не существует. Как бы не старался злоумышленник, он всё равно оставит след, по которому его замысел будет раскрыт."
    }, 
    {
        id: 3,
        href: "#",
        img: "images/films_images/3021_1155862.webp",
        head: "Билет в будущее",
        text: "«Свои» — это команда лучших экспертов из разных структур, которые объединились, чтобы разгадывать самые нетривиальные детективные загадки."
    }, 
    {
        id: 4,
        href: "#",
        img: "images/films_images/3024_1126939.webp",
        head: "Алые паруса",
        text: "«Алые паруса» — праздник выпускников ленинградских школ, появление которого в конце 60-х навеяла невероятная популярность одноименного фильма по повести Александра Грина. Первый праздник состоялся 27 июня 1968 года. В этот день ленинградские школьники впервые увидели на Неве бригантину под алыми парусами, ставшую впоследствии эмблемой праздника."
    }, 
    {
        id: 5,
        href: "#",
        img: "images/films_images/3021_1155862.webp",
        head: "Великолепная Пятерка",
        text: "Детективный сериал о буднях оперов «убойного» отдела Петровского РОВД Петербурга. Пятерка — потому что оперов пять. Пять разных характеров, которые сплотил их командир, человек с большим юмором и богатым прошлым."
    }, 
    {
        id: 6,
        href: "#",
        img: "images/films_images/3021_1155862.webp",
        head: "Есть нюансы",
        text: "«Синий чулок» библиотекарь Спичкина, замученные семейным бытом супруги Чепиковы, горе-бизнесмен, авантюрист Бондаренко, приговоренный к домашнему аресту в глухой деревне. Что объединяет всех этих людей? Только одно — сеансы у экстравагантного психолога Александра Сергеевича, который знает — у каждого, даже самого обычного человека, Есть свои Нюансы."
    }, 
    {
        id: 7,
        href: "#",
        img: "images/films_images/3021_1155862.webp",
        head: "Известия",
        text: "Информационные выпуски «Известий» — это оперативное информирование о самых важных событиях в России и мире, это прямые включения, собственные съемки, непредвзятый подход к выбору тем и сюжетов, компетентность и неангажированность ведущих, яркая и современная подача информации."
    }, 
]
class AllNews extends React.Component{
    render(){
        const NewsTemplate = this.props.data.map(function(item){
            return(
            <div className="second_news_card" key={item.id}>
              <a className="second_news_link" href={item.href}>
                <div className="second_news_time_block">{item.time}</div>
                <img className="second_news_card_img" src={item.img} />
                <div className="second_news_text">
                  {item.text}
                </div>
              </a>
            </div>);
        }
        )
        return(
            <div>
                {NewsTemplate}
            </div>
        )
    }
}
ReactDOM.render(<AllNews data = {News_Info}/>, all_second_news_cards);


class NewsNowCard extends React.Component{
    render(){
        const NewsNowInfo = this.props.data_2.map(function(item){
            return(
                <div className="news_card" key={item.id}>
                  <a href={item.href} className="news_link">
                    <span className="news_time">
                      {item.time}
                    </span>
                    <span className="news_link_text">
                      {item.text}
                    </span>
                  </a>
                </div>
                )   
        })
        return(
            <div>
                {NewsNowInfo}
            </div>
            )
    }
}
ReactDOM.render(<NewsNowCard data_2 = {NewsNow} />, news_now_cards_block);

class AllNewsSlide extends React.Component{
    render(){
        const allNewsSlide = this.props.data_3.map(function(item){
            return(
                <a className="allnews_slide_card" key={item.id} href={item.href}>
                    <img src={item.slide} />
                </a>
            )
        })
        return(
            <div>
                {allNewsSlide}
            </div>
            )
    }
}
ReactDOM.render(<AllNewsSlide data_3 = {AllNewsSlide_block} />, allnews_slider);

class Favor_block extends React.Component{
    render(){
        const Favor_block_info = this.props.data_4.map(function(item){
            return(
                <div className="favor_news_card" key={item.id}>
                    <a className="favor_news_link" href={item.href}>
                      <div className="favor_news_time_block">{item.text_small}</div>
                      <img className="favor_news_card_img" src={item.slide} />
                      <div className="favor_news_text">
                        {item.text_news}
                      </div>
                    </a>
                </div>  
            )
        })
    return(
        <div className="favor_block_content">
         {Favor_block_info}
        </div>
    )   
    }
}
ReactDOM.render(<Favor_block data_4={FavorNewsBlock} />, favor_block_content);

class Favor_block_content extends React.Component{
    render(){
        const News_favor = this.props.data_6.map(function(item){
            return(
                <div className="favor_news_card" key={item.id}>
                  <a className="favor_news_link" href={item.href}>
                    <div className="favor_news_time_block">{item.time}</div>
                    <img className="favor_news_card_img" src={item.image} />
                    <div className="favor_news_text">
                        {item.text}
                    </div>
                  </a>
                </div>
            )
        })
        return(
            <div className="favor_block_content favor_block_content_tabloid">
            {News_favor}
            </div>
        )
    }
}
ReactDOM.render(<Favor_block_content data_6={Favor_block_inf} />, favor_block_content_tabloid);
        
class Number_day_datas extends React.Component{
    render(){
        const Number_day_inf = this.props.data_7.map(function(i){
            return(
                <div className="number_day_cart" key={i.id}>
                  <div className="number_day_header">
                    <a className="number_day_header_link" href={i.href}>
                      {i.text_href}
                    </a>
                  </div>
                  <a className="number_day_text_link" href={i.number_day_link}>
                    <img className="number_day_header_img" src={i.img} />
                    {i.number_day_link_text}</a>
                  <p className="number_day_text_p">
                    {i.day_text_p}
                  </p>
                  <a href={i.mark_link} className="number_day_text_mark">
                    {i.text_mark_link}
                  </a>
                </div>
            )
        })
        return(
        <div className="number_day">{Number_day_inf}</div>
        )
    }
}
ReactDOM.render(<Number_day_datas data_7={Number_day_info_block}/>, number_day);


class Slide_popular extends React.Component{
    render(){
        const Slide_popular_infoblock = this.props.data_8.map(function(q){
            return(
                <a key={q.id} className="slide_slider_popular" href={q.href}>
                  <img src={q.img} />
                  <p>{q.text}</p>
                  <span className="slide_slider_popular_tag">
                    {q.tag}
                  </span>
                </a>
            )
        })
        return(
        <div>
            {Slide_popular_infoblock}
        </div>
        )
    }
}
ReactDOM.render(<Slide_popular data_8={Slide_pop} />, slider_popular_slider_all);

class Slide_progects extends React.Component{
    render(){
        const Slide_progectBlock = this.props.data_9.map(function(x){
            return(
                <div className="slider_progects_card" key={x.id}>
                    <a href={x.href} className="slider_progects_link">
                      <img src={x.img} className="slider_progects_img" />
                      <p className="slider_progects_head">
                        {x.head}
                      </p>
                    </a>
                    <p className="slider_progects_text">
                        {x.text}  
                    </p>
                  </div>
            )
        })
        return(
            <div>{Slide_progectBlock}</div>
        )
    }
}
ReactDOM.render(<Slide_progects data_9={Slide_prog} />, slider_progects_all_block);
$("body").on("click", ".arrow_slide", function(){
    let side = $(this).attr("class");
    let count = $(".allnews_slide_card").length;
    let width_slide = $(this).parent(".allnews_slider_block").children(".allnews_slider").children("div").children(".allnews_slide_card").width();
    let shift = $(this).parent(".allnews_slider_block").children(".allnews_slider").css("right");
    shift = parseInt(shift)
    if(side.indexOf("right") != -1){
        if(shift<width_slide*(count-1)){
            $(this).parent(".allnews_slider_block").children(".allnews_slider").animate({"right": "+=" + width_slide + "px"});
        }
        else{
            $(this).parent(".allnews_slider_block").children(".allnews_slider").animate({"right": 0})
        }
    }
    else{
        if(shift<=0){
            $(this).parent(".allnews_slider_block").children(".allnews_slider").animate({"right": "+=" + width_slide*(count-1) + "px"});
        }
        else{
            $(this).parent(".allnews_slider_block").children(".allnews_slider").animate({"right": "-=" + width_slide + "px"});
        }
    }
})

$("body").on("click", ".slide_popular_arrow", function(){
    let side = $(this).attr("class");
    let count = $(".slide_slider_popular").length;
    let width_slide = $(".slide_slider_popular").width();
    let margin_slide = $(".slide_slider_popular").css("margin-right");
    margin_slide = parseInt(margin_slide);
    let shift = $(this).parent("div").children(".slider_popular_slider_all").css("right");
    shift = parseInt(shift);
    if(side.indexOf("right") != -1){
        if(shift<width_slide*(count-6)){
            $(this).parent("div").children(".slider_popular_slider_all").animate({"right": "+=" + (width_slide+margin_slide) + "px"});
        }
        else{
            $(this).parent("div").children(".slider_popular_slider_all").animate({"right": 0})
        }
    }
    else{
        if(shift<=0){
            $(this).parent("div").children(".slider_popular_slider_all").animate({"right": "+=" + (width_slide+margin_slide)*(count-6) + "px"});
        }
        else{
            $(this).parent("div").children(".slider_popular_slider_all").animate({"right": "-=" + (width_slide+margin_slide) + "px"});
        }
    }
})

$("body").on("click", ".search_image", function(){
    $(".header_search_block").slideToggle(300);
})

$("body").on("click", ".slide_progects_arrow", function(){
    let side = $(this).attr("class");
    let count = $(".slider_progects_card").length;
    let width_slide = $(".slider_progects_card").width();
    let margin_slide = $(".slider_progects_card").css("margin-right");
    margin_slide = parseInt(margin_slide);
    let shift = $(this).parent(".slider_progects_show_block").children(".slider_progects_all_block").css("right");
    shift = parseInt(shift);
    if(side.indexOf("right") != -1){
        if(shift<width_slide*(count-4)){
            $(this).parent(".slider_progects_show_block").children(".slider_progects_all_block").animate({"right": "+=" + (width_slide+margin_slide) + "px"});
        }
        else{
            $(this).parent(".slider_progects_show_block").children(".slider_progects_all_block").animate({"right": 0})
        }
    }
    else{
        if(shift<=0){
            $(this).parent(".slider_progects_show_block").children(".slider_progects_all_block").animate({"right": "+=" + (width_slide+margin_slide)*(count-4) + "px"});
        }
        else{
            $(this).parent(".slider_progects_show_block").children(".slider_progects_all_block").animate({"right": "-=" + (width_slide+margin_slide) + "px"});
        }
    }
})





/*
class Tabloid_head_news_card_block extends React.Component{
    render(){
        const Tabloid_head_news_info = this.props.data_5.map(function(item){
            return( 
            <div className="tabloid_head_news_card" key={item.id}>{item.href}
              <a className="tabloid_head_news_link" href={item.href} style="background-image:url('{item.image}');">
                <div className="hotnews_gradient"></div>
                <span className="tabloid_head_news_header">{item.text}</span>
                <div className="stick_tabloid_head_news">читать</div>
              </a>
            </div>    
            )
        })
        return(
            <div>
             {Tabloid_head_news_info}
            </div> 
        )
    }
}
ReactDOM.render(<Tabloid_head_news_card_block data_5={Tabloid_head_news_block} />, tabloid_head_news);
*/