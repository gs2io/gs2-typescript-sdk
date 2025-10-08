"use strict";
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GetAuthorizationUrlResult = /** @class */ (function () {
    function GetAuthorizationUrlResult() {
        this.authorizationUrl = null;
    }
    GetAuthorizationUrlResult.prototype.getAuthorizationUrl = function () {
        return this.authorizationUrl;
    };
    GetAuthorizationUrlResult.prototype.setAuthorizationUrl = function (authorizationUrl) {
        this.authorizationUrl = authorizationUrl;
        return this;
    };
    GetAuthorizationUrlResult.prototype.withAuthorizationUrl = function (authorizationUrl) {
        this.authorizationUrl = authorizationUrl;
        return this;
    };
    GetAuthorizationUrlResult.fromDict = function (data) {
        return new GetAuthorizationUrlResult()
            .withAuthorizationUrl(data["authorizationUrl"]);
    };
    GetAuthorizationUrlResult.prototype.toDict = function () {
        return {
            "authorizationUrl": this.getAuthorizationUrl(),
        };
    };
    return GetAuthorizationUrlResult;
}());
exports.default = GetAuthorizationUrlResult;
//# sourceMappingURL=GetAuthorizationUrlResult.js.map