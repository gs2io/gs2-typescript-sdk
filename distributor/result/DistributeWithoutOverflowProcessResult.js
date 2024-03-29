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
var tslib_1 = require("tslib");
var Gs2Distributor = tslib_1.__importStar(require("../model"));
var DistributeWithoutOverflowProcessResult = /** @class */ (function () {
    function DistributeWithoutOverflowProcessResult() {
        this.distributeResource = null;
        this.result = null;
    }
    DistributeWithoutOverflowProcessResult.prototype.getDistributeResource = function () {
        return this.distributeResource;
    };
    DistributeWithoutOverflowProcessResult.prototype.setDistributeResource = function (distributeResource) {
        this.distributeResource = distributeResource;
        return this;
    };
    DistributeWithoutOverflowProcessResult.prototype.withDistributeResource = function (distributeResource) {
        this.distributeResource = distributeResource;
        return this;
    };
    DistributeWithoutOverflowProcessResult.prototype.getResult = function () {
        return this.result;
    };
    DistributeWithoutOverflowProcessResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    DistributeWithoutOverflowProcessResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    DistributeWithoutOverflowProcessResult.fromDict = function (data) {
        return new DistributeWithoutOverflowProcessResult()
            .withDistributeResource(Gs2Distributor.DistributeResource.fromDict(data["distributeResource"]))
            .withResult(data["result"]);
    };
    DistributeWithoutOverflowProcessResult.prototype.toDict = function () {
        var _a;
        return {
            "distributeResource": (_a = this.getDistributeResource()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "result": this.getResult(),
        };
    };
    return DistributeWithoutOverflowProcessResult;
}());
exports.default = DistributeWithoutOverflowProcessResult;
//# sourceMappingURL=DistributeWithoutOverflowProcessResult.js.map