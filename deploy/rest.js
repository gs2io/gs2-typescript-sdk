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
var Gs2DeployRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2DeployRestClient, _super);
    function Gs2DeployRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2DeployRestClient.prototype.describeStacks = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'namePrefix': String((_b = request.getNamePrefix()) !== null && _b !== void 0 ? _b : null),
            'pageToken': String((_c = request.getPageToken()) !== null && _c !== void 0 ? _c : null),
            'limit': String((_d = request.getLimit()) !== null && _d !== void 0 ? _d : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeStacksResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.preCreateStack = function (request) {
        var _a;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/pre')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PreCreateStackResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DeployRestClient.prototype.createStack = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'name': (_b = request.getName()) !== null && _b !== void 0 ? _b : null,
            'description': (_c = request.getDescription()) !== null && _c !== void 0 ? _c : null,
            'mode': (_d = request.getMode()) !== null && _d !== void 0 ? _d : null,
            'template': (_e = request.getTemplate()) !== null && _e !== void 0 ? _e : null,
            'uploadToken': (_f = request.getUploadToken()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateStackResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DeployRestClient.prototype.createStackFromGitHub = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/from_git_hub')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'name': (_b = request.getName()) !== null && _b !== void 0 ? _b : null,
            'description': (_c = request.getDescription()) !== null && _c !== void 0 ? _c : null,
            'checkoutSetting': (_e = (_d = request.getCheckoutSetting()) === null || _d === void 0 ? void 0 : _d.toDict()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateStackFromGitHubResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DeployRestClient.prototype.preValidate = function (request) {
        var _a;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/validate/pre')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PreValidateResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DeployRestClient.prototype.validate = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/validate')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'mode': (_b = request.getMode()) !== null && _b !== void 0 ? _b : null,
            'template': (_c = request.getTemplate()) !== null && _c !== void 0 ? _c : null,
            'uploadToken': (_d = request.getUploadToken()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ValidateResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DeployRestClient.prototype.getStackStatus = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/status')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
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
            return Result.GetStackStatusResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.getStack = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
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
            return Result.GetStackResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.preUpdateStack = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/pre')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PreUpdateStackResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DeployRestClient.prototype.updateStack = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'mode': (_e = request.getMode()) !== null && _e !== void 0 ? _e : null,
            'template': (_f = request.getTemplate()) !== null && _f !== void 0 ? _f : null,
            'uploadToken': (_g = request.getUploadToken()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateStackResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DeployRestClient.prototype.preChangeSet = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/pre')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
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
            return Result.PreChangeSetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DeployRestClient.prototype.changeSet = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'mode': (_d = request.getMode()) !== null && _d !== void 0 ? _d : null,
            'template': (_e = request.getTemplate()) !== null && _e !== void 0 ? _e : null,
            'uploadToken': (_f = request.getUploadToken()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ChangeSetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DeployRestClient.prototype.updateStackFromGitHub = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/from_git_hub')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'checkoutSetting': (_f = (_e = request.getCheckoutSetting()) === null || _e === void 0 ? void 0 : _e.toDict()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateStackFromGitHubResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2DeployRestClient.prototype.deleteStack = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
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
            return Result.DeleteStackResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.forceDeleteStack = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/force')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
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
            return Result.ForceDeleteStackResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.deleteStackResources = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/resources')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
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
            return Result.DeleteStackResourcesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.deleteStackEntity = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/entity')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
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
            return Result.DeleteStackEntityResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.getServiceVersion = function (request) {
        var _a;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/system/version')
            .replace('{service}', 'deploy')
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
    Gs2DeployRestClient.prototype.describeResources = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/resource')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
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
            return Result.DescribeResourcesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.getResource = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/resource/{resourceName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{resourceName}', String((_c = request.getResourceName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getResourceName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetResourceResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.describeEvents = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/event')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
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
            return Result.DescribeEventsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.getEvent = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/event/{eventName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{eventName}', String((_c = request.getEventName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getEventName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetEventResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.describeOutputs = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/output')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'));
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
            return Result.DescribeOutputsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2DeployRestClient.prototype.getOutput = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/stack/{stackName}/output/{outputName}')
            .replace('{service}', 'deploy')
            .replace('{region}', this.session.region)
            .replace('{stackName}', String((_a = request.getStackName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getStackName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{outputName}', String((_c = request.getOutputName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getOutputName()) !== null && _d !== void 0 ? _d : 'null'));
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
            return Result.GetOutputResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    return Gs2DeployRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2DeployRestClient;
//# sourceMappingURL=rest.js.map