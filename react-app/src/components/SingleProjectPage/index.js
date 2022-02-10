import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import {getSingleProject} from "../../store/singleProject"
import CreateNewComment from "../CommentsForm";
import StepsForProject from "../Steps";
import CommentsList from "../ProjectComments";
import {removeProjectThunk} from "../../store/singleProject"
import { useHistory } from 'react-router-dom';

import StepForm from "../StepsForm";

import { NavLink } from "react-router-dom";
import EditProjects from "../EditProjects";



const SingleProjectPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {projectId}= useParams()
    const [edit, setEdit] = useState(false);

    const projects = useSelector(state => state.project)


    const selectedProject = projects[projectId];

    const user = useSelector(state => state.session.user)
    const userId= user?.id

    const preSession = selectedProject?.userId
    const sessionId = userId === preSession

    useEffect(()=>{

        dispatch(getSingleProject(projectId));

    }, [dispatch, projectId])

    console.log('YESYEYSYES', projectId)

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
                <div>
                    <img src={projects.media_url} alt='alternative' />
                </div>
                <div className='indiTitle'>{projects.title}</div>
                <div className='indiDescription'>{projects.description}</div>
                {/* <NavLink to={`/projects/${projects.id}/edit`} projectsProp={projects.title}>Edit</NavLink> */}
                {( !edit) && <button className='editProjectButton' onClick={() => setEdit(!edit)}>Edit Project</button>}

                {edit && <EditProjects key={projects.id} projectsProp={projects} hideForm={() => setEdit(false)}/>}
                <StepsForProject projectsId={projects.id} data={projects.id} />
                <div>
          {(userId ) && <button className='deleteButton' onClick={handleDelete}>Delete Project</button>}
    </div>
                {/* <CreateNewComment /> */}
                <StepForm />
                <CommentsList />
                

                <StepsForProject />
                {/* <CreateNewComment /> */}
                {/* <CommentsList/> */}



            </div>

        </>
    )
}


export default SingleProjectPage;
