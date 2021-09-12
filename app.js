     new Vue({
            el: '#app',
            data: {
                message: "Hello world!"
            },
        });

    new Vue({
        el:'#counter',
        data:{
            count: 0,
        },
        methods:{
            add(){
                this.count += 1;
            },
        },
    });