function e(e){return e&&e.__esModule?e.default:e}var t,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof r&&r&&r.Object===Object&&r,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,r){var n,i,o,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function S(e){return c=e,u=setTimeout(h,t),l?b(e):a}function j(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-c>=o}function h(){var e=g();if(j(e))return x(e);u=setTimeout(h,function(e){var r=t-(e-f);return s?m(r,o-(e-c)):r}(e))}function x(e){return u=void 0,v&&n?b(e):(n=i=void 0,a)}function T(){var e=g(),r=j(e);if(n=arguments,i=this,f=e,r){if(void 0===u)return S(f);if(s)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,p(r)&&(l=!!r.leading,o=(s="maxWait"in r)?d(y(r.maxWait)||0,t):o,v="trailing"in r?!!r.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,n=f=i=u=void 0},T.flush=function(){return void 0===u?a:x(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var r=o.test(e);return r||a.test(e)?u(e.slice(2),r?2:8):i.test(e)?NaN:+e}t=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),v(e,t,{leading:n,maxWait:t,trailing:i})};var b={save:(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}};const S={form:document.querySelector(".js-feadback-form"),input:document.querySelector(".js-feadback-form input"),textarea:document.querySelector(".js-feadback-form textarea")},j={email:"",message:""};function h(){return b("feedback-form-state"),S.input.value=serializedState.email,S.textarea.value=serializedState.message,j.email=serializedState.email,j.message=serializedState.message,serializedState}S.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===j.email)return;if(""===j.message)return;console.log(h()),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),j.email="",j.message=""})),S.form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,b("feedback-form-state",j)}),500)),h();
//# sourceMappingURL=03-feedback.39083d50.js.map