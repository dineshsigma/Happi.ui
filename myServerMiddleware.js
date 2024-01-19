export default (req, res, next) => { 
    if(req.hostname === "happimobiles.com") {
        res.redirect(301, "https://www.happimobiles.com")
        return
    }
    next()
}
