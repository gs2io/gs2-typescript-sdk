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
var Entry = /** @class */ (function () {
    function Entry() {
        this.entryId = null;
        this.userId = null;
        this.name = null;
        this.acquiredAt = null;
    }
    Entry.prototype.getEntryId = function () {
        return this.entryId;
    };
    Entry.prototype.setEntryId = function (entryId) {
        this.entryId = entryId;
        return this;
    };
    Entry.prototype.withEntryId = function (entryId) {
        this.entryId = entryId;
        return this;
    };
    Entry.prototype.getUserId = function () {
        return this.userId;
    };
    Entry.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Entry.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Entry.prototype.getName = function () {
        return this.name;
    };
    Entry.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Entry.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Entry.prototype.getAcquiredAt = function () {
        return this.acquiredAt;
    };
    Entry.prototype.setAcquiredAt = function (acquiredAt) {
        this.acquiredAt = acquiredAt;
        return this;
    };
    Entry.prototype.withAcquiredAt = function (acquiredAt) {
        this.acquiredAt = acquiredAt;
        return this;
    };
    Entry.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Entry()
            .withEntryId(data["entryId"])
            .withUserId(data["userId"])
            .withName(data["name"])
            .withAcquiredAt(data["acquiredAt"]);
    };
    Entry.prototype.toDict = function () {
        return {
            "entryId": this.getEntryId(),
            "userId": this.getUserId(),
            "name": this.getName(),
            "acquiredAt": this.getAcquiredAt(),
        };
    };
    return Entry;
}());
exports.default = Entry;
//# sourceMappingURL=Entry.js.map