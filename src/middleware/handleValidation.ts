import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError } from 'express-validator';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }


  const extractedErrors: object[] = [];
  console.log(errors)
  errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));


  return res.status(422).json({
    errors: extractedErrors,
  });
};
