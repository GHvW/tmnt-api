import { Document, Model } from "mongoose";


// export interface IBaseDao<T> {
//   findAll(): Promise<Array<T>>;
//   findById(id: string): Promise<T | null>;
// }
export interface findAll<T> {
  (): Promise<Array<T>>;
}

export interface findById<T> {
  (id: string): Promise<T | null>;
}


// export class MongoBaseDao<T extends Document> implements IBaseDao<T> {
//   model: Model<T>;

//   constructor(model: Model<T>) {
//     this.model = model;
//   }

  // findAll(): Promise<Array<T>> {
  //   return new Promise((resolve, reject) => {
  //     this.model.find({}, (err: Error, docs: Array<T>) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(docs);
  //     });
  //   });
  // }
  // findAll(): Promise<Array<T>> {
  //   return this.model.find({}).exec();
  // }

  // findById(id: string): Promise<T> {
  //   return new Promise((resolve, reject) => {
  //     this.model.findById(id, (err: Error, doc: T) => {
  //       if (err) {
  //         reject (err);
  //       }
  //       resolve(doc);
  //     });
  //   });
  // }
//   findById(id: string): Promise<T | null> {
//     return this.model.findById(id).exec();
//   }
// }

// mongoose findAll func, returns Promise<T[]>
// mongoose findById func, returns Promise<T | null>
export const Mongo = {
  findAll: <T extends Document>(model: Model<T>) => {
    return () => {
      return model.find({}).exec();
    }
  },

  findById: <T extends Document>(model: Model<T>) => {
    return (id: string) => {
      return model.findById(id).exec();
    }
  }
}

