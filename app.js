const users = [];

function menu() {
    const userMenuChoise = prompt(`Выбери функцию:
a) Просмотр товаров конкретной категории
b) Просмотр всех товаров
c) Сортировка
d) Регистрация
e) Корзина
f) Выход`);

    funcChooseHandler(userMenuChoise);
}

function funcChooseHandler(userChoise) {
    switch (userChoise) {
        case 'a':
            checkConcreateCategory(tech);
            menu();
            break;
        
        case 'b':
            checkAllItem(tech);
            menu();
            break;

        case 'c':
            sortAllItem(tech, users);
            menu();
            break;

        case 'd':
            registerUser(users);
            menu();
            break;

        case 'e':
            openBag();
            menu();
            break;

        case 'f':
            exit();
            break;

        default:
            wrongEnter();
            break;
    }
}


function categoryChooseHandler(choosenCategory, category) {
    switch (choosenCategory) {
        case 'a':
            category = 'smartphone';
            break;
        
        case 'b':
            category = 'TV';
            break;

        case 'c':
            category = 'gaming';
            break;

        case 'd':
            category = 'smart-watch';
            break;

        case 'e':
            category = 'smart-home';
            break;

        default:
            alert('Ты ввел не верное значение категории!');
            askUserCategory();
            break;
    }

    return category;
}

function askUserCategory() {
    let userCategory;
    const choosenCategory = prompt(`Какую категорию вы хотите выбрать?
a) smartphone
b) TV
c) gaming
d) smart-watch
e) smart-home`);

    if (/a|b|c|d|e/.test(choosenCategory)) {
        return userCategory = categoryChooseHandler(choosenCategory, userCategory);
    } else {
        alert('Значение недопустимо!');
        checkConcreateCategory(tech);
        return;
    }
}

function checkConcreateCategory(array) {
    const category = askUserCategory();

    searchCategoryInArray(array, category);
}

function searchCategoryInArray(array, categoryForSearch) {
    array.forEach(function (elem) {
        _.isArray(elem) ? searchCategoryInArray(elem, categoryForSearch) : checkCategoryInObject(elem, categoryForSearch);
    });
}

function checkCategoryInObject(itemObject, categoryForSearch) {
    if (itemObject.category === categoryForSearch) {
        console.log(itemObject);
    }
}


function checkAllItem(mainArray) {
    mainArray.forEach(function (elem) {
        if (_.isArray(elem)) {
            checkAllItem(elem);
        } else if (_.isObject(elem)) {
            console.log(elem);
        }
    });
}


function sortAllItem(arrayForSort, users) {
    if (!checkUsersArrayOnEmpty(users)) {
        alert('Нету зарегистрированных пользователей!');
        return;
    }

    const userSortFunctionChoose = prompt(`Как вы хотите сортировать товары:
a) от меньшей цены к большой
b) от большой цены к меньшой
c) по самому маленькому рейтингу
d) по самому большому рейтингу`);

    if (!/a|b|c|d/.test(userSortFunctionChoose)) {
        alert('Значение недопустимо!');
        sortAllItem(arrayForSort, users);
        return;
    }

    arrayForSort.forEach(function (elem) {
        sortingArray(elem, userSortFunctionChoose);
    });

    console.log('----------------------------');
}

function sortingArray(arrayForSort, sortFunction) {
    switch (sortFunction) {
        case 'a':
            arrayForSort.sort(function (a, b) {
                if (a.price > b.price) {
                    return 1;
                } else {
                    return -1;
                }
            });
            break;

        case 'b':
            arrayForSort.sort(function (a, b) {
                if (a.price < b.price) {
                    return 1;
                } else {
                    return -1;
                }
            });
            break;

        case 'c':
            arrayForSort.sort(function (a, b) {
                if (a.rating > b.rating) {
                    return 1;
                } else {
                    return -1;
                }
            });
            break;

        case 'd':
            arrayForSort.sort(function (a, b) {
                if (a.rating < b.rating) {
                    return 1;
                } else {
                    return -1;
                }
            });
            break;

        default:
            break;
    }
    console.log(arrayForSort);
}


function registerUser(arrayForPush) {
    if (checkUsersArrayOnFullness(arrayForPush)) {
        alert('Вы не можете зарегистрировать больше 5 человек!');
        return;
    }

    const user = {};

    alert('Пройдите легкую регистрацию, чтоб мы знали с кем имеем дело)');

    function checkName() {
        userName = prompt('Как вас зовут?');

        if (userName.length < 3) {
            alert('Значение недопустимо!');
            checkName();
        }

        return userName;
    }

    function checkAge() {
        userAge = prompt('Сколько вам лет?');

        if (_.isNaN(+userAge)) {
            alert('Значение недопустимо!');
            checkAge();
        }

        return userAge;
    }

    function checkEmail() {
        userEmail = prompt('Какой у вас имейл?');

        if (!userEmail.includes('@')) {
            alert('Значение недопустимо!');
            checkEmail();
        }

        return userEmail;
    }

    function checkPassword() {
        userPassword = prompt('Какой у вас пароль?');

        if (!/[a-z]/.test(userPassword) || !/\d/.test(userPassword) || !/[!|,|"|:|.|\?|(|)|@|\-|\\|\/|;|_]/gi.test(userPassword)) {
            alert('Значение недопустимо!');
            checkPassword();
        }

        return userPassword;
    }

    user['name'] = checkName();
    user['age'] = checkAge();
    user['email'] = checkEmail();
    user['password'] = checkPassword();
    user['money'] = 800;

    arrayForPush.push(user);
    console.log(arrayForPush);
}

function checkUsersArrayOnFullness(arrayForCheck) {
    if (arrayForCheck.length === 5) {
        return true;
    }
}

function checkUsersArrayOnEmpty(arrayForCheck) {
    if (arrayForCheck.length === 1) {
        return true;
    }
}

function openBag() {
    console.log('openBag');
}

function exit() {
    alert('До скорого!');
}

function wrongEnter() {
    alert('Ты ввел не подходящий символ!');
    menu();
}

menu();

//* 1) Создать массив с электротехникой , каждой категории отведен свой массив , как пример 
//*  const tech = [ 
//* 	 [ 
//* 	   {
//* 			title : name_of_product ,
//* 			category : “TV”,
//* 			price : $xxx,
//* 			imgURL : “url_to_image_from_google”,
//* 			description : {
//* 				screen : 23 ,
//* 				matrix : IPS …
//* 			}
//* 		},
//*    		{
//* 			title : name_of_product ,
//* 			category : “TV”,
//* 			price : $xxx,
//* 			imgURL : “url_to_image_from_google”,
//* 			description : {
//* 				screen : 23 ,
//* 				matrix : IPS …
//* 			}
//* 		},
//*       ],
//* 	  [
//* 		{
//* 			title : name_of_product ,
//* 			category : “PS5”,
//* 			price : $xxx,
//* 			imgURL : “url_to_image_from_google”,
//* 			description : {
//* 				screen : 23 ,
//* 				matrix : IPS …
//* 			}
//* 		}
//* 	  ]
//*  ] 

//* 2) Категорий должно быть не менее , чем 6 
//* Товары - не менее 4 шт на категории.

//* 3) С помощью промпт дать возможность пользователю выбрать в какую категорию он зайдет .

//* 4) Просмотреть ВСЕ товары из ВСЕХ категорий

//* 5) Сортировать : от большего к меньшему (по цене) , добавить к каждому товару рейтинг и дать возможность сортировать по рейтингу товары.

//* 6) Создать объект пользователя , у пользователя есть : имя , фамилия , возраст , логи и пароль.

//* Дать возможность зарегаться юзеру :
//* (Если пользователь не зарегистрирован , он не может использовать фильтры и сортировки)
//* - Имя не менее 2х букв (не вкл)
//* - Имел обязательно должен содержать @
//* - Пароль состоит из чисел , строк и спец. Символов.
//* - Если возраст юзера  меньше , чем 23 - он не может посетить категорию игрушечный . 
//* -Кол-во зарегистрированных пользователей не может превышать 5-ти персон .

// Корзина
// - При покупке - доб товар
// - Подсчитывать общую сумму 

// Когда пользователь зарегистрирован , он получает первый кэш на который может приобрести что-либо .
// Если при совершении покупки у юзера не хватает денег - написать сообщение , что “Нужно больше золота” , а иначе просто списать деньги с юзера .

//* Программа работает до тех пор пока юзер не захочет выйти.