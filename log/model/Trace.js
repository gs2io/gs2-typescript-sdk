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
var Gs2Log = tslib_1.__importStar(require("../../log/model"));
var Trace = /** @class */ (function () {
    function Trace() {
        this.traceId = null;
        this.spans = null;
        this.truncated = null;
    }
    Trace.prototype.getTraceId = function () {
        return this.traceId;
    };
    Trace.prototype.setTraceId = function (traceId) {
        this.traceId = traceId;
        return this;
    };
    Trace.prototype.withTraceId = function (traceId) {
        this.traceId = traceId;
        return this;
    };
    Trace.prototype.getSpans = function () {
        return this.spans;
    };
    Trace.prototype.setSpans = function (spans) {
        this.spans = spans;
        return this;
    };
    Trace.prototype.withSpans = function (spans) {
        this.spans = spans;
        return this;
    };
    Trace.prototype.getTruncated = function () {
        return this.truncated;
    };
    Trace.prototype.setTruncated = function (truncated) {
        this.truncated = truncated;
        return this;
    };
    Trace.prototype.withTruncated = function (truncated) {
        this.truncated = truncated;
        return this;
    };
    Trace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Trace()
            .withTraceId(data["traceId"])
            .withSpans(data.spans ?
            data.spans.map(function (item) {
                return Gs2Log.LogEntry.fromDict(item);
            }) : null)
            .withTruncated(data["truncated"]);
    };
    Trace.prototype.toDict = function () {
        return {
            "traceId": this.getTraceId(),
            "spans": this.getSpans() ?
                this.getSpans().map(function (item) {
                    return item.toDict();
                }) : null,
            "truncated": this.getTruncated(),
        };
    };
    return Trace;
}());
exports.default = Trace;
//# sourceMappingURL=Trace.js.map