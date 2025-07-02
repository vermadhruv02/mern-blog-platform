import { Request, Response, NextFunction, RequestHandler } from 'express';

const asyncHandler = (
  requestHandler: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise
      .resolve(requestHandler(req, res, next))
      .catch(next); // same as: (err) => next(err)
  };
};

export { asyncHandler };
// alternative method to handle async errors using try catch
/*
const asyncHandler = (fn) => async (req, res, next) =>{
    try{
        await fn(req, res, next);
    }catch(error){
        res
        .status(error.code || 500)
        .json({
            success: false,
            message: error.message
        });
    }
}
*/