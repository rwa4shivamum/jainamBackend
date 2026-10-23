import express from 'express'

const app = express()
app.use(express.json()) 
/*4th line means allows JSON data {"name":"shvam"} 
get, post,put->entire, patch->only somechange, delete
*/

//get , post->require payload, put/patch:-require payload for update, delete->to delete something from db
app.get("/health", (req, res)=>{
    res.json({
        message:"server is running jainam"
    })
})
let arryOfName = []

//read
app.get("/read", (req, res)=>{
    res.json({
      body: arryOfName
    });
})

//Create
app.post("/pushArray", (req, res)=>{
    const {name} = req.body
    arryOfName.push(name)
    console.log(arryOfName)
    res.json({
        data:arryOfName
    })
})

//update
app.put("/updateArray", (req, res)=>{
    const {name, updateName} = req.body
    for(let i=0; i<arryOfName.length; i++){
        if(arryOfName[i].includes(name)){
            arryOfName[i] = updateName
        }
    }
    console.log(arryOfName)
    res.json({
        data:arryOfName
    })
})

app.delete("/delete", (req, res)=>{
    const {name} = req.body
    for (let i = 0; i < arryOfName.length; i++) {
      if (arryOfName[i].includes(name)) {
        
      }
    }
})

app.listen(8080, ()=>{
    console.log("server is running")
})
//npm init -y ->packag.json
//npm install express(backend framework install)

// function add(){
//     return 1
// }

// console.log(add())