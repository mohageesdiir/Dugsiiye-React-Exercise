import {useState} from 'react'

const FormValidating = () => {
    const [formDate, setFormDate] = useState({
        username:"",
        email:"",
        agreement:false,
        role:"",
        year:0,
        skill:"",
        notifications:false
    });

    const [errors , setErrors] = useState({})

    

    const validateForm = ()=>{
        const errors = {}

        if(!formDate.username.trim()){
            errors.username = "Username is required"
        }

        if(!formDate.email.trim()){
            errors.email = "Email is required "
        }

        if(!formDate.role){
            errors.role = "role is required "
        }

        if(!formDate.year){
            errors.year = "year experience is require "
        }

        if(!formDate.skill){
            errors.skill = "select your skill"
        }
        if(!formDate.agreement){
            errors.agreement = "you must agree to the terms"
        }
        if(!formDate.notifications){
            errors.notifications = "must to checked"
        }
        
        return errors
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const validationError = validateForm()
        console.log(Object.keys(validationError))
        if(Object.keys(validationError).length === 0){
            console.log("success")
        }else{
            setErrors(validationError)
        }
    }

    const handleChange =(e)=>{
        const {name, checked, type, value} = e.target
        const newValue = type === "checked" ? checked : value
        setFormDate((prevDate)=> ({...prevDate, [name]: newValue }))

        // full name 
        if(name === 'username' && !value.includes('2-30 characters')){
            setErrors((prev) => ({...prev, username: 'full name is required'}))
        }

        // email 
        if(name ==='email' && !value.includes('@')){
            setErrors((prev) => ({...prev, email: 'email is invalid'}))
        }else{
            setErrors((prev) => ({...prev, [name] : ""}))
        }

        // role
        if(name ==='role' && !value){
            setErrors((prev) => ({...prev, role: 'must select role'}))
        }else{
            setErrors((prev) => ({...prev, [name] : ""}))
        }

        // year 
        if(name ==='year' && !value){
            setErrors((prev) => ({...prev, year: 'must select year'}))
        }else{
            setErrors((prev) => ({...prev, [name] : ""}))
        }

        // skill 
        if(name ==='skill' && !value){
            setErrors((prev) => ({...prev, skill: 'must select skill'}))
        }else{
            setErrors((prev) => ({...prev, [name] : ""}))
        }

        // agreement 
        if(name ==='agreement'){
            if(!value || value.length === 0){
                setErrors('you must agree to the terms') 
            }
        }
    }


  return (
    <div>
      <form className='formValidate' onSubmit={handleSubmit}>
        <label>full name</label>
        <input 
            type="text" 
            name="username" 
            value={formDate.username}
            onChange={handleChange}
        />

        {errors.username && <p>{errors.username} </p>}

        <label>Email</label>
        <input 
            type="email" 
            name="email" 
            value={formDate.email}
            onChange={handleChange}
        />

        {errors.email && <p>{errors.email} </p>}

        <label>Role</label>
        <select name="role" value={formDate.role} onChange={handleChange}>
            <option value="">select role</option>
            <option value="frontend">Frontend Developed</option>
            <option value="backend">Backend Developed</option>
            <option value="full stack">Full Stack Developed</option>
            <option value="product">Product Manager</option>
        </select>

        {errors.role && <p>{errors.role} </p>}

        <label>Year of Experience </label>
        <input 
            type="number" 
            name="year"
            value={formDate.year}
            onChange={handleChange}
            min={0}
            max={10}
        />

        {errors.year && <p>{errors.year} </p>}

        <label>Skill</label>
        <select name="skill" value={formDate.skill} onChange={handleChange}>
            <option>select skills</option>
            <option value="reacts">react</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScrip</option>
            <option value="node">Node.js</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
        </select>

        {errors.skill && <p>{errors.skill} </p>}

        <div>
            <input 
                type="checkbox" 
                name="agreement"
                checked={formDate.agreement}
                onChange={handleChange}
            />
            <span>I agree to the terms and conditions</span>
            {errors.agreement && <p>{errors.agreement} </p>}
        </div>
        <div>
            <input 
                type="checkbox" 
                name="notifications"
                checked={formDate.notifications}
                onChange={handleChange}
            />
            <span>Receive notifications about new opportunities</span>
        </div>
        <button>Submit Application</button>
      </form>
    </div>
  )
}

export default FormValidating
