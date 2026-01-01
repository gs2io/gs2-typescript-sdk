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
var Gs2AuthRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(Gs2AuthRestClient, _super);
    function Gs2AuthRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2AuthRestClient.prototype.login = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2AuthRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/login')
            .replace('{service}', 'auth')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_b = request.getTimeOffsetToken()) !== null && _b !== void 0 ? _b : null;
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'userId': (_d = request.getUserId()) !== null && _d !== void 0 ? _d : null,
            'timeOffset': (_e = request.getTimeOffset()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.LoginResult.fromDict(data);
        });
    };
    Gs2AuthRestClient.prototype.loginBySignature = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2AuthRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/login/signed')
            .replace('{service}', 'auth')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_b = request.getContextStack()) !== null && _b !== void 0 ? _b : null,
            'keyId': (_c = request.getKeyId()) !== null && _c !== void 0 ? _c : null,
            'body': (_d = request.getBody()) !== null && _d !== void 0 ? _d : null,
            'signature': (_e = request.getSignature()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.LoginBySignatureResult.fromDict(data);
        });
    };
    Gs2AuthRestClient.prototype.federation = function (request) {
        var _a, _b, _c, _d, _e, _f, _g;
        var url = (((_a = Gs2AuthRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/federation')
            .replace('{service}', 'auth')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_b = request.getTimeOffsetToken()) !== null && _b !== void 0 ? _b : null;
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'originalUserId': (_d = request.getOriginalUserId()) !== null && _d !== void 0 ? _d : null,
            'userId': (_e = request.getUserId()) !== null && _e !== void 0 ? _e : null,
            'policyDocument': (_f = request.getPolicyDocument()) !== null && _f !== void 0 ? _f : null,
            'timeOffset': (_g = request.getTimeOffset()) !== null && _g !== void 0 ? _g : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.FederationResult.fromDict(data);
        });
    };
    Gs2AuthRestClient.prototype.issueTimeOffsetTokenByUserId = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (((_a = Gs2AuthRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/timeoffset/token')
            .replace('{service}', 'auth')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        if (request.getTimeOffsetToken()) {
            headers['X-GS2-TIME-OFFSET-TOKEN'] = (_b = request.getTimeOffsetToken()) !== null && _b !== void 0 ? _b : null;
        }
        var body = {
            'contextStack': (_c = request.getContextStack()) !== null && _c !== void 0 ? _c : null,
            'userId': (_d = request.getUserId()) !== null && _d !== void 0 ? _d : null,
            'timeOffset': (_e = request.getTimeOffset()) !== null && _e !== void 0 ? _e : null,
        };
        return this.request('POST', url, headers, undefined, body).then(function (data) {
            return Result.IssueTimeOffsetTokenByUserIdResult.fromDict(data);
        });
    };
    Gs2AuthRestClient.prototype.getServiceVersion = function (request) {
        var _a, _b;
        var url = (((_a = Gs2AuthRestClient.ENDPOINT_HOST) !== null && _a !== void 0 ? _a : model_1.Gs2Constant.ENDPOINT_HOST) + '/system/version')
            .replace('{service}', 'auth')
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
    Gs2AuthRestClient.ENDPOINT_HOST = null;
    return Gs2AuthRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2AuthRestClient;
//# sourceMappingURL=rest.js.map