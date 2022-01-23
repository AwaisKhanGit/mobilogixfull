import bcrypt from 'bcryptjs'

const SALT_WORK_FACTOR = 12;

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (candidatePassword, storedPassword) => {
  return bcrypt.compareSync(candidatePassword, storedPassword);
};

exports.default = {
  encryptPassword,
  comparePassword,
};
