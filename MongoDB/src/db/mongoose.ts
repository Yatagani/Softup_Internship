import {  MongoClient } from 'mongodb';

const connectionURL = 'mongodb://127.0.0.1:27017';

export const connectToCluster = async (uri: string) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();

        return client;
    } catch (error) {
        console.error('Connection to MongoDB failed!', error);
        process.exit();
    }
}

connectToCluster(connectionURL);
