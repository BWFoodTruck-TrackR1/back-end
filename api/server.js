const express = require("express");
const session = require("express-session");
const CSK = require("connect-session-knex")(session);
const cors = require("cors");
const helmet = require("helmet");
const knex = require("../data/db-config");
const restricted = require("../auth/auth-middleware");

const server = express();

const authRouter = require("../auth/auth-router");

const sessionConfig = {
  name: "test",
  secret: "bird is the word",
  resave: false,
  saveUninitialized: true, // needed for GDPR compliance
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false, // should be true in production
    httpOnly: true, // true means JS can't touch the cookie
  },
  store: new CSK({
    knex,
    tableName: "sessions",
    createTable: true,
    sidFieldName: "sid",
    clearInterval: 1000 * 60 * 15,
  }),
};

server.use(cors());

server.get("/hash", (req, res) => {
  const authentification = req.headers.authentification;

  const hash = bcrypt.hashSync(authentification, 8);

  res.json({ originalValue: authentification, hashedValue: hash });
});

server.get("/", (req, res) => {
  console.log(req.sesson);
  res.status(200).json({ api: "up" });
});

server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/auth", authRouter);


module.exports = server;
