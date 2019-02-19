import { Request, Response } from "express";
import getCtaBus from "../util/ctaBusApiKey";

export let ctaBus = (req: Request, res: Response): void => {
    getCtaBus(req.query.train).then((result) => {
        res.send(result);
    }).catch(err => res.send(err));
};