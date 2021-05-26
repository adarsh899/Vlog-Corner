const User = require('../models/user');
module.exports.profile = function (req, res) {
    
    // if (req.user.id)
    // {
    //     User.findById(req.user.id, function (err, user) {
            
    //         if (user) {
               
    //             return res.render('user_profile',
    //                 {
    //                     title: "User Profile",
    //                     user: user
                    
    //                 })
    //         }
    //         return res.redirect('/user/sign-in');
    //     });
    // }
    // else {
    //     return res.redirect('/user/sign-in');
    // }
    User.findById(req.params.id, function (err, user) {
        return res.render('user_profile',
            {
                title: "User Profile",
                profile_user: user
                        
            });
        
    })

}
module.exports.signUp = function (req, res)
{
    if (req.isAuthenticated())
    {
        res.redirect('/user/profile');
        }
    return res.render(
        'user_sign_up',
        {
            title: 'User Sign up'
        }
    )
}
module.exports.signIn = function (req, res)
{
    if (req.isAuthenticated())
    {
        res.redirect('/user/profile');
        }
    return res.render(
        'user_sign_in',
        {
            title: 'User Sign In'
        }
    )
}
module.exports.create = function (req, res)
{
    // console.log(req.body);
    if (req.body.password != req.body.confirm_password)
        return res.redirect('back');
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log("error");
            return;
        }
        
        if (!user) {
            console.log(user)
            User.create(req.body, function (err, data) {
                if (err) {
                    console.log("error",err);

                    return;
                }
               
                return res.redirect('/user/sign-in');
            })
        }
        else
        {
            return res.redirect('back');
            }
    });
}
// module.exports.createSession = function (req, res) {
//     User.findOne({ email: req.body.email }, function (err, user) {
//         if (err) {
//             console.log("error");
//             return;
//         }
//         if (user) {
//             if (user.password != req.body.password)
//                 return res.redirect('back');
//                 res.cookie('user_id', user.id);
//             return res.redirect('/user/profile');
            
//         }
//         else
//             return res.redirect('back');
            
//     }
    

//     )
// }
module.exports.createSession = function (req, res)
{
    return res.redirect('/');
}
module.exports.destroySession = function (req, res)
{
    req.logout();
    return res.redirect('/');
}
module.exports.update = function (req, res)
{
    // console.log(req.user.id);
    // console.log(req.params);
    if (req.user.id == req.params.id)
    {
        console.log("djvfjcvf");
        User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
            return res.redirect('/');
        });
    }
    else
    {
        return res.status(401).send('Unauthorize');
    }
}