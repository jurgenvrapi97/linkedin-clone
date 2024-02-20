import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchExperiences } from '../redux/action'
import { fetchExperiencesAction } from '../redux/action'

const Test = () => {
  const formatDate = (dateISO) => {
    var dateObj = new Date(dateISO)
    var year = dateObj.getFullYear()
    var month = dateObj.getMonth()
    var date = dateObj.getDate()
    var dateStr = [date, month + 1, year].join('/')
    return dateStr
  }

  const dispatch = useDispatch()
  const tokens = useSelector((state) => state.user.tokens)
  const profile = useSelector((state) => state.user.user)
  const experiences = useSelector((state) => state.experiences.allExperiences)
  console.log(tokens.jurgen)
  console.log(profile._id)
  useEffect(() => {
    if (profile._id) {
      dispatch(fetchExperiences(tokens.jurgen, profile._id))
      console.log('partita')
    }
  }, [dispatch, profile._id])

  const handleDelete = (chiave) => {
    dispatch(
      fetchExperiencesAction(tokens.jurgen, profile._id, chiave, 'DELETE')
    )
  }
  return (
    <div>
      <h1>esperienze</h1>

      {experiences && experiences.length ? (
        experiences.map((exp) => (
          <div key={exp._id}>
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
            <p>
              {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
            </p>
            <button onClick={() => handleDelete(exp._id)}>cancella</button>
          </div>
        ))
      ) : (
        <p>Nessuna esperienza trovata per questo profilo.</p>
      )}
    </div>
  )
}
export default Test
