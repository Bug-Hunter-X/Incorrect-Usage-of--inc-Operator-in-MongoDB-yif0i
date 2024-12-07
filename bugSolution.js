```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{count:1}},{upsert:true});
//or
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{count:1}},{upsert:true,setDefaultsOnInsert:true});
```