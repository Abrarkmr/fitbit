import mongoose from 'mongoose';
import { User } from '../models/user';
import { Team } from '../models/team';
import { Activity } from '../models/activity';
import { Leaderboard } from '../models/leaderboard';
import { Workout } from '../models/workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      { name: 'Maya Chen', email: 'maya@example.com', role: 'Trail Runner', fitnessLevel: 'Advanced' },
      { name: 'Dario Ortiz', email: 'dario@example.com', role: 'Cyclist', fitnessLevel: 'Intermediate' },
      { name: 'Nia Brooks', email: 'nia@example.com', role: 'Yoga Coach', fitnessLevel: 'Beginner' },
    ]);

    await Team.insertMany([
      { name: 'Nova Squad', members: 8, focus: 'Endurance' },
      { name: 'Peak Pals', members: 6, focus: 'Strength' },
      { name: 'Iron Circle', members: 5, focus: 'Cross-training' },
    ]);

    await Activity.insertMany([
      { type: 'Run', durationMinutes: 35, calories: 420, userId: users[0]._id.toString() },
      { type: 'Strength', durationMinutes: 45, calories: 310, userId: users[1]._id.toString() },
      { type: 'Yoga', durationMinutes: 30, calories: 180, userId: users[2]._id.toString() },
    ]);

    await Leaderboard.insertMany([
      { teamName: 'Nova Squad', points: 1240, streak: 7 },
      { teamName: 'Peak Pals', points: 1092, streak: 4 },
      { teamName: 'Iron Circle', points: 987, streak: 3 },
    ]);

    await Workout.insertMany([
      { title: 'Interval Cardio', difficulty: 'Intermediate', durationMinutes: 28, focus: 'Cardio' },
      { title: 'Mobility Flow', difficulty: 'Beginner', durationMinutes: 20, focus: 'Recovery' },
      { title: 'Power Strength', difficulty: 'Advanced', durationMinutes: 40, focus: 'Strength' },
    ]);

    console.log('Seed the octofit_db database with test data');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
