import express from "express";
const router = express.Router();
import {verifyToken} from '../middleware/jwt.js'
import {createReview,getReviews,deleteReview} from '../controllers/review.controller.js'

router.post("/", verifyToken,createReview);
router.get("/:gigId",getReviews );
router.delete("/:id",deleteReview );

export default router;
