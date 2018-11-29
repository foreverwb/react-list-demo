(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t,a){e.exports=a(389)},378:function(e,t,a){},383:function(e,t,a){},385:function(e,t,a){},389:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(19),l=a(22),i=a(20),s=a(21),c=a(1),o=a.n(c),u=a(9),p=a.n(u),m=a(41),d=a(173),h=a(404),g=a(402),f=a(401),b=a(58),E=a(193),y=a(42),v=a(391),O=a(10),j=a(393),S=a(394),k=f.a.Item,C={labelCol:{span:8},wrapperCol:{span:16}};function w(e,t){var a={};return t.forEach(function(t){t in e&&(a[t]=e[t])}),a}var I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).renderElement=a.renderElement.bind(Object(m.a)(Object(m.a)(a))),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"getMeta",value:function(){var e=this.props.meta;return e.elements?e:{elements:[e]}}},{key:"renderElement",value:function(e){var t=this.getMeta(),a=e.tooltip?o.a.createElement("span",null,e.label,o.a.createElement(v.a,{title:e.tooltip}," ",o.a.createElement(O.a,{type:"question-circle-o"}))):e.label,n=Object(y.a)({key:e.key,colon:t.colon},t.formItemLayout||(e.label?C:null),{label:a},w(e,["help","extra","labelCol","wrapperCol","colon","hasFeedback","validateStatus","hasFeedback"]),e.formItemProps);if(e.render)return e.render.call(this,{formItemProps:n,element:e,disabled:this.props.disabled});var r=e.rules||[];e.required&&(r=Object(E.a)(r).concat([{required:!0,message:"".concat(e.label||e.key,"\u5fc5\u586b\u9879.")}]));var l=Object(y.a)({},w(e,["getValueFromEvent","initialValue","normalize","trigger","valuePropName","validateTrigger","validateFirst"]),{rules:r},e.fieldProps),i=e.widgetProps||{},s=Object(y.a)({},w(e,["placeholder","type","className","class"]),i,{disabled:e.disabled||i.disabled||this.props.disabled});e.id;var c=this.props.form.getFieldDecorator;return o.a.createElement(k,n,c(e.id||e.key,l)(o.a.createElement(e.widget,s,e.children||null)))}},{key:"renderLayout",value:function(e){var t=this.props.meta.columns||1;if(1===t)return e;for(var a=this.props.meta.gutter||0,n=[],r=24/t,l=0;l<e.length;l+=t){for(var i=[],s=0;s<t;s+=1)i.push(o.a.createElement(j.a,{key:s,span:r.toString()},e[l+s]));n.push(o.a.createElement(S.a,{key:l,gutter:a},i))}return n}},{key:"render",value:function(){return this.renderLayout(this.getMeta().elements.map(this.renderElement))}}]),t}(c.Component);I.defaultProps={disabled:!1,one:!1};var P=I,L=d.a.Option,F=[{value:"male",displayName:"Male"},{value:"female",displayName:"Female"}].map(function(e){return o.a.createElement(L,{key:e.value,value:e.value},e.displayName)}),x={colon:!0,columns:1,elements:[{key:"userName",label:"User name",tooltip:"user name",widget:h.a,required:!0},{key:"password",label:"Password",widget:h.a,type:"password"},{key:"date",label:"Birth date",widget:g.a,widgetProps:{style:{width:"100%"}}},{key:"gender",label:"Gender",initialValue:"female",widget:d.a,children:F},{key:"phone",label:"Phone",widget:h.a,required:!0,rules:[{pattern:/^\d+$/,message:"Phone must only contain numbers."},{min:11,message:"Phone number at least lenght of 11"}]},{key:"email",label:"Email",widget:h.a,rules:[{type:"email",message:"Please input valid email address."}]}]},N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).resetForm=a.resetForm.bind(Object(m.a)(Object(m.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"resetForm",value:function(){this.props.form.resetFields()}},{key:"handleSubmit",value:function(e){e&&e.preventDefault(),this.props.form.validateFieldsAndScroll(function(e,t){e||console.log("Submit form: ",t)})}},{key:"render",value:function(){return o.a.createElement(f.a,{layout:"horizontal",style:{width:"500px"},onSubmit:this.handleSubmit},o.a.createElement(P,{meta:x,form:this.props.form}),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit"),"\xa0 \xa0",o.a.createElement(b.a,{onClick:this.resetForm},"Reset")))}}]),t}(c.Component),_=f.a.create()(N),U=a(72),M=a(397),z=a(398),D={items:[],byId:{},page:1,pageSize:3,total:0,fetchListPending:!1,fetchListError:null,listNeedReload:!1},T=a(184),R=a(44),V=a(396),Y=a(395),H=a(400),q=a(390),B=a(137),A=a.n(B);function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(n){return n({type:"FETCH_LIST_BEGIN"}),new Promise(function(r,l){A.a.get("https://reqres.in/api/users?page=".concat(e,"&per_page=").concat(t,"&q=").concat(a)).then(function(a){n({type:"FETCH_LIST_SUCCESS",data:{items:a.data.data,page:e,pageSize:t,total:a.data.total}}),r(a)},function(e){n({type:"FETCH_LIST_ERROR",data:{error:e}}),l(e)})})}}function J(e){return function(t){return t({type:"FETCH_USER_BEGIN"}),new Promise(function(a,n){A.a.get("https://reqres.in/api/users/".concat(e)).then(function(e){t({type:"FETCH_USER_SUCCESS",data:e.data}),a(e)},function(e){t({type:"FETCH_USER_ERROR",data:{error:e}}),n(e)})})}}var K=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={search:""},a.handlePageChange=function(e){a.props.history.push("/list-page/".concat(e))},a.handleSearch=function(e){var t=a.props.list,n=t.page,r=t.pageSize;a.props.fetchList(n,r,e)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.page||1;this.fetchData(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params.page||1;(e.match.params.page||1)===t||this.props.list.fetchListPending||this.fetchData(t)}},{key:"fetchData",value:function(e){this.props.fetchList(e)}},{key:"getDataSource",value:function(){var e=this.props.list,t=e.items,a=e.byId;return t?t.map(function(e){return a[e]}):[]}},{key:"getColumns",value:function(){return[{title:"First Name",dataIndex:"first_name",key:"first_name",width:"200px",render:function(e,t){return o.a.createElement(Y.a,{to:"/user/".concat(t.id)},e)}},{title:"Last Name",dataIndex:"last_name",key:"last_name",width:"200px"}]}},{key:"render",value:function(){var e=this;if(!this.props.list.items)return"loading...";var t=this.props.list,a=t.page,n=t.total,r=t.pageSize;t.keyword;return o.a.createElement("div",null,o.a.createElement("h2",null,"User List"),o.a.createElement(h.a.Search,{style:{width:"200px"},value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onSearch:this.handleSearch}),o.a.createElement(H.a,{dataSource:this.getDataSource(),columns:this.getColumns(),style:{width:"400px"},rowKey:"id",loading:this.props.list.fetchListPending,pagination:!1}),o.a.createElement("br",null),o.a.createElement(q.a,{current:a,onChange:this.handlePageChange,total:n,pageSize:r}))}}]),t}(c.Component);var W=Object(V.a)(Object(U.b)(function(e){return{list:e}},function(e){return Object(R.b)({fetchList:G},e)})(K)),$=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getUser()||this.props.fetchUser(this.props.match.params.userId)}},{key:"getUser",value:function(){return this.props.userList.byId?this.props.userList.byId[this.props.match.params.userId]:null}},{key:"render",value:function(){var e=this.getUser();if(!e)return"loading...";var t=e.first_name,a=e.last_name;return o.a.createElement("div",{className:"detail-page"},o.a.createElement(Y.a,{to:"/list-page"},"Back"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("label",null,"First name"),o.a.createElement("span",null,t)),o.a.createElement("li",null,o.a.createElement("label",null,"Second name"),o.a.createElement("span",null,a))))}}]),t}(c.Component);var Q=Object(U.b)(function(e){return{userList:e}},function(e){return Object(R.b)({fetchUser:J},e)})($);a(378);var X=(0,a(380).createLogger)({collapsed:!0}),Z=Object(R.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LIST_BEGIN":return Object(y.a)({},e,{fetchListPending:!0,fetchListError:null});case"FETCH_LIST_SUCCESS":var a=[],n={};return t.data.items.forEach(function(e){a.push(e.id),n[e.id]=e}),Object(y.a)({},e,{byId:n,items:a,page:t.data.page,pageSize:t.data.pageSize,total:t.data.total,fetchListPending:!1,fetchListError:null});case"FETCH_LIST_ERROR":return Object(y.a)({},e,{fetchListPending:!1,fetchListError:t.data})}return e},{},Object(R.a)(T.a,X)),ee=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(U.a,{store:Z},o.a.createElement(M.a,null,o.a.createElement("div",{className:"list-page-app"},o.a.createElement(z.a,{path:"/list-page/:page?",component:W}),o.a.createElement(z.a,{path:"/user/:userId",component:Q}))))}}]),t}(o.a.Component),te=a(190),ae=a.n(te),ne=a(403),re=a(405),le={colon:!0,columns:1,elements:[{key:"email",label:"Email",widget:h.a}]},ie=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.form.setFieldsValue(this.props.allValues)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(P,{meta:le,form:this.props.form}))}}]),t}(c.Component),se={colon:!0,columns:1,elements:[{key:"userName",label:"\u7528\u6237\u540d",widget:h.a},{key:"password",label:"\u5bc6\u7801",widget:h.a,type:"password"},{key:"birthday",label:"\u751f\u65e5",widget:g.a}]},ce=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.form.setFieldsValue(this.props.allValues)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(P,{meta:se,form:this.props.form}))}}]),t}(c.Component),oe=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.allValues,t=e.email,a=e.userName,n=e.birthday;return o.a.createElement("div",null,o.a.createElement("div",{className:"wizard-finish-step"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("label",null,"Email:"),o.a.createElement("span",null,t)),o.a.createElement("li",null,o.a.createElement("label",null,"\u7528\u6237\u540d:"),o.a.createElement("span",null,a)),o.a.createElement("li",null,o.a.createElement("label",null,"\u751f\u65e5:"),o.a.createElement("span",null,n?n.format("M\u6708D\u65e5"):"")))))}}]),t}(c.Component),ue=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={allValues:{}},a.pushUrl=function(e){window.history.pushState(null,"","/#".concat(e)),a.forceUpdate()},a.handleNext=function(){console.log("form values:",a.props.form.getFieldsValue()),a.setState({allValues:Object(y.a)({},a.state.allValues,a.props.form.getFieldsValue())});var e=a.getCurrentStep();e<a.getSteps().length-1?a.pushUrl(a.getSteps()[e+1].path):ne.a.success({title:"\u63d0\u4ea4\u6210\u529f"})},a.handleBack=function(){var e=a.getCurrentStep();e>0&&a.pushUrl(a.getSteps()[e-1].path)},a.renderComponent=function(){var e=a.getSteps()[a.getCurrentStep()].component;return o.a.createElement(e,{form:a.props.form,allValues:a.state.allValues})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"getCurrentStep",value:function(){var e=document.location.hash.replace(/^#/,"");return ae.a.findIndex(this.getSteps(),{path:e})}},{key:"getSteps",value:function(){return[{title:"\u9a8c\u8bc1\u90ae\u4ef6",path:"/wizard/step/1",component:ie},{title:"\u8d26\u53f7\u4fe1\u606f",path:"/wizard/step/2",component:ce},{title:"\u5b8c\u6210",path:"/wizard/step/3",component:oe}]}},{key:"render",value:function(){var e=this;return/^#\/wizard\/step/.test(document.location.hash)?o.a.createElement(M.a,null,o.a.createElement(f.a,null,o.a.createElement("div",{style:{width:"600px"}},o.a.createElement("h1",null,"\u521b\u5efa\u8d26\u53f7"),o.a.createElement(re.a,{current:this.getCurrentStep()},this.getSteps().map(function(e){return o.a.createElement(re.a.Step,{key:e.title,title:e.title})})),o.a.createElement("div",{className:"step-container",style:{margin:"40px 0"}},o.a.createElement(z.a,{path:"/wizard/step/:stepId",render:this.renderComponent})),o.a.createElement("div",null,o.a.createElement(b.a,{disabled:0===this.getCurrentStep(),onClick:this.handleBack,style:{marginRight:"20px"}},"\u4e0a\u4e00\u6b65"),o.a.createElement(b.a,{onClick:this.handleNext,type:"primary"},this.getCurrentStep()===this.getSteps().length-1?"\u5b8c\u6210":"\u4e0b\u4e00\u6b65"))))):o.a.createElement(b.a,{type:"primary",onClick:function(){return e.pushUrl("/wizard/step/1")}},"\u521b\u5efa\u8d26\u53f7")}}]),t}(o.a.Component),pe=f.a.create()(ue);a(383);for(var me=[],de=0;de<10;de++)me.push("Item ".concat(de+1));var he=42,ge=function(e,t,a){return(e=e.slice()).splice(a,0,e.splice(t,1)[0]),e},fe=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={dragging:!1,draggingIndex:-1,startPageY:0,offsetPageY:0},a.handleMouseDown=function(e,t){a.setState({dragging:!0,startPageY:e.pageY,currentPageY:e.pageY,draggingIndex:t})},a.handleMouseUp=function(){a.setState({dragging:!1,startPageY:0,draggingIndex:-1})},a.handleMouseMove=function(e){var t=e.pageY-a.state.startPageY,n=a.state.draggingIndex;t>he&&n<a.state.list.length-1?(t-=he,a.setState({list:ge(a.state.list,n,n+1),draggingIndex:n+1,startPageY:a.state.startPageY+he})):t<-he&&n>0&&(t+=he,a.setState({list:ge(a.state.list,n,n-1),draggingIndex:n-1,startPageY:a.state.startPageY-he})),a.setState({offsetPageY:t})},a.getDraggingStyle=function(e){return e!==a.state.draggingIndex?{}:{backgroundColor:"#eee",transform:"translate(10px, ".concat(a.state.offsetPageY,"px)"),opacity:.5}},a.state={list:me},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"dnd-sample"},o.a.createElement("ul",null,this.state.list.map(function(t,a){return o.a.createElement("li",{key:t,onMouseDown:function(t){return e.handleMouseDown(t,a)},style:e.getDraggingStyle(a)},t)})),this.state.dragging&&o.a.createElement("div",{className:"dnd-sample-mask",onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp}))}}]),t}(c.Component),be=a(399),Ee=function(e){var t=e.match;return o.a.createElement("h1",null,"Sub Category ",t.params.subId)},ye=function(e){var t=e.match;return o.a.createElement("div",null,o.a.createElement("h2",null," Category ",t.params.id),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(Y.a,{to:"/category/".concat(t.params.id,"/sub/1")},"Sub Category 1")),o.a.createElement("li",null,o.a.createElement(Y.a,{to:"/category/".concat(t.params.id,"/sub/2")},"Sub Category 2")),o.a.createElement("li",null,o.a.createElement(Y.a,{to:"/category/".concat(t.params.id,"/sub/3")},"Sub Category 3"))),o.a.createElement("div",null,o.a.createElement(z.a,{path:"/category/:id/sub/subId",component:Ee})))},ve=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(be.a,null,o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(Y.a,{to:"/category/1"},"Category-1")),o.a.createElement("li",null,o.a.createElement(Y.a,{to:"/category/2"},"Category-2")),o.a.createElement("li",null,o.a.createElement(Y.a,{to:"/category/3"},"Category-3"))),o.a.createElement("div",null,o.a.createElement(z.a,{path:"/category/:id",component:ye}))))}}]),t}(c.Component),Oe=(a(385),a(387),{fontFamily:"sans-serif",paddingLeft:"260px"}),je={"list-page":ee,"wizard-sample":pe,"form-submit-antd":_,"dnd-sample":fe,"nested-route":ve},Se=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome to!"),o.a.createElement("p",null,"Click the left side menu to navigate."))},ke=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).handleLinkClick=function(e){window.history.pushState(null,"","/#/".concat(e)),a.forceUpdate()},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=document.location.hash.replace(/#\/?/,""),a=je[t]||Se;return t.match(/\/user\/\w+|\/list-page/)&&(a=ee),t.match(/\/wizard\/step\/\w+/)&&(a=pe),o.a.createElement("div",{style:Oe},o.a.createElement("ul",{className:"menu-list"},Object.keys(je).map(function(a){return o.a.createElement("li",{key:a,className:a===t?"is-avtice":"",style:{listStyle:"none"}},o.a.createElement("span",{className:"link",onClick:function(){return e.handleLinkClick(a)}},a))})),o.a.createElement("div",{style:{padding:"20px 0"}},o.a.createElement(a,null)))}}]),t}(o.a.PureComponent);p.a.render(o.a.createElement(ke,null),document.getElementById("root"))}},[[196,2,1]]]);
//# sourceMappingURL=main.e401e406.chunk.js.map