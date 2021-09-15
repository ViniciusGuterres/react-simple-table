const model = require('../model/logs');
const UAParser = require('ua-parser-js');

exports.list_users_logs = async function (req, res) {

    const logs = await model.allLogs();

    const allLogsDatas = logs.data.map(log => {

        // handle with path
        const path = log.path ? log.path.trim() : ''

        // handle with agent
        const uaParser = new UAParser();
        const agent = log.agent ? log.agent.trim() : '';

        uaParser.setUA(agent);
        const uaParserResult = uaParser.getResult();

        // agent OS
        const osName = uaParserResult.os.name;
        const osVersion = uaParserResult.os.version;

        // agent browser
        const browserName = uaParserResult.browser.name;
        const browserVersion = uaParserResult.browser.version;

        // handle with date, convert to timestamp
        const dateObj = new Date(log.data);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();

        const hours = dateObj.getHours();
        const min = dateObj.getMinutes();
        const sec = dateObj.getSeconds();
        const tsDate = `${day}/${month}/${year} ${hours}:${min}:${sec}`

        const logHandled = {
            ip_address: log.ip_address ? log.ip_address.trim() : '',
            browser: `${browserName} - version ${browserVersion}`,
            operation_system: `${osName} ${osVersion}`,
            time: tsDate,
            path: path === '/' ? 'home' : path,
        };

        return logHandled;
    });


    res.json(allLogsDatas);
};

