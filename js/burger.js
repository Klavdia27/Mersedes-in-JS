const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')

const toggleMenu = () => {
    // если такой класс есть, то  метод toggle его удалит, если такого класса нет, то метод toogle его добавит
    menuElem.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu())