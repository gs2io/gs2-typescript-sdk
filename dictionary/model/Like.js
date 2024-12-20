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
var grnFormat = "grn:gs2:{region}:{ownerId}:dictionary:{namespaceName}:user:{userId}:like:{entryModelName}";
var Like = /** @class */ (function () {
    function Like() {
        this.likeId = null;
        this.userId = null;
        this.name = null;
    }
    Like.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Like.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Like.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Like.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Like.getEntryModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{entryModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Like.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getEntryModelName(grn) == null || this.getEntryModelName(grn) === '') {
            return false;
        }
        return true;
    };
    Like.createGrn = function (region, ownerId, namespaceName, userId, entryModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{entryModelName}', entryModelName !== null && entryModelName !== void 0 ? entryModelName : '');
    };
    Like.prototype.getLikeId = function () {
        return this.likeId;
    };
    Like.prototype.setLikeId = function (likeId) {
        this.likeId = likeId;
        return this;
    };
    Like.prototype.withLikeId = function (likeId) {
        this.likeId = likeId;
        return this;
    };
    Like.prototype.getUserId = function () {
        return this.userId;
    };
    Like.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Like.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Like.prototype.getName = function () {
        return this.name;
    };
    Like.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Like.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Like.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Like()
            .withLikeId(data["likeId"])
            .withUserId(data["userId"])
            .withName(data["name"]);
    };
    Like.prototype.toDict = function () {
        return {
            "likeId": this.getLikeId(),
            "userId": this.getUserId(),
            "name": this.getName(),
        };
    };
    return Like;
}());
exports.default = Like;
//# sourceMappingURL=Like.js.map