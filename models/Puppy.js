import mongoose from "mongoose";

const PuppySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "This puppy needs a name!"],
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  breed: {
    type: String,
    required: [true, "This puppy needs a breed!"],
    maxlength: [20, "Cannot be more than 20 characters"],
  },
  color: {
    type: String,
    required: [true, "All puppies have a color!"],
    maxlength: [20, "Cannot be more than 20 characters"],
  },
  picture: {
    type: String,
    required: [true, "Please enter the URL for the puppy's picture"],
  },
  description: {
    type: String,
  },
});

export default mongoose.models.Puppy || mongoose.model("Puppy", PuppySchema);
