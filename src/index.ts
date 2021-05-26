import fs from "fs";
 class Start {
  file: any;
  /**
   * @param {[type]} file main file of your database(it must be .json file)
   */
  constructor(file: any) {
    this.file = file;
    if (!this.file.includes(".json"))
      throw TypeError("useful.db accepting only .json files");
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
          throw TypeError("failed to read file")
      }
    })
  }
}
export { Start }