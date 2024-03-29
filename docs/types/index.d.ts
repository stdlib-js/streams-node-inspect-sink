/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="node"/>

import { Writable } from 'stream';

/**
* Interface defining stream options.
*/
interface Options {
	/**
	* Specifies whether a stream should operate in object mode (default: `false`).
	*/
	objectMode?: boolean;

	/**
	* Specifies the `Buffer` level for when `write()` starts returning `false`.
	*/
	highWaterMark?: number;

	/**
	* Specifies whether to encode strings as `Buffer` objects before writing data to a returned stream (default: true).
	*/
	decodeStrings?: boolean;

	/**
	* Default encoding when not explicitly specified when writing data (default: 'utf-8').
	*/
	defaultEncoding?: string;
}

/**
* Callback function invoked upon receiving data.
*/
type Nullary = () => void;

/**
* Callback function invoked upon receiving data.
*
* @param chunk - data chunk
*/
type Unary = ( chunk: any ) => void;

/**
* Callback function invoked upon receiving data.
*
* @param chunk - data chunk
* @param idx - chunk index
*/
type Binary = ( chunk: any, idx: number ) => void;

/**
* Callback function invoked upon receiving data.
*
* @param chunk - data chunk
* @param idx - chunk index
*/
type Callback = Nullary | Unary | Binary;

/**
* Interface defining a stream constructor which is both "newable" and "callable".
*/
interface Constructor {
	/**
	* Inspect stream constructor.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.decodeStrings - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream (default: true)
	* @param options.defaultEncoding - default encoding when not explicitly specified when writing data (default: 'utf-8')
	* @param clbk - callback to invoke upon receiving data
	* @throws must provide valid options
	* @returns inspect stream
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var InspectSinkStream = inspectSinkStream;
	* var stream = new InspectSinkStream( {}, log );
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	*
	* stream.end();
	*
	* // prints: index: 0
	* // prints: a
	* // prints: index: 1
	* // prints: b
	* // prints: index: 2
	* // prints: c
	*/
	new( options: Options, clbk: Callback ): Writable; // newable

	/**
	* Inspect stream constructor.
	*
	* @param clbk - callback to invoke upon receiving data
	* @throws must provide valid options
	* @returns inspect stream
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var InspectSinkStream = inspectSinkStream;
	* var stream = new InspectSinkStream( log );
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	*
	* stream.end();
	*
	* // prints: index: 0
	* // prints: a
	* // prints: index: 1
	* // prints: b
	* // prints: index: 2
	* // prints: c
	*/
	new( clbk: Callback ): Writable; // newable

	/**
	* Inspect stream constructor.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.decodeStrings - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream (default: true)
	* @param options.defaultEncoding - default encoding when not explicitly specified when writing data (default: 'utf-8')
	* @param clbk - callback to invoke upon receiving data
	* @throws must provide valid options
	* @returns inspect stream
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var stream = inspectSinkStream( {}, log );
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	*
	* stream.end();
	*
	* // prints: index: 0
	* // prints: a
	* // prints: index: 1
	* // prints: b
	* // prints: index: 2
	* // prints: c
	*/
	( options: Options, clbk: Callback ): Writable; // callable

	/**
	* Inspect stream constructor.
	*
	* @param clbk - callback to invoke upon receiving data
	* @throws must provide valid options
	* @returns inspect stream
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var stream = inspectSinkStream( log );
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	*
	* stream.end();
	*
	* // prints: index: 0
	* // prints: a
	* // prints: index: 1
	* // prints: b
	* // prints: index: 2
	* // prints: c
	*/
	( clbk: Callback ): Writable; // callable

	/**
	* Creates a reusable inspect stream factory.
	*
	* @param options - stream options
	* @param options.objectMode - specifies whether the stream should operate in object mode (default: false)
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.decodeStrings - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream (default: true)
	* @param options.defaultEncoding - default encoding when not explicitly specified when writing data (default: 'utf-8')
	* @returns inspect stream factory
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var opts = {
	*     'objectMode': true,
	*     'highWaterMark': 64
	* };
	*
	* var factory = inspectSinkStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory( log ) );
	* }
	*/
	factory( options?: Options ): ( clbk: Callback ) => Writable;

	/**
	* Returns an inspect stream with `objectMode` set to `true`.
	*
	* @param options - stream options
	* @param options.highWaterMark - specifies the `Buffer` level for when `write()` starts returning `false`
	* @param options.decodeStrings - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream (default: true)
	* @param options.defaultEncoding - default encoding when not explicitly specified when writing data (default: 'utf-8')
	* @param clbk - callback to invoke upon receiving data
	* @throws must provide valid options
	* @returns inspect stream
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var stream = inspectSinkStream.objectMode( {}, log );
	*
	* stream.write( {'value': 'a'} );
	* stream.write( {'value': 'b'} );
	* stream.write( {'value': 'c'} );
	*
	* stream.end();
	*
	* // prints: 'index: 0'
	* // prints: {'value': 'a'}
	* // prints: 'index: 1'
	* // prints: {'value': 'b'}
	* // prints: 'index: 2'
	* // prints: {'value': 'c'}
	*/
	objectMode( options: Options, clbk: Callback ): Writable;

	/**
	* Returns an inspect stream with `objectMode` set to `true`.
	*
	* @param clbk - callback to invoke upon receiving data
	* @returns inspect stream
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var stream = inspectSinkStream.objectMode( log );
	*
	* stream.write( {'value': 'a'} );
	* stream.write( {'value': 'b'} );
	* stream.write( {'value': 'c'} );
	*
	* stream.end();
	*
	* // prints: 'index: 0'
	* // prints: {'value': 'a'}
	* // prints: 'index: 1'
	* // prints: {'value': 'b'}
	* // prints: 'index: 2'
	* // prints: {'value': 'c'}
	*/
	objectMode( clbk: Callback ): Writable;
}

/**
* Returns an inspect sink stream.
*
* @param options - stream options
* @throws must provide valid options
* @returns stream instance
*
* @example
* function log( chunk, idx ) {
*     console.log( 'index: %d', idx );
*     console.log( chunk );
* }
*
* var InspectSinkStream = inspectSinkStream;
* var stream = new InspectSinkStream( {}, log );
*
* stream.write( 'a' );
* stream.write( 'b' );
* stream.write( 'c' );
*
* stream.end();
*
* // prints: index: 0
* // prints: a
* // prints: index: 1
* // prints: b
* // prints: index: 2
* // prints: c
*
* @example
* function log( chunk, idx ) {
*     console.log( 'index: %d', idx );
*     console.log( chunk );
* }
*
* var opts = {
*     'objectMode': true,
*     'highWaterMark': 64
* };
*
* var factory = inspectSinkStream.factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( factory( log ) );
* }
*
* @example
* function log( chunk, idx ) {
*     console.log( 'index: %d', idx );
*     console.log( chunk );
* }
*
* var stream = inspectSinkStream.objectMode( {}, log );
*
* stream.write( {'value': 'a'} );
* stream.write( {'value': 'b'} );
* stream.write( {'value': 'c'} );
*
* stream.end();
*
* // prints: 'index: 0'
* // prints: {'value': 'a'}
* // prints: 'index: 1'
* // prints: {'value': 'b'}
* // prints: 'index: 2'
* // prints: {'value': 'c'}
*/
declare var inspectSinkStream: Constructor;


// EXPORTS //

export = inspectSinkStream;
