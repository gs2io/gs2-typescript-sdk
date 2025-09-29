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
var Gs2IdentifierRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2IdentifierRestClient, _super);
    function Gs2IdentifierRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2IdentifierRestClient.prototype.describeUsers = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user')
            .replace('{service}', 'identifier')
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
            return Result.DescribeUsersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.createUser = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'name': (_c = request.getName()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateUserResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2IdentifierRestClient.prototype.updateUser = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateUserResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2IdentifierRestClient.prototype.getUser = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.GetUserResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.deleteUser = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.DeleteUserResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.describeSecurityPolicies = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/securityPolicy')
            .replace('{service}', 'identifier')
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
            return Result.DescribeSecurityPoliciesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.describeCommonSecurityPolicies = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/securityPolicy/common')
            .replace('{service}', 'identifier')
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
            return Result.DescribeCommonSecurityPoliciesResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.createSecurityPolicy = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/securityPolicy')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'name': (_c = request.getName()) !== null && _c !== void 0 ? _c : null,
            'description': (_d = request.getDescription()) !== null && _d !== void 0 ? _d : null,
            'policy': (_e = request.getPolicy()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreateSecurityPolicyResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2IdentifierRestClient.prototype.updateSecurityPolicy = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/securityPolicy/{securityPolicyName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{securityPolicyName}', String((_b = request.getSecurityPolicyName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getSecurityPolicyName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'description': (_e = request.getDescription()) !== null && _e !== void 0 ? _e : null,
            'policy': (_f = request.getPolicy()) !== null && _f !== void 0 ? _f : null,
        };
        return axios_1.default.put(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.UpdateSecurityPolicyResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2IdentifierRestClient.prototype.getSecurityPolicy = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/securityPolicy/{securityPolicyName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{securityPolicyName}', String((_b = request.getSecurityPolicyName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getSecurityPolicyName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.GetSecurityPolicyResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.deleteSecurityPolicy = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/securityPolicy/{securityPolicyName}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{securityPolicyName}', String((_b = request.getSecurityPolicyName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getSecurityPolicyName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.DeleteSecurityPolicyResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.describeIdentifiers = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.DescribeIdentifiersResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.createIdentifier = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.CreateIdentifierResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2IdentifierRestClient.prototype.getIdentifier = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier/{clientId}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{clientId}', String((_d = request.getClientId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getClientId()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.GetIdentifierResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.deleteIdentifier = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier/{clientId}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{clientId}', String((_d = request.getClientId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getClientId()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.DeleteIdentifierResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.describeAttachedGuards = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier/{clientId}/guard')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{clientId}', String((_b = request.getClientId()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getClientId()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{userName}', String((_d = request.getUserName()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getUserName()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.DescribeAttachedGuardsResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.attachGuard = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier/{clientId}/guard')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{clientId}', String((_d = request.getClientId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getClientId()) !== null && _e !== void 0 ? _e : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_f = request.getContextStack()) !== null && _f !== void 0 ? _f : null,
            'guardNamespaceId': (_g = request.getGuardNamespaceId()) !== null && _g !== void 0 ? _g : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AttachGuardResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2IdentifierRestClient.prototype.detachGuard = function (request) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/identifier/{clientId}/guard/{guardNamespaceId}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{clientId}', String((_d = request.getClientId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getClientId()) !== null && _e !== void 0 ? _e : 'null'))
            .replace('{guardNamespaceId}', String((_f = request.getGuardNamespaceId()) !== null && _f !== void 0 ? _f : 'null') === "" ? "null" : String((_g = request.getGuardNamespaceId()) !== null && _g !== void 0 ? _g : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var params = {
            'contextStack': (_h = request.getContextStack()) !== null && _h !== void 0 ? _h : null,
        };
        return axios_1.default.delete(url, {
            params: params,
            headers: headers,
        }).then(function (response) {
            return Result.DetachGuardResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/system/version')
            .replace('{service}', 'identifier')
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
    Gs2IdentifierRestClient.prototype.createPassword = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/password')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'password': (_e = request.getPassword()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.CreatePasswordResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2IdentifierRestClient.prototype.getPassword = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/password/entity')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.GetPasswordResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.enableMfa = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/mfa')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
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
    Gs2IdentifierRestClient.prototype.challengeMfa = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/mfa/challenge')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'passcode': (_e = request.getPasscode()) !== null && _e !== void 0 ? _e : null,
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
    Gs2IdentifierRestClient.prototype.disableMfa = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/mfa')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.DisableMfaResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.deletePassword = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/password/entity')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.DeletePasswordResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.getHasSecurityPolicy = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/securityPolicy')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
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
            return Result.GetHasSecurityPolicyResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.attachSecurityPolicy = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/securityPolicy')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'));
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_d = request.getContextStack()) !== null && _d !== void 0 ? _d : null,
            'securityPolicyId': (_e = request.getSecurityPolicyId()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.AttachSecurityPolicyResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2IdentifierRestClient.prototype.detachSecurityPolicy = function (request) {
        var _a, _b, _c, _d, _e, _f;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/user/{userName}/securityPolicy/{securityPolicyId}')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region)
            .replace('{userName}', String((_b = request.getUserName()) !== null && _b !== void 0 ? _b : 'null') === "" ? "null" : String((_c = request.getUserName()) !== null && _c !== void 0 ? _c : 'null'))
            .replace('{securityPolicyId}', String((_d = request.getSecurityPolicyId()) !== null && _d !== void 0 ? _d : 'null') === "" ? "null" : String((_e = request.getSecurityPolicyId()) !== null && _e !== void 0 ? _e : 'null'));
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
            return Result.DetachSecurityPolicyResult.fromDict(response.data);
        }).catch(function (error) {
            throw JSON.parse(error.response.data.message);
        });
    };
    Gs2IdentifierRestClient.prototype.login = function (request) {
        var _a, _b, _c, _d;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/projectToken/login')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'client_id': (_c = request.getClientId()) !== null && _c !== void 0 ? _c : null,
            'client_secret': (_d = request.getClientSecret()) !== null && _d !== void 0 ? _d : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.LoginResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2IdentifierRestClient.prototype.loginByUser = function (request) {
        var _a, _b, _c, _d, _e;
        var url = ((_a = Gs2IdentifierRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST + '/projectToken/login/user')
            .replace('{service}', 'identifier')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'userName': (_c = request.getUserName()) !== null && _c !== void 0 ? _c : null,
            'password': (_d = request.getPassword()) !== null && _d !== void 0 ? _d : null,
            'otp': (_e = request.getOtp()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.LoginByUserResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    Gs2IdentifierRestClient.ENDPOINT_HOST = null;
    return Gs2IdentifierRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2IdentifierRestClient;
//# sourceMappingURL=rest.js.map