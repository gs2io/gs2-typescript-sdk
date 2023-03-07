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
var Content_1 = tslib_1.__importDefault(require("./Content"));
var View = /** @class */ (function () {
    function View() {
        this.contents = null;
        this.removeContents = null;
    }
    View.prototype.getContents = function () {
        return this.contents;
    };
    View.prototype.setContents = function (contents) {
        this.contents = contents;
        return this;
    };
    View.prototype.withContents = function (contents) {
        this.contents = contents;
        return this;
    };
    View.prototype.getRemoveContents = function () {
        return this.removeContents;
    };
    View.prototype.setRemoveContents = function (removeContents) {
        this.removeContents = removeContents;
        return this;
    };
    View.prototype.withRemoveContents = function (removeContents) {
        this.removeContents = removeContents;
        return this;
    };
    View.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new View()
            .withContents(data.contents ?
            data.contents.map(function (item) {
                return Content_1.default.fromDict(item);
            }) : [])
            .withRemoveContents(data.removeContents ?
            data.removeContents.map(function (item) {
                return Content_1.default.fromDict(item);
            }) : []);
    };
    View.prototype.toDict = function () {
        return {
            "contents": this.getContents() ?
                this.getContents().map(function (item) {
                    return item.toDict();
                }) : [],
            "removeContents": this.getRemoveContents() ?
                this.getRemoveContents().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return View;
}());
exports.default = View;
//# sourceMappingURL=View.js.map