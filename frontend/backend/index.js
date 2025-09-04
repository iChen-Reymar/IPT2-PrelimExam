import  express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get("/api/todos", (req, res) =>{
    res.json(todos);
});

app.post("/api/addTodo",(req,res)  =>{
    const {text} = req.body;
    const newtodo = {id: Date.now(), text, completed: false};
    todos.push(newtodo)
    res.json(newtodo)
});

app.put("/api/completeTodo", (req,res ) => {
    const {id } = req.body;
    todos = todos.map((todo) => 
    todo.id === id ? {...todo, completed:true} :todo
);
res.json({ success: true});
    

});

app.listen(3000, () => console.log(" backend running on http:/localhost:3000"));