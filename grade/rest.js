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
var Gs2GradeRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2GradeRestClient, _super);
    function Gs2GradeRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2GradeRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'grade')
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
    Gs2GradeRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'grade')
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
            'changeGradeScript': (_h = (_g = request.getChangeGradeScript()) === null || _g === void 0 ? void 0 : _g.toDict()) !== null && _h !== void 0 ? _h : null,
            'logSetting': (_k = (_j = request.getLogSetting()) === null || _j === void 0 ? void 0 : _j.toDict()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateNamespaceResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'grade')
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
    Gs2GradeRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'grade')
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
    Gs2GradeRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'grade')
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
            'changeGradeScript': (_j = (_h = request.getChangeGradeScript()) === null || _h === void 0 ? void 0 : _h.toDict()) !== null && _j !== void 0 ? _j : null,
            'logSetting': (_l = (_k = request.getLogSetting()) === null || _k === void 0 ? void 0 : _k.toDict()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateNamespaceResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'grade')
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
    Gs2GradeRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'grade')
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
    Gs2GradeRestClient.prototype.dumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.DumpUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.checkDumpUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/dump/user/{userId}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.CheckDumpUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.cleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CleanUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.checkCleanUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/clean/user/{userId}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.CheckCleanUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.prepareImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/prepare')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.PrepareImportUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.importUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_d = request.getTimeOffsetToken()) !== null && _d !== void 0 ? _d : null;
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'uploadToken': (_f = request.getUploadToken()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ImportUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.checkImportUserDataByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/import/user/{userId}/{uploadToken}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{userId}', String((_b = request.getUserId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserId()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{uploadToken}', String((_d = request.getUploadToken()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUploadToken()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_f = request.getTimeOffsetToken()) !== null && _f !== void 0 ? _f : null;
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.CheckImportUserDataByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.describeGradeModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model')
            .replace('{service}', 'grade')
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
            return Result.DescribeGradeModelMastersResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.createGradeModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model')
            .replace('{service}', 'grade')
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
            'defaultGrades': (_j = (_h = request.getDefaultGrades()) === null || _h === void 0 ? void 0 : _h.map(function (item) { return item.toDict(); })) !== null && _j !== void 0 ? _j : null,
            'experienceModelId': (_k = request.getExperienceModelId()) !== null && _k !== void 0 ? _k : null,
            'gradeEntries': (_m = (_l = request.getGradeEntries()) === null || _l === void 0 ? void 0 : _l.map(function (item) { return item.toDict(); })) !== null && _m !== void 0 ? _m : null,
            'acquireActionRates': (_p = (_o = request.getAcquireActionRates()) === null || _o === void 0 ? void 0 : _o.map(function (item) { return item.toDict(); })) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateGradeModelMasterResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.getGradeModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{gradeName}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{gradeName}', String((_d = request.getGradeName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGradeName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetGradeModelMasterResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.updateGradeModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{gradeName}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{gradeName}', String((_d = request.getGradeName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGradeName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
            'defaultGrades': (_k = (_j = request.getDefaultGrades()) === null || _j === void 0 ? void 0 : _j.map(function (item) { return item.toDict(); })) !== null && _k !== void 0 ? _k : null,
            'experienceModelId': (_l = request.getExperienceModelId()) !== null && _l !== void 0 ? _l : null,
            'gradeEntries': (_o = (_m = request.getGradeEntries()) === null || _m === void 0 ? void 0 : _m.map(function (item) { return item.toDict(); })) !== null && _o !== void 0 ? _o : null,
            'acquireActionRates': (_q = (_p = request.getAcquireActionRates()) === null || _p === void 0 ? void 0 : _p.map(function (item) { return item.toDict(); })) !== null && _q !== void 0 ? _q : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateGradeModelMasterResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.deleteGradeModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/model/{gradeName}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{gradeName}', String((_d = request.getGradeName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGradeName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteGradeModelMasterResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.describeGradeModels = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model')
            .replace('{service}', 'grade')
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
            return Result.DescribeGradeModelsResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.getGradeModel = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/model/{gradeName}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{gradeName}', String((_d = request.getGradeName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGradeName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetGradeModelResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.describeStatuses = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/status')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_d = request.getAccessToken()) !== null && _d !== void 0 ? _d : null;
        }
        var params = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'gradeName': String((_f = request.getGradeName()) !== null && _f !== void 0 ? _f : null),
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeStatusesResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.describeStatusesByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/status')
            .replace('{service}', 'grade')
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
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'gradeName': String((_h = request.getGradeName()) !== null && _h !== void 0 ? _h : null),
            'pageToken': String((_j = request.getPageToken()) !== null && _j !== void 0 ? _j : null),
            'limit': String((_k = request.getLimit()) !== null && _k !== void 0 ? _k : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeStatusesByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.getStatus = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/status/model/{gradeName}/property/{propertyId}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{gradeName}', String((_d = request.getGradeName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGradeName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{propertyId}', String((_f = request.getPropertyId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getPropertyId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_h = request.getAccessToken()) !== null && _h !== void 0 ? _h : null;
        }
        var params = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetStatusResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.getStatusByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/status/model/{gradeName}/property/{propertyId}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{gradeName}', String((_f = request.getGradeName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGradeName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{propertyId}', String((_h = request.getPropertyId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getPropertyId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_k = request.getTimeOffsetToken()) !== null && _k !== void 0 ? _k : null;
        }
        var params = {
            'contextStack': (_l = request.getContextStack()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetStatusByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.addGradeByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/status/model/{gradeName}/property/{propertyId}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{gradeName}', String((_f = request.getGradeName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGradeName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{propertyId}', String((_h = request.getPropertyId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getPropertyId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
            'gradeValue': (_o = request.getGradeValue()) !== null && _o !== void 0 ? _o : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.AddGradeByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.subGrade = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/status/model/{gradeName}/property/{propertyId}/sub')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{gradeName}', String((_d = request.getGradeName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGradeName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{propertyId}', String((_f = request.getPropertyId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getPropertyId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_h = request.getAccessToken()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'gradeValue': (_l = request.getGradeValue()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SubGradeResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.subGradeByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/status/model/{gradeName}/property/{propertyId}/sub')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{gradeName}', String((_f = request.getGradeName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGradeName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{propertyId}', String((_h = request.getPropertyId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getPropertyId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
            'gradeValue': (_o = request.getGradeValue()) !== null && _o !== void 0 ? _o : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.SubGradeByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.setGradeByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/status/model/{gradeName}/property/{propertyId}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{gradeName}', String((_f = request.getGradeName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGradeName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{propertyId}', String((_h = request.getPropertyId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getPropertyId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
            'gradeValue': (_o = request.getGradeValue()) !== null && _o !== void 0 ? _o : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.SetGradeByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.applyRankCap = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/status/model/{gradeName}/property/{propertyId}/apply/rank/cap')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{gradeName}', String((_d = request.getGradeName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGradeName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{propertyId}', String((_f = request.getPropertyId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getPropertyId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_h = request.getAccessToken()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.ApplyRankCapResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.applyRankCapByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/status/model/{gradeName}/property/{propertyId}/apply/rank/cap')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{gradeName}', String((_f = request.getGradeName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGradeName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{propertyId}', String((_h = request.getPropertyId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getPropertyId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.ApplyRankCapByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.deleteStatusByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/status/model/{gradeName}/property/{propertyId}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{gradeName}', String((_f = request.getGradeName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGradeName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{propertyId}', String((_h = request.getPropertyId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getPropertyId()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var params = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteStatusByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.verifyGrade = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/status/{gradeName}/verify/grade/{verifyType}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{gradeName}', String((_d = request.getGradeName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGradeName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{verifyType}', String((_f = request.getVerifyType()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getVerifyType()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_h = request.getAccessToken()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'propertyId': (_l = request.getPropertyId()) !== null && _l !== void 0 ? _l : null,
            'gradeValue': (_m = request.getGradeValue()) !== null && _m !== void 0 ? _m : null,
            'multiplyValueSpecifyingQuantity': (_o = request.getMultiplyValueSpecifyingQuantity()) !== null && _o !== void 0 ? _o : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyGradeResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.verifyGradeByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/status/{gradeName}/verify/grade/{verifyType}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{gradeName}', String((_f = request.getGradeName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGradeName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{verifyType}', String((_h = request.getVerifyType()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getVerifyType()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
            'propertyId': (_o = request.getPropertyId()) !== null && _o !== void 0 ? _o : null,
            'gradeValue': (_p = request.getGradeValue()) !== null && _p !== void 0 ? _p : null,
            'multiplyValueSpecifyingQuantity': (_q = request.getMultiplyValueSpecifyingQuantity()) !== null && _q !== void 0 ? _q : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyGradeByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.verifyGradeUpMaterial = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/status/{gradeName}/verify/material/{verifyType}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{gradeName}', String((_d = request.getGradeName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getGradeName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{verifyType}', String((_f = request.getVerifyType()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getVerifyType()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getAccessToken()) {
            headers['X-GS2-ACCESS-TOKEN'] = (_h = request.getAccessToken()) !== null && _h !== void 0 ? _h : null;
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_j = request.getDuplicationAvoider()) !== null && _j !== void 0 ? _j : null;
        }
        var body = {
            'contextStack': (_k = request.getContextStack()) !== null && _k !== void 0 ? _k : null,
            'propertyId': (_l = request.getPropertyId()) !== null && _l !== void 0 ? _l : null,
            'materialPropertyId': (_m = request.getMaterialPropertyId()) !== null && _m !== void 0 ? _m : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyGradeUpMaterialResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.verifyGradeUpMaterialByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/status/{gradeName}/verify/material/{verifyType}')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{gradeName}', String((_f = request.getGradeName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGradeName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{verifyType}', String((_h = request.getVerifyType()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getVerifyType()) !== null && _j !== void 0 ? _j : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_k = request.getDuplicationAvoider()) !== null && _k !== void 0 ? _k : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_l = request.getTimeOffsetToken()) !== null && _l !== void 0 ? _l : null;
        }
        var body = {
            'contextStack': (_m = request.getContextStack()) !== null && _m !== void 0 ? _m : null,
            'propertyId': (_o = request.getPropertyId()) !== null && _o !== void 0 ? _o : null,
            'materialPropertyId': (_p = request.getMaterialPropertyId()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.VerifyGradeUpMaterialByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.addGradeByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/grade/add')
            .replace('{service}', 'grade')
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
            return Result.AddGradeByStampSheetResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.applyRankCapByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/apply/rank/cap')
            .replace('{service}', 'grade')
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
            return Result.ApplyRankCapByStampSheetResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.subGradeByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/grade/sub')
            .replace('{service}', 'grade')
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
            return Result.SubGradeByStampTaskResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.multiplyAcquireActionsByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/status/model/{gradeName}/property/{propertyId}/acquire/rate/{rateName}/multiply')
            .replace('{service}', 'grade')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{gradeName}', String((_f = request.getGradeName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGradeName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{propertyId}', String((_h = request.getPropertyId()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getPropertyId()) !== null && _j !== void 0 ? _j : 'null'))
            .replace('{rateName}', String((_k = request.getRateName()) !== null && _k !== void 0 ? _k : 'null') === "" ? "null" : String((_l = request.getRateName()) !== null && _l !== void 0 ? _l : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_m = request.getDuplicationAvoider()) !== null && _m !== void 0 ? _m : null;
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_o = request.getTimeOffsetToken()) !== null && _o !== void 0 ? _o : null;
        }
        var body = {
            'contextStack': (_p = request.getContextStack()) !== null && _p !== void 0 ? _p : null,
            'acquireActions': (_r = (_q = request.getAcquireActions()) === null || _q === void 0 ? void 0 : _q.map(function (item) { return item.toDict(); })) !== null && _r !== void 0 ? _r : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.MultiplyAcquireActionsByUserIdResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.multiplyAcquireActionsByStampSheet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/form/acquire')
            .replace('{service}', 'grade')
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
            return Result.MultiplyAcquireActionsByStampSheetResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.verifyGradeByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/grade/verify')
            .replace('{service}', 'grade')
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
            return Result.VerifyGradeByStampTaskResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.verifyGradeUpMaterialByStampTask = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stamp/material/verify')
            .replace('{service}', 'grade')
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
            return Result.VerifyGradeUpMaterialByStampTaskResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/export')
            .replace('{service}', 'grade')
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
    Gs2GradeRestClient.prototype.getCurrentGradeMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'grade')
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
            return Result.GetCurrentGradeMasterResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.preUpdateCurrentGradeMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'grade')
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
            return Result.PreUpdateCurrentGradeMasterResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.updateCurrentGradeMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'grade')
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
            return Result.UpdateCurrentGradeMasterResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.prototype.updateCurrentGradeMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2GradeRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'grade')
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
            return Result.UpdateCurrentGradeMasterFromGitHubResult.fromDict(data);
        });
    };
    Gs2GradeRestClient.ENDPOINT_HOST = null;
    return Gs2GradeRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2GradeRestClient;
//# sourceMappingURL=rest.js.map