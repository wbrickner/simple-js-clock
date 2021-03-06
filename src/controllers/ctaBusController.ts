import { Request, Response } from "express";
import getCtaBus from "../util/getCtaBus";

export let ctaBus = (req: Request, res: Response): void => {
    getCtaBus(req.query.bus).then((result) => {
        res.send(result);
    }).catch(err => res.send(err));
};