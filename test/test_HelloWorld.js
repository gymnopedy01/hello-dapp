var hello = artifacts.require("HelloWorld");

contract("HelloWorld", function() {

    //SYNC
    it("show be same as constructor argument", function() {
        return hello.deployed().then(function(instance) {
            return instance.say().then(function(greeting) {
                assert.equal(greeting, "Hello, World!");
            })
        })
    });

    //블록생성이 즉시 되지 않기 때문에 오류남
    it("(A) should change the greeting value by setGreeting", function() {
        return hello.deployed().then(function(instance) {
            instance.setGreeting("Hello, Blockchain", {from: web3.eth.accounts[0]});
            return instance.say().then(function(greeting){
                assert.equal(greeting, "Hello, Blockchain");
            })
        })
    });


    //블록생성시간에 상관없이 잘됨
    it("(B) should change the greeting value by setGreeting", function() {
        return hello.deployed().then(function(instance) {
            instance.setGreeting("Hello, Blockchain", {from: web3.eth.accounts[0]}).then(function(result) {
                return instance.say().then(function(greeting){
                    assert.equal(greeting, "Hello, Blockchain");
                })
            })
        })
    });


});

