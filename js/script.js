/*-------------------------------------------------------------
1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.». 
*/ 
/*
let name = prompt('Ваше имя', ''),
    age = prompt('Ваш возраст', ''),
    city = prompt('Город проживания', ''),
    phone = prompt('Номер телефона', ''),
    email = prompt('Электронную почту', ''),
    company = prompt('Где вы работаете?', ''); 

alert('Меня зовут ' + name + '. '
      + 'Мне ' + age + ' лет. ' 
      + 'Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. '
      + 'Мои контактные данные: ' + phone + ', ' + email + '.');
*/
/* -----------------------------------------------------------------------------
2. Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.».  */
/*
let currentYear = new Date(2023),
    yearOfBirth = currentYear - age;
alert(name + ' родился в ' + yearOfBirth + '.'); 
*/

/*-------------------------------------------------------------------------------
3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. */

/* ----------------------------------------------------------------------
4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при a, равном 1, 0, -3. */

let a_ = 1;
if (a_ > 0) {
  console.log('Верно');
} else {
  console.log('Неверно');
} 

(a_ > 0)? console.log('правильно') : console.log('неправильно');;
/* -----------------------------------------------------------------------
5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат. */

let a = 10,
    b = 2,
    sum = a + b,
    diff = a - b,
    prod = a * b,
    quot = a / b;

console.log(sum);
console.log(diff);
console.log(prod);
console.log(quot);

if(sum > 1) {
  let prodSum1 = Math.pow (sum, 2) ;
  console.log(prodSum1);
}

let prodSum2 = (sum > 1)? Math.pow(sum, 2) : '';
console.log(prodSum2);



