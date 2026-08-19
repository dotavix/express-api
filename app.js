import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import taskController from "./controllers/task-controller.js";
import { fileURLToPath } from "url";
import errorController from "./controllers/error-controller.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

console.log(__dirname.toString());
console.log(port);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/tasks", taskController.getAllTask);
app.get("/task/:id", taskController.getTask);
app.post("/tasks", taskController.addTask);
app.put("/tasks/:id", taskController.editTaskForm);
app.put("/tasks/complete/:id", taskController.completeTask);
app.put("/tasks/uncomplete/:id", taskController.uncompleteTask);
app.delete("/tasks/:id", taskController.deleteTask);

app.use(errorController.error404);

app.listen(port , ()=>{
    console.log("La api ya esta corriendo en localhost");
});