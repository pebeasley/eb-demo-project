import dbConnect from "../../../utils/dbConnect";
import Puppy from "../../../models/Puppy";

const routeHandler = async (req, res) => {
  await dbConnect();

  switch (req.method) {
    case "GET":
      let { id } = req.query;
      const foundPuppy = await Puppy.findById(id);

      res.status(200).json(foundPuppy);
      break;
    case "DELETE":
      try {
        let { id } = req.query;
        const deletedPuppy = await Puppy.deleteOne({ _id: id });
        if (!deletedPuppy) {
          return res.status(400).json({ msg: "Failure" });
        }
        res.status(200).json({ msg: "Successful" });
      } catch (error) {
        res.status(400).json({ err: error });
      }
      break;
    case "PUT":
      // try {
      // let { id } = req.query;
      //   console.log(id);
      //   const updatedPuppy = await Puppy.findOneAndUpdate(id, req.body, {
      //     new: true,
      //     runValidators: true,
      //   });
      //   if (updatedPuppy) {
      //     return res.status(200).json(updatedPuppy);
      //   }
      // } catch (error) {
      //   res.status(400).json({ error: error });
      // }
      try {
        let { id } = req.query;
        const updatedPuppy = await Puppy.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!updatedPuppy) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: updatedPuppy });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ msg: "Bad Request" });
      break;
  }
};

export default routeHandler;
