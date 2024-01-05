const express = require("express");
const router = express.Router();
const {
    getNotes,
    createNotes,
    getNote,
    updateNote,
    deleteNote,
    searchNotes,
    shareNotes
  } = require("../controllers/notesController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
router.route("/search").get(searchNotes);
router.route("/").get(getNotes).post(createNotes);
router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);
//router.route("/:id/share").post(shareNotes);

module.exports = router;