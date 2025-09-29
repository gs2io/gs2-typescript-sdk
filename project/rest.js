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
var Gs2ProjectRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2ProjectRestClient, _super);
    function Gs2ProjectRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2ProjectRestClient.prototype.createAccount = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'email': (_c = request.getEmail()) !== null && _c !== void 0 ? _c : null,
            'fullName': (_d = request.getFullName()) !== null && _d !== void 0 ? _d : null,
            'companyName': (_e = request.getCompanyName()) !== null && _e !== void 0 ? _e : null,
            'password': (_f = request.getPassword()) !== null && _f !== void 0 ? _f : null,
            'lang': (_g = request.getLang()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateAccountResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.verify = function (request) {
        var _a, _b, _c;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/verify')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'verifyToken': (_c = request.getVerifyToken()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.VerifyResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.signIn = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/signIn')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'email': (_c = request.getEmail()) !== null && _c !== void 0 ? _c : null,
            'password': (_d = request.getPassword()) !== null && _d !== void 0 ? _d : null,
            'otp': (_e = request.getOtp()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.SignInResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.forget = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/forget')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'email': (_c = request.getEmail()) !== null && _c !== void 0 ? _c : null,
            'lang': (_d = request.getLang()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ForgetResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.issuePassword = function (request) {
        var _a, _b, _c;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/password/issue')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'issuePasswordToken': (_c = request.getIssuePasswordToken()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.IssuePasswordResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.updateAccount = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'email': (_c = request.getEmail()) !== null && _c !== void 0 ? _c : null,
            'fullName': (_d = request.getFullName()) !== null && _d !== void 0 ? _d : null,
            'companyName': (_e = request.getCompanyName()) !== null && _e !== void 0 ? _e : null,
            'password': (_f = request.getPassword()) !== null && _f !== void 0 ? _f : null,
            'accountToken': (_g = request.getAccountToken()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateAccountResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.enableMfa = function (request) {
        var _a, _b, _c;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/mfa')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'accountToken': (_c = request.getAccountToken()) !== null && _c !== void 0 ? _c : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.EnableMfaResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.challengeMfa = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/mfa/challenge')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'accountToken': (_c = request.getAccountToken()) !== null && _c !== void 0 ? _c : null,
            'passcode': (_d = request.getPasscode()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ChallengeMfaResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.disableMfa = function (request) {
        var _a, _b, _c;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/mfa')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'accountToken': String((_c = request.getAccountToken()) !== null && _c !== void 0 ? _c : null),
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DisableMfaResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.deleteAccount = function (request) {
        var _a, _b, _c;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'accountToken': String((_c = request.getAccountToken()) !== null && _c !== void 0 ? _c : null),
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteAccountResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/system/version')
            .replace('{service}', 'project')
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
    Gs2ProjectRestClient.prototype.describeProjects = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'accountToken': String((_c = request.getAccountToken()) !== null && _c !== void 0 ? _c : null),
            'pageToken': String((_d = request.getPageToken()) !== null && _d !== void 0 ? _d : null),
            'limit': String((_e = request.getLimit()) !== null && _e !== void 0 ? _e : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeProjectsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.createProject = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'accountToken': (_c = request.getAccountToken()) !== null && _c !== void 0 ? _c : null,
            'name': (_d = request.getName()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'plan': (_f = request.getPlan()) !== null && _f !== void 0 ? _f : null,
            'currency': (_g = request.getCurrency()) !== null && _g !== void 0 ? _g : null,
            'activateRegionName': (_h = request.getActivateRegionName()) !== null && _h !== void 0 ? _h : null,
            'billingMethodName': (_j = request.getBillingMethodName()) !== null && _j !== void 0 ? _j : null,
            'enableEventBridge': (_k = request.getEnableEventBridge()) !== null && _k !== void 0 ? _k : null,
            'eventBridgeAwsAccountId': (_l = request.getEventBridgeAwsAccountId()) !== null && _l !== void 0 ? _l : null,
            'eventBridgeAwsRegion': (_m = request.getEventBridgeAwsRegion()) !== null && _m !== void 0 ? _m : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateProjectResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.getProject = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getProjectName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'accountToken': String((_e = request.getAccountToken()) !== null && _e !== void 0 ? _e : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetProjectResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.getProjectToken = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/project/{projectName}/projectToken')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getProjectName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'accountToken': (_e = request.getAccountToken()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.GetProjectTokenResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.getProjectTokenByIdentifier = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/{accountName}/project/{projectName}/user/{userName}/projectToken')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{accountName}', String((_b = request.getAccountName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getAccountName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{projectName}', String((_d = request.getProjectName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getProjectName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{userName}', String((_f = request.getUserName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getUserName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'password': (_j = request.getPassword()) !== null && _j !== void 0 ? _j : null,
            'otp': (_k = request.getOtp()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.GetProjectTokenByIdentifierResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.updateProject = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getProjectName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'accountToken': (_e = request.getAccountToken()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
            'plan': (_g = request.getPlan()) !== null && _g !== void 0 ? _g : null,
            'billingMethodName': (_h = request.getBillingMethodName()) !== null && _h !== void 0 ? _h : null,
            'enableEventBridge': (_j = request.getEnableEventBridge()) !== null && _j !== void 0 ? _j : null,
            'eventBridgeAwsAccountId': (_k = request.getEventBridgeAwsAccountId()) !== null && _k !== void 0 ? _k : null,
            'eventBridgeAwsRegion': (_l = request.getEventBridgeAwsRegion()) !== null && _l !== void 0 ? _l : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateProjectResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.activateRegion = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}/region/{regionName}/activate')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getProjectName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{regionName}', String((_d = request.getRegionName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getRegionName()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'accountToken': (_g = request.getAccountToken()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ActivateRegionResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.waitActivateRegion = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/system/{ownerId}/project/region/{regionName}/activate/wait')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{ownerId}', String((_b = request.getOwnerId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getOwnerId()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{projectName}', String((_d = request.getProjectName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getProjectName()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{regionName}', String((_f = request.getRegionName()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getRegionName()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.WaitActivateRegionResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.deleteProject = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getProjectName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'accountToken': String((_e = request.getAccountToken()) !== null && _e !== void 0 ? _e : null),
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteProjectResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.describeBillingMethods = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'accountToken': String((_c = request.getAccountToken()) !== null && _c !== void 0 ? _c : null),
            'pageToken': String((_d = request.getPageToken()) !== null && _d !== void 0 ? _d : null),
            'limit': String((_e = request.getLimit()) !== null && _e !== void 0 ? _e : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeBillingMethodsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.createBillingMethod = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'accountToken': (_c = request.getAccountToken()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'methodType': (_e = request.getMethodType()) !== null && _e !== void 0 ? _e : null,
            'cardCustomerId': (_f = request.getCardCustomerId()) !== null && _f !== void 0 ? _f : null,
            'partnerId': (_g = request.getPartnerId()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateBillingMethodResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.getBillingMethod = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{billingMethodName}', String((_b = request.getBillingMethodName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getBillingMethodName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'accountToken': String((_e = request.getAccountToken()) !== null && _e !== void 0 ? _e : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.GetBillingMethodResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.updateBillingMethod = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{billingMethodName}', String((_b = request.getBillingMethodName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getBillingMethodName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'accountToken': (_e = request.getAccountToken()) !== null && _e !== void 0 ? _e : null,
            'description': (_f = request.getDescription()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateBillingMethodResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.deleteBillingMethod = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{billingMethodName}', String((_b = request.getBillingMethodName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getBillingMethodName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'accountToken': String((_e = request.getAccountToken()) !== null && _e !== void 0 ? _e : null),
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DeleteBillingMethodResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.describeReceipts = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/receipt')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'accountToken': String((_c = request.getAccountToken()) !== null && _c !== void 0 ? _c : null),
            'pageToken': String((_d = request.getPageToken()) !== null && _d !== void 0 ? _d : null),
            'limit': String((_e = request.getLimit()) !== null && _e !== void 0 ? _e : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeReceiptsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.describeBillings = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billing/{projectName}/{year}/{month}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getProjectName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{year}', String((_d = request.getYear()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getYear()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{month}', String((_f = request.getMonth()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getMonth()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
            'accountToken': String((_j = request.getAccountToken()) !== null && _j !== void 0 ? _j : null),
            'region': String((_k = request.getRegion()) !== null && _k !== void 0 ? _k : null),
            'service': String((_l = request.getService()) !== null && _l !== void 0 ? _l : null),
        };
        return axios_1.default.get(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DescribeBillingsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.describeDumpProgresses = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/dump/progress')
            .replace('{service}', 'project')
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
            return Result.DescribeDumpProgressesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.getDumpProgress = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/dump/progress/{transactionId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String((_b = request.getTransactionId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getTransactionId()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.GetDumpProgressResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.waitDumpUserData = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/system/{ownerId}/project/dump/progress/{transactionId}/wait')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{ownerId}', String((_b = request.getOwnerId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getOwnerId()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{transactionId}', String((_d = request.getTransactionId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTransactionId()) !== null && _e !== void 0 ? _e : 'null'));
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
            'microserviceName': (_k = request.getMicroserviceName()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.WaitDumpUserDataResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.archiveDumpUserData = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/system/{ownerId}/project/dump/progress/{transactionId}/archive')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{ownerId}', String((_b = request.getOwnerId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getOwnerId()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{transactionId}', String((_d = request.getTransactionId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTransactionId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ArchiveDumpUserDataResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.dumpUserData = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/dump/{userId}')
            .replace('{service}', 'project')
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
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.DumpUserDataResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.getDumpUserData = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/dump/{transactionId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String((_b = request.getTransactionId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getTransactionId()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.GetDumpUserDataResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.describeCleanProgresses = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/clean/progress')
            .replace('{service}', 'project')
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
            return Result.DescribeCleanProgressesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.getCleanProgress = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/clean/progress/{transactionId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String((_b = request.getTransactionId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getTransactionId()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.GetCleanProgressResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.waitCleanUserData = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/system/{ownerId}/project/clean/progress/{transactionId}/wait')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{ownerId}', String((_b = request.getOwnerId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getOwnerId()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{transactionId}', String((_d = request.getTransactionId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTransactionId()) !== null && _e !== void 0 ? _e : 'null'));
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
            'microserviceName': (_k = request.getMicroserviceName()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.WaitCleanUserDataResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.cleanUserData = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/clean/{userId}')
            .replace('{service}', 'project')
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
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CleanUserDataResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.describeImportProgresses = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/progress')
            .replace('{service}', 'project')
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
            return Result.DescribeImportProgressesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.getImportProgress = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/progress/{transactionId}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String((_b = request.getTransactionId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getTransactionId()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.GetImportProgressResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.waitImportUserData = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/system/{ownerId}/project/import/progress/{transactionId}/wait')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{ownerId}', String((_b = request.getOwnerId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getOwnerId()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{transactionId}', String((_d = request.getTransactionId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getTransactionId()) !== null && _e !== void 0 ? _e : 'null'));
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
            'microserviceName': (_k = request.getMicroserviceName()) !== null && _k !== void 0 ? _k : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.WaitImportUserDataResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.prepareImportUserData = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/{userId}/prepare')
            .replace('{service}', 'project')
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
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.PrepareImportUserDataResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.importUserData = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/{userId}')
            .replace('{service}', 'project')
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
            'uploadToken': (_g = request.getUploadToken()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.ImportUserDataResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2ProjectRestClient.prototype.describeImportErrorLogs = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/progress/{transactionId}/log')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String((_b = request.getTransactionId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getTransactionId()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.DescribeImportErrorLogsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.prototype.getImportErrorLog = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2ProjectRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/import/progress/{transactionId}/log/{errorLogName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{transactionId}', String((_b = request.getTransactionId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getTransactionId()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{errorLogName}', String((_d = request.getErrorLogName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getErrorLogName()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.GetImportErrorLogResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2ProjectRestClient.ENDPOINT_HOST = null;
    return Gs2ProjectRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2ProjectRestClient;
//# sourceMappingURL=rest.js.map