const express = require("express");
const app = express();
const axios = require("axios");



app.get("/getDetails", async (req, res) => {
	try {
		const response = await axios({
			url: "https://jsonplaceholder.typicode.com/users",
			method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});


app.post("/postData", async(req, res)=>{
    try{
        const addRes = await axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: "Foo",
                body: "bar",
                userID: 1
          });
          res.status(200).json(addRes.data);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: err });
    }
      
});

app.put("/updateDetails", async(req,res)=>{
    try{
      const editData = await axios({
        url:"https://jsonplaceholder.typicode.com/posts/1",
        method:"put",
        data:{
            title:"my name is you",
            body:"you are in"
        }
      });
      res.status(200).json(editData.data);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "somthing went wrong"});
    }
});
app.delete("/deleteDetails", async(req,res)=>{
    try{
      const editData = await axios({
        url:"https://jsonplaceholder.typicode.com/posts/1",
        method:"delete",
        
      });
      res.status(200).json(editData.data);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "somthing went wrong"});
    }
});


app.listen(2400, () => {
	console.log("Server started at port 2400");
});




