const rejectUnauthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(403);
  }
};

const rejectUnauthorized = (req, res, next) => {
  if (req.user.userRole === 'admin') {
    next();
  } else {
    res.sendStatus(403);
  }
};



exports.default = { rejectUnauthenticated, rejectUnauthorized };
