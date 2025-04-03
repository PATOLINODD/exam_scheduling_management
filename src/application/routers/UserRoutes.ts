import { UserRepositoryImpl, databaseInstance } from "@/infrastructure/";
import type { Application } from "express";
import { UserUseCase } from "../usecases/UserUseCase";
import { UserModel, type UserRepository } from "@/domain";
import { UserDto } from "../dtos/userDto";

export default function (app: Application) {
  let userRepImpl: UserRepository;

  app.get(":id", async (req, res) => {
    try {
      userRepImpl = new UserRepositoryImpl(databaseInstance());
      const { id } = req.params;
      const userRequested = await new UserUseCase(userRepImpl).get(id);
        if(userRequested){
            res.json(userRequested);
            return;
        }
        res.status(400).json({message: 'Something went wrong. Verify the data and try again'});
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Something went wrong. Try again later!" });
    }
  });

  app.post("/nuser", async (req, res) => {
    try {
      const user: UserDto = req.body;

      userRepImpl = new UserRepositoryImpl(databaseInstance());

      const userCreated = await new UserUseCase(userRepImpl).create(user);
      if (userCreated) {
        res.status(201).json(userCreated);
        return;
      }
      res.status(400).json({
        message: "Something went wrong. Verify the data and try again!",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  });
}
