import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  mobilenum: String,
  address: String,
  resumeUrl: String,
  linkedinUrl: String,
  collegeName: String,
  majorName: String,
  cgpa: String,
  gradDate: String,
  skills: String,
  interestArea: String,
  projectDetails: String,
  internDuration: String,
  hearSource: String,
});

export const InternUser = mongoose.model("User", userSchema);
