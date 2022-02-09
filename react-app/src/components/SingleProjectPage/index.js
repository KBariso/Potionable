import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import {getSingleProject} from "../../store/singleProject"
import CreateNewComment from "../CommentsForm";
import StepsForProject from "../Steps";
import CommentsList from "../ProjectComments";



const SingleProjectPage = () => {
    const dispatch = useDispatch();


    const {projectId}= useParams()


    const projects = useSelector(state => state.project)
     

    // const selectedProject = projects[projectId];

    // const user = useSelector(state => state.session.user)
    // const userId= user?.id

    // const preSession = selectedProject?.userId
    // const sessionId = userId === preSession

    useEffect(()=>{

        dispatch(getSingleProject(projectId));

    }, [dispatch, projectId])


    return(

        <>

          <div className='singleProjectWrapper'>
                <div>
                    <img src={projects.media_url} alt='alternative' />
                </div>
                <div className='indiTitle'>{projects.title}</div>
                <div className='indiDescription'>{projects.description}</div>
                <StepsForProject projectsId={projects.id} data={projects.id} />
                <CreateNewComment />
                <CommentsList />

                <StepsForProject />
                {/* <CreateNewComment /> */}
                <CommentsList/>



            </div>

        </>
    )
}

export default SingleProjectPage;
