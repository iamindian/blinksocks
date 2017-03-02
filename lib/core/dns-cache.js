'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.DNSCache=exports.DNS_SURVIVAL_TIME=undefined;var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i['return'])_i['return']()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr)){return arr}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i)}else{throw new TypeError('Invalid attempt to destructure non-iterable instance')}}}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _dns=require('dns');var _dns2=_interopRequireDefault(_dns);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}}return step('next')})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var DNS_SURVIVAL_TIME=exports.DNS_SURVIVAL_TIME=3600000;var DNSCache=exports.DNSCache=function(){function DNSCache(){_classCallCheck(this,DNSCache);this._pool={}}_createClass(DNSCache,[{key:'_now',value:function _now(){return new Date().getTime()}},{key:'_lookup',value:function _lookup(hostname){return new Promise(function(resolve,reject){_dns2.default.lookup(hostname,function(err,address){if(err){reject(err)}else{resolve(address)}})})}},{key:'_put',value:function _put(hostname,address){var expire=this._now()+DNS_SURVIVAL_TIME;this._pool[hostname]=[address,expire]}},{key:'get',value:function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark(function _callee(hostname){var address,_pool$hostname,addr,expire;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:address=null;if(!(typeof this._pool[hostname]==='undefined')){_context.next=8;break}_context.next=4;return this._lookup(hostname);case 4:address=_context.sent;this._put(hostname,address);_context.next=11;break;case 8:_pool$hostname=_slicedToArray(this._pool[hostname],2),addr=_pool$hostname[0],expire=_pool$hostname[1];if(this._now()>=expire){delete this._pool[hostname]}address=addr;case 11:return _context.abrupt('return',address);case 12:case'end':return _context.stop();}}},_callee,this)}));function get(_x){return _ref.apply(this,arguments)}return get}()}],[{key:'create',value:function create(){return new DNSCache}}]);return DNSCache}();