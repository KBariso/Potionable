import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import project, {getSingleProject} from "../../store/singleProject"
import CreateNewComment from "../CommentsForm";
import StepsForProject from "../Steps";
import CommentsList from "../ProjectComments";
import {removeProjectThunk} from "../../store/singleProject"
import { useHistory } from 'react-router-dom';
import StepForm from "../StepsForm";
import { NavLink } from "react-router-dom";
import EditProjects from "../EditProjects";
import './SingleProjectPage.css'



const SingleProjectPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {projectId}= useParams()
    const [edit, setEdit] = useState(false);

    const projects = useSelector(state => state.project)


    const selectedProject = projects[projectId];

    const user = useSelector(state => state.session.user)
    const userId= user?.id

    const preSession = projects?.user_id
    const sessionId = userId === preSession

    useEffect(()=>{

        dispatch(getSingleProject(projectId));

    }, [dispatch, projectId])



    const handleDelete =  (e) => {

      dispatch(removeProjectThunk(projectId))
    //   if(deleteInfo){
        history.push("/");
        window.location.reload();
    //   }
    }

    return(

        <>

          <div className='singleProjectWrapper'>
                <p className="indiTitle">{projects.title}</p>
                <div className="imgContainer">
                    <img className="mediaUrl" src={projects.media_url} alt='alternative' />
                    <div className="editProjectBttnContainer">
                        <div>
                            {/* {(sessionId && !edit) && <button className='editProjectButton' onClick={() => setEdit(!edit)}>Edit Project</button>} */}
                            {/* {(userId ) && <button className='deleteButton' onClick={handleDelete}>Delete Project</button>} */}
                        </div>
                    </div>
                </div>
                <div className='indiDescription'><h2>{projects.description}</h2></div>
                {/* <NavLink to={`/projects/${projects.id}/edit`} projectsProp={projects.title}>Edit</NavLink> */}

                {(sessionId && !edit) && <button className='editProjectButton' onClick={() => setEdit(!edit)}>Edit Project</button>}


                {(sessionId && edit) && <EditProjects key={projects.id} projectsProp={projects} hideForm={() => setEdit(false)}/>}
                { <StepsForProject projectsId={projects.id} data={projects.id} projectUserId={projects.user_id} />}
                <div>

          {(sessionId && userId ) && <button className='deleteButton' onClick={handleDelete}>Delete Project</button>}

    </div>
                {/* <CreateNewComment /> */}

                {(sessionId && userId ) && <StepForm />}

                 < CommentsList projectId={projects.id} />





                {/* <StepsForProject /> */}
               {userId && <CreateNewComment />}
                {/* <CommentsList/> */}



            </div>

        </>
    )
}


export default SingleProjectPage;
