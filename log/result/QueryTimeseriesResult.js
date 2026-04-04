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
var QueryTimeseriesResult = /** @class */ (function () {
    function QueryTimeseriesResult() {
        this.items = null;
        this.timeseriesMetadata = null;
        this.nextPageToken = null;
    }
    QueryTimeseriesResult.prototype.getItems = function () {
        return this.items;
    };
    QueryTimeseriesResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    QueryTimeseriesResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    QueryTimeseriesResult.prototype.getTimeseriesMetadata = function () {
        return this.timeseriesMetadata;
    };
    QueryTimeseriesResult.prototype.setTimeseriesMetadata = function (timeseriesMetadata) {
        this.timeseriesMetadata = timeseriesMetadata;
        return this;
    };
    QueryTimeseriesResult.prototype.withTimeseriesMetadata = function (timeseriesMetadata) {
        this.timeseriesMetadata = timeseriesMetadata;
        return this;
    };
    QueryTimeseriesResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    QueryTimeseriesResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    QueryTimeseriesResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    QueryTimeseriesResult.fromDict = function (data) {
        return new QueryTimeseriesResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Log.TimeseriesPoint.fromDict(item);
            }) : null)
            .withTimeseriesMetadata(Gs2Log.TimeseriesMetadata.fromDict(data["timeseriesMetadata"]))
            .withNextPageToken(data["nextPageToken"]);
    };
    QueryTimeseriesResult.prototype.toDict = function () {
        var _a;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeseriesMetadata": (_a = this.getTimeseriesMetadata()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return QueryTimeseriesResult;
}());
exports.default = QueryTimeseriesResult;
//# sourceMappingURL=QueryTimeseriesResult.js.map