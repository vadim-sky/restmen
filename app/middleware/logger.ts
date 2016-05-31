/**
 * Created by vadimsky on 27/05/16.
 */
export function log(req, res, next)  {
    console.log("request-> ", req.query);
    next();
}

export function notfound(req, res, next)  {
    if (req.query.a === "A") {
        console.log("don't send A");
        req.query.a = "ccccc";
        res.redirect("/notfound");
    }
    next();
}