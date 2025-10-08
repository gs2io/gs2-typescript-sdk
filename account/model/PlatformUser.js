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
var PlatformUser = /** @class */ (function () {
    function PlatformUser() {
        this.type = null;
        this.userIdentifier = null;
        this.userId = null;
    }
    PlatformUser.prototype.getType = function () {
        return this.type;
    };
    PlatformUser.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    PlatformUser.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    PlatformUser.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    PlatformUser.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    PlatformUser.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    PlatformUser.prototype.getUserId = function () {
        return this.userId;
    };
    PlatformUser.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PlatformUser.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PlatformUser.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PlatformUser()
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withUserId(data["userId"]);
    };
    PlatformUser.prototype.toDict = function () {
        return {
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "userId": this.getUserId(),
        };
    };
    return PlatformUser;
}());
exports.default = PlatformUser;
//# sourceMappingURL=PlatformUser.js.map