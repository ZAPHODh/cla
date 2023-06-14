import mongoose from 'mongoose';

const { Schema } = mongoose;

const charSchema = new Schema({
  charName: String,
  position: String,
});

export default mongoose.models.Char || mongoose.model('Char', charSchema);
