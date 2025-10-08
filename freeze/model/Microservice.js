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
var Microservice = /** @class */ (function () {
    function Microservice() {
        this.name = null;
        this.version = null;
    }
    Microservice.prototype.getName = function () {
        return this.name;
    };
    Microservice.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Microservice.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Microservice.prototype.getVersion = function () {
        return this.version;
    };
    Microservice.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    Microservice.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    Microservice.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Microservice()
            .withName(data["name"])
            .withVersion(data["version"]);
    };
    Microservice.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "version": this.getVersion(),
        };
    };
    return Microservice;
}());
exports.default = Microservice;
//# sourceMappingURL=Microservice.js.map