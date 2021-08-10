import { Request, Response, Router } from 'express';
import User from '../../../models/User';
import bodyVerify from '../../../middleware/bodyVerify';

const router = Router();

const verifyRoute = async (req: Request, res: Response) => {
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
        res.json({
            error: 'User not found',
        });
        return;
    }
    if (user.verified) {
        res.json({
            error: 'User already verified',
        });
        return;
    }
    if (user.emailCode !== req.body.code) {
        res.json({
            error: 'Invalid verification code',
        });
        return;
    }
    user.verified = true;
    await user.save();

    res.json({
        success: true,
    });
};

router.post('/', bodyVerify(['email', 'code']), verifyRoute);
