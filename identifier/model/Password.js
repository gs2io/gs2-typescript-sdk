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
var grnFormat = "grn:gs2::{ownerId}:identifier:user:{userName}";
var Password = /** @class */ (function () {
    function Password() {
        this.userId = null;
        this.userName = null;
        this.createdAt = null;
    }
    Password.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{ownerId}', '(.*)')
            .replace('{userName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Password.getUserName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{ownerId}', '.*')
            .replace('{userName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Password.isValid = function (grn) {
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getUserName(grn) == null) {
            return false;
        }
        return true;
    };
    Password.createGrn = function (ownerId, userName) {
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (userName == null || userName === '') {
            return null;
        }
        return grnFormat
            .replace('{ownerId}', ownerId)
            .replace('{userName}', userName);
    };
    Password.prototype.getUserId = function () {
        return this.userId;
    };
    Password.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Password.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Password.prototype.getUserName = function () {
        return this.userName;
    };
    Password.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    Password.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    Password.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Password.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Password.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Password.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Password()
            .withUserId(data["userId"])
            .withUserName(data["userName"])
            .withCreatedAt(data["createdAt"]);
    };
    Password.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "userName": this.getUserName(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Password;
}());
exports.default = Password;
//# sourceMappingURL=Password.js.map