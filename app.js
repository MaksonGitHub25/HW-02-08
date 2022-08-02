const startButton = document.querySelector('button');
const users = [];
const bag = [];
let wasItWorkOnce = false;

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
            checkAllItemHandler(tech, wasItWorkOnce);
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
            openBag(bag);
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

function checkAllItemHandler(mainArray) {
    checkAllItem(mainArray);
    wasItWorkOnce = true;

    const itemToBuy = askWillUserBuySomething(mainArray);
    console.log(itemToBuy);
}

function checkAllItem(mainArray) {
    if (wasItWorkOnce) { // проверка что б оно не выводило несколько раз
        return;
    }

    mainArray.forEach(function (elem) {
        if (_.isArray(elem)) {
            checkAllItem(elem);
        } else if (_.isObject(elem)) {
            console.log(elem);
        }
    });
}

function askWillUserBuySomething(mainArray) {
    const userItemToBuy = prompt(`Какой товары вы хотите купить? Напишите название товара, который вы хотите купить или напишите nothing, если не собираетесь ничего покупать`);

    checkUserItemOnCorrect(mainArray, userItemToBuy);

    return userItemToBuy;
}

function checkUserItemOnCorrect(mainArray, item) {
    mainArray.forEach(function (elem) {
        if (_.isArray(elem)) {
            checkUserItemOnCorrect(elem, item);
        } else if (_.isObject(elem)) {
            if (item === 'nothing') {
                return;
            }
            if (elem.title === item) {
                bag.push(elem);
            }
        }
    });
}


function sortAllItem(arrayForSort, users) {
    if (checkUsersArrayOnEmpty(users)) {
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
    user['money'] = 1600;

    arrayForPush.push(user);
    console.log(arrayForPush);
}

function checkUsersArrayOnFullness(arrayForCheck) {
    if (arrayForCheck.length === 5) {
        return true;
    }
}

function checkUsersArrayOnEmpty(arrayForCheck) {
    if (arrayForCheck.length === 0) {
        return true;
    }
}

function openBag(bag) {
    if (checkUsersArrayOnEmpty(users)) {
        alert('Нету зарегистрированных пользователей!');
        return;
    }


    console.log('Ваш баланс:');
    let userMoney = users[users.length - 1].money;
    console.log(`$${userMoney}`);
    console.log('-------------------------');


    if (checkUsersArrayOnEmpty(bag)) {
        alert('Корзина пуста!');
        return;
    }


    console.log('Товары в твоей корзине:');
    bag.forEach(function (elem) {
        console.log(elem.title);
    });
    console.log('-------------------------');

    
    console.log('Общая стоймость всех товаров:');
    function calculationTotalPrice() {
        let totalPrice = 0;

        bag.forEach(function (elem) {
            totalPrice += elem.price;
        });

        return totalPrice;
    }
    totalPrice = calculationTotalPrice();
    console.log(`$${totalPrice}`);
    console.log('-------------------------');


    if (askUserToBuyAllBagItem()) {
        buyingBagItem(userMoney, totalPrice, bag);
    } else {
        return;
    }

}

function buyingBagItem(money, price, bag) {
    if (money >= price) {
        users[users.length - 1].money -= price;
        bag.splice(0, bag.length); // очищаем корзину от купленных товаров
    } else {
        alert('Нужно больше золота!');
        return;
    }
}

function askUserToBuyAllBagItem() {
    return userChoise = confirm('Вы хотите оформить заказ на все товары в корзине?');
}


function exit() {
    alert('До скорого!');
}

function wrongEnter() {
    alert('Ты ввел не подходящий символ!');
    menu();
}

startButton.addEventListener('click', menu);