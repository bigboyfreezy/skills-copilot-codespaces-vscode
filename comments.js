// create web server with express
// express is a node.js module for building HTTP servers
const express = require('express');
const router = express.Router();
const comments = require('../data/comments');

router.get('/comments', (req, res) => {
    res.json(comments);
});

router.get('/comments/:id', (req, res) => {
    const found = comments.some(comment => comment.id === parseInt(req.params.id));
    if (found) {
        res.json(comments.filter(comment => comment.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No comment with the id of ${req.params.id}`});
    }
});

