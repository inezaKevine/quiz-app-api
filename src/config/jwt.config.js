import passport from "passport";
import passportJWT from "passport-jwt";
import dotenv from "dotenv";
dotenv.config();

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findById(jwtPayload.id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);
