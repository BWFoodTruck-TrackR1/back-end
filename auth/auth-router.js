const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const operators = require("../operators/operators-model");
const diners = require("../diners/diners-model");


// registration for operators
router.post("/register/operators", (req, res) => {
  let operator = req.body;

  const hash = bcrypt.hashSync(operator.password, 8);
  operator.password = hash;

  if (!operator.username || !operator.email || !operator.password) {
    res
      .status(400)
      .json({ error: "Please enter username, email and password" });
  } else {
    operators
      .addOperator(operator)
      .then((added) => {
        res.status(201).json(added);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ errorMessage: "unable to register operator" });
      });
  }
});

// login for operators
router.post("/login/operators", (req, res) => {
  let { username, password } = req.body;
  console.log(req.body);

  if (!username || !password) {
    res.status(400).json({ error: "Please enter username and password" });
  } else {
    operators
      .findOperatorBy({ username })
      .first()
      .then((operator) => {
       
        if (operator && bcrypt.compareSync(password, operator.password)) {
          const token = generateToken(operator);

          res.status(200).json({
            message: `Welcome ${operator.username}`,
            account: {
              id: operator.id,
              username: operator.username,
              email: operator.email,
            },
            token,
          });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ errorMessage: "unable to login" });
      });
  }
});

// registration for diners
router.post("/register/diners", (req, res) => {
    let diner = req.body;
  
    const hash = bcrypt.hashSync(diner.password, 8);
    diner.password = hash;
  
    if (!diner.name || !diner.username || !diner.email || !diner.password || !diner.location) {
      res
        .status(400)
        .json({ error: "Please enter full name, username, email and password" });
    } else {
      diners
        .addDiner(diner)
        .then((added) => {    
          res.status(201).json(added)
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ errorMessage: "unable to register diner" });
        });
    }
  });

//login for diners
router.post("/login/diners", (req, res) => {
  let { username, password } = req.body;

  diners
    .findDinerBy({ username })
    .first()
    .then((diner) => {
      if (diner && bcrypt.compareSync(password, diner.password)) {
        const token = generateToken(diner);
    
        res.status(200).json({
          message: `Welcome ${diner.username}`,
          account: {
            id: diners.id,
            username: diners.username,
            email: diners.email,
            password: diners.password,
            location: diners.location,
        
          },
          token,
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ errorMessage: "unable to login" });
    });
});

// token generation
function generateToken(user) {
  const payload = {
    username: user.username,
  };

  const secret = process.env.JWT_SECRET || "secret";

  const options = {
    expiresIn: "12h",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
