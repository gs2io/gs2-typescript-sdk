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
var Gs2Log = tslib_1.__importStar(require("../model"));
var GetTraceResult = /** @class */ (function () {
    function GetTraceResult() {
        this.trace = null;
        this.parallels = null;
        this.parallelTruncated = null;
    }
    GetTraceResult.prototype.getTrace = function () {
        return this.trace;
    };
    GetTraceResult.prototype.setTrace = function (trace) {
        this.trace = trace;
        return this;
    };
    GetTraceResult.prototype.withTrace = function (trace) {
        this.trace = trace;
        return this;
    };
    GetTraceResult.prototype.getParallels = function () {
        return this.parallels;
    };
    GetTraceResult.prototype.setParallels = function (parallels) {
        this.parallels = parallels;
        return this;
    };
    GetTraceResult.prototype.withParallels = function (parallels) {
        this.parallels = parallels;
        return this;
    };
    GetTraceResult.prototype.getParallelTruncated = function () {
        return this.parallelTruncated;
    };
    GetTraceResult.prototype.setParallelTruncated = function (parallelTruncated) {
        this.parallelTruncated = parallelTruncated;
        return this;
    };
    GetTraceResult.prototype.withParallelTruncated = function (parallelTruncated) {
        this.parallelTruncated = parallelTruncated;
        return this;
    };
    GetTraceResult.fromDict = function (data) {
        return new GetTraceResult()
            .withTrace(Gs2Log.Trace.fromDict(data["trace"]))
            .withParallels(data.parallels ?
            data.parallels.map(function (item) {
                return Gs2Log.Trace.fromDict(item);
            }) : null)
            .withParallelTruncated(data["parallelTruncated"]);
    };
    GetTraceResult.prototype.toDict = function () {
        var _a;
        return {
            "trace": (_a = this.getTrace()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "parallels": this.getParallels() ?
                this.getParallels().map(function (item) {
                    return item.toDict();
                }) : null,
            "parallelTruncated": this.getParallelTruncated(),
        };
    };
    return GetTraceResult;
}());
exports.default = GetTraceResult;
//# sourceMappingURL=GetTraceResult.js.map