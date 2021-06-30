import dbConnect from "../../../utils/dbConnect";
import Puppy from "../../../models/Puppy";

const routeHandler = async (req, res) => {
  await dbConnect();

  switch (req.method) {
    case "GET":
      const puppies = await Puppy.find({});
      res.status(200).json(puppies);
      break;
    case "POST":
      try {
        const puppy = await Puppy.create(req.body);
        res.status(201).json(puppy);
      } catch (error) {
        res.status(400).json({ msg: "Failure" });
      }
      break;
    default:
      res.status(400).json({ msg: "Bad Request" });
      break;
  }
};

export default routeHandler;
