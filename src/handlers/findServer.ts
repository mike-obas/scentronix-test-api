import { Request, Response } from "express";
import axios from "axios";
import {
  servers,
  newAbortSignal,
  ServerType,
  getLowestPriority,
} from "../utils/server";

// functions
export const testServer = async (server: ServerType) => {
  return axios
    .get(`${server.url}`, {
      timeout: 5000,
      signal: newAbortSignal(5000),
    })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) return server;
      return null;
    })
    .catch((err) => {
      return null;
    });
};

export const runServerTest = (req: Request, res: Response) => {
  const findServer = async () => {
    try {
      let responsePromises: any = [];
      servers.map((item: ServerType) => {
        responsePromises.push(testServer(item));
      });
      //resolve all promises
      const finalResponse = await Promise.all(responsePromises);
      const lowestPriority = getLowestPriority(finalResponse);

      return res.status(200).json({
        status: 200,
        message: `You have successfully found the online server with the lowest priority.`,
        response: lowestPriority,
      });
    } catch (err: any) {
      return res.status(400).json({
        isError: true,
        error: err,
      });
    }
  };
  return findServer();
};
