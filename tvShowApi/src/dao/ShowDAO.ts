import { Show, ShowModel } from "../domains/ShowModel";

export default class ShowDAO {
  async save(show: Show) {
    const savedShow = await ShowModel.create(show);
    return savedShow;
  }

  async findByTitle(title: string) {
    const shows = await ShowModel.find<Show>({
      title: {
        $regex: title,
        $options: "i",
      },
    });

    return shows;
  }
}
