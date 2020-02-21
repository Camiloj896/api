const config = require('./../../config');
const soap = require('soap');


const testService = {
  /**
   * Return all test
   * 
   * Convert test Soap to Json value
   * @return {object} test json
   */
    getTest: () => {
        return new Promise ((resolve, reject) => {
            soap.createClient(config.urlService, (err, client) => {
              client.GetListSimpleDto( (err, result) => {
                const response = result.GetListSimpleDtoResult.SimpleDto;
                return resolve(response)
              })
            });
        });
    },
  /**
   * Create test
   * @param {object} test 
   * @return {object} test json
   */
    postTest: (args) => {
      return new Promise ((resolve, reject) => {
        soap.createClient(config.urlService, (err, client) => {
          client.GetComplexDto(args, (err, result) => {
            const response = result;
            return resolve(response)
          })
        });
    });
    }
}

module.exports = testService;