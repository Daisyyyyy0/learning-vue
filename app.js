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
        method:{
            add(){
                this.count += 1;
            },
        },
    });