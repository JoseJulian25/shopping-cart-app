module.exports = (req, res, next) => {
    try {
        let token = req.headers['authorization'];

        if (token && token.startsWith('Bearer ')) {
            token = token.slice(7, token.length); 
        }
    
        if (!token || token.length <= 0) {
          return res.status(401).json({ error: 'No token provided' });
        }
    
        const decodedToken = AuthService.verifyJwt(token);
        req.token = decodedToken;
        next();
      } catch (err) {
        return res.status(401).json({ error: 'Invalid Token!' });
      }
}