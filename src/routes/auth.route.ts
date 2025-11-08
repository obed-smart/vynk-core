import { Router } from 'express';

const router = Router();

export default (app: Router) => {
  app.use('/auth', router);

  router.get('/apple', (req, res) => {
    res.send('Initiate Apple OAuth');
  });

  router.get('/google', (req, res) => {
    res.send('Initiate Google OAuth');
  });

  router.get('/apple/callback', (req, res) => {
    res.send('Apple Callback');
  });

  router.get('/google/callback', (req, res) => {
    res.send('Google Callback');
  });

  router.post('/login', (req, res) => {
    res.send('Login endpoint');
  });

  router.post('/register', (req, res) => {
    res.send('Register endpoint');
  });

  router.post('/password/reset', (req, res) => {
    res.send('Password Reset endpoint');
  });
  router.post('/session/recover', (req, res) => {
    res.send('Session Recovery   endpoint');
  });

  router.post('/logout', (req, res) => {
    res.send('Logout endpoint');
  });
};
