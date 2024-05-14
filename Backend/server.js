import  express  from "express";
import  dotenv  from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
// to parse the incoming requests with JSON payloads
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// app.get("/", (req, res) => {
//     console.log(Date.now() + " Ping Received");
//     res.json({
//         ping: "pong"
//     });
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log('server is running on port ' + PORT);
});