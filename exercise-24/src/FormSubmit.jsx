import { useForm } from "react-hook-form"

function FormSubmit() {
    const {register, handleSubmit, formState:{errors} } = useForm()
    console.log(errors.username)
    const onSubmit = (date)=>{
        console.log(date)
        if(register){
            alert("form is register")
        }
    }

  return (
    <div>
      <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
        <h1>Student Registration </h1>
        <div className="username">
            <label>Student Name </label>
            <input 
                type="text" 
                {...register("username", {required:"username is required"})}
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
        </div>
        <div className="email">
            <label>Email </label>
            <input 
                type="email"
                {...register("email",{required:"email is required", pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i , message: "invalid email address"}})}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div  className="grade">
            <label>Grade Level</label>
            <select
               
                {...register("grade", { required: "Select one of the grades" })}
            >
                <option value="">Select Grade</option>
                <option value="grade9">Grade 9</option>
                <option value="grade10">Grade 10</option>
                <option value="grade11">Grade 11</option>
                <option value="grade12">Grade 12</option>
            </select>
            {errors.grade && <p className="error">{errors.grade.message}</p>}
        </div>
        <div className="subject">
            <h2>Subjects Interest</h2>
            <div>
                <input
                    type="checkbox"
                    value="math"
                    {...register("subjects", {
                        required: "Select at least one subject",
                    })}
                />
                <span>Mathematics</span>
            </div>
            <div>
                <input
                    type="checkbox"
                    value="math"
                    {...register("subjects", {
                        required: "Select at least one subject",
                    })}
                />
                <span>Science</span>
            </div>
            <div>
                <input
                    type="checkbox"
                    value="math"
                    {...register("subjects", {
                        required: "Select at least one subject",
                    })}
                />
                <span>English</span>
            </div>
            {errors.subjects && <p className="error">{errors.subjects.message}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default FormSubmit
