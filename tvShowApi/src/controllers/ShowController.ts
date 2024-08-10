import { Request, Response } from "express";
import ShowDAO from "../dao/ShowDAO";
import { ShowModel, validateShowInputs } from "../domains/ShowModel";

export default class ShowController {
  private showDAO: ShowDAO;

  constructor() {
    this.showDAO = new ShowDAO();
  }

  async save(req: Request, res: Response) {
    const errorMessages = validateShowInputs(req.body);

    if (errorMessages == true) {
      const { title, isRunning, language, mainGenre, posterUrl } = req.body;

      const show = new ShowModel({
        title,
        isRunning,
        language,
        mainGenre,
        posterUrl,
      });

      const savedShow = await this.showDAO.save(show);
      return res.status(201).json({ show: savedShow });
    }

    return res.status(400).json({ "error": "At least one mandatory field was not informed"});
  }

  async findByTitle(req: Request, res: Response) {
    const { title } = req.params;

    const shows = await this.showDAO.findByTitle(title);

    return res.status(200).json({ shows });
  }
}
