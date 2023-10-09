import exp from "constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if ( req.method === "POST"){
/* 
        const {
            body,
          }: {
            body: SingUpAPIBody;
          } = req;
          const { email, firstname, lastname, password, birthday } = body;
          if (!email || !firstname || !lastname || !password || !birthday) {
            res.statusCode = 400;
            return res.send("필수 데이터가 없습니다.");
          } */

       /*  const userExists = await Data.user.exist({ email });
      if (userExists) {
        res.statusCode = 409;
        return res.send("이미 가입한 이메일 입니다.");
      } */

        return res.end();
    }
    res.statusCode = 405;

    return res.end();
}