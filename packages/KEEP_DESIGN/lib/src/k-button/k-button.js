"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue"),o=require("../utils/create.js");require("./style/index.css");const l=t.defineComponent({name:"k-button",props:{type:{type:String,required:!1}},emits:["click"],setup(u,{emit:n,slots:e}){const r=o.cln("button",[u.type]);function c(){n("click")}return()=>t.createVNode("button",{class:r,onClick:c},[e.default?e.default():"default"])}});exports.default=l;