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
var Gs2DeployRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2DeployRestClient, _super);
    function Gs2DeployRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2DeployRestClient.prototype.describeStacks = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack')
            .replace('{service}', 'deploy')
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
            return Result.DescribeStacksResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.preCreateStack = function (request) {
        var _a, _b;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/pre')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.PreCreateStackResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.createStack = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'name': (_c = request.getName()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'mode': (_e = request.getMode()) !== null && _e !== void 0 ? _e : null,
            'template': (_f = request.getTemplate()) !== null && _f !== void 0 ? _f : null,
            'uploadToken': (_g = request.getUploadToken()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateStackResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.createStackFromGitHub = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/from_git_hub')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'name': (_c = request.getName()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'checkoutSetting': (_f = (_e = request.getCheckoutSetting()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.CreateStackFromGitHubResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.preValidate = function (request) {
        var _a, _b;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/validate/pre')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.PreValidateResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.validate = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/validate')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'mode': (_c = request.getMode()) !== null && _c !== void 0 ? _c : null,
            'template': (_d = request.getTemplate()) !== null && _d !== void 0 ? _d : null,
            'uploadToken': (_e = request.getUploadToken()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ValidateResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.getStackStatus = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/status')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetStackStatusResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.getStack = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetStackResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.preUpdateStack = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/pre')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.PreUpdateStackResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.updateStack = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'mode': (_f = request.getMode()) !== null && _f !== void 0 ? _f : null,
            'template': (_g = request.getTemplate()) !== null && _g !== void 0 ? _g : null,
            'uploadToken': (_h = request.getUploadToken()) !== null && _h !== void 0 ? _h : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateStackResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.preChangeSet = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/pre')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.PreChangeSetResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.changeSet = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'mode': (_e = request.getMode()) !== null && _e !== void 0 ? _e : null,
            'template': (_f = request.getTemplate()) !== null && _f !== void 0 ? _f : null,
            'uploadToken': (_g = request.getUploadToken()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.ChangeSetResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.updateStackFromGitHub = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/from_git_hub')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'checkoutSetting': (_g = (_f = request.getCheckoutSetting()) === null || _f === void 0 ? void 0 : _f.toDict()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('PUT', url, headers, undefined, body).then(function (data) {
            return Result.UpdateStackFromGitHubResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.deleteStack = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteStackResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.forceDeleteStack = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/force')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.ForceDeleteStackResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.deleteStackResources = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/resources')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteStackResourcesResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.deleteStackEntity = function (request) {
        var _a, _b, _c, _d;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/entity')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
        };
        return this.request('DELETE', url, headers, params, undefined).then(function (data) {
            return Result.DeleteStackEntityResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'deploy')
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
    Gs2DeployRestClient.prototype.describeResources = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/resource')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.DescribeResourcesResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.getResource = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/resource/{resourceName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{resourceName}', String((_d = request.getResourceName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getResourceName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetResourceResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.describeEvents = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/event')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.DescribeEventsResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.getEvent = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/event/{eventName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{eventName}', String((_d = request.getEventName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getEventName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetEventResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.describeOutputs = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/output')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.DescribeOutputsResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.prototype.getOutput = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (((_a = Gs2DeployRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/stack/{stackName}/output/{outputName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getStackName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{outputName}', String((_d = request.getOutputName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getOutputName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return this.request('GET', url, headers, params, undefined).then(function (data) {
            return Result.GetOutputResult.fromDict(data);
        });
    };
    Gs2DeployRestClient.ENDPOINT_HOST = null;
    return Gs2DeployRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2DeployRestClient;
//# sourceMappingURL=rest.js.map