<!--1 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.-->
<!--Вставити цей блок на сторінку-->
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];


let blockDiv = document.createElement('div');
blockDiv.style.display = 'flex';
blockDiv.style.flexWrap = 'wrap';
for (const object of users) {

    let userDiv = document.createElement('div');
    let title = document.createElement('h2');
    title.innerText = `${object.name}`;
    userDiv.append(title);

    let info = document.createElement('p');
    info.innerText = `${object.age} - ${object.status}`;
    userDiv.append(info);

        let city = document.createElement('p');
    city.innerText =`${object.address.country}, ${object.address.city},  ${object.address.street}, ${object.address.houseNumber}`;
    userDiv.append(city);
    userDiv.style.width = '25%';
    blockDiv.append(userDiv);

}
document.body.appendChild(blockDiv);

<!--3 Є масив котрий характеризує правила.-->
<!--Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.-->
<!--При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.-->
<!--Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html-->

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        info: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        info: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        info: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
       info: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        info: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        info: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        info: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        info: 'Новичок обязан принять бой.'
    }
];
let title1 = document.createElement('h1');
title1.innerText = 'Правила бойцовского клуба:';
document.body.appendChild(title1);
for (const rule of rules) {
  let ruleDiv = document.createElement('div');

  let title = document.createElement('h2');
    title.innerText = `${rule.title}`;
    ruleDiv.append(title);

    let info = document.createElement('p');
    info.innerText = `${rule.info}`;
    ruleDiv.append(info);

    document.body.appendChild(ruleDiv);
}