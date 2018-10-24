const justify = function(limit,msg) {
  let numberOfSpaces = limit-msg.length;
  let spaces = new Array(numberOfSpaces).fill(" ").join("");
  return msg+spaces;
}

let testNumber = {number:1};

const incrementTestNumber = function() {
  testNumber.number++;
}

const getSerialNumber = function() {
  return testNumber.number;
}

const logTest = function(args,actualResult,expectedResult,msg) {
  let log = justify(5,getSerialNumber().toString()) + "|" + justify(30,msg) + "|";
  log = log + justify(20,args.toString()) + "|";
  log = log + justify(20,actualResult.toString()) + "|";
  log = log + justify(20,expectedResult.toString()) + "|";
  incrementTestNumber();
  console.log(log);
  console.log("----------------------------------------------------------------------------------------------------");
}

exports.logTest = logTest;
