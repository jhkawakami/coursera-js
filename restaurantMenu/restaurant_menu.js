const breakfastMenu = ['Pancakes - $12.00', 'Eggs Benedict - $22.99', 'Oatmeal - $7.00', 'Frittata - $15.99'];
const mainCourseMenu = ['Steak - $31.99', 'Pasta - $24.99', 'Burger - $15.00', 'Salmon - $35.99'];
const dessertMenu = ['Cake - $12.00', 'Ice Cream - $5.99', 'Pudding - $6.99', 'Fruit Salad - $11.00'];

 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;