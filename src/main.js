"use strict";
exports.__esModule = true;
exports.Main = void 0;
var fs_1 = require("fs");
var check = function (file) {
  return JSON.parse(fs_1.readFileSync(file, "utf-8"));
};
var Main = /** @class */ (function () {
  function Main(file) {
    this.file = file;
    if (!this.file.includes(".json"))
      throw TypeError("we accept only .json files");
    try {
      check(file);
    } catch (err) {
      throw Error(err);
    }
  }
  /**
   * make a new data
   * @param {[type]} data put your data here
   */
  Main.prototype.set = function (data) {
    if (!data) throw TypeError("data parameter is required");
    var checkFile = check(this.file);
    if (Array.isArray(data))
      throw TypeError("set() function didn't accept arrays");
    checkFile[data] = data;
    try {
      fs_1.writeFileSync(this.file, JSON.stringify(checkFile, null, 2));
    } catch (err) {
      throw Error(err);
    }
  };
  /**
   * delete data from JSON file
   * @param {[type]} data put your data here
   */
  Main.prototype.has = function (data) {
    if (!data) throw TypeError("data parameter is required");
    var checkFile = check(this.file);
    var db = checkFile[data];
    try {
      if (db) return true;
      if (!db) return false;
    } catch (err) {
      throw Error(err);
    }
  };
  /**
   * delete your data from database
   * @param {[type]} data put your data here
   */
  Main.prototype["delete"] = function (data) {
    if (!data) throw TypeError("data parameter is required");
    var checkFile = check(this.file);
    var db = checkFile[data];
    if (!db) throw Error("can't find data");
    try {
      checkFile[data] = undefined;
      fs_1.writeFileSync(this.file, JSON.stringify(checkFile, null, 2));
    } catch (err) {
      throw Error(err);
    }
  };
  /**
   * get your data and return it
   * @param {[type]} data put your data here
   */
  Main.prototype.get = function (data) {
    if (!data) throw TypeError("data parameter is required");
    var checkFile = check(this.file);
    if (!checkFile[data]) throw Error("data not found");
    try {
      return checkFile[data];
    } catch (e) {
      throw Error(e);
    }
  };
  /**
   * you can add array data
   * @param key
   * @param data
   */
  Main.prototype.push = function (key, data) {
    if (!key) throw TypeError("key parameter is required");
    if (!data) throw TypeError("data parameter is required");
    var checkFile = check(this.file);
    try {
      if (!Array.isArray(data))
        throw TypeError("data parameter must be an array");
      checkFile[key] = data;
      fs_1.writeFileSync(this.file, JSON.stringify(checkFile, null, 2));
    } catch (e) {
      throw Error(e);
    }
  };
  /**
   * getAll() function is return you all things in file
   * @returns it return you all things in file
   */
  Main.prototype.getAll = function () {
    var checkFile = check(this.file);
    try {
      return checkFile;
    } catch (e) {
      throw Error(e);
    }
  };
  /**
   * math() function is make subtract or divide or add or multiplication
   * @param num1
   * @param operator
   * @param num2
   */
  Main.prototype.math = function (data, operator, num) {
    if (!data) throw TypeError("number(1) required");
    if (!num) throw TypeError("number(2) required");
    if (!operator) throw TypeError("operator required");
    if (typeof data !== "number") throw TypeError("number(1) is not a number");
    if (typeof num !== "number") throw TypeError("number(2) is not a number");
    if (typeof operator !== "string")
      throw TypeError("operator is not a string");
    var checkFile = check(this.file);
    try {
      if (operator === "+") {
        var answer = data + num;
        return answer;
      } else if (operator === "-") {
        var answer = data - num;
        return answer;
      } else if (operator === "/") {
        var answer = data / num;
        return answer;
      } else if (operator === "*") {
        var answer = data * num;
        return answer;
      } else {
        throw TypeError("wrong operator");
      }
    } catch (e) {
      throw Error(e);
    }
  };
  return Main;
})();
exports.Main = Main;
