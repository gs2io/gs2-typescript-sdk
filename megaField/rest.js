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
var Gs2MegaFieldRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2MegaFieldRestClient, _super);
    function Gs2MegaFieldRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2MegaFieldRestClient.prototype.describeNamespaces = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'mega-field')
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
    Gs2MegaFieldRestClient.prototype.createNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'name': (_c = request.getName()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'logSetting': (_f = (_e = request.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateNamespaceResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.getNamespaceStatus = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/status')
            .replace('{service}', 'mega-field')
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
    Gs2MegaFieldRestClient.prototype.getNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'mega-field')
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
    Gs2MegaFieldRestClient.prototype.updateNamespace = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'logSetting': (_g = (_f = request.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateNamespaceResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.deleteNamespace = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}')
            .replace('{service}', 'mega-field')
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
    Gs2MegaFieldRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'mega-field')
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
    Gs2MegaFieldRestClient.prototype.describeAreaModels = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area')
            .replace('{service}', 'mega-field')
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
            return Result.DescribeAreaModelsResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.getAreaModel = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area/{areaModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetAreaModelResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.describeAreaModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area')
            .replace('{service}', 'mega-field')
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
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeAreaModelMastersResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.createAreaModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area')
            .replace('{service}', 'mega-field')
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
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateAreaModelMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.getAreaModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetAreaModelMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.updateAreaModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'description': (_g = request.getDescription()) !== null && _g !== void 0 ? _g : null,
            'metadata': (_h = request.getMetadata()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateAreaModelMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.deleteAreaModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteAreaModelMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.describeLayerModels = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area/{areaModelName}/layer')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeLayerModelsResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.getLayerModel = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area/{areaModelName}/layer/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{layerModelName}', String((_f = request.getLayerModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getLayerModelName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetLayerModelResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.describeLayerModelMasters = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}/layer')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'pageToken': String((_g = request.getPageToken()) !== null && _g !== void 0 ? _g : null),
            'limit': String((_h = request.getLimit()) !== null && _h !== void 0 ? _h : null),
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.DescribeLayerModelMastersResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.createLayerModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}/layer')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'name': (_g = request.getName()) !== null && _g !== void 0 ? _g : null,
            'description': (_h = request.getDescription()) !== null && _h !== void 0 ? _h : null,
            'metadata': (_j = request.getMetadata()) !== null && _j !== void 0 ? _j : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateLayerModelMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.getLayerModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}/layer/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{layerModelName}', String((_f = request.getLayerModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getLayerModelName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetLayerModelMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.updateLayerModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}/layer/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{layerModelName}', String((_f = request.getLayerModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getLayerModelName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'description': (_j = request.getDescription()) !== null && _j !== void 0 ? _j : null,
            'metadata': (_k = request.getMetadata()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateLayerModelMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.deleteLayerModelMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/area/{areaModelName}/layer/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{layerModelName}', String((_f = request.getLayerModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getLayerModelName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteLayerModelMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.exportMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/export')
            .replace('{service}', 'mega-field')
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
    Gs2MegaFieldRestClient.prototype.getCurrentFieldMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'mega-field')
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
            return Result.GetCurrentFieldMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.preUpdateCurrentFieldMaster = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'mega-field')
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
            return Result.PreUpdateCurrentFieldMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.updateCurrentFieldMaster = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master')
            .replace('{service}', 'mega-field')
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
            return Result.UpdateCurrentFieldMasterResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.updateCurrentFieldMasterFromGitHub = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/master/from_git_hub')
            .replace('{service}', 'mega-field')
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
            return Result.UpdateCurrentFieldMasterFromGitHubResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.putPosition = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/spatial/{areaModelName}/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{layerModelName}', String((_f = request.getLayerModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getLayerModelName()) !== null && _g !== void 0 ? _g : 'null'));
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
            'position': (_m = (_l = request.getPosition()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'vector': (_p = (_o = request.getVector()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'r': (_q = request.getR()) !== null && _q !== void 0 ? _q : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.PutPositionResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.putPositionByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/spatial/{areaModelName}/{layerModelName}')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{areaModelName}', String((_f = request.getAreaModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getAreaModelName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{layerModelName}', String((_h = request.getLayerModelName()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getLayerModelName()) !== null && _j !== void 0 ? _j : 'null'));
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
            'position': (_p = (_o = request.getPosition()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'vector': (_r = (_q = request.getVector()) === null || _q === void 0 ? void 0 : _q.toDict()) !== null && _r !== void 0 ? _r : null,
            'r': (_s = request.getR()) !== null && _s !== void 0 ? _s : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.PutPositionByUserIdResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.fetchPosition = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area/{areaModelName}/layer/{layerModelName}/spatial/fetch')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{layerModelName}', String((_f = request.getLayerModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getLayerModelName()) !== null && _g !== void 0 ? _g : 'null'));
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
            'userIds': (_l = request.getUserIds()) !== null && _l !== void 0 ? _l : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.FetchPositionResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.fetchPositionFromSystem = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/system/area/{areaModelName}/layer/{layerModelName}/spatial/fetch')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{layerModelName}', String((_f = request.getLayerModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getLayerModelName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'userIds': (_k = request.getUserIds()) !== null && _k !== void 0 ? _k : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.FetchPositionFromSystemResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.nearUserIds = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/area/{areaModelName}/layer/{layerModelName}/spatial/near')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{layerModelName}', String((_f = request.getLayerModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getLayerModelName()) !== null && _g !== void 0 ? _g : 'null'));
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
            'point': (_m = (_l = request.getPoint()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'r': (_o = request.getR()) !== null && _o !== void 0 ? _o : null,
            'limit': (_p = request.getLimit()) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.NearUserIdsResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.nearUserIdsFromSystem = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/system/area/{areaModelName}/layer/{layerModelName}/spatial/near')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{layerModelName}', String((_f = request.getLayerModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getLayerModelName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getDuplicationAvoider()) {
            headers['X-GS2-DUPLICATION-AVOIDER'] = (_h = request.getDuplicationAvoider()) !== null && _h !== void 0 ? _h : null;
        }
        var body = {
            'contextStack': (_j = request.getContextStack()) !== null && _j !== void 0 ? _j : null,
            'point': (_l = (_k = request.getPoint()) === null || _k === void 0 ? void 0 : _k.toDict()) !== null && _l !== void 0 ? _l : null,
            'r': (_m = request.getR()) !== null && _m !== void 0 ? _m : null,
            'limit': (_o = request.getLimit()) !== null && _o !== void 0 ? _o : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.NearUserIdsFromSystemResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.action = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/me/spatial/{areaModelName}/{layerModelName}/action')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{areaModelName}', String((_d = request.getAreaModelName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getAreaModelName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{layerModelName}', String((_f = request.getLayerModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getLayerModelName()) !== null && _g !== void 0 ? _g : 'null'));
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
            'position': (_m = (_l = request.getPosition()) === null || _l === void 0 ? void 0 : _l.toDict()) !== null && _m !== void 0 ? _m : null,
            'scopes': (_p = (_o = request.getScopes()) === null || _o === void 0 ? void 0 : _o.map(function (item) { return item.toDict(); })) !== null && _p !== void 0 ? _p : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ActionResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.prototype.actionByUserId = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var url = (((_a = Gs2MegaFieldRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/{namespaceName}/user/{userId}/spatial/{areaModelName}/{layerModelName}/action')
            .replace('{service}', 'mega-field')
            .replace('{region}', this.session.region)
            .replace('{namespaceName}', String((_b = request.getNamespaceName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getNamespaceName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userId}', String((_d = request.getUserId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{areaModelName}', String((_f = request.getAreaModelName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getAreaModelName()) !== null && _g !== void 0 ? _g : 'null'))
            .replace('{layerModelName}', String((_h = request.getLayerModelName()) !== null && _h !== void 0 ? _h : 'null') === "" ? "null" : String((_j = request.getLayerModelName()) !== null && _j !== void 0 ? _j : 'null'));
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
            'position': (_p = (_o = request.getPosition()) === null || _o === void 0 ? void 0 : _o.toDict()) !== null && _p !== void 0 ? _p : null,
            'scopes': (_r = (_q = request.getScopes()) === null || _q === void 0 ? void 0 : _q.map(function (item) { return item.toDict(); })) !== null && _r !== void 0 ? _r : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ActionByUserIdResult.fromDict(data);
        });
    };
    Gs2MegaFieldRestClient.ENDPOINT_HOST = null;
    return Gs2MegaFieldRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2MegaFieldRestClient;
//# sourceMappingURL=rest.js.map