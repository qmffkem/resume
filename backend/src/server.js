import express from "express";
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());


const withDB = async (operations, res) => {
    try{
      const client = await MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true});
      const db = client.db('resume');

      await operations(db);

      client.close();
    } catch (error) {
      res.status(500).json({ message : 'Error connection to db', error});
    }
}

app.get('/login', (req,res)=>{
    withDB( async (db) => {
        const articleName = req.params.name;
    
        const articleInfo = await db.collection('users').findOne({name : articleName});
        res.status(200).json(articleInfo);
      }, res);
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
  })
  
  app.listen(8000, () => console.log('Listening on port 8000'));