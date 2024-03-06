const express = require("express");
const router = express.Router();
const postController = require('../controller/postControllers');
const Post = require("../models/posts"); 


router.get('/', postController.getPosts);

router.post('/', postController.createPost);

router.get('/:id', postController.getPost);

module.exports = router;