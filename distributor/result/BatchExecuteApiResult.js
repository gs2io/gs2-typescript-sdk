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
var BatchExecuteApiResult = /** @class */ (function () {
    function BatchExecuteApiResult() {
        this.results = null;
    }
    BatchExecuteApiResult.prototype.getResults = function () {
        return this.results;
    };
    BatchExecuteApiResult.prototype.setResults = function (results) {
        this.results = results;
        return this;
    };
    BatchExecuteApiResult.prototype.withResults = function (results) {
        this.results = results;
        return this;
    };
    BatchExecuteApiResult.fromDict = function (data) {
        return new BatchExecuteApiResult()
            .withResults(data.results ?
            data.results.map(function (item) {
                return Gs2Distributor.BatchResultPayload.fromDict(item);
            }) : null);
    };
    BatchExecuteApiResult.prototype.toDict = function () {
        return {
            "results": this.getResults() ?
                this.getResults().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return BatchExecuteApiResult;
}());
exports.default = BatchExecuteApiResult;
//# sourceMappingURL=BatchExecuteApiResult.js.map