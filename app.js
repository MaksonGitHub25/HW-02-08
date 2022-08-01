const tech = [ 
        [ 
            {
                title : 'iPhone 13 pro max' ,
                category : 'smartphone',
                price : '$1000',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 6.5,
                    matrix : 'retina'
                }
            },
            {
                title : 'iPhone 12' ,
                category : 'smartphone',
                price : '$800',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 6.0,
                    matrix : 'IPS'
                }
            },
            {
                title : 'samsung s21' ,
                category : 'smartphone',
                price : '$700',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 6.2,
                    matrix : 'IPS'
                }
            },
            {
                title : 'xiaomi mi note 11 pro' ,
                category : 'smartphone',
                price : '$500',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 6.5,
                    matrix : 'IPS'
                }
            }
        ],
        [
            {
                title : 'samsung TV s8' ,
                category : 'TV',
                price : '$600',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 48,
                    matrix : 'IPS'
                }
            }, 
            {
                title : 'kivi TV' ,
                category : 'TV',
                price : '$400',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 24,
                    matrix : 'IPS'
                }
            },
            {
                title : 'samsung TV s7' ,
                category : 'TV',
                price : '$500',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 55,
                    matrix : 'IPS'
                }
            }, 
            {
                title : 'sony TV' ,
                category : 'TV',
                price : '$650',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 32,
                    matrix : 'IPS'
                }
            }
        ],
        [
            {
                title : 'ps5' ,
                category : 'gaming',
                price : '$700',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 'withoutMonitor',
                    matrix : 'withoutMonitor'
                }
            }, 
            {
                title : 'razer deathadder' ,
                category : 'gaming',
                price : '$100',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 'withoutMonitor',
                    matrix : 'withoutMonitor'
                }
            },
            {
                title : 'ps4' ,
                category : 'gaming',
                price : '$400',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 'withoutMonitor',
                    matrix : 'withoutMonitor'
                }
            }, 
            {
                title : 'razer headphones' ,
                category : 'gaming',
                price : '$200',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 'withoutMonitor',
                    matrix : 'withoutMonitor'
                }
            }
        ],
        [
            {
                title : 'apple watch s6' ,
                category : 'smart-watch',
                price : '$400',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 1.6,
                    matrix : 'IPS'
                }
            },
            {
                title : 'apple watch s7' ,
                category : 'smart-watch',
                price : '$500',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 1.8,
                    matrix : 'IPS'
                }
            }, 
            {
                title : 'apple watch se' ,
                category : 'smart-watch',
                price : '$350',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 1.6,
                    matrix : 'IPS'
                }
            },
            {
                title : 'samsung watch' ,
                category : 'smart-watch',
                price : '$300',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 1.5,
                    matrix : 'IPS'
                }
            }
        ],
        [
            {
                title : 'teapot Xiaomi' ,
                category : 'smart-home',
                price : '$50',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 'withoutMonitor',
                    matrix : 'withoutMonitor'
                }
            },
            {
                title : 'apple homepod mini' ,
                category : 'smart-home',
                price : '$100',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 'withoutMonitor',
                    matrix : 'withoutMonitor'
                }
            }, 
            {
                title : 'smart socket' ,
                category : 'smart-home',
                price : '$50',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 'withoutMonitor',
                    matrix : 'withoutMonitor'
                }
            },
            {
                title : 'led line' ,
                category : 'smart-home',
                price : '$60',
                imgURL : 'url_to_image_from_google',
                description : {
                    screen : 'withoutMonitor',
                    matrix : 'withoutMonitor'
                }
            }
        ]
    ];

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
            checkConcreateCategory();
            menu();
            break;
        
        case 'b':
            checkAllItem(tech);
            menu();
            break;

        case 'c':
            sortAllItem();
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

function checkConcreateCategory() {
    console.log('checkConcreateCategory');
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

function sortAllItem() {
    if (/*сделать чек на функцию которая проверяет длину массива и если она < 1, то alert и return*/) {
        
    }
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

    arrayForPush.push(user);
    console.log(arrayForPush);
}

function checkUsersArrayOnFullness(arrayForCheck) {
    if (arrayForCheck.length === 5) {
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

// 3) С помощью промпт дать возможность пользователю выбрать в какую категорию он зайдет .
// -Затем , предложить критерии к поиску , например : цена , экран , цвет , тд.
// -Критерии должны формироваться сами , а не хардкодиться ( в это вам помогут ключи (у объекта) )

//* 4) Просмотреть ВСЕ товары из ВСЕХ категорий

// 5) Сортировать : от большего к меньшему (по цене) , добавить к каждому товару рейтинг и дать возможность сортировать по рейтингу товары.

//* 6) Создать объект пользователя , у пользователя есть : имя , фамилия , возраст , логи и пароль.

//* Дать возможность зарегаться юзеру :
// (Если пользователь не зарегистрирован , он не может использовать фильтры и сортировки)
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

// Программа работает до тех пор пока юзер не захочет выйти.

// Использовать(подсказка) : while , for , forEach , filter , sort , concat , reduce , reverse .

// () => , FE , FD 

// If …else , switch , ?: 