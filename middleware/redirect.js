module.exports = function (req, res, next) {
    const host = req.headers.host
    const url = req.url
    const forceDomain = 'https://www.happimobiles.com/'
    if (host === 'happimobiles.com') {
        res.writeHead(301, { Location: forceDomain + url })
        return res.end()
    }
    //Function to change query string into JSON
    function queryStringToObject(queryString) {
        const pairs = queryString.substring(1).split('&');
        var array = pairs.map((el) => {
          const parts = el.split('=');
          return parts;
        });
        return Object.fromEntries(array);
      }
      let queryString = req._parsedUrl.search || '?utm_campaign=Happi&utm_medium=Happi&utm_source=Happi'; 
      let fnResponse = queryStringToObject(queryString);
    //   console.log(fnResponse, 'QSSS');

    if (req._parsedUrl.pathname == '/samsung-galaxy-s23-series/' ){
        let utm_campaign = fnResponse.utm_campaign || '';
        let utm_medium = fnResponse.utm_medium || '' ;
        let utm_source = fnResponse.utm_source || '';
        // console.log(utm_campaign, utm_medium, utm_source, 'UTMM');
        res.writeHead(301, { Location: `/samsung-galaxy-s23-series/Ultra/d/index.html?utm_campaign=${utm_campaign}&utm_medium=${utm_medium}&utm_source=${utm_source}`});
        return res.end();
    }
    return next()
}