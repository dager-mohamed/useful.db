import fs from "fs";
const check: any = (file: any) => JSON.parse(fs.readFileSync(file, "utf-8"));
export class Main {
  file: any;
  /**
   * your file should be a "./file"
   * @param {[type]} file main file for database
   */
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
    let checkFile: any = check(this.file)
    let db: any = checkFile[data];
    if(!db) throw Error("can't find data")
    try{
      checkFile[data] = undefined
      fs.writeFileSync(this.file, JSON.stringify(checkFile, null, 2))
    }catch (err){
      throw Error(err)
    }
  }
  /**
   * get your data and return it
   * @param {[type]} data put your data here 
   */
  get(data: any):any{
    if (!data) throw TypeError("data parameter is required");
    const checkFile = check(this.file)
    if(!checkFile[data]) throw Error("this data not found")
    try{
      return checkFile[data]
    }catch(e){
      throw Error(e)
    }
  }
  push(data: any, value: any,):any{
    if (!value) throw TypeError("value parameter is required");
    if (!data) throw TypeError("data parameter is required");
    const checkFile = check(this.file)
    if(!Array.isArray(checkFile[data])) throw Error("data must be an array")
    try{
      checkFile[data].push(value)
      fs.writeFileSync(this.file, JSON.stringify(checkFile[data]))
    }catch (e){
      throw Error(e)
    }
  }
}
