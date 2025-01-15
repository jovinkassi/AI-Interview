/**@type { import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url:'postgresql://ai-interview_owner:Za4JFNI9eiBy@ep-muddy-waterfall-a5d6i0n0.us-east-2.aws.neon.tech/ai-interview?sslmode=require'
    }   
};