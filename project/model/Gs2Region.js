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
var Gs2Region = /** @class */ (function () {
    function Gs2Region() {
        this.regionName = null;
        this.status = null;
    }
    Gs2Region.prototype.getRegionName = function () {
        return this.regionName;
    };
    Gs2Region.prototype.setRegionName = function (regionName) {
        this.regionName = regionName;
        return this;
    };
    Gs2Region.prototype.withRegionName = function (regionName) {
        this.regionName = regionName;
        return this;
    };
    Gs2Region.prototype.getStatus = function () {
        return this.status;
    };
    Gs2Region.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    Gs2Region.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    Gs2Region.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Gs2Region()
            .withRegionName(data["regionName"])
            .withStatus(data["status"]);
    };
    Gs2Region.prototype.toDict = function () {
        return {
            "regionName": this.getRegionName(),
            "status": this.getStatus(),
        };
    };
    return Gs2Region;
}());
exports.default = Gs2Region;
//# sourceMappingURL=Gs2Region.js.map