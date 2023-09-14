news = [
  {
    name: "Apple представила iPhone 15",
    author: "РИА",
    date: "13-09-2023",
    text: "Компания Apple представила iPhone 15 и новое поколение часов, управление которыми можно будет осуществлять без нажатия на экран. Запись презентации новых продуктов продемонстрировал сайт компании.",
  },
  {
    name: "Названо точное количество часов сна, снижающее риск депрессии",
    author: "Mail",
    date: "13-09-2023",
    text: "В исследовании приняли участие 40 тысяч медсестер из США. Многие из них вели образ жизни «ночной совы», то есть бодрствовали после 21:00. Такой хронотип увеличивает риск развития депрессии. Поэтому важно спать от 7 до 9 часов в сутки. Это снижает шансы психического расстройства на 22%.",
  },
  {
    name: "На Ямале спасли замерзшую сову",
    author: "РИА",
    date: "25-05-2023",
    text: "Особь ястребиной совы заметили прохожие под припаркованным автомобилем. Годовалая птица была слаба и примерзла ко льду, ее доставили в приют для животных Друг, где нового постояльца осмотрели специалисты центра ветеринарии.",
  },
  {
    name: "Полиция Англии спутала урок йоги с ритуальным жертвоприношением",
    author: "Mail",
    date: "13-09-2023",
    text: "Некоторые из практикующих йогу людей уверены в том, что звонившим был один из владельцев собак, что гуляют неподалеку от здания. Полиция отмечает, что звонок был сделан с добрыми намерениями и не являлся розыгрышем.",
  },
  {
    name: "В Центре реабилитации диких животных родились редкие амурские котята",
    author: "РИА",
    date: "24-05-2023",
    text: "Отмечается, что котята и их мамы чувствуют себя хорошо, в Центре реабилитации для них созданы все необходимые условия. Малыши игривы и любопытны.",
  },
];

list = document.querySelector(".list");
for (i = 0; i < news.length; i++) {
  list.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 class="name"> ` +
      news[i]["name"] +
      `<h2>
    <h3 class="author"> ` +
      news[i]["author"] +
      `</h3>
    <h4 class="date"> ` +
      news[i]["date"] +
      `</h4>
    <p class="text"> ` +
      news[i]["text"] +
      `</p> 
    </div>
    `
  );
}

// count = 0;
// button = document.querySelector(".button");
// c = document.querySelector(".count");
// button.addEventLestener("click", function () {
//   count++;
//   c.textContent = count;
// });

news = [];

// input = document.querySelector(".id");
inputName = document.getElementById("name");
inputAuthor = document.getElementById("author");
inputDate = document.getElementById("date");
inputText = document.getElementById("text");
addButton = document.getElementById("add");
list = document.querySelector(".list");

function newsArr(arr){
  arr.forEach(y => {
    list.insertAdjacentHTML(
      'beforeend',
      `<div class="card">
    <h2 class="name"> ${y.name}</h2>
    <h3 class="author"> ${y.author}</h3>
    <h4 class="date">${y.date}</h4>
    <p class="text">${y.text}<p>
    </div>
    `
    );
  });
}

function addArr(){
  object = {
    name: inputName.value,
    author: inputAuthor.value,
    date: inputDate.value,
    text: inputText.value
  }

  news.push(object)
  list.innerHtml = ''
  inputName.value = ''
  inputAuthor.value = ''
  inputDate.value = ''
  inputText.value = ''
  newsArr (news)
  console.log(news);
}

addButton.addEventListener('click',addArr)

array.forEach(element => {
  
});