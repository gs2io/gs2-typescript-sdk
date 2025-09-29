"use strict";
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the 'License').
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the 'license' file accompanying this file. This file is distributed
on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AbstractGs2RestClient_1 = tslib_1.__importDefault(require("../core/AbstractGs2RestClient"));
var model_1 = require("../core/model");
var Result = tslib_1.__importStar(require("./result"));
var axios_1 = tslib_1.__importDefault(require("axios"));
var Gs2LogRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2LogRestClient, _super);
    function Gs2LogRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2LogRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'pageToken': String((_c = request.getPageToken()) !== null && _c !== void 0 ? _c : null),
            'limit': String((_d = request.getLimit()) !== null && _d !== void 0 ? _d : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeNamespacesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'name': (_c = request.getName()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'type': (_e = request.getType()) !== null && _e !== void 0 ? _e : null,
            'gcpCredentialJson': (_f = request.getGcpCredentialJson()) !== null && _f !== void 0 ? _f : null,
            'bigQueryDatasetName': (_g = request.getBigQueryDatasetName()) !== null && _g !== void 0 ? _g : null,
            'logExpireDays': (_h = request.getLogExpireDays()) !== null && _h !== void 0 ? _h : null,
            'awsRegion': (_j = request.getAwsRegion()) !== null && _j !== void 0 ? _j : null,
            'awsAccessKeyId': (_k = request.getAwsAccessKeyId()) !== null && _k !== void 0 ? _k : null,
            'awsSecretAccessKey': (_l = request.getAwsSecretAccessKey()) !== null && _l !== void 0 ? _l : null,
            'firehoseStreamName': (_m = request.getFirehoseStreamName()) !== null && _m !== void 0 ? _m : null,
            'firehoseCompressData': (_o = request.getFirehoseCompressData()) !== null && _o !== void 0 ? _o : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LogRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetNamespaceStatusResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'type': (_f = request.getType()) !== null && _f !== void 0 ? _f : null,
            'gcpCredentialJson': (_g = request.getGcpCredentialJson()) !== null && _g !== void 0 ? _g : null,
            'bigQueryDatasetName': (_h = request.getBigQueryDatasetName()) !== null && _h !== void 0 ? _h : null,
            'logExpireDays': (_j = request.getLogExpireDays()) !== null && _j !== void 0 ? _j : null,
            'awsRegion': (_k = request.getAwsRegion()) !== null && _k !== void 0 ? _k : null,
            'awsAccessKeyId': (_l = request.getAwsAccessKeyId()) !== null && _l !== void 0 ? _l : null,
            'awsSecretAccessKey': (_m = request.getAwsSecretAccessKey()) !== null && _m !== void 0 ? _m : null,
            'firehoseStreamName': (_o = request.getFirehoseStreamName()) !== null && _o !== void 0 ? _o : null,
            'firehoseCompressData': (_p = request.getFirehoseCompressData()) !== null && _p !== void 0 ? _p : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LogRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/system/version')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetServiceVersionResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryAccessLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'service': String((_f = request.getService()) !== null && _f !== void 0 ? _f : null),
            'method': String((_g = request.getMethod()) !== null && _g !== void 0 ? _g : null),
            'userId': String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : null),
            'begin': String((_j = request.getBegin()) !== null && _j !== void 0 ? _j : null),
            'end': String((_k = request.getEnd()) !== null && _k !== void 0 ? _k : null),
            'longTerm': String((_l = request.getLongTerm()) !== null && _l !== void 0 ? _l : null),
            'pageToken': String((_m = request.getPageToken()) !== null && _m !== void 0 ? _m : null),
            'limit': String((_o = request.getLimit()) !== null && _o !== void 0 ? _o : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.QueryAccessLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countAccessLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'service': String((_f = request.getService()) !== null && _f !== void 0 ? _f : null),
            'method': String((_g = request.getMethod()) !== null && _g !== void 0 ? _g : null),
            'userId': String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : null),
            'begin': String((_j = request.getBegin()) !== null && _j !== void 0 ? _j : null),
            'end': String((_k = request.getEnd()) !== null && _k !== void 0 ? _k : null),
            'longTerm': String((_l = request.getLongTerm()) !== null && _l !== void 0 ? _l : null),
            'pageToken': String((_m = request.getPageToken()) !== null && _m !== void 0 ? _m : null),
            'limit': String((_o = request.getLimit()) !== null && _o !== void 0 ? _o : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CountAccessLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryIssueStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/issue/stamp/sheet')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'service': String((_f = request.getService()) !== null && _f !== void 0 ? _f : null),
            'method': String((_g = request.getMethod()) !== null && _g !== void 0 ? _g : null),
            'userId': String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : null),
            'action': String((_j = request.getAction()) !== null && _j !== void 0 ? _j : null),
            'begin': String((_k = request.getBegin()) !== null && _k !== void 0 ? _k : null),
            'end': String((_l = request.getEnd()) !== null && _l !== void 0 ? _l : null),
            'longTerm': String((_m = request.getLongTerm()) !== null && _m !== void 0 ? _m : null),
            'pageToken': String((_o = request.getPageToken()) !== null && _o !== void 0 ? _o : null),
            'limit': String((_p = request.getLimit()) !== null && _p !== void 0 ? _p : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.QueryIssueStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countIssueStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/issue/stamp/sheet/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'service': String((_f = request.getService()) !== null && _f !== void 0 ? _f : null),
            'method': String((_g = request.getMethod()) !== null && _g !== void 0 ? _g : null),
            'userId': String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : null),
            'action': String((_j = request.getAction()) !== null && _j !== void 0 ? _j : null),
            'begin': String((_k = request.getBegin()) !== null && _k !== void 0 ? _k : null),
            'end': String((_l = request.getEnd()) !== null && _l !== void 0 ? _l : null),
            'longTerm': String((_m = request.getLongTerm()) !== null && _m !== void 0 ? _m : null),
            'pageToken': String((_o = request.getPageToken()) !== null && _o !== void 0 ? _o : null),
            'limit': String((_p = request.getLimit()) !== null && _p !== void 0 ? _p : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CountIssueStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryExecuteStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/sheet')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'service': String((_f = request.getService()) !== null && _f !== void 0 ? _f : null),
            'method': String((_g = request.getMethod()) !== null && _g !== void 0 ? _g : null),
            'userId': String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : null),
            'action': String((_j = request.getAction()) !== null && _j !== void 0 ? _j : null),
            'begin': String((_k = request.getBegin()) !== null && _k !== void 0 ? _k : null),
            'end': String((_l = request.getEnd()) !== null && _l !== void 0 ? _l : null),
            'longTerm': String((_m = request.getLongTerm()) !== null && _m !== void 0 ? _m : null),
            'pageToken': String((_o = request.getPageToken()) !== null && _o !== void 0 ? _o : null),
            'limit': String((_p = request.getLimit()) !== null && _p !== void 0 ? _p : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.QueryExecuteStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countExecuteStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/sheet/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'service': String((_f = request.getService()) !== null && _f !== void 0 ? _f : null),
            'method': String((_g = request.getMethod()) !== null && _g !== void 0 ? _g : null),
            'userId': String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : null),
            'action': String((_j = request.getAction()) !== null && _j !== void 0 ? _j : null),
            'begin': String((_k = request.getBegin()) !== null && _k !== void 0 ? _k : null),
            'end': String((_l = request.getEnd()) !== null && _l !== void 0 ? _l : null),
            'longTerm': String((_m = request.getLongTerm()) !== null && _m !== void 0 ? _m : null),
            'pageToken': String((_o = request.getPageToken()) !== null && _o !== void 0 ? _o : null),
            'limit': String((_p = request.getLimit()) !== null && _p !== void 0 ? _p : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CountExecuteStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryExecuteStampTaskLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/task')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'service': String((_f = request.getService()) !== null && _f !== void 0 ? _f : null),
            'method': String((_g = request.getMethod()) !== null && _g !== void 0 ? _g : null),
            'userId': String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : null),
            'action': String((_j = request.getAction()) !== null && _j !== void 0 ? _j : null),
            'begin': String((_k = request.getBegin()) !== null && _k !== void 0 ? _k : null),
            'end': String((_l = request.getEnd()) !== null && _l !== void 0 ? _l : null),
            'longTerm': String((_m = request.getLongTerm()) !== null && _m !== void 0 ? _m : null),
            'pageToken': String((_o = request.getPageToken()) !== null && _o !== void 0 ? _o : null),
            'limit': String((_p = request.getLimit()) !== null && _p !== void 0 ? _p : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.QueryExecuteStampTaskLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countExecuteStampTaskLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/task/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'service': String((_f = request.getService()) !== null && _f !== void 0 ? _f : null),
            'method': String((_g = request.getMethod()) !== null && _g !== void 0 ? _g : null),
            'userId': String((_h = request.getUserId()) !== null && _h !== void 0 ? _h : null),
            'action': String((_j = request.getAction()) !== null && _j !== void 0 ? _j : null),
            'begin': String((_k = request.getBegin()) !== null && _k !== void 0 ? _k : null),
            'end': String((_l = request.getEnd()) !== null && _l !== void 0 ? _l : null),
            'longTerm': String((_m = request.getLongTerm()) !== null && _m !== void 0 ? _m : null),
            'pageToken': String((_o = request.getPageToken()) !== null && _o !== void 0 ? _o : null),
            'limit': String((_p = request.getLimit()) !== null && _p !== void 0 ? _p : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CountExecuteStampTaskLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryInGameLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/ingame/log')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_d = request.getDuplicationAvoider()) !== null && _d !== void 0 ? _d : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_e = request.getTimeOffsetToken()) !== null && _e !== void 0 ? _e : null;
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'userId': (_g = request.getUserId()) !== null && _g !== void 0 ? _g : null,
            'tags': (_j = (_h = request.getTags()) === null || _h === void 0 ? void 0 : _h.map(function (item) { return item.toDict(); })) !== null && _j !== void 0 ? _j : null,
            'begin': (_k = request.getBegin()) !== null && _k !== void 0 ? _k : null,
            'end': (_l = request.getEnd()) !== null && _l !== void 0 ? _l : null,
            'longTerm': (_m = request.getLongTerm()) !== null && _m !== void 0 ? _m : null,
            'pageToken': (_o = request.getPageToken()) !== null && _o !== void 0 ? _o : null,
            'limit': (_p = request.getLimit()) !== null && _p !== void 0 ? _p : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.QueryInGameLogResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LogRestClient.prototype.sendInGameLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/ingame/log/user/me/send')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_d = request.getAccessToken()) !== null && _d !== void 0 ? _d : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_e = request.getDuplicationAvoider()) !== null && _e !== void 0 ? _e : null;
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'tags': (_h = (_g = request.getTags()) === null || _g === void 0 ? void 0 : _g.map(function (item) { return item.toDict(); })) !== null && _h !== void 0 ? _h : null,
            'payload': (_j = request.getPayload()) !== null && _j !== void 0 ? _j : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SendInGameLogResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LogRestClient.prototype.sendInGameLogByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/ingame/log/user/{userId}/send')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_f = request.getDuplicationAvoider()) !== null && _f !== void 0 ? _f : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_g = request.getTimeOffsetToken()) !== null && _g !== void 0 ? _g : null;
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'tags': (_k = (_j = request.getTags()) === null || _j === void 0 ? void 0 : _j.map(function (item) { return item.toDict(); })) !== null && _k !== void 0 ? _k : null,
            'payload': (_l = request.getPayload()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SendInGameLogByUserIdResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LogRestClient.prototype.queryAccessLogWithTelemetry = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access/telemetry')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'userId': String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : null),
            'begin': String((_g = request.getBegin()) !== null && _g !== void 0 ? _g : null),
            'end': String((_h = request.getEnd()) !== null && _h !== void 0 ? _h : null),
            'longTerm': String((_j = request.getLongTerm()) !== null && _j !== void 0 ? _j : null),
            'pageToken': String((_k = request.getPageToken()) !== null && _k !== void 0 ? _k : null),
            'limit': String((_l = request.getLimit()) !== null && _l !== void 0 ? _l : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.QueryAccessLogWithTelemetryResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.describeInsights = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/insight')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'pageToken': String((_e = request.getPageToken()) !== null && _e !== void 0 ? _e : null),
            'limit': String((_f = request.getLimit()) !== null && _f !== void 0 ? _f : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeInsightsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.createInsight = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/insight')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateInsightResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2LogRestClient.prototype.getInsight = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/insight/{insightName}')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{insightName}', String((_d = request.getInsightName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getInsightName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetInsightResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.deleteInsight = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2LogRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/insight/{insightName}')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{insightName}', String((_d = request.getInsightName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getInsightName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteInsightResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.ENDPOINT_HOST = null;
    return Gs2LogRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2LogRestClient;
//# sourceMappingURL=rest.js.map