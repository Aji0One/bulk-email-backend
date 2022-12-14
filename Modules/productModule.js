const nodemailer= require('nodemailer');

exports.singlecheck= async (req,res) => {
    console.log(req.body.email);

 try{
    // creating a transporter using nodemailer
    var transporter= nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: 'ajithkumarmspva@gmail.com',
            pass: process.env.AUTH
        }
    });
    //option on which user to send the email as part of nodemailer
    var mailOption={
        from:'ajithkumarmspva@gmail.com',
        to: req.body.email,
        subject:'email check',
        html:`<p>Email Check</p>`
    }
    // console.log(link);
    //transporting the email to the specific user
    transporter.sendMail(mailOption,(err,info)=>{
        if(err){
            console.error(err);
            res.send("The entered email is invalid email id/ email doesn't exist ")
        }
        else{
            res.status(200).send("The Entered email is valid");
            console.log('Email sent', info.response);
        }
    })
 }catch(err){
    console.error(err);
    res.status(500).send(err);
 }
}