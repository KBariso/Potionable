import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editStep } from '../../store/step';



const EditStep = ({info, project_id, hideForm}) => {


    const dispatch = useDispatch();


    const user = useSelector(state => state.session.user);
    const userId = user?.id

    const [title, setTitle] = useState(info.title);
    const [body, setBody] = useState(info.body);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...info,
            title,
            body


        }
        //   await dispatch(editComment(payload))
        const dispatchStep = await dispatch(editStep(payload))


        if (dispatchStep) {
            hideForm();
        }
    };

    return (
        <>
            {userId && (
                <>
                <form onSubmit={handleSubmit} >
                    <h3> Update Title</h3>

                    <input
                        type="text"
                        placeholder="Update Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button type="submit">Update Title</button>
                </form>

                  <form onSubmit={handleSubmit} >
                    <h3> Update Body</h3>

                    <input
                        type="text"
                        placeholder="Update Body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <button type="submit">Update Body</button>
                </form>
                </>
            )
            }
        </>
    )
}


export default EditStep;
