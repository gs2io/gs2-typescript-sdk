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
var PublicProfile = /** @class */ (function () {
    function PublicProfile() {
        this.userId = null;
        this.publicProfile = null;
    }
    PublicProfile.prototype.getUserId = function () {
        return this.userId;
    };
    PublicProfile.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PublicProfile.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PublicProfile.prototype.getPublicProfile = function () {
        return this.publicProfile;
    };
    PublicProfile.prototype.setPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    PublicProfile.prototype.withPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    PublicProfile.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PublicProfile()
            .withUserId(data["userId"])
            .withPublicProfile(data["publicProfile"]);
    };
    PublicProfile.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "publicProfile": this.getPublicProfile(),
        };
    };
    return PublicProfile;
}());
exports.default = PublicProfile;
//# sourceMappingURL=PublicProfile.js.map