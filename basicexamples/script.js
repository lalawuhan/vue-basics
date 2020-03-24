var panicButton = new Vue({
    el: "#panicBtn",
    data: {
        counter: 0
    }
});
//used for the nav
var navChoose = new Vue({
    el: "#navbar",
    //model, blue will be the initial value
    data: {
        active: "blue"
    },
    methods: {
        showActive: function(color) {
            this.active = color;
        }
    }
});
//used in the naming addition
var userName = new Vue({
    el: "#username",
    data: {
        displayName: false,
        text_content: "Write your name"
    },
    methods: {
        // When a model is changed, the view will be automatically updated.
        hideName: function() {
            this.displayName = false;
        },
        toggleName: function() {
            this.displayName = !this.displayName;
        }
    }
});
//used for the prices
/* Vue.js allows you to define filters that can be used to 
apply common text formatting. 
Filters are usable in two places: mustache interpolations and 
v-bind expressions (the latter supported in 2.1.0+). 
Filters should be appended to the end of the JavaScript expression, denoted by the “pipe” symbol:
 */

Vue.filter("currency", function(value) {
    return "R" + value.toFixed(2);
});

var restaurantmenu = new Vue({
    el: "#menuprices",
    data: {
        //defining the model properties, view will loop through the array
        menu: [
            {
                name: "Jollof",
                price: 25,
                current: true
            },
            {
                name: "Goat Stew",
                price: 35,
                current: false
            },
            {
                name: "Pap and Boerewors",
                price: 30,
                current: false
            },
            {
                name: "Egusi Soup",
                price: 15,
                current: false
            },
            {
                name: "Rice and Beans",
                price: 10,
                current: false
            }
        ]
    },
    methods: {
        toggleMeal: function(s) {
            s.current = !s.current;
        },
        total: function() {
            var total = 0;
            this.menu.forEach(function(s) {
                if (s.current) {
                    total += s.price;
                }
            });
            return total;
        }
    }
});
