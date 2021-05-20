const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {

  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB"
      });
    }
    req.profile = user;
    next();
  });
};

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save user in DB"
      })
    }
    res.json({ user })
  })
};

exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  return res.json(req.profile);
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to update this user"
        });
      }
      user.salt = undefined;
      user.encry_password = undefined;
      res.json(user);
    }
  );
};


exports.removeUser = (req, res) => {
    const user = req.profile;
    
    user.remove((err, user) => {
        if (err) {
            return res.status(400).json({
                error: "Unable to remove user"
            })
        }
        res.json({
            message: "Successfully removed user"
        });
    });
};


