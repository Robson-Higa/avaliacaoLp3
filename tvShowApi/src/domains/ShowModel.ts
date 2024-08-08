import { Document, Schema, model } from "mongoose";

export interface Show extends Document {
  id: string;
  title: string;
  premiere: Date;
  isRunning: boolean;
  language: string;
  mainGenre: string;
  posterUrl: string;
}

const schema = new Schema<Show>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  premiere: { type: Date, required: true },
  isRunning: { type: Boolean },
  language: { type: String, required: true },
  mainGenre: { type: String, required: true },
  posterUrl: { type: String },
});

export const ShowModel = model<Show>("Show", schema);

export const validateShowInputs = (showObj: any) => {
  const { title, premiere, language, mainGenre } = showObj;

  const errorMessages: string[] = [];

  if (!title) {
    errorMessages.push("Title cannot be empty");
  }

  if (premiere.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const premiereObj = new Date(premiere);

    if (!premiereObj) {
      errorMessages.push("Premiere cannot be empty");
    }
  } else {
    errorMessages.push("Premiere must follow pattern YYYY-MM-DD");
  }

  if (!language) {
    errorMessages.push("Language cannot be empty");
  }

  if (!mainGenre) {
    errorMessages.push("Main Genre cannot be empty");
  }

  return errorMessages;
};
