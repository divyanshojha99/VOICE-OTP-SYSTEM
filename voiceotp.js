const express = require('express');
const app = express();
const redis = require('redis');
const redisClient = redis.createClient();
var plivo = require('plivo');

// Make call to the destination number with OTP
app.get('/dispatch_otp/:number', function(req, res) {
    const number = (req.params.number);
    const code = Math.floor(100000 + Math.random() * 900000);

    var client = new plivo.Client("<auth_id>", "<auth_token>");
    var response = client.calls.create(
        "<caller_id>", // from
        number, // to
        "https://<yourdomain>.com/answer_url/" + code, // answer url
        {
            answerMethod: "GET",
        },
    )
    console.log(response)
    redisClient.set(`number:${number}:code`, code, 'EX', 60);
    res.send(JSON.stringify({
        'status': 'success',
        'message': 'verification initiated'
    }));
});

// Validate the OTP entered by the user
app.get('/verify_otp/:number/:code', function(req, res) {
    const number = (req.params.number);
    const code = (req.params.code);
    redisClient.get(`number:${number}:code`, function(err, OriginalCode) {
        if (OriginalCode == code) {
            redisClient.del(`number:${number}:code`);
            res.send(JSON.stringify({
                'status': 'success',
                'message': 'Codes match — number verified'
            }));
        } else if (OriginalCode != code) {
            res.send(JSON.stringify({
                'status': 'failure',
                'message': 'Codes do not match — number not verified'
            }));
        } else {
            res.send(JSON.stringify({
                'status': 'failure',
                'message': 'Number not found'
            }));
        }
    });
});
