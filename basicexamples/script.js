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
