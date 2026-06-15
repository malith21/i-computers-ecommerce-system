import Student from "../models/student.js";

export function createStudent(req, res) {

	if (req.user == null){
		res.json({
			message: "Unauthorized Accessyou need to login befor creating student"
		})
		return
	}

	if(!req.user.isAdmin){
		res.json({
			message: "Only admin can create student"
		})
		return
	}

	const newStudent = new Student({
		name: req.body.name,
		age: req.body.age,
		city: req.body.city,
	});

	newStudent.save().then(() => {
		res.json({
			message: "Student Created Successfully",
		});
	}).catch((error) => {
		console.error("Error creating student:", error);
	});
}

export async function createStudentAsync(req, res) {
	try{

		const newStudent = new Student({
		name: req.body.name,
		age: req.body.age,
		city: req.body.city,
	});

	await newStudent.save()
	res.json({
		message: "Student Created Successfully",
	});

	}catch(error){
		console.error("Error creating student:", error);
	}	
}

export function getStudents(req,res){

    Student.find().then(

        (students)=>{

            res.json(students)

        }

    )
}