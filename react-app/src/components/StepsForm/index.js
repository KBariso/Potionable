import { useState } from "react"
import { createOneStep } from "../../store/step"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";

const StepForm = () => {
    const dispatch = useDispatch();

    const test = useSelector(state => state.steps.id)
    console.log('^^^^^^^^^^^^^', test)
    let { projectId } = useParams()
    console.log('IS THIS THING ON? PROJECT ID?', projectId)

    const [title, setTitle] = useState('')
    console.log(title)
    const [body, setBody] = useState('')
    console.log(body)

    const updateTitle = (e) => setTitle(e.target.value)
    const updateBody = (e) => setBody(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('in the handle submit')

        const payload = {
            title,
            body,
            project_id: projectId
        }

        const newStep = await dispatch(createOneStep(payload))
        // console.log(newStep, 'testing new step################')
        // return newStep
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Title'
                    type='text'
                    value={title}
                    onChange={updateTitle}
                />

                <textarea
                    placeholder='Step details'
                    type='text'
                    value={body}
                    onChange={updateBody}
                />

                <button type='submit'>Add a new step</button>
            </form>
        </div>
    )

}

export default StepForm
