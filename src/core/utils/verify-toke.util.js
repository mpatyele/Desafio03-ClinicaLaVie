import jwt from 'jsonwebtoken';

export function verifyToken (token) {
  const secretKey = 'secret';

  return jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return null;
    }

    return decoded;
  })
}