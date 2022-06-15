const app = new Vue({
    el:'#app',
    data:{
        total:''
    },
    methods: {
        boton: function(num){
            if(this.total ==''){
                this.total = '';
            }
            return this.total += num;
        },
        clear: function(){
            return this.total = 0;
        },
        equals: function(){
            let equals = this.total;
            return this.total = eval(equals);
        }
    }
})