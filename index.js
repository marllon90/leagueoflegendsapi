var https = require('https');
var fs = require('fs');

function writeFile(data, file) {
        fs.unlink(file, function(err, stats) {
            if (err){
                fs.writeFile(file, data, function (err) {
                    if (err) throw err;
                    console.log('Salvo em '+file);
                });
            }else{
                fs.writeFile(file, data, function (err) {
                    if (err) throw err;
                    console.log('Salvo em '+file);
                });
            }
        });
}

function createObjectFromFile(file, charset) {
    var obj;

    fs.readFile
}

function requestRiotAPI(options, file) {
    var result;
    this.file = file;
    https.request(options, function (res) {

        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            if (res.statusCode===200){
                writeFile(chunk, file);
            }else{
                console.log(res.statusCode);
            }
        });
    }).end();
    return file;
}

function testWriteFiles(data, file) {
    writeFile(data, file);
}
module.exports = {

    getAllChampions: function (region, key, file) {
        var riotData;
        this.region = region;
        this.key = key;
        this.file = file;
        var options = {
            host: region + '.api.pvp.net',
            port: 443,
            path: '/api/lol/' + region + '/v1.2/champion?api_key=' + key,
            method: 'GET'
        };
        riotData = requestRiotAPI(options, file);
        return riotData;
    },

    getChampionByID: function (region, key, id, file) {
        var riotData;
        this.region = region;
        this.key = key;
        this.file = file;
        this.id = id;
        var options = {
            host: region + '.api.pvp.net',
            port: 443,
            path: '/api/lol/' + region + '/v1.2/champion/'+id+'?api_key=' + key,
            method: 'GET'
        };
        riotData = requestRiotAPI(options, file +'_'+id+'.json');
        return riotData;
    },

    testWriteFile: function (data, file) {
        testWriteFiles(data, file);
        //return true;
    }
};