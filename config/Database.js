import Sequence from "sequelize"

const db = new Sequence("nodereactcrud","root","",{
    host:"localhost",
    dialect:"mysql",
});


export default db