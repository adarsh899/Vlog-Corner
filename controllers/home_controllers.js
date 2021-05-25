module.exports.home = function (req, res)
{
    // return res.end('<h1>Express is up for code</h1>')
    console.log("kfbekb");
    return res.render('home',
        {
            title: "Home"
        });
}