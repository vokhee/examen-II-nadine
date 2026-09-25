var app = new Framework7({
    el: '#app',
    name: 'Food Order',
    id: 'com.nadine.foodorder',
    theme: 'auto',

    routes: [
        {
            path: '/categories/',
            url: './pages/categories.html',
        },
    ],
});
