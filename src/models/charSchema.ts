import mongoose from 'mongoose';

const { Schema } = mongoose;

const charSchema = new Schema({
  charName: String,
  position: String,
  sky: String,
  chi: Number,
  classChar: String,
  survivor: String,
  damage: Number,
});

export default mongoose.models.Char || mongoose.model('Char', charSchema);
