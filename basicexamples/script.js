var panicButton = new Vue({
    el: "#panicBtn",
    data: {
        counter: 0
    }
});
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
