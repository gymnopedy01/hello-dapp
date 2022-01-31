var myContract = eth.contract(<CONTENT_OF_ABI>);

var deployedContract = myContract.new({from: eth.accounts[0], data:0x<CONTENT_OB_BIN>, gas: '400000'}),
        function (e, contract) {
            console.log(e, contract);
            if(typeof contract.address !== 'undefined') {
                console.log('Contract mined! address:' + contract.address + 'transactionHash: ' + contract.transactionHash);
            }
        }

계정 -> 이더리움 주소로 식별함
20 byes, 16진수 40자리 고정길이
1. Externally Owned Account(EOA)
사람이 소유한 계정 (지갑주소)

2. Contract Account(CA)
이더리움에 배포된 컨트랙트 주소

State
-nonce
-balance
-Storage Root
-Code hash





--------

PS C:\GitWorkspace\hello> truffle migrate --network ganache       
Using network 'ganache'.

Running migration: 1_initial_migration.js
  ... 0x07915130015f746cd60a66882e52812ec9a0148ceae68d33d14dd9d4f4369b0e
Saving artifacts...
Running migration: 2_deploy_HelloWorld.js
  Deploying HelloWorld...
  ... 0xd8032de9d5fce7fd81b386e61e77e9087ddc3069dc2fff9bd328d157edc0ae4a
  HelloWorld: 0xae2cda0fbccdd9cdd528d441c83c9021f450d65c
Saving artifacts...
PS C:\GitWorkspace\hello> truffle console
No network available. Use `truffle develop` or add network to truffle.js config.
PS C:\GitWorkspace\hello> truffle console --network ganache       
truffle(ganache)> web3.eth.accounts
[ '0x723e71576a35bc2edb0356a6674028edc53496ea', 
  '0xe0ee1bbe0751e158f5e59cfee3f48a738e0e89e9', 
  '0xe87242a26b011094fa0485ebf42c65df35bb5a0c', 
  '0xa1a608c582b54b08ef97c35a0d68f9b7378fbe43', 
  '0x741e01d958d593276792de79be7a3ddaf4a84895', 
  '0xb5c5dc88a56c9d10f511f1249726b8d0fe6781bd', 
  '0x6627959cf4e6c2fa8ca8210fa336db8bfb590e17', 
  '0xaaa152f558881d6a80c0230ae0d481c19c31f91f', 
  '0x15404ed9af14ab41285253216ec302a82cec9124', 
  '0x42dba08b1c05987986787541a67756c68a88a3c0' ]
truffle(ganache)> var hello = HelloWorld.at(
SyntaxError: Unexpected end of input
    at REPLServer.Interface._onLine (readline.js:280:10)
    at REPLServer.emit (events.js:211:7)
    at emitOne (events.js:116:13)
    at REPLServer.onLine (repl.js:468:10)
    at REPLServer.runBound [as eval] (domain.js:314:12) 
    at bound (domain.js:301:14)
    at ReplManager.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\repl.js:119:1)
    at Console.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\console.js:164:1)
    at Object.runInContext (vm.js:119:10)
    at createScript (vm.js:80:10)
truffle(ganache)> var hello = HelloWorld.at("pragma solidity ^0.4.24;")
Error: Invalid address passed to HelloWorld.at(): pragma solidity 
^0.4.24;
    at Function.at (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-contract\contract.js:422:1)
truffle(ganache)>
contract HelloWorld {
SyntaxError: Unexpected identifier
    at REPLServer.Interface._onLine (readline.js:280:10)
    at REPLServer.emit (events.js:211:7)
    at emitOne (events.js:116:13)
    at REPLServer.onLine (repl.js:468:10)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at bound (domain.js:301:14)
    at ReplManager.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\repl.js:119:1)
    at Console.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\console.js:164:1)
    at Object.runInContext (vm.js:119:10)
    at createScript (vm.js:80:10)
truffle(ganache)>
 undefined
truffle(ganache)> undefined
truffle(ganache)>    string public greeting;
SyntaxError: Unexpected identifier
    at REPLServer.Interface._onLine (readline.js:280:10)
    at REPLServer.emit (events.js:211:7)
    at emitOne (events.js:116:13)
    at REPLServer.onLine (repl.js:468:10)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at bound (domain.js:301:14)
    at ReplManager.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\repl.js:119:1)
    at Console.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\console.js:164:1)
    at Object.runInContext (vm.js:119:10)
    at createScript (vm.js:80:10)
truffle(ganache)>
    constructor(string _greeting) public {
SyntaxError: missing ) after argument list
    at REPLServer.Interface._onLine (readline.js:280:10)
    at REPLServer.emit (events.js:211:7)
    at emitOne (events.js:116:13)
    at REPLServer.onLine (repl.js:468:10)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at bound (domain.js:301:14)
    at ReplManager.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\repl.js:119:1)
    at Console.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\console.js:164:1)
    at Object.runInContext (vm.js:119:10)
    at createScript (vm.js:80:10)
truffle(ganache)>         greeting = _greeting;undefined
truffle(ganache)>         greeting = _greeting;
ReferenceError: _greeting is not defined
truffle(ganache)>     }
SyntaxError: Unexpected token }
    at REPLServer.Interface._onLine (readline.js:280:10)
    at REPLServer.emit (events.js:211:7)
    at emitOne (events.js:116:13)
    at REPLServer.onLine (repl.js:468:10)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at bound (domain.js:301:14)
    at ReplManager.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\repl.js:119:1)
    at Console.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\console.js:164:1)
    at Object.runInContext (vm.js:119:10)
    at createScript (vm.js:80:10)
truffle(ganache)>
truffle(ganache)>     function setGreeting(string _greeting) public {
SyntaxError: Unexpected identifier
    at REPLServer.Interface._onLine (readline.js:280:10)
    at REPLServer.emit (events.js:211:7)
    at emitOne (events.js:116:13)
    at REPLServer.onLine (repl.js:468:10)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at bound (domain.js:301:14)
    at ReplManager.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\repl.js:119:1)
    at Console.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\console.js:164:1)
    at Object.runInContext (vm.js:119:10)
    at createScript (vm.js:80:10)
truffle(ganache)>         greeting = _greeting;
ReferenceError: _greeting is not defined
truffle(ganache)>     }
SyntaxError: Unexpected token }
    at REPLServer.Interface._onLine (readline.js:280:10)
    at REPLServer.emit (events.js:211:7)
    at emitOne (events.js:116:13)
    at REPLServer.onLine (repl.js:468:10)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at bound (domain.js:301:14)
    at ReplManager.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\repl.js:119:1)
    at Console.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\console.js:164:1)
    at Object.runInContext (vm.js:119:10)
    at createScript (vm.js:80:10)
truffle(ganache)>
   undefined
truffle(ganache)> undefined
truffle(ganache)>  function say() public constant returns(string) 
{
SyntaxError: Unexpected identifier
    at REPLServer.Interface._onLine (readline.js:280:10)
    at REPLServer.emit (events.js:211:7)
    at emitOne (events.js:116:13)
    at REPLServer.onLine (repl.js:468:10)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at bound (domain.js:301:14)
    at ReplManager.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\repl.js:119:1)
    at Console.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\console.js:164:1)
    at Object.runInContext (vm.js:119:10)
    at createScript (vm.js:80:10)
truffle(ganache)>         return greeting;
SyntaxError: Illegal return statement
    at REPLServer.Interface._onLine (readline.js:280:10)
    at REPLServer.emit (events.js:211:7)
    at emitOne (events.js:116:13)
    at REPLServer.onLine (repl.js:468:10)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at bound (domain.js:301:14)
    at ReplManager.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\repl.js:119:1)
_modules\truffle\build\webpack:\packages\truffle-core\lib\console.js:164:1)
    at Object.runInContext (vm.js:119:10)
    at createScript (vm.js:80:10)
truffle(ganache)>     }
SyntaxError: Unexpected token }
    at REPLServer.Interface._onLine (readline.js:280:10)
    at REPLServer.emit (events.js:211:7)
    at emitOne (events.js:116:13)
    at REPLServer.onLine (repl.js:468:10)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at bound (domain.js:301:14)
    at ReplManager.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\repl.js:119:1)
    at Console.interpret (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\packages\truffle-core\lib\console.js:164:1)
    at Object.runInContext (vm.js:119:10)
    at createScript (vm.js:80:10)
truffle(ganache)>
}undefined
truffle(ganache)>         greeting = _greeting;
truffle(ganache)>
(To exit, press ^C again or type .exit)
truffle(ganache)>
PS C:\GitWorkspace\hello> truffle console --network ganache       
truffle(ganache)> var hello = HelloWorld.at("0xae2cda0fbccdd9cdd528d441c83c9021f450d65c")
undefined
truffle(ganache)> hello.say();
'Hello, World!'
truffle(ganache)> hello.setGreeting.sendTransaction("Hello. Blockchain!")
'0x9174b15738aa322fcd191c59d1f38caf1b00f9748d4b662733f2305af294a5c9'
truffle(ganache)> hello.say();
'Hello. Blockchain!'
truffle(ganache)> web3.eth.getStorageAt("0xae2cda0fbccdd9cdd528d441c83c9021f450d65c")
'0x48656c6c6f2e20426c6f636b636861696e210000000000000000000000000024'
truffle(ganache)> web3._extend.utils.toAscii("0x48656c6c6f2e20426c6f636b636861696e210000000000000000000000000024")
'Hello. Blockchain!\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000$'
truffle(ganache)>

truffle(ganache)> hello.setGreeting.estimateGas("Hello")
30320

truffle(ganache)> hello.setGreeting.estimateGas("Hello!!!!")      
30368

truffle(ganache)> hello.setGreeting("Hello!!!!", {gas:21000})     
Error: base fee exceeds gas limit
    at C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\~\web3\lib\web3\requestmanager.js:86:1
    at Object.InvalidResponse (C:\Users\오태현\AppData\Roaming\npm\node_modules\truffle\build\webpack:\~\web3\lib\web3\errors.js:38:1)
truffle(ganache)> hello.setGreeting("Hello!!!!", {gas:30368})     
{ tx: '0xf1326b6cdf0e182d1081db04e939ad37bfe42fa7929d87df1646c9f2fb7c29f1',
  receipt:
   { transactionHash: '0xf1326b6cdf0e182d1081db04e939ad37bfe42fa7929d87df1646c9f2fb7c29f1',
     transactionIndex: 0,
     blockHash: '0x75736ae9a70fff1c7f858b9129a242a2c80b1165eb919e379563d1dc6f2ac7db',
     blockNumber: 4,
     from: '0x723e71576a35bc2edb0356a6674028edc53496ea',
     to: '0xae2cda0fbccdd9cdd528d441c83c9021f450d65c',
     gasUsed: 28966,
     cumulativeGasUsed: 28966,
     contractAddress: null,
     logs: [],
     status: '0x1',
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' },
  logs: [] }

truffle(ganache)> web3.eth.getBlock("latest").gasLimit
6721975


----------------------------------
PS C:\GitWorkspace\hello> truffle compile
PS C:\GitWorkspace\hello> truffle migrate --network ganache
Using network 'ganache'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xf9861a542ee5a2d2e2a888925e7605bdb79832f9fb5dd646c5653151b32a8a11     
  Migrations: 0x558c7dd01062903d92acd00b4f6c600218588d46
Saving artifacts...
Running migration: 2_deploy_HelloWorld.js
  Replacing HelloWorld...
  ... 0x926b311b26974c6f05991116e81108ca20d34650e4990ea9968cd3e5af33f64e     
  HelloWorld: 0x9920ba4ccf87bf2c8eb452f873779b648c169016
Saving artifacts...

PS C:\GitWorkspace\hello> truffle test .\test\test_HelloWorld.js --network ganache
PS truffle test --network ganache