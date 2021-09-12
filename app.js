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

    new Vue({
        el: '#app2',
        data:{
            see: true,
        }
    });

    new Vue({
        el: '#app3',
        data:{
            steps: [
                'learning JS',
                'learn vue',
                'get a higher pay',
            ]
        }
    });

    new Vue({
        el: '#counter2',
        data:{
            items: [1,2,3,4,5],
        },
        methods:{
            remove(){
                this.items.pop()
            },
        },
    });

    new Vue({
        el: '#typeIn',
        data:{
            text:''
        },
    });