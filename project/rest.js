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
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'email': (_b = request.getEmail()) !== null && _b !== void 0 ? _b : null,
            'fullName': (_c = request.getFullName()) !== null && _c !== void 0 ? _c : null,
            'companyName': (_d = request.getCompanyName()) !== null && _d !== void 0 ? _d : null,
            'password': (_e = request.getPassword()) !== null && _e !== void 0 ? _e : null,
            'lang': (_f = request.getLang()) !== null && _f !== void 0 ? _f : null,
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
        var _a, _b;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/verify')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'verifyToken': (_b = request.getVerifyToken()) !== null && _b !== void 0 ? _b : null,
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
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/signIn')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'email': (_b = request.getEmail()) !== null && _b !== void 0 ? _b : null,
            'password': (_c = request.getPassword()) !== null && _c !== void 0 ? _c : null,
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
    Gs2ProjectRestClient.prototype.issueAccountToken = function (request) {
        var _a, _b;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/accountToken')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'accountName': (_b = request.getAccountName()) !== null && _b !== void 0 ? _b : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.IssueAccountTokenResult.fromDict(response.data);
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
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/forget')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'email': (_b = request.getEmail()) !== null && _b !== void 0 ? _b : null,
            'lang': (_c = request.getLang()) !== null && _c !== void 0 ? _c : null,
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
        var _a, _b;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/password/issue')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'issuePasswordToken': (_b = request.getIssuePasswordToken()) !== null && _b !== void 0 ? _b : null,
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
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'email': (_b = request.getEmail()) !== null && _b !== void 0 ? _b : null,
            'fullName': (_c = request.getFullName()) !== null && _c !== void 0 ? _c : null,
            'companyName': (_d = request.getCompanyName()) !== null && _d !== void 0 ? _d : null,
            'password': (_e = request.getPassword()) !== null && _e !== void 0 ? _e : null,
            'accountToken': (_f = request.getAccountToken()) !== null && _f !== void 0 ? _f : null,
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
    Gs2ProjectRestClient.prototype.deleteAccount = function (request) {
        var _a;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
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
    Gs2ProjectRestClient.prototype.describeProjects = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'accountToken': String((_b = request.getAccountToken()) !== null && _b !== void 0 ? _b : null),
            'pageToken': String((_c = request.getPageToken()) !== null && _c !== void 0 ? _c : null),
            'limit': String((_d = request.getLimit()) !== null && _d !== void 0 ? _d : null),
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'accountToken': (_b = request.getAccountToken()) !== null && _b !== void 0 ? _b : null,
            'name': (_c = request.getName()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'plan': (_e = request.getPlan()) !== null && _e !== void 0 ? _e : null,
            'currency': (_f = request.getCurrency()) !== null && _f !== void 0 ? _f : null,
            'activateRegionName': (_g = request.getActivateRegionName()) !== null && _g !== void 0 ? _g : null,
            'billingMethodName': (_h = request.getBillingMethodName()) !== null && _h !== void 0 ? _h : null,
            'enableEventBridge': (_j = request.getEnableEventBridge()) !== null && _j !== void 0 ? _j : null,
            'eventBridgeAwsAccountId': (_k = request.getEventBridgeAwsAccountId()) !== null && _k !== void 0 ? _k : null,
            'eventBridgeAwsRegion': (_l = request.getEventBridgeAwsRegion()) !== null && _l !== void 0 ? _l : null,
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
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_a = request.getProjectName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'accountToken': String((_d = request.getAccountToken()) !== null && _d !== void 0 ? _d : null),
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
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/project/{projectName}/projectToken')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_a = request.getProjectName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'accountToken': (_d = request.getAccountToken()) !== null && _d !== void 0 ? _d : null,
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/{accountName}/project/{projectName}/user/{userName}/projectToken')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{accountName}', String((_a = request.getAccountName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getAccountName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{projectName}', String((_c = request.getProjectName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getProjectName()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{userName}', String((_e = request.getUserName()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getUserName()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'password': (_h = request.getPassword()) !== null && _h !== void 0 ? _h : null,
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_a = request.getProjectName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'accountToken': (_d = request.getAccountToken()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'plan': (_f = request.getPlan()) !== null && _f !== void 0 ? _f : null,
            'billingMethodName': (_g = request.getBillingMethodName()) !== null && _g !== void 0 ? _g : null,
            'enableEventBridge': (_h = request.getEnableEventBridge()) !== null && _h !== void 0 ? _h : null,
            'eventBridgeAwsAccountId': (_j = request.getEventBridgeAwsAccountId()) !== null && _j !== void 0 ? _j : null,
            'eventBridgeAwsRegion': (_k = request.getEventBridgeAwsRegion()) !== null && _k !== void 0 ? _k : null,
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
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}/region/{regionName}/activate')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_a = request.getProjectName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{regionName}', String((_c = request.getRegionName()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getRegionName()) !== null && _d !== void 0 ? _d : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_e = request.getContextStack()) !== null && _e !== void 0 ? _e : null,
            'accountToken': (_f = request.getAccountToken()) !== null && _f !== void 0 ? _f : null,
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
    Gs2ProjectRestClient.prototype.deleteProject = function (request) {
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/project/{projectName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_a = request.getProjectName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'accountToken': String((_d = request.getAccountToken()) !== null && _d !== void 0 ? _d : null),
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
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'accountToken': String((_b = request.getAccountToken()) !== null && _b !== void 0 ? _b : null),
            'pageToken': String((_c = request.getPageToken()) !== null && _c !== void 0 ? _c : null),
            'limit': String((_d = request.getLimit()) !== null && _d !== void 0 ? _d : null),
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
        var _a, _b, _c, _d, _e, _f;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'accountToken': (_b = request.getAccountToken()) !== null && _b !== void 0 ? _b : null,
            'description': (_c = request.getDescription()) !== null && _c !== void 0 ? _c : null,
            'methodType': (_d = request.getMethodType()) !== null && _d !== void 0 ? _d : null,
            'cardCustomerId': (_e = request.getCardCustomerId()) !== null && _e !== void 0 ? _e : null,
            'partnerId': (_f = request.getPartnerId()) !== null && _f !== void 0 ? _f : null,
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
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{billingMethodName}', String((_a = request.getBillingMethodName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getBillingMethodName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'accountToken': String((_d = request.getAccountToken()) !== null && _d !== void 0 ? _d : null),
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
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{billingMethodName}', String((_a = request.getBillingMethodName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getBillingMethodName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'accountToken': (_d = request.getAccountToken()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
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
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billingMethod/{billingMethodName}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{billingMethodName}', String((_a = request.getBillingMethodName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getBillingMethodName()) !== null && _b !== void 0 ? _b : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'accountToken': String((_d = request.getAccountToken()) !== null && _d !== void 0 ? _d : null),
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
        var _a, _b, _c, _d;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/receipt')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'accountToken': String((_b = request.getAccountToken()) !== null && _b !== void 0 ? _b : null),
            'pageToken': String((_c = request.getPageToken()) !== null && _c !== void 0 ? _c : null),
            'limit': String((_d = request.getLimit()) !== null && _d !== void 0 ? _d : null),
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/account/me/billing/{projectName}/{year}/{month}')
            .replace('{service}', 'project')
            .replace('{region}', this.session.region)
            .replace('{projectName}', String((_a = request.getProjectName()) !== null && _a !== void 0 ? _a : 'null') === "" ? "null" : String((_b = request.getProjectName()) !== null && _b !== void 0 ? _b : 'null'))
            .replace('{year}', String((_c = request.getYear()) !== null && _c !== void 0 ? _c : 'null') === "" ? "null" : String((_d = request.getYear()) !== null && _d !== void 0 ? _d : 'null'))
            .replace('{month}', String((_e = request.getMonth()) !== null && _e !== void 0 ? _e : 'null') === "" ? "null" : String((_f = request.getMonth()) !== null && _f !== void 0 ? _f : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_g = request.getContextStack()) !== null && _g !== void 0 ? _g : null,
            'accountToken': String((_h = request.getAccountToken()) !== null && _h !== void 0 ? _h : null),
            'region': String((_j = request.getRegion()) !== null && _j !== void 0 ? _j : null),
            'service': String((_k = request.getService()) !== null && _k !== void 0 ? _k : null),
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
    return Gs2ProjectRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2ProjectRestClient;
//# sourceMappingURL=rest.js.map