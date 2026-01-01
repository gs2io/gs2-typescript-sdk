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
var Gs2DistributorRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2DistributorRestClient, _super);
    function Gs2DistributorRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2DistributorRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'namePrefix': String((_c = request.getNamePrefix()) !== null && _c !== void 0 ? _c : null),
            'pageToken': String((_d = request.getPageToken()) !== null && _d !== void 0 ? _d : null),
            'limit': String((_e = request.getLimit()) !== null && _e !== void 0 ? _e : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeNamespacesResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'name': (_c = request.getName()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'transactionSetting': (_f = (_e = request.getTransactionSetting()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
            'assumeUserId': (_g = request.getAssumeUserId()) !== null && _g !== void 0 ? _g : null,
            'autoRunStampSheetNotification': (_j = (_h = request.getAutoRunStampSheetNotification()) === null || _h === void 0 ? void 0 : _h.toDict()) !== null && _j !== void 0 ? _j : null,
            'autoRunTransactionNotification': (_l = (_k = request.getAutoRunTransactionNotification()) === null || _k === void 0 ? void 0 : _k.toDict()) !== null && _l !== void 0 ? _l : null,
            'logSetting': (_o = (_m = request.getLogSetting()) === null || _m === void 0 ? void 0 : _m.toDict()) !== null && _o !== void 0 ? _o : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateNamespaceResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetNamespaceStatusResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetNamespaceResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'transactionSetting': (_g = (_f = request.getTransactionSetting()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
            'assumeUserId': (_h = request.getAssumeUserId()) !== null && _h !== void 0 ? _h : null,
            'autoRunStampSheetNotification': (_k = (_j = request.getAutoRunStampSheetNotification()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
            'autoRunTransactionNotification': (_m = (_l = request.getAutoRunTransactionNotification()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'logSetting': (_p = (_o = request.getLogSetting()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateNamespaceResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteNamespaceResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetServiceVersionResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.describeDistributorModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/distributor')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'namePrefix': String((_e = request.getNamePrefix()) !== null && _e !== void 0 ? _e : null),
            'pageToken': String((_f = request.getPageToken()) !== null && _f !== void 0 ? _f : null),
            'limit': String((_g = request.getLimit()) !== null && _g !== void 0 ? _g : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeDistributorModelMastersResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.createDistributorModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/distributor')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'name': (_e = request.getName()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'metadata': (_g = request.getMetadata()) !== null && _g !== void 0 ? _g : null,
            'inboxNamespaceId': (_h = request.getInboxNamespaceId()) !== null && _h !== void 0 ? _h : null,
            'whiteListTargetIds': (_j = request.getWhiteListTargetIds()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateDistributorModelMasterResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.getDistributorModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/distributor/{distributorName}')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{distributorName}', String((_d = request.getDistributorName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getDistributorName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetDistributorModelMasterResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.updateDistributorModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/distributor/{distributorName}')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{distributorName}', String((_d = request.getDistributorName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getDistributorName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
            'inboxNamespaceId': (_j = request.getInboxNamespaceId()) !== null && _j !== void 0 ? _j : null,
            'whiteListTargetIds': (_k = request.getWhiteListTargetIds()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateDistributorModelMasterResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.deleteDistributorModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/distributor/{distributorName}')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{distributorName}', String((_d = request.getDistributorName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getDistributorName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteDistributorModelMasterResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.describeDistributorModels = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/distributor')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeDistributorModelsResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.getDistributorModel = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/distributor/{distributorName}')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{distributorName}', String((_d = request.getDistributorName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getDistributorName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetDistributorModelResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/export')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.ExportMasterResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.getCurrentDistributorMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetCurrentDistributorMasterResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.preUpdateCurrentDistributorMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.PreUpdateCurrentDistributorMasterResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.updateCurrentDistributorMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'mode': (_e = request.getMode()) !== null && _e !== void 0 ? _e : null,
            'settings': (_f = request.getSettings()) !== null && _f !== void 0 ? _f : null,
            'uploadToken': (_g = request.getUploadToken()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateCurrentDistributorMasterResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.updateCurrentDistributorMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'checkoutSetting': (_f = (_e = request.getCheckoutSetting()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateCurrentDistributorMasterFromGitHubResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.distribute = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/distribute/{distributorName}')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{distributorName}', String((_d = request.getDistributorName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getDistributorName()) !== null && _e !== void 0 ? _e : 'null'));
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
            'userId': (_j = request.getUserId()) !== null && _j !== void 0 ? _j : null,
            'distributeResource': (_l = (_k = request.getDistributeResource()) === null || _k === void 0 ? void 0 : _k.toDict()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DistributeResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.distributeWithoutOverflowProcess = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/distribute')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_b = request.getDuplicationAvoider()) !== null && _b !== void 0 ? _b : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_c = request.getTimeOffsetToken()) !== null && _c !== void 0 ? _c : null;
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'userId': (_e = request.getUserId()) !== null && _e !== void 0 ? _e : null,
            'distributeResource': (_g = (_f = request.getDistributeResource()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DistributeWithoutOverflowProcessResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.runVerifyTask = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/distribute/stamp/verifyTask/run')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'verifyTask': (_e = request.getVerifyTask()) !== null && _e !== void 0 ? _e : null,
            'keyId': (_f = request.getKeyId()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RunVerifyTaskResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.runStampTask = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/distribute/stamp/task/run')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'stampTask': (_e = request.getStampTask()) !== null && _e !== void 0 ? _e : null,
            'keyId': (_f = request.getKeyId()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RunStampTaskResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.runStampSheet = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/distribute/stamp/sheet/run')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'stampSheet': (_e = request.getStampSheet()) !== null && _e !== void 0 ? _e : null,
            'keyId': (_f = request.getKeyId()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RunStampSheetResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.runStampSheetExpress = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/distribute/stamp/run')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'stampSheet': (_e = request.getStampSheet()) !== null && _e !== void 0 ? _e : null,
            'keyId': (_f = request.getKeyId()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RunStampSheetExpressResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.runVerifyTaskWithoutNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/verifyTask/run')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'verifyTask': (_c = request.getVerifyTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RunVerifyTaskWithoutNamespaceResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.runStampTaskWithoutNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/task/run')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampTask': (_c = request.getStampTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RunStampTaskWithoutNamespaceResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.runStampSheetWithoutNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/sheet/run')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampSheet': (_c = request.getStampSheet()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RunStampSheetWithoutNamespaceResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.runStampSheetExpressWithoutNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/run')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampSheet': (_c = request.getStampSheet()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RunStampSheetExpressWithoutNamespaceResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.setTransactionDefaultConfig = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/transaction/user/me/config')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_b = request.getAccessToken()) !== null && _b !== void 0 ? _b : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_c = request.getDuplicationAvoider()) !== null && _c !== void 0 ? _c : null;
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'config': (_f = (_e = request.getConfig()) === null || _e === void 0 ? void 0 : _e.map(function (item) { return item.toDict(); })) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SetTransactionDefaultConfigResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.setTransactionDefaultConfigByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/transaction/user/{userId}/config')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
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
            'config': (_h = (_g = request.getConfig()) === null || _g === void 0 ? void 0 : _g.map(function (item) { return item.toDict(); })) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SetTransactionDefaultConfigByUserIdResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.freezeMasterData = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/masterdata/freeze')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_d = request.getAccessToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.FreezeMasterDataResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.freezeMasterDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/masterdata/freeze')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_f = request.getTimeOffsetToken()) !== null && _f !== void 0 ? _f : null;
        }
        var body = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.FreezeMasterDataByUserIdResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.signFreezeMasterDataTimestamp = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/masterdata/freeze/timestamp')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'timestamp': (_e = request.getTimestamp()) !== null && _e !== void 0 ? _e : null,
            'keyId': (_f = request.getKeyId()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SignFreezeMasterDataTimestampResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.freezeMasterDataBySignedTimestamp = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/masterdata/freeze/timestamp')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_d = request.getAccessToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'body': (_f = request.getBody()) !== null && _f !== void 0 ? _f : null,
            'signature': (_g = request.getSignature()) !== null && _g !== void 0 ? _g : null,
            'keyId': (_h = request.getKeyId()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.FreezeMasterDataBySignedTimestampResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.freezeMasterDataByTimestamp = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/masterdata/freeze/timestamp/raw')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_d = request.getAccessToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'timestamp': (_f = request.getTimestamp()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.FreezeMasterDataByTimestampResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.batchExecuteApi = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/batch/execute')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'requestPayloads': (_d = (_c = request.getRequestPayloads()) === null || _c === void 0 ? void 0 : _c.map(function (item) { return item.toDict(); })) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.BatchExecuteApiResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.ifExpressionByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/expression/if')
            .replace('{service}', 'distributor')
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
            'condition': (_j = (_h = request.getCondition()) === null || _h === void 0 ? void 0 : _h.toDict()) !== null && _j !== void 0 ? _j : null,
            'trueActions': (_l = (_k = request.getTrueActions()) === null || _k === void 0 ? void 0 : _k.map(function (item) { return item.toDict(); })) !== null && _l !== void 0 ? _l : null,
            'falseActions': (_o = (_m = request.getFalseActions()) === null || _m === void 0 ? void 0 : _m.map(function (item) { return item.toDict(); })) !== null && _o !== void 0 ? _o : null,
            'multiplyValueSpecifyingQuantity': (_p = request.getMultiplyValueSpecifyingQuantity()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.IfExpressionByUserIdResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.andExpressionByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/expression/and')
            .replace('{service}', 'distributor')
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
            'actions': (_j = (_h = request.getActions()) === null || _h === void 0 ? void 0 : _h.map(function (item) { return item.toDict(); })) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.AndExpressionByUserIdResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.orExpressionByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/expression/or')
            .replace('{service}', 'distributor')
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
            'actions': (_j = (_h = request.getActions()) === null || _h === void 0 ? void 0 : _h.map(function (item) { return item.toDict(); })) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.OrExpressionByUserIdResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.ifExpressionByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/expression/if')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampTask': (_c = request.getStampTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.IfExpressionByStampTaskResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.andExpressionByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/expression/and')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampTask': (_c = request.getStampTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.AndExpressionByStampTaskResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.orExpressionByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/expression/or')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'stampTask': (_c = request.getStampTask()) !== null && _c !== void 0 ? _c : null,
            'keyId': (_d = request.getKeyId()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.OrExpressionByStampTaskResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.getStampSheetResult = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/stampSheet/{transactionId}/result')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{transactionId}', String((_d = request.getTransactionId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTransactionId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetStampSheetResultResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.getStampSheetResultByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/stampSheet/{transactionId}/result')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{transactionId}', String((_f = request.getTransactionId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTransactionId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetStampSheetResultByUserIdResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.runTransaction = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/{ownerId}/{namespaceName}/user/{userId}/transaction/run')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{ownerId}', String((_b = request.getOwnerId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getOwnerId()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{namespaceName}', String((_d = request.getNamespaceName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getNamespaceName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userId}', String((_f = request.getUserId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_j = request.getTimeOffsetToken()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'transaction': (_l = request.getTransaction()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.RunTransactionResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.getTransactionResult = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/transaction/{transactionId}/result')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{transactionId}', String((_d = request.getTransactionId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTransactionId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_f = request.getAccessToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetTransactionResultResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.prototype.getTransactionResultByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2DistributorRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/transaction/{transactionId}/result')
            .replace('{service}', 'distributor')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{transactionId}', String((_f = request.getTransactionId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getTransactionId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_h = request.getTimeOffsetToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetTransactionResultByUserIdResult.fromDict(data);
        });
    };
    Gs2DistributorRestClient.ENDPOINT_HOST = null;
    return Gs2DistributorRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2DistributorRestClient;
//# sourceMappingURL=rest.js.map