const db = require("../models");

//gets polls
exports.getCart = async (req, res, next) => {
  try {
    const cart = await db.Cart.find().populate("user", ["username", "id"]);

    res.status(200).json(cart);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

//gets user in polls
// exports.usersPolls = async (req, res, next) => {
//   try {
//     const { id } = req.decoded;

//     const user = await db.User.findById(id).populate("polls");

//     res.status(200).json(user.polls);
//   } catch (err) {
//     err.status = 400;
//     next(err);
//   }
// };

//creates a new poll
exports.addToCart = async (req, res, next) => {
  try {
    console.log(req.decoded);
    const { id } = req.decoded;
    const user = await db.User.findById(id);
    
    const { numberOfItem } = req.body;
    const cart = await db.Cart.create({
      numberOfItem,
      user,
    });
    user.inCart.push(cart._id);
    await user.save();

    res.status(201).json({ ...cart._doc, user: user._id });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

//gets a specific poll
// exports.getPolls = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const poll = await db.Poll.findById(id).populate("user", [
//       "username",
//       "id"
//     ]);

//     if (!poll) throw new Error("No poll found");

//     res.status(200).json(poll);
//   } catch (err) {
//     err.status = 400;
//     next(err);
//   }
// };

//deletes a poll
// exports.deletePoll = async (req, res, next) => {
//   try {
//     const { id: pollId } = req.params;
//     const { id: userId } = req.decoded;

//     const poll = await db.Poll.findById(pollId);
//     if (!poll) throw new Error("No poll found");
//     if (poll.user.toString() !== userId) {
//       throw new Error("Unauthorized access");
//     }

//     await poll.remove();
//     res.status(202).json(poll);
//   } catch (err) {
//     err.status = 400;
//     next(err);
//   }
// };
