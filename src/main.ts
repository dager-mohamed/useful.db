import fs from "fs";
const check: any = (file: any) => JSON.parse(fs.readFileSync(file, "utf-8"));
export class Main {
  /**
   * your file should be a "./file"
   * @param {[type]} file main file for database
   */
  private file: any;
  constructor(file: any) {
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
  set(data: any): any {
    if (!data) throw TypeError("data parameter is required");
    const checkFile: any = check(this.file);
    if(Array.isArray(data)) throw TypeError("set() function didn't accept arrays")
    checkFile[data] = data;
    try {
      fs.writeFileSync(this.file, JSON.stringify(checkFile, null, 2));
    } catch (err) {
      throw Error(err);
    }
  }
  /**
   * delete data from JSON file
   * @param {[type]} data put your data here
   */
  has(data: any): any {
    if (!data) throw TypeError("data parameter is required");
    const checkFile: any = check(this.file);
    const db: any = checkFile[data];
    try {
      if (db) return true;
      if (!db) return false;
    } catch (err) {
      throw Error(err);
    }
  }
  /**
   * delete your data from database
   * @param {[type]} data put your data here
   */
  delete(data: any): any {
    if (!data) throw TypeError("data parameter is required");
    let checkFile: any = check(this.file);
    let db: any = checkFile[data];
    if (!db) throw Error("can't find data");
    try {
      checkFile[data] = undefined;
      fs.writeFileSync(this.file, JSON.stringify(checkFile, null, 2));
    } catch (err) {
      throw Error(err);
    }
  }
  /**
   * get your data and return it
   * @param {[type]} data put your data here
   */
  get(data: any): any {
    if (!data) throw TypeError("data parameter is required");
    const checkFile = check(this.file);
    if (!checkFile[data]) throw Error("data not found");
    try {
      return checkFile[data];
    } catch (e) {
      throw Error(e);
    }
  }
  /**
   * you can add array data
   * @param key
   * @param data
   */
  push(key: any, data: any): any {
    if (!key) throw TypeError("key parameter is required");
    if (!data) throw TypeError("data parameter is required");
    let checkFile = check(this.file);
    try {
      if (!Array.isArray(data))
        throw TypeError("data parameter must be an array");
      checkFile[key] = data;
      fs.writeFileSync(this.file, JSON.stringify(checkFile, null, 2));
    } catch (e) {
      throw Error(e);
    }
  }
  /**
   * getAll() function is return you all things in file
   * @returns it return you all things in file
   */
  getAll(): any {
    const checkFile = check(this.file);
    try {
      return checkFile;
    } catch (e) {
      throw Error(e);
    }
  }
  /**
   * math() function is make subtract or divide or add or multiplication
   * @param num1
   * @param operator
   * @param num2
   */
  math(data: number, operator: string, num: number) {
    if (!data) throw TypeError("number(1) required");
    if (!num) throw TypeError("number(2) required");
    if (!operator) throw TypeError("operator required");
    if (typeof data !== "number") throw TypeError("number(1) is not a number");
    if (typeof num !== "number") throw TypeError("number(2) is not a number");
    if (typeof operator !== "string")
      throw TypeError("operator is not a string");
    const checkFile = check(this.file);
    try {
      if (operator === "+") {
        const answer = data + num;
        return answer;
      } else if (operator === "-") {
        const answer = data - num;
        return answer;
      } else if (operator === "/") {
        const answer = data / num;
        return answer;
      } else if (operator === "*") {
        const answer = data * num;
        return answer;
      } else {
        throw TypeError("wrong operator");
      }
    } catch (e) {
      throw Error(e);
    }
  }
}

