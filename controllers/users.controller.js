const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports.UsersController = {
  getuser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.json(error.message);
    }
  },

patchuser: async (req, res ) => {
try {
  const user = await User.findByIdAndUpdate( req.params.id ,
    { login: req.body.login,
    avatar: req.body.avatar,
  aboutme: req.body.aboutme},
    { new: true })
    return res.json(user)
} catch (error) {
  return res.json(error.message);
}
},

  userscreate: async (req, res) => {
    const user = await User.findOne({ login: req.body.login });
    if (user) {
      return res.json("Пользователь с таким логином уже существует");
    }
    const hash = await bcrypt.hash(
      req.body.password,
      Number(process.env.BCRYPT_ROUNDS)
    );
    try {
      const user = await User.create({
        login: req.body.login,
        password: hash,
        avatar: req.body.avatar,
        aboutme: req.body.aboutme,
      });
      return res.json("Вы успешно зарегистрированы");
    } catch (error) {
      return res.json(error.message);
    }
  },
  login: async (req, res) => {
    const candidate = await User.findOne({ login: req.body.login });
    if (!candidate) {
      return res.status(401).json("Неверный логин или пароль");
    }
    const valid = await bcrypt.compare(req.body.password, candidate.password);
    if (!valid) {
      return res.status(401).json("Неверный логин или пароль");
    }
    const payload = {
      id: candidate._id,
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "2h",
    });
    return res.json({ token });
  },
  uploadavatar: (req, res) => {
    req.files.image.mv(`./public/${req.files.image.name}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.json("файл загружен")
      }
    })
  }
};
