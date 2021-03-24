import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
//import DeleteBtn from "../DeleteBtn";
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
      <h1>All Events</h1>
      <h3 className="mb-5 mt-5">Click on an event to view</h3>
      {state.posts.length ? (
        <List>
          {state.posts.map(post => (
            <ListItem key={post._id}>
              <Link to={"/event/" + post._id}>
                <strong>
                  {post.title} {post.where} {post.total} {post.description}
                </strong>
              </Link>
              
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any events yet!</h3>
      )}
    </div>
  );
}

export default EventList;
