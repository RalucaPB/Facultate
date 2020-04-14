'use strict'
const cors=require('cors');
const authRoutes= require('./auth/auth.routes');
const agendaRoutes=require('./agenda/agenda.routes');
const entityRoutes=require('./entity/entity.routes');
const svgRoutes=require('./svg/svg.routes')
const rectRoutes=require('./rect/rect.routes');
const polygonRoutes=require('./polygon/polygon.routes');
const exerciseRoutes=require('./exercise/exercise.routes');
const express= require('express');
const propierties=require('./config/properties');
const DB=require('./config/db');
DB();

const app=express();
const router = express.Router();
//agendaRoutes(router);
const bodyParser=require('body-parser');
const bodyParserJSON=bodyParser.json();
const bodyParserURLEncoded=bodyParser.urlencoded({extended:true});
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(cors());
app.use('/api',router);
authRoutes(router);
agendaRoutes(router);
entityRoutes(router);
svgRoutes(router);
rectRoutes(router);
polygonRoutes(router);
exerciseRoutes(router);

router.get('/',(req,res)=>{
    res.send('Hello from home');
});

app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));