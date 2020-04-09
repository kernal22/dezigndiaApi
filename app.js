const http = require('http');
var express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const vendorRoutes = require('./routes/vendor-api.routes'); 

const app = express();

app.server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use('/vendorcall', vendorRoutes);



//error handler middleware
app.use((err, req, res, next) => {
    const errorStr = JSON.stringify({ message: err.message, stack: err.stack });
    console.log(errorStr);
    res.status(err.status || 500).send({
        error: {
          status: err.status || 500,
          message: err.message || 'Internal Server Error',
        },
      });
});

//server listening to defined PORT
const PORT = 2217;
app.server.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
});

module.exports = app;