const testService = require('./../../services/test');
/**
* @namespace test Route   
*/
const testRoutes = {
    /**
   * Return all test
   * @function async
   * @return {object} test json
   */
    get: async (req, res) => {
        const data = await testService.getTest();
        res.json(data);
    },
    /**
   * create test
   * @function async
   * @param {object} test
   * @return {object} test json
   */
    post: async (req, res) => {
        
        const args = {
            simpleDto: {
                Age: req.body.age,
                Name: req.body.name,
                Salary: req.body.salary,
                birthDate: req.body.birthDate
          }
        }

        const data = await testService.postTest(args);        
        res.json(data);
    },
    put: () => {

    },
    delete: () => {

    }
}

module.exports = testRoutes;


// async function getServiceAndresAsync() {
//     var promise = soap.createClientAsync(urlServiceAndres).then((client) => {
//         return client.GetListSimpleDtoAsync(/args/)
//     })

//     promise.then(result => {
//         console.log(result);
//         console.log(result[0].GetListSimpleDtoResult);
//     })
// }