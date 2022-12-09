const userRoutes = require("./courses")

const appRouter = (app,fs) => {
    app.get("/",(req,res) => {
        res.send("ec2 server")
    });

    userRoutes(app,fs);
};
module.exports = appRouter;


 