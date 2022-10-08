var name = "The Window";

var object = {
    name: "My Object",

    getNameFunc: function () {
        console.log(this.name)
        return function () {
            return this.name;
        };
    }
};

func1 = object.getNameFunc()
console.log(func1());