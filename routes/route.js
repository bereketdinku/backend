const router = express.Router();
const {
  createRecord,
  getAllRecords,
  getRecordById,
  updateRecordById,
  deleteRecordById,
} = require("../controllers/SongController");

// Create a new record
router.post("/", createRecord);

// Get all records
router.get("/", getAllRecords);

// Get a single record by ID
router.get("/:id", getRecordById);

// Update a record by ID
router.put("/:id", updateRecordById);

// Delete a record by ID
router.delete("/:id", deleteRecordById);

module.exports = router;
