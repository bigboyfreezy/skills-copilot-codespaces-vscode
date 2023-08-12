// create web server
//create route for getting a single comment
app.get('/comments/:id', (req, res) => {
    //find the comment in the comments array that has the id given by req.params.id
    const comment = comments.find(comment => comment.id === req.params.id);
    //send back the comment
    res.json(comment);
});
