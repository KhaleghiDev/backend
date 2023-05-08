import Sequelize from "sequelize"
import db from "../config/Database.js";


const {DataTypes} =Sequelize;

const Prodact =db.define("prodact",{
    name: DataTypes.STRING,
    image:DataTypes.STRING,
    url:DataTypes.STRING,
    publiches:DataTypes.TINYINT,
    
},{
        freezeTableName:true
});

export default Prodact;
(
    async()=>{
        await db.sync();
    }
)();