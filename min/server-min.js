function validateJsonld(e){var n={};return null==e["@context"]&&(n.context="No context was found"),null==e["@type"]&&(n.type="No type was found"),null==e["dtx:parkingName"]&&(n.name="The parkingName was not found"),null==e["dtx:parkingSiteAddress"]&&(n.address="The parkingSiteAddress was not found"),null==e["dtx:parkingLocation"]&&(n.location="The parkingLocation was not found"),null==e["dtx:contactDetailsTelephoneNumber"]&&(n.telephone="The contactDetailsTelephoneNumber was not found"),null==e["dtx:parkingDescription"]&&(n.description="The parkingDescription was not found"),null==e["dtx:parkingSpaceOccupied"]&&(n.spaceOccupied="The parkingSpaceOccupied was not found"),null==e["dtx:totalCapacity"]&&(n.capacity="The totalCapacity was not found"),null==e["dtx:latitude"]&&(n.latitude="The latitude was not found"),null==e["dtx:longitude"]&&(n.longitude="The longitude was not found"),n}var express=require("express"),bodyParser=require("body-parser"),jsonld=require("jsonld"),url=require("url"),app=express();app.set("views",__dirname+"/views"),app.set("view engine","jade"),app.use(express["static"](__dirname+"/public"));var jsonParser=bodyParser.json();app.get("/",function(e,n){var t=e.query.json,a,o,i,r,s;void 0!=t?(a=JSON.parse(t),o=validateJsonld(a),i=a["dtx:parkingSpaceOccupied"],r=a["dtx:totalCapacity"],s=r-i,n.render("index",{title:"Home",data:a,freeSpace:s,errors:o})):(console.log("No json was found"),n.render("empty",{title:"Home"}))}),app.post("/json",jsonParser,function(e,n){var t=e.body,a=validateJsonld(t);n.send(a)}),app.listen(8080,function(){console.log("Example app listening on port 8080!")});