#!/usr/bin/env node

const fs = require('fs');
const child_process = require('child_process');
const Datecode = require('./lib/datecode');
const Menu = require('./lib/menu/menu');
const source = require('./lib/menu/menu-source-file');
const parser = require('./lib/parser');
const chalk = require ('chalk');
const request = require('request');

const editor = process.env.EDITOR || 'vi';
const datecode = Datecode.now();

const menuFileRelPath = Datecode.filePath(datecode);

// autostart server
//const server = child_process.exec('npm start', function(error, stdout, stderr) {});

var child = child_process.spawn(editor, [menuFileRelPath], {
    stdio: 'inherit'
});

child.on('exit', function (e, code) {
    let menu;
    try{
        menu = Menu.create(source(menuFileRelPath), parser);
    } catch(e) {
        console.log('No new menu', e);
        
        return;
    }

    fs.writeFileSync(menuFileRelPath + '.out', menu.parsed.text, 'utf8');

    request.post('http://localhost:64011',  { form: JSON.stringify(menu) }, function optionalCallback(err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log(body);
    });


    console.log(chalk.green("✔ sample menu "+datecode+" created"));
//    server.unref();
/*    server.stdout.on('data', function(data) {
        console.log(data.toString()); 
    });*/
});
/*
var formData = {
    // Pass a simple key-value pair
    menu: 'my_value',
    // Pass data via Buffers
    my_buffer: Buffer.from([1, 2, 3]),
    // Pass data via Streams
    my_file: fs.createReadStream(__dirname + '/sampleMenu/unicycle.jpg'),
    // Pass multiple values /w an Array
    attachments: [
      fs.createReadStream(__dirname + '/attachment1.jpg'),
      fs.createReadStream(__dirname + '/attachment2.jpg')
    ],
    // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS}
    // Use case: for some types of streams, you'll need to provide "file"-related information manually.
    // See the `form-data` README for more information about options: https://github.com/form-data/form-data
    custom_file: {
      value:  fs.createReadStream('/dev/urandom'),
      options: {
        filename: 'topsecret.jpg',
        contentType: 'image/jpeg'
      }
    }
  }; 
*/
