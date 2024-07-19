declare global {
    var _mongoClientPromise: Promise<MongoClient>;
    var mongoose: {
        conn: any,
        promise: any
    };
    }
    
export {};