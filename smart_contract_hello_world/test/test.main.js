const Main = artifacts.require('Main');

contract('Main', function() {
    it("should print out hello", function(){
        return Main.deployed().then(function(instance) {
            instance.setUserName("Samuel");
            return instance.printMessage.call();
        }).then(function(msg) {
            assert.equal(msg, "Hello Swarna!", "should print out hello to entered name");
        });
    });
});
