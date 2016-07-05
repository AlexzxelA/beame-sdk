/**
 * Created by zenit1 on 30/06/2016.
 */

/**
 * @typedef {Object} AuthData
 * @property {String} pk => path to file
 * @property {String} x509 => path to file
 * @property {boolean} generateKeys => flag to private key generation
 * @property {boolean} makeCSR => flag to create csr
 * @property {String} devPath => path for storing keys
 * @property {String|null|undefined} CSRsubj => subject for CSR
 */


/**
 * @typedef {Object} ApiData
 * @property {String} version => api version
 * @property {Object} postData => post data to send to provision in JSON format
 * @property {String} api => api endpoint
 * @property {boolean} answerExpected => if response data expecting from provision
 */

/**
 * @constructor
 */
var Helper = function(){

    /** @const {String} */
    this.csrSubj = "C=US/ST=Florida/L=Gainesville/O=LFE.COM, Inc/OU=Development/CN=";

};

/**
 *
 * @param {String} path2Pk
 * @param {String} path2X509
 * @param {boolean} genKeys
 * @param {boolean} genScr
 * @param {String|null|undefined} [certPath]
 * @param {String|null|undefined} [hostname]
 * @returns {AuthData}
 */
Helper.prototype.getAuthToken = function(path2Pk,path2X509,genKeys,genScr,certPath,hostname){
    return {
        pk: path2Pk,
        x509: path2X509,
        generateKeys: genKeys,
        makeCSR: genScr,
        devPath: certPath,//static path for now, need to generate with uid to allow multiuser tests
        CSRsubj: this.csrSubj + hostname
    }
};


/**
 * @param {String} version
 * @param {String} endpoint
 * @param {Object} postData
 * @param {boolean} answerExpected
 * @returns {ApiData}
 */
Helper.prototype.getApiCallData = function(version,endpoint,postData,answerExpected){
    return {
        version : version,
        api: endpoint,
        postData : postData,
        answerExpected : answerExpected
    };
};


module.exports  = Helper;