import { Collection, MongoClient } from 'mongodb';

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

export const createStudent = async (collection: Collection) => {
    const studentDocument = {
        name: 'John Smith',
        birthdate: new Date(2000, 11, 20),
        address: { street: 'Pike Lane', city: 'Los Angeles', state: 'CA' },
    };
 
    await collection.insertOne(studentDocument);
}

export const createCourses = async (collection: Collection) => {
    try {
        const coursesDocument = [{
            name: 'English',
            teacher: 'Me'
        }, {
            name: "Russian",
            teacher: "Marina"
        }, {
            name: "Spanish",
            teacher: "Huan"
        }];

        await collection.insertMany(coursesDocument);
    } catch (e) {
        console.log(e);
    }
}

export const findByName = async (collection: Collection, name: string) => {
    return collection.find({ name }).toArray();
}

export const updateByName = async (collection: Collection, name: string, updatedFields: any) => {
    await collection.updateMany(
        { name },
        { $set: updatedFields }
    );
}

export const deleteByName = async (collection: any, name: string) => {
    await collection.deleteMany({ name });
}

export const executeCrud = async () => {
    const client = await connectToCluster(connectionURL);
    const db = client.db('school');
    const studentCollection = db.collection('students');
    // const courseCollection = db.collection('courses');

    // await createCourses(courseCollection);
    await createStudent(studentCollection);
    // await updateByName(studentCollection, 'John Smith', { name: 'Klejdi' });
    // await deleteByName(studentCollection, 'Klejdi');
    console.log(await findByName(studentCollection, 'John Smith'));

    await client.close();
}

executeCrud();