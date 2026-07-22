"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../models/user");
const team_1 = require("../models/team");
const activity_1 = require("../models/activity");
const leaderboard_1 = require("../models/leaderboard");
const workout_1 = require("../models/workout");
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            user_1.User.deleteMany({}),
            team_1.Team.deleteMany({}),
            activity_1.Activity.deleteMany({}),
            leaderboard_1.Leaderboard.deleteMany({}),
            workout_1.Workout.deleteMany({}),
        ]);
        const users = await user_1.User.insertMany([
            { name: 'Maya Chen', email: 'maya@example.com', role: 'Trail Runner', fitnessLevel: 'Advanced' },
            { name: 'Dario Ortiz', email: 'dario@example.com', role: 'Cyclist', fitnessLevel: 'Intermediate' },
            { name: 'Nia Brooks', email: 'nia@example.com', role: 'Yoga Coach', fitnessLevel: 'Beginner' },
        ]);
        await team_1.Team.insertMany([
            { name: 'Nova Squad', members: 8, focus: 'Endurance' },
            { name: 'Peak Pals', members: 6, focus: 'Strength' },
            { name: 'Iron Circle', members: 5, focus: 'Cross-training' },
        ]);
        await activity_1.Activity.insertMany([
            { type: 'Run', durationMinutes: 35, calories: 420, userId: users[0]._id.toString() },
            { type: 'Strength', durationMinutes: 45, calories: 310, userId: users[1]._id.toString() },
            { type: 'Yoga', durationMinutes: 30, calories: 180, userId: users[2]._id.toString() },
        ]);
        await leaderboard_1.Leaderboard.insertMany([
            { teamName: 'Nova Squad', points: 1240, streak: 7 },
            { teamName: 'Peak Pals', points: 1092, streak: 4 },
            { teamName: 'Iron Circle', points: 987, streak: 3 },
        ]);
        await workout_1.Workout.insertMany([
            { title: 'Interval Cardio', difficulty: 'Intermediate', durationMinutes: 28, focus: 'Cardio' },
            { title: 'Mobility Flow', difficulty: 'Beginner', durationMinutes: 20, focus: 'Recovery' },
            { title: 'Power Strength', difficulty: 'Advanced', durationMinutes: 40, focus: 'Strength' },
        ]);
        console.log('Seed the octofit_db database with test data');
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
