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
var grnFormat = "grn:gs2:{region}:{ownerId}:seasonRating:{namespaceName}:session:{sessionName}";
var MatchSession = /** @class */ (function () {
    function MatchSession() {
        this.sessionId = null;
        this.name = null;
        this.createdAt = null;
        this.revision = null;
    }
    MatchSession.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{sessionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MatchSession.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{sessionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MatchSession.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{sessionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MatchSession.getSessionName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{sessionName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MatchSession.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getSessionName(grn) == null || this.getSessionName(grn) === '') {
            return false;
        }
        return true;
    };
    MatchSession.createGrn = function (region, ownerId, namespaceName, sessionName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{sessionName}', sessionName !== null && sessionName !== void 0 ? sessionName : '');
    };
    MatchSession.prototype.getSessionId = function () {
        return this.sessionId;
    };
    MatchSession.prototype.setSessionId = function (sessionId) {
        this.sessionId = sessionId;
        return this;
    };
    MatchSession.prototype.withSessionId = function (sessionId) {
        this.sessionId = sessionId;
        return this;
    };
    MatchSession.prototype.getName = function () {
        return this.name;
    };
    MatchSession.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MatchSession.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MatchSession.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    MatchSession.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MatchSession.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    MatchSession.prototype.getRevision = function () {
        return this.revision;
    };
    MatchSession.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    MatchSession.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    MatchSession.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchSession()
            .withSessionId(data["sessionId"])
            .withName(data["name"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    MatchSession.prototype.toDict = function () {
        return {
            "sessionId": this.getSessionId(),
            "name": this.getName(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return MatchSession;
}());
exports.default = MatchSession;
//# sourceMappingURL=MatchSession.js.map