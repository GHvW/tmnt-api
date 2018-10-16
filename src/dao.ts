import mongoose, { Error } from "mongoose";


export interface IBaseDao<T> {
  findAll(): Promise<Array<T>>;
  findById(id: string): Promise<T>;
}


export class MongoBaseDao<T extends mongoose.Document> implements IBaseDao<T> {
  model: mongoose.Model<mongoose.Document>;

  constructor(model: mongoose.Model<mongoose.Document>) {
    this.model = model;
  }

  findAll(): Promise<Array<T>> {
    return new Promise((resolve, reject) => {
      this.model.find({}, (err: Error, docs: Array<T>) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
    });
  }

  findById(id: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this.model.findById(id, (err: Error, doc: T) => {
        if (err) {
          reject (err);
        }
        resolve(doc);
      });
    });
  }
}
