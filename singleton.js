const mySingleton = (function (){
    let instance = null;

    function init(){

        // 私有的成员函数和私有变量
        function privateMethod(){
            console.log("I am a private Method.");
        }
        const private_var = "I am a private data.";
        const private_num = Math.random();

        return {
            // return出去的函数是属于公有的方法
            publicMethod: function (){
                console.log("Public can see me.");
                privateMethod();
            },
            getRandomNumber:function(){
                return private_num;
            },
            public_var: "I am a public data.",
        }
    }

    function init2(){

        // 私有的成员函数和私有变量
        function privateMethod(){
            console.log("I am a private Method. -2");
        }
        const private_var = "I am a private data. -2";
        const private_num = Math.random();

        return {
            // return出去的函数是属于公有的方法
            publicMethod: function (){
                console.log("Public can see me. -2");
                privateMethod();
            },
            getRandomNumber:function(){
                return private_num;
            },
            public_var: "I am a public data. -2",
        }
    }

    return {
       getInstance: function(){
           if(!instance){
               instance = init();
           }
           return instance;
       }
    }
})();

// mySingleton.getInstance = function(){
//     if(!this.instance){
//         if(Math.random()>0.5){
//             this.instance = this.init();
//         }else{
//             this.instance = this.init2();
//         }
//         return this.instance;
//     }
// };

// 调用
const A_obj = mySingleton.getInstance();
const B_obj = mySingleton.getInstance();
console.log(A_obj.getRandomNumber() === B_obj.getRandomNumber()); //控制台打印true，说明B_obj只是对A_obj的一个引用

console.log(A_obj.public_var); //访问return对象中的公有对象，可访问；若直接访问initial()中的私有变量，则报错。
A_obj.publicMethod(); //访问公有的成员函数,成员函数中的私有变量或者私有函数只可以通过共由的方法来访问，保证了封装性。