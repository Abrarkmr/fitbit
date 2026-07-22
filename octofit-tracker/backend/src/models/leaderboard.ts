import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  teamName: string;
  points: number;
  streak: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  teamName: { type: String, required: true, unique: true },
  points: { type: Number, required: true },
  streak: { type: Number, required: true },
}, { timestamps: true });

export const Leaderboard = mongoose.model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
