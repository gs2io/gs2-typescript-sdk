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
var AbstractGs2RestClient_1 = (0, tslib_1.__importDefault)(require("../core/AbstractGs2RestClient"));
var model_1 = require("../core/model");
var Result = (0, tslib_1.__importStar)(require("./result"));
var axios_1 = (0, tslib_1.__importDefault)(require("axios"));
var Gs2AuthRestClient = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Gs2AuthRestClient, _super);
    function Gs2AuthRestClient(session) {
        return _super.call(this, session) || this;
    }
    Gs2AuthRestClient.prototype.login = function (request) {
        var _a, _b, _c;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/login')
            .replace('{service}', 'auth')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'userId': (_b = request.getUserId()) !== null && _b !== void 0 ? _b : null,
            'timeOffset': (_c = request.getTimeOffset()) !== null && _c !== void 0 ? _c : null,
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
    Gs2AuthRestClient.prototype.loginBySignature = function (request) {
        var _a, _b, _c, _d, _e;
        var url = (model_1.Gs2Constant.ENDPOINT_HOST + '/login/signed')
            .replace('{service}', 'auth')
            .replace('{region}', this.session.region);
        var headers = this.createAuthorizedHeaders();
        if (request.getRequestId()) {
            headers['X-GS2-REQUEST-ID'] = request.getRequestId();
        }
        var body = {
            'contextStack': (_a = request.getContextStack()) !== null && _a !== void 0 ? _a : null,
            'userId': (_b = request.getUserId()) !== null && _b !== void 0 ? _b : null,
            'keyId': (_c = request.getKeyId()) !== null && _c !== void 0 ? _c : null,
            'body': (_d = request.getBody()) !== null && _d !== void 0 ? _d : null,
            'signature': (_e = request.getSignature()) !== null && _e !== void 0 ? _e : null,
        };
        return axios_1.default.post(url, body, {
            headers: headers,
        }).then(function (response) {
            return Result.LoginBySignatureResult.fromDict(response.data);
        }).catch(function (error) {
            if (error.response) {
                throw JSON.parse(error.response.data.message);
            }
            else {
                throw [];
            }
        });
    };
    return Gs2AuthRestClient;
}(AbstractGs2RestClient_1.default));
exports.default = Gs2AuthRestClient;
//# sourceMappingURL=rest.js.map