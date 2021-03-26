import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import './eventlist.css'
//import DeleteBtn from "../DeleteBtn";
import Navbar from "../components/NavLoggedIn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../utils/actions";
import API from "../utils/API";

function EventList() {
  const [state, dispatch] = useStoreContext();

  const removePost = id => {
    API.deletePost(id)
      .then(() => {
        dispatch({
          type: REMOVE_POST,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getPosts = () => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      
      <Navbar/>
      

      {state.posts.length ? (
        <List>
        
          {state.posts.map(post => (
           
            <div className='userPost'>
            <ListItem key={post._id}>
              <Link to={"/event/" + post._id}>
              <div className='postInfo'>
                <div className='postTitle'>
                  {post.title}  
                </div>
                <div>
                Location: {post.where} 
                </div>
               </div> 
              </Link>
              
            </ListItem>
            </div>
          ))}
          
        </List>
      ) : (
        <h3>You haven't added any events yet!</h3>
      )}
    </div>
  );
}

export default EventList;
