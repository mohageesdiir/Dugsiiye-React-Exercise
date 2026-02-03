import {useState} from 'react'

const FormSubmit = () => {
    const [formDate , setFormDate] = useState({
        username:"",
        email:"",
        number:""
    })

    const [isChecked, setIsChecked] = useState(false)
    const [selectOption, setSelectOption] = useState("")

    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log(formDate)
        console.log(isChecked)
        console.log(selectOption)
    }

    const handleChange = (event)=>{
        const {name , value} = event.target

        setFormDate((prevDate) => ({...prevDate, [name] : value}))
        
    }

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input 
            type="text" 
            name='username'
            value={formDate.username}
            onChange={handleChange}
            placeholder='please enter your name'
        />
        <input 
            type="email" 
            name='email'
            value={formDate.email}
            onChange={handleChange}
            placeholder='please enter your email'
        />
        <input 
            type="number" 
            name='number'
            value={formDate.number}
            onChange={handleChange}
            placeholder='please enter your number'
        />
        <input 
            type="checkbox" 
            checked={isChecked}
            onChange={(event)=> setIsChecked(event.target.checked)}
    
        />
        
        <select 
            value={selectOption}
            onChange={(event)=> setSelectOption(event.target.value)}
        >
            <option value="">select option</option>
            <option value="Rich Dad Poor Dad">Rich Dad Poor Dad</option>
            <option value="The Atomic Habits Workbook">The Atomic Habits Workbook</option>
            <option value="The Art of Spending Money">The Art of Spending Money</option>
            <option value="Tiny Experiments">Tiny Experiments</option>
        </select>

        <button type='submit'>submit</button>

      </form>
    </div>
  )
}

export default FormSubmit
