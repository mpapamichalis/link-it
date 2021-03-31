import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
//import './eventlist.css'
import DeleteBtn from "../components/DeleteBtn";
import Navbar from "../components/NavLoggedIn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../utils/actions";
import API from "../utils/API";
import {Grid} from "semantic-ui-react";

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
        <Grid stackable columns={3}>
          {state.posts.map(post => ( 
            <ListItem key={post._id}>
            <div className='userPost'>

              <Link to={"/event/" + post._id}>
              <div className='postInfo'>
                <div className='postTitle'>
                  <h3>{post.title}</h3> 
                </div>
                <div>
                Location: {post.where}
                </div>
               </div> 
               </Link>
               <DeleteBtn onClick={() => removePost(post._id)} />
               </div>
            </ListItem>
          ))}
          </Grid>
        </List>
        
      ) : (
        
        <h3>You haven't added any events yet!</h3>
      )}
    </div>
  );
}

export default EventList;

