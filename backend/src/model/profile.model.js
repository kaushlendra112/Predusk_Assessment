import mongoose, {Schema} from "mongoose";

const profileSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        education: [
            {
                degree: String,
                institution: String,
                year: String
            }
        ],
        skills: [
            {
                type: String,
                lowercase: true,
                trim: true
            }
        ],
        projects: [
            {
                title: String,
                description: String,
                links: {
                    github: String,
                    live: String
                }
            }
        ],
        work: [
            {
                company: String,
                role: String,
                duration: String
            }
        ],
        links: {
            github: String,
            linkedin: String,
            portfolio: String
        }
    }, 
    {
        timestamps: true
    }
);

export const Profile = mongoose.model("Profile", profileSchema);