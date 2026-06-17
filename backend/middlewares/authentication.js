import jwt from "jsonwebtoken";

export default function authenticateUser(req,res,next){
        
        const header = req.header("Authorization");

        console.log(header)

        if(header != null){

             const token = header.replace("Bearer ","");
             console.log(token)

             jwt.verify(
                token,
                "I-computers10Batch",
                (error, decoded)=>{

                    console.log(decoded) //decripted details of user

                    if(error){

                        res.status(401).json(
                            {
                                messsage :"invalid token please logging again"
                            }
                        )

                    }else{

                        req.user = decoded; //decoded is the decripted details of user
                        next();

                    }
                }
             )

        }else{

            //no token provided, continue as guest user
            next();

        }
 
}
//testing token
// const token = jwt.sign(
//     {
//         id:"12345",
//         name:"John Doe",
//         email:"john.doe@example.com"
//     },
//     "I-computers10Batch",
//     { expiresIn: "1h" }
// );