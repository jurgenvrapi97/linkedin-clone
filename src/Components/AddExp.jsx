import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExperiencesCreate } from '../redux/action'

const AddExp = () => {
  const dispatch = useDispatch()
  const username = useSelector((state) => {
    return state.user.user
  })
  const tokens = useSelector((state) => {
    return state.user.tokens
  })
  const [form, setForm] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: '',
  })

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchExperiencesCreate(tokens.jurgen, username._id, form))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Ruolo</label>
      <input
        type="text"
        id="role"
        name="role"
        value={form.role}
        onChange={handleChange}
      />
      <label htmlFor="company">Compagnia</label>
      <input
        type="text"
        id="company"
        name="company"
        value={form.company}
        onChange={handleChange}
      />
      <label htmlFor="startDate">Data di inizio</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={form.startDate}
        onChange={handleChange}
      />
      <label htmlFor="endDate">Data di fine</label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={form.endDate}
        onChange={handleChange}
      />
      <label htmlFor="description">Descrizione</label>
      <textarea
        id="description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <label htmlFor="area">Area</label>
      <input
        type="text"
        id="area"
        name="area"
        value={form.area}
        onChange={handleChange}
      />
      <input type="submit" value="Invia" />
    </form>
  )
}

export default AddExp
