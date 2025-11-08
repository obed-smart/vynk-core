import { Response, Request, NextFunction } from 'express';
import AuthService from '../services/auth.service.js';


/**
 * Auth Controller to handle all auth related
 * @TODO 
 */

const authService = new AuthService();

/**
 * User Sign Up Controller
 * @param req - Request object
 * @param res - Response object
 * @param next - NextFunction for error handling
 */

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.signUp(req.body);
    return res.status(201).json({
      message: 'User signed up successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * User Sign In Controller
 * @param req - Request object
 * @param res - Response object
 * @param next - NextFunction for error handling
 */
export const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await authService.signIn(email, password);
    return res.status(200).json({
      message: 'User signed in successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
