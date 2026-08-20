const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  story: { type: String, required: true },
  category: { type: String, required: true },
  fundingGoal: { type: Number, required: true },
  minimumContribution: { type: Number, required: true },
  deadline: { type: Date, required: true },
  rewardInfo: { type: String, required: true },
  imageURL: { type: String, required: true },
  creatorEmail: { type: String, required: true },
  creatorName: { type: String, required: true },
  amountRaised: { type: Number, default: 0 },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
  },
  createdAt: { type: Date, default: Date.now }
});