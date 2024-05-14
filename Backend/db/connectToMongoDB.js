import mongooose from 'mongoose';
const connectToMongoDB = async() => {
    try {
        await mongooose.connect("mongodb+srv://lkhant616:NX0OmfeeCwr7xnup@cluster0.sdzxxfb.mongodb.net/chart-app-db?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.massage);
        // process.exit(1);
        
    }
}
export default connectToMongoDB;