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
var BanStatus = /** @class */ (function () {
    function BanStatus() {
        this.name = null;
        this.reason = null;
        this.releaseTimestamp = null;
    }
    BanStatus.prototype.getName = function () {
        return this.name;
    };
    BanStatus.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BanStatus.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BanStatus.prototype.getReason = function () {
        return this.reason;
    };
    BanStatus.prototype.setReason = function (reason) {
        this.reason = reason;
        return this;
    };
    BanStatus.prototype.withReason = function (reason) {
        this.reason = reason;
        return this;
    };
    BanStatus.prototype.getReleaseTimestamp = function () {
        return this.releaseTimestamp;
    };
    BanStatus.prototype.setReleaseTimestamp = function (releaseTimestamp) {
        this.releaseTimestamp = releaseTimestamp;
        return this;
    };
    BanStatus.prototype.withReleaseTimestamp = function (releaseTimestamp) {
        this.releaseTimestamp = releaseTimestamp;
        return this;
    };
    BanStatus.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BanStatus()
            .withName(data["name"])
            .withReason(data["reason"])
            .withReleaseTimestamp(data["releaseTimestamp"]);
    };
    BanStatus.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "reason": this.getReason(),
            "releaseTimestamp": this.getReleaseTimestamp(),
        };
    };
    return BanStatus;
}());
exports.default = BanStatus;
//# sourceMappingURL=BanStatus.js.map