<h1 align="center">Voice OTP<img src="https://media2.giphy.com/media/L3u0T2DZ3D55srukju/200w.webp?cid=ecf05e4751k017q7jl5zculuvev8lurnwzs32lfcjdxcns1h&rid=200w.webp&ct=s"width="55px"> System</h1>
<p align="center">
  <img src="https://raw.githubusercontent.com/divyanshojha99/PICBOX/5b147ac536961d7af6e940134298123fc24da964/two-factor-authentication-img.svg" height="300" breadth="400"/>
</p>

 
 <h1>🚀 REQUIREMENTS & IMPRO POINTS</h1>

> ### **Create a Account on Plivo and set-up your node.js enviornment...** 
> ### **Create a js file [voiceotp](https://github.com/divyanshojha99/VOICE-OTP-SYSTEM/blob/main/voiceotp.js)**

    Replace the auth placeholders with your authentication credentials from the Plivo console. Replace the phone number placeholder with an actual phone number in E.164 format (eg-+917485963265).

>>NOTE--
>>I recommend that you store your credentials in the auth_id and auth_token environment variables, to avoid the possibility of accidentally committing them to source control. If you do this, you can initialize the client with no arguments and Plivo will automatically fetch the values from the environment variables. You can use process.env to store environment variables and fetch them when initializing the client.

 
 <h2>💡TESTING</h2>
 
 > ### **Save the file and run it, and start Redis.**
     $ node voiceotp.js
     $ redis-server
  
  >### **You should see your basic server application in action as below:**
     http://localhost:5000/dispatch_otp/?destination_number=<destination_number>
     http://localhost:5000/verify_otp/?destination_number=<destination_number>&otp=<otp>
