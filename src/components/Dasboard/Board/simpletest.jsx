const handleDeleteComment = (index) => {
  const commentId = activity[index]._id; // use comments not activity

  const updatedComments = activity.filter((_, i) => i !== index);
  setActivity(updatedComments); // setComments, not setActivity

  axios
    .delete(`http://localhost:8214/api/cards/${cardId}/comments/${commentId}`)
    .then(() => {
      console.log("Comment deleted successfully!");
    })
    .catch((err) => {
      console.error("Failed to delete comment", err);
    });
};




---------------------------------