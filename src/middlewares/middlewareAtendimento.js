import errors from '../core/errors/errors.js';

export const validate = (req, res, next) => {
  const { body: { name, email } } = req;

  if (!name || !email) {
    return res.status(400).json({ message: errors.EMAIL_OR_NAME_EMPTY })
  }

  if (name.length > 50)  {
    return res.status(400).json({ message: errors.NAME_LIMIT_CHARACTER })
  }

  next();
}