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
import { __extends } from "tslib";
import AbstractGs2RestClient from '../core/AbstractGs2RestClient';
import { Gs2Constant } from '../core/model';
import * as Result from './result';
import axios from 'axios';
var Gs2LogRestClient = /** @class */ (function (_super) {
    __extends(Gs2LogRestClient, _super);
    function Gs2LogRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2LogRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c;
        var url = (Gs2Constant.ENDPOINT_HOST + '/')
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
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeNamespacesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (Gs2Constant.ENDPOINT_HOST + '/')
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
        };
        return axios.post(url, body, {
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
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/status')
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
        return axios.get(url, {
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
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
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
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
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
        };
        return axios.put(url, body, {
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
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}')
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
        return axios.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteNamespaceResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryAccessLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'service': String((_d = request.getService()) !== null && _d !== void 0 ? _d : null),
            'method': String((_e = request.getMethod()) !== null && _e !== void 0 ? _e : null),
            'userId': String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : null),
            'begin': String((_g = request.getBegin()) !== null && _g !== void 0 ? _g : null),
            'end': String((_h = request.getEnd()) !== null && _h !== void 0 ? _h : null),
            'longTerm': String((_j = request.getLongTerm()) !== null && _j !== void 0 ? _j : null),
            'pageToken': String((_k = request.getPageToken()) !== null && _k !== void 0 ? _k : null),
            'limit': String((_l = request.getLimit()) !== null && _l !== void 0 ? _l : null),
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.QueryAccessLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countAccessLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/access/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'service': String((_d = request.getService()) !== null && _d !== void 0 ? _d : null),
            'method': String((_e = request.getMethod()) !== null && _e !== void 0 ? _e : null),
            'userId': String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : null),
            'begin': String((_g = request.getBegin()) !== null && _g !== void 0 ? _g : null),
            'end': String((_h = request.getEnd()) !== null && _h !== void 0 ? _h : null),
            'longTerm': String((_j = request.getLongTerm()) !== null && _j !== void 0 ? _j : null),
            'pageToken': String((_k = request.getPageToken()) !== null && _k !== void 0 ? _k : null),
            'limit': String((_l = request.getLimit()) !== null && _l !== void 0 ? _l : null),
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CountAccessLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryIssueStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/issue/stamp/sheet')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'service': String((_d = request.getService()) !== null && _d !== void 0 ? _d : null),
            'method': String((_e = request.getMethod()) !== null && _e !== void 0 ? _e : null),
            'userId': String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : null),
            'action': String((_g = request.getAction()) !== null && _g !== void 0 ? _g : null),
            'begin': String((_h = request.getBegin()) !== null && _h !== void 0 ? _h : null),
            'end': String((_j = request.getEnd()) !== null && _j !== void 0 ? _j : null),
            'longTerm': String((_k = request.getLongTerm()) !== null && _k !== void 0 ? _k : null),
            'pageToken': String((_l = request.getPageToken()) !== null && _l !== void 0 ? _l : null),
            'limit': String((_m = request.getLimit()) !== null && _m !== void 0 ? _m : null),
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.QueryIssueStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countIssueStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/issue/stamp/sheet/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'service': String((_d = request.getService()) !== null && _d !== void 0 ? _d : null),
            'method': String((_e = request.getMethod()) !== null && _e !== void 0 ? _e : null),
            'userId': String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : null),
            'action': String((_g = request.getAction()) !== null && _g !== void 0 ? _g : null),
            'begin': String((_h = request.getBegin()) !== null && _h !== void 0 ? _h : null),
            'end': String((_j = request.getEnd()) !== null && _j !== void 0 ? _j : null),
            'longTerm': String((_k = request.getLongTerm()) !== null && _k !== void 0 ? _k : null),
            'pageToken': String((_l = request.getPageToken()) !== null && _l !== void 0 ? _l : null),
            'limit': String((_m = request.getLimit()) !== null && _m !== void 0 ? _m : null),
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CountIssueStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryExecuteStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/sheet')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'service': String((_d = request.getService()) !== null && _d !== void 0 ? _d : null),
            'method': String((_e = request.getMethod()) !== null && _e !== void 0 ? _e : null),
            'userId': String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : null),
            'action': String((_g = request.getAction()) !== null && _g !== void 0 ? _g : null),
            'begin': String((_h = request.getBegin()) !== null && _h !== void 0 ? _h : null),
            'end': String((_j = request.getEnd()) !== null && _j !== void 0 ? _j : null),
            'longTerm': String((_k = request.getLongTerm()) !== null && _k !== void 0 ? _k : null),
            'pageToken': String((_l = request.getPageToken()) !== null && _l !== void 0 ? _l : null),
            'limit': String((_m = request.getLimit()) !== null && _m !== void 0 ? _m : null),
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.QueryExecuteStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countExecuteStampSheetLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/sheet/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'service': String((_d = request.getService()) !== null && _d !== void 0 ? _d : null),
            'method': String((_e = request.getMethod()) !== null && _e !== void 0 ? _e : null),
            'userId': String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : null),
            'action': String((_g = request.getAction()) !== null && _g !== void 0 ? _g : null),
            'begin': String((_h = request.getBegin()) !== null && _h !== void 0 ? _h : null),
            'end': String((_j = request.getEnd()) !== null && _j !== void 0 ? _j : null),
            'longTerm': String((_k = request.getLongTerm()) !== null && _k !== void 0 ? _k : null),
            'pageToken': String((_l = request.getPageToken()) !== null && _l !== void 0 ? _l : null),
            'limit': String((_m = request.getLimit()) !== null && _m !== void 0 ? _m : null),
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CountExecuteStampSheetLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.queryExecuteStampTaskLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/task')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'service': String((_d = request.getService()) !== null && _d !== void 0 ? _d : null),
            'method': String((_e = request.getMethod()) !== null && _e !== void 0 ? _e : null),
            'userId': String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : null),
            'action': String((_g = request.getAction()) !== null && _g !== void 0 ? _g : null),
            'begin': String((_h = request.getBegin()) !== null && _h !== void 0 ? _h : null),
            'end': String((_j = request.getEnd()) !== null && _j !== void 0 ? _j : null),
            'longTerm': String((_k = request.getLongTerm()) !== null && _k !== void 0 ? _k : null),
            'pageToken': String((_l = request.getPageToken()) !== null && _l !== void 0 ? _l : null),
            'limit': String((_m = request.getLimit()) !== null && _m !== void 0 ? _m : null),
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.QueryExecuteStampTaskLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.countExecuteStampTaskLog = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (Gs2Constant.ENDPOINT_HOST + '/{namespaceName}/log/execute/stamp/task/count')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_a = request.getNamespaceName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'service': String((_d = request.getService()) !== null && _d !== void 0 ? _d : null),
            'method': String((_e = request.getMethod()) !== null && _e !== void 0 ? _e : null),
            'userId': String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : null),
            'action': String((_g = request.getAction()) !== null && _g !== void 0 ? _g : null),
            'begin': String((_h = request.getBegin()) !== null && _h !== void 0 ? _h : null),
            'end': String((_j = request.getEnd()) !== null && _j !== void 0 ? _j : null),
            'longTerm': String((_k = request.getLongTerm()) !== null && _k !== void 0 ? _k : null),
            'pageToken': String((_l = request.getPageToken()) !== null && _l !== void 0 ? _l : null),
            'limit': String((_m = request.getLimit()) !== null && _m !== void 0 ? _m : null),
        };
        return axios.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.CountExecuteStampTaskLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2LogRestClient.prototype.putLog = function (request) {
        var _a, _b, _c, _d;
        var url = (Gs2Constant.ENDPOINT_HOST + '/log/put')
            .replace('{service}', 'log')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'loggingNamespaceId': (_b = request.getLoggingNamespaceId()) !== null && _b !== void 0 ? _b : null,
            'logCategory': (_c = request.getLogCategory()) !== null && _c !== void 0 ? _c : null,
            'payload': (_d = request.getPayload()) !== null && _d !== void 0 ? _d : null,
        };
        return axios.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PutLogResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    return Gs2LogRestClient;
}(AbstractGs2RestClient));
export default Gs2LogRestClient;
//# sourceMappingURL=rest.js.map