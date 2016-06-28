/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ReadyState, RequestMethod, ResponseType } from './enums';
import { Headers } from './headers';
import { Request } from './static_request';
import { URLSearchParams } from './url_search_params';
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 */
export declare abstract class ConnectionBackend {
    abstract createConnection(request: any): Connection;
}
/**
 * Abstract class from which real connections are derived.
 */
export declare abstract class Connection {
    readyState: ReadyState;
    request: Request;
    response: any;
}
/** An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request. */
export declare abstract class XSRFStrategy {
    abstract configureRequest(req: Request): void;
}
/**
 * Interface for options to construct a RequestOptions, based on
 * [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
 */
export interface RequestOptionsArgs {
    url?: string;
    method?: string | RequestMethod;
    search?: string | URLSearchParams;
    headers?: Headers;
    body?: any;
    withCredentials?: boolean;
}
/**
 * Required structure when constructing new Request();
 */
export interface RequestArgs extends RequestOptionsArgs {
    url: string;
}
/**
 * Interface for options to construct a Response, based on
 * [ResponseInit](https://fetch.spec.whatwg.org/#responseinit) from the Fetch spec.
 */
export declare type ResponseOptionsArgs = {
    body?: string | Object | FormData;
    status?: number;
    statusText?: string;
    headers?: Headers;
    type?: ResponseType;
    url?: string;
};
