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
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'pageToken': String((_b = request.getPageToken()) !== null && _b !== void 0 ? _b : null),
            'limit': String((_c = request.getLimit()) !== null && _c !== void 0 ? _c : null),
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'name': (_b = request.getName()) !== null && _b !== void 0 ? _b : null,
            'description': (_c = request.getDescription()) !== null && _c !== void 0 ? _c : null,
            'type': (_d = request.getType()) !== null && _d !== void 0 ? _d : null,
            'gcpCredentialJson': (_e = request.getGcpCredentialJson()) !== null && _e !== void 0 ? _e : null,
            'bigQueryDatasetName': (_f = request.getBigQueryDatasetName()) !== null && _f !== void 0 ? _f : null,
            'logExpireDays': (_g = request.getLogExpireDays()) !== null && _g !== void 0 ? _g : null,
            'awsRegion': (_h = request.getAwsRegion()) !== null && _h !== void 0 ? _h : null,
            'awsAccessKeyId': (_j = request.getAwsAccessKeyId()) !== null && _j !== void 0 ? _j : null,
            'awsSecretAccessKey': (_k = request.getAwsSecretAccessKey()) !== null && _k !== void 0 ? _k : null,
            'firehoseStreamName': (_l = request.getFirehoseStreamName()) !== null && _l !== void 0 ? _l : null,
            'firehoseCompressData': (_m = request.getFirehoseCompressData()) !== null && _m !== void 0 ? _m : null,
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
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
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
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
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
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
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
        var _a;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/version')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'service': String((_e = request.getService()) !== null && _e !== void 0 ? _e : null),
            'method': String((_f = request.getMethod()) !== null && _f !== void 0 ? _f : null),
            'userId': String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : null),
            'begin': String((_h = request.getBegin()) !== null && _h !== void 0 ? _h : null),
            'end': String((_j = request.getEnd()) !== null && _j !== void 0 ? _j : null),
            'longTerm': String((_k = request.getLongTerm()) !== null && _k !== void 0 ? _k : null),
            'pageToken': String((_l = request.getPageToken()) !== null && _l !== void 0 ? _l : null),
            'limit': String((_m = request.getLimit()) !== null && _m !== void 0 ? _m : null),
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'service': String((_e = request.getService()) !== null && _e !== void 0 ? _e : null),
            'method': String((_f = request.getMethod()) !== null && _f !== void 0 ? _f : null),
            'userId': String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : null),
            'begin': String((_h = request.getBegin()) !== null && _h !== void 0 ? _h : null),
            'end': String((_j = request.getEnd()) !== null && _j !== void 0 ? _j : null),
            'longTerm': String((_k = request.getLongTerm()) !== null && _k !== void 0 ? _k : null),
            'pageToken': String((_l = request.getPageToken()) !== null && _l !== void 0 ? _l : null),
            'limit': String((_m = request.getLimit()) !== null && _m !== void 0 ? _m : null),
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/issue/stamp/sheet')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'service': String((_e = request.getService()) !== null && _e !== void 0 ? _e : null),
            'method': String((_f = request.getMethod()) !== null && _f !== void 0 ? _f : null),
            'userId': String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : null),
            'action': String((_h = request.getAction()) !== null && _h !== void 0 ? _h : null),
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
            return Result.QueryIssueStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countIssueStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/issue/stamp/sheet/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'service': String((_e = request.getService()) !== null && _e !== void 0 ? _e : null),
            'method': String((_f = request.getMethod()) !== null && _f !== void 0 ? _f : null),
            'userId': String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : null),
            'action': String((_h = request.getAction()) !== null && _h !== void 0 ? _h : null),
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
            return Result.CountIssueStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryExecuteStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/sheet')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'service': String((_e = request.getService()) !== null && _e !== void 0 ? _e : null),
            'method': String((_f = request.getMethod()) !== null && _f !== void 0 ? _f : null),
            'userId': String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : null),
            'action': String((_h = request.getAction()) !== null && _h !== void 0 ? _h : null),
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
            return Result.QueryExecuteStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countExecuteStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/sheet/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'service': String((_e = request.getService()) !== null && _e !== void 0 ? _e : null),
            'method': String((_f = request.getMethod()) !== null && _f !== void 0 ? _f : null),
            'userId': String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : null),
            'action': String((_h = request.getAction()) !== null && _h !== void 0 ? _h : null),
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
            return Result.CountExecuteStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryExecuteStampTaskLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/task')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'service': String((_e = request.getService()) !== null && _e !== void 0 ? _e : null),
            'method': String((_f = request.getMethod()) !== null && _f !== void 0 ? _f : null),
            'userId': String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : null),
            'action': String((_h = request.getAction()) !== null && _h !== void 0 ? _h : null),
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
            return Result.QueryExecuteStampTaskLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countExecuteStampTaskLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/task/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'service': String((_e = request.getService()) !== null && _e !== void 0 ? _e : null),
            'method': String((_f = request.getMethod()) !== null && _f !== void 0 ? _f : null),
            'userId': String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : null),
            'action': String((_h = request.getAction()) !== null && _h !== void 0 ? _h : null),
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
            return Result.CountExecuteStampTaskLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryInGameLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/ingame/log')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_c = request.getDuplicationAvoider()) !== null && _c !== void 0 ? _c : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'userId': (_f = request.getUserId()) !== null && _f !== void 0 ? _f : null,
            'tags': (_h = (_g = request.getTags()) === null || _g === void 0 ? void 0 : _g.map(function (item) { return item.toDict(); })) !== null && _h !== void 0 ? _h : null,
            'begin': (_j = request.getBegin()) !== null && _j !== void 0 ? _j : null,
            'end': (_k = request.getEnd()) !== null && _k !== void 0 ? _k : null,
            'longTerm': (_l = request.getLongTerm()) !== null && _l !== void 0 ? _l : null,
            'pageToken': (_m = request.getPageToken()) !== null && _m !== void 0 ? _m : null,
            'limit': (_o = request.getLimit()) !== null && _o !== void 0 ? _o : null,
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/ingame/log/user/me/send')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_c = request.getAccessToken()) !== null && _c !== void 0 ? _c : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_d = request.getDuplicationAvoider()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'tags': (_g = (_f = request.getTags()) === null || _f === void 0 ? void 0 : _f.map(function (item) { return item.toDict(); })) !== null && _g !== void 0 ? _g : null,
            'payload': (_h = request.getPayload()) !== null && _h !== void 0 ? _h : null,
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/ingame/log/user/{userId}/send')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{userId}', String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_e = request.getDuplicationAvoider()) !== null && _e !== void 0 ? _e : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_f = request.getTimeOffsetToken()) !== null && _f !== void 0 ? _f : null;
        }
        var body = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'tags': (_j = (_h = request.getTags()) === null || _h === void 0 ? void 0 : _h.map(function (item) { return item.toDict(); })) !== null && _j !== void 0 ? _j : null,
            'payload': (_k = request.getPayload()) !== null && _k !== void 0 ? _k : null,
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access/telemetry')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'userId': String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : null),
            'begin': String((_f = request.getBegin()) !== null && _f !== void 0 ? _f : null),
            'end': String((_g = request.getEnd()) !== null && _g !== void 0 ? _g : null),
            'longTerm': String((_h = request.getLongTerm()) !== null && _h !== void 0 ? _h : null),
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
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
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/insight')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'pageToken': String((_d = request.getPageToken()) !== null && _d !== void 0 ? _d : null),
            'limit': String((_e = request.getLimit()) !== null && _e !== void 0 ? _e : null),
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
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/insight')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
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
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/insight/{insightName}')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{insightName}', String((_c = request.getInsightName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInsightName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
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
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/insight/{insightName}')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{insightName}', String((_c = request.getInsightName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getInsightName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
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
    return Gs2LogRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2LogRestClient;
//# sourceMappingURL=rest.js.map