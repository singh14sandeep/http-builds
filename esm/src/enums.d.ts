/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 */
export declare enum RequestMethod {
    Get = 0,
    Post = 1,
    Put = 2,
    Delete = 3,
    Options = 4,
    Head = 5,
    Patch = 6,
}
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 */
export declare enum ReadyState {
    Unsent = 0,
    Open = 1,
    HeadersReceived = 2,
    Loading = 3,
    Done = 4,
    Cancelled = 5,
}
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 */
export declare enum ResponseType {
    Basic = 0,
    Cors = 1,
    Default = 2,
    Error = 3,
    Opaque = 4,
}
/**
 * Supported content type to be automatically associated with a {@link Request}.
 */
export declare enum ContentType {
    NONE = 0,
    JSON = 1,
    FORM = 2,
    FORM_DATA = 3,
    TEXT = 4,
    BLOB = 5,
    ARRAY_BUFFER = 6,
}
