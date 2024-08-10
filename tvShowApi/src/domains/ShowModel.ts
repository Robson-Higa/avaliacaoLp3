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

export const validateShowInputs = (showObj: any): boolean => {
  const { title, premiere, language, mainGenre } = showObj;

  const errorMessages = ( !title || !premiere.match(/^\d{4}-\d{2}-\d{2}$/) || isNaN(new Date(premiere).getTime()) || !language || !mainGenre
);

return errorMessages
};
