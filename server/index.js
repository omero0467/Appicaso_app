import express, {json} from "express";
import cors from "cors"
// import './server/db/mongoose.js'
// import { indexBank } from "./server/routes/routes.js";
import * as url from 'url';
import path from 'path';
import { indexRouter } from "./Routes/indexRoute.js";
const __dirname = url.fileURLToPath(new URL('./', import.meta.url));
const app = express();
const PORT = process.env.PORT || 8000;
app.use(json({limit: '50mb'}));
app.use(cors());
const publicPath = path.join(__dirname, 'server','build');
app.use(express.static(publicPath));
app.use("/api", indexRouter);
app.get('*', (req, res) => {
   console.log(__dirname);
   res.sendFile(path.resolve(__dirname,'build','index.html'));
 });
app.listen(PORT, () => {
   console.log( ` ^_^ Server running on port ${PORT}`);
});