(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),o=n.n(i),s=(n(90),n(11),n(2)),c=n(22),l=n.n(c),u=n(1),h=n(14),m=n.n(h),p=n(43),f=n.n(p);function d(){var e=Object(s.a)(["\n      @media (max-width: ","px) {\n        ",";\n      }\n    "]);return d=function(){return e},e}function g(){var e=Object(s.a)(["\n      @media (min-width: ","px) {\n        ",";\n      }\n    "]);return g=function(){return e},e}var b={small:639,medium:1047,large:1048},v=Object.keys(b).reduce(function(e,t){return"large"===t?(e[t]=function(){return Object(u.css)(g(),b[t],u.css.apply(void 0,arguments))},e):("large"!==t&&(e[t]=function(){return Object(u.css)(d(),b[t],u.css.apply(void 0,arguments))}),e)},{});function y(){var e=Object(s.a)(['\n  font-family: "Helvetiva", sans-serif;\n  font-weight: 100;\n  padding: 5px\n  border-radius: 3px;\n  border: 1px outset black;\n  margin: 10px\n  background-color: white\n  color: black;\n  opacity: 1;\n  font-size: 1.6rem;\n  cursor: pointer;\n  transition: transform 200ms ease-in-out;\n  &:hover {\n    transform: scale(1.2);\n    /* font-weight: 200; */\n    /* text-decoration: underline; */\n  }\n']);return y=function(){return e},e}function w(){var e=Object(s.a)(["\n  padding: 0px 0px;\n  display: flex;\n  flex-direction: row;\n"]);return w=function(){return e},e}function k(){var e=Object(s.a)(["\n  max-width: 1200px;\n  padding-left: 4%;\n  display: flex;\n  flex-direction: row;\n"]);return k=function(){return e},e}function x(){var e=Object(s.a)(["\n    display: none;\n  "]);return x=function(){return e},e}function E(){var e=Object(s.a)(["\n  /* width: 50vw; */\n  align-items: center;\n  background-color: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0px 4%;\n  margin: 0px;\n  position: relative;\n  .active {\n    font-size: 200px;\n  }\n  ",";\n"]);return E=function(){return e},e}var O=u.default.div(E(),v.small(x())),j=u.default.div(k()),S=u.default.div(w()),_=u.default.div(y()),T=function(e){var t=document.getElementById("menu");e.status===f.a.STATUS_FIXED?(t.style.boxShadow="0 0 30px 0 rgba(0,0,0,0.05)",t.style.borderBottom="1px solid #efefef",t.style.backgroundColor="rgba(255,255,255, 0.98)"):(t.style.boxShadow="none",t.style.borderBottom="none",t.style.backgroundColor="rgba(255,255,255, 0)")},B=function(){return r.a.createElement(f.a,{enabled:!0,innerZ:100,onStateChange:T},r.a.createElement(O,{id:"menu"},r.a.createElement(j,null,r.a.createElement(S,null,r.a.createElement(_,{onClick:function(){m()(document.querySelector("#demo"))}},"demo"),r.a.createElement(_,{onClick:function(){m()(document.querySelector("#team"))}},"team"),r.a.createElement(_,{onClick:function(){return m()(document.querySelector("#footer"))}},r.a.createElement("a",{id:"nounderline",href:"mailto:info@nomnomnom.ai"},"contact"))))))};function C(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  transition: transform 300ms ease-in-out;\n  &:hover {\n    transform: rotate(20deg);\n  }\n']);return C=function(){return e},e}function R(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  background: white;\n  width: 80%;\n']);return R=function(){return e},e}function M(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  text-align: justify;\n  color: black;\n  padding: 1em;\n  margin-bottom: 0px;\n']);return M=function(){return e},e}var N=u.default.h4(M()),z=u.default.div(R()),L=u.default.div(C()),D={marginTop:"5%",padding:"5%",height:"100%"},W=function(){return r.a.createElement(z,{style:D,className:"introBox"},r.a.createElement("center",null,r.a.createElement(L,null,r.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo",width:"20%"}))),r.a.createElement(N,null,r.a.createElement("p",null,r.a.createElement("em",null,"NOMNOMNOM")," is innovating the field of recommendations.",r.a.createElement("br",null),"We're exploring Taste Profiles by applying cutting edge ML techniques.",r.a.createElement("br",null),r.a.createElement("br",null),"Preview the personalised Discovery engine below.",r.a.createElement("br",null),r.a.createElement("br",null),"Interested? ",r.a.createElement("a",{href:"mailto:info@nomnomnom.ai"},"Send us an email!"))),r.a.createElement(B,null))},I=n(5),G=n(6),A=n(8),F=n(7),U=n(9),V=n(3),q=n(16);function H(){var e=Object(s.a)(["\n  margin-left: 5%;\n  margin-right: 5%;\n  font-size: 1.5em\n  display: inline-block;\n  transition: transform 200ms ease-in-out;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return H=function(){return e},e}function J(){var e=Object(s.a)(["\n  padding-left: 0em;\n  padding-right: 0em;\n  padding-bottom: 1em;\n  padding-top: 0em;\n  background: white;\n\n  border-radius: 10px;\n  border: 2px solid Seashell;\n  box-shadow: 2px 2px 2px Gainsboro;\n  shadowopacity: 0.1;\n"]);return J=function(){return e},e}function Z(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  font-size: 0.6em;\n  color: black;\n  height: 1.5em;\n']);return Z=function(){return e},e}function K(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: bold;\n  text-align: center;\n  color: black;\n  font-size: 0.5em;\n  height: 5em;\n']);return K=function(){return e},e}function P(){var e=Object(s.a)(['\n  outline: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 0.7em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 1em;\n  padding: 0.25em;\n  border-radius: 10px;\n  :hover {\n    background: MistyRose;\n  }\n  box-shadow: 2px 2px 2px Gainsboro;\n  shadowopacity: 0.1;\n']);return P=function(){return e},e}function Q(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-style: slim;\n  font-weight: 300;\n  font-size: 0.8em;\n  text-align: center;\n  color: black;\n  min-height: 2em;\n  max-height: 2em;\n']);return Q=function(){return e},e}var X=u.default.h1(Q()),Y=u.default.button(P()),$=u.default.h6(K()),ee=u.default.h6(Z()),te=u.default.section(J()),ne=u.default.span(H()),ae=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(A.a)(this,Object(F.a)(t).call(this,e))).state={active:!1,preference:1,didMount:!1},n.restName=e.title,n.restName.length>25&&(n.restName=n.restName.substring(0,25)+"..."),n}return Object(U.a)(t,e),Object(G.a)(t,[{key:"changeZero",value:function(){0===this.state.preference?this.setState({preference:1}):this.setState({preference:0})}},{key:"changeTwo",value:function(){2===this.state.preference?this.setState({preference:1}):this.setState({preference:2})}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({didMount:!0})},0),setTimeout(function(){e.setState({preference:1})},0),this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this.setState({preference:1}),this._isMounted=!1}},{key:"componentWillUpdate",value:function(e,t){t.preference!==this.state.preference&&this.props.prefChange(t.preference)}},{key:"handleActive",value:function(){this.setState({active:!0})}},{key:"makeResevation",value:function(){this.props.reservation()}},{key:"render",value:function(){var e=this,t=this.state.didMount;return r.a.createElement(te,{className:"fade-in ".concat(t&&"visible"),onMouseEnter:function(){return e.handleActive()},onMouseLeave:function(){return e.setState({active:!1})},id:"entry_wrapper"},r.a.createElement(V.Image,{height:"190px",width:"100%",borderRadius:10,margin:0,src:this.props.image,alt:"logo"}),r.a.createElement(X,null,this.restName),r.a.createElement($,null,this.props.cuisine.toString().replace(/,/g," \u2022 "),1===this.props.specific[0]||1===this.props.specific[1]?" \u2022 ":"",r.a.createElement("green",null,this.props.specific[0]?"Vegan\ud83c\udf31 ":"\n"," "),1===this.props.specific[0]&&1===this.props.specific[1]?" \u2022 ":"",r.a.createElement("green",null,this.props.specific[1]?" Vegetarian\ud83c\udf31 ":"\n"," "),1===this.props.specific[2]||1===this.props.specific[3]?" \u2022 ":"",this.props.specific[2]?" \ud83c\udf77\ud83c\udf7a ":"\n",1===this.props.specific[2]&&1===this.props.specific[3]?" \u2022 ":"",this.props.specific[3]?" Outdoor-seating\u2600\ufe0f\u26f1\ufe0f ":"\n",1===this.props.specific[3]&&1===this.props.specific[4]?" \u2022 ":"",this.props.specific[4]?" Halal ":"\n",1===this.props.specific[4]&&1===this.props.specific[5]?" \u2022 ":"",this.props.specific[5]?" Kosher ":"\n"),r.a.createElement(ee,null,"\u20ac",0|this.props.price_min," ~ \u20ac",0|this.props.price_max),r.a.createElement(ee,null,"~",this.props.distance/.28|0," minutes \ud83d\udeb2 away"),r.a.createElement(V.Flex,{justifyContent:["center","left"],flexDirection:"row",flexWrap:"wrap"}),!0!==this.props.reservation&&r.a.createElement(V.Flex,{id:"demo",flexWrap:"wrap",width:"100%"},r.a.createElement(V.Box,{p:[1],width:[.5]},r.a.createElement(ne,{id:"emo0",onClick:function(){return e.changeZero()},style:{transform:0===this.state.preference?"scale(1.5)":"scale(1)"}},"\ud83d\ude12")),r.a.createElement(V.Box,{p:[1],width:[.5]},r.a.createElement(ne,{id:"emo2",onClick:function(){return e.changeTwo()},style:{transform:2===this.state.preference?"scale(1.5)":"scale(1)"}},"\ud83d\ude0d")),r.a.createElement(Y,{style:{width:"100%"},onClick:this.makeResevation.bind(this)},"Make Reservation")))}}]),t}(r.a.Component),re=n(75);n(179);function ie(){var e=Object(s.a)(["\n  font-size: 2.5em;\n"]);return ie=function(){return e},e}function oe(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  font-size: 0.6em;\n  color: black;\n  margin-top: 0px;\n  margin-bottom: 0px;\n']);return oe=function(){return e},e}function se(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  text-align: center;\n  color: black;\n  font-size: 0.5em;\n  height: 5em;\n']);return se=function(){return e},e}function ce(){var e=Object(s.a)(['\n  outline: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 0.7em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 1em;\n  padding: 0.25em;\n  border-radius: 10px;\n  :hover {\n    background: MistyRose;\n  }\n  box-shadow: 2px 2px 2px Gainsboro;\n  shadowopacity: 0.1;\n']);return ce=function(){return e},e}function le(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-style: slim;\n  font-weight: 300;\n  font-size: 0.8em;\n  text-align: center;\n  color: black;\n']);return le=function(){return e},e}var ue=u.default.h1(le()),he=u.default.button(ce()),me=u.default.h6(se()),pe=u.default.h6(oe()),fe={paddingLeft:"0em",paddingRight:"0em",paddingBottom:"0em",paddingTop:"0em",marginTop:"0em",background:"white",borderRadius:"10px"},de=u.default.span(ie()),ge=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(A.a)(this,Object(F.a)(t).call(this,e))).state={active:!1,preference:1,didMount:!1},n.restName=e.title,n.restName.length>25&&(n.restName=n.restName.substring(0,25)+"..."),n}return Object(U.a)(t,e),Object(G.a)(t,[{key:"changeZero",value:function(){console.log("swipe set dislike"),0===this.state.preference?this.setState({preference:1}):this.setState({preference:0})}},{key:"changeTwo",value:function(){console.log("swipe set like"),2===this.state.preference?this.setState({preference:1}):this.setState({preference:2})}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({didMount:!0})},0),setTimeout(function(){e.setState({preference:1})},0),this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this.setState({preference:1}),this._isMounted=!1}},{key:"componentWillUpdate",value:function(e,t){t.preference!==this.state.preference&&this.props.prefChange(t.preference)}},{key:"handleActive",value:function(){this.setState({active:!0})}},{key:"makeResevation",value:function(){this.props.reservation()}},{key:"render",value:function(){var e=this;this.state.didMount;return r.a.createElement(re.SwipeableListItem,{style:{marginTop:"0px"},swipeLeft:{content:r.a.createElement("span",{style:{fontSize:"3em"}},"\ud83d\ude0d"),action:function(){return e.changeTwo()}},swipeRight:{content:r.a.createElement("span",{style:{fontSize:"3em"}},"\ud83d\ude12"),action:function(){return e.changeZero()}}},r.a.createElement(V.Flex,{flexWrap:"wrap",style:fe},r.a.createElement(V.Box,{p:[1],width:[1]},r.a.createElement(ue,null,this.restName)),r.a.createElement(V.Box,{p:[1],width:[.25]},r.a.createElement(V.Image,{position:"relative",width:"100%",height:"100px",borderRadius:10,margin:0,src:this.props.image,alt:"logo"})),r.a.createElement(V.Box,{p:[1],width:[.5]},r.a.createElement(me,{style:{marginTop:"0px",height:"50px"}},this.props.cuisine.toString().replace(/,/g," \u2022 "),1===this.props.specific[0]||1===this.props.specific[1]?" \u2022 ":"",r.a.createElement("green",null,this.props.specific[0]?"Vegan\ud83c\udf31 ":"\n"," "),1===this.props.specific[0]&&1===this.props.specific[1]?" \u2022 ":"",r.a.createElement("green",null,this.props.specific[1]?" Vegetarian\ud83c\udf31 ":"\n"," "),1===this.props.specific[2]||1===this.props.specific[3]?" \u2022 ":"",this.props.specific[2]?" \ud83c\udf77\ud83c\udf7a ":"\n",1===this.props.specific[2]&&1===this.props.specific[3]?" \u2022 ":"",this.props.specific[3]?" Outdoor-seating\u2600\ufe0f\u26f1\ufe0f ":"\n",1===this.props.specific[3]&&1===this.props.specific[4]?" \u2022 ":"",this.props.specific[4]?" Halal ":"\n",1===this.props.specific[4]&&1===this.props.specific[5]?" \u2022 ":"",this.props.specific[5]?" Kosher ":"\n"),1==this.state.preference&&r.a.createElement("div",null,r.a.createElement(pe,null,"\u20ac",0|this.props.price_min," ~ \u20ac",0|this.props.price_max),r.a.createElement(pe,null,"~",this.props.distance/.28|0," minutes \ud83d\udeb2 away")),r.a.createElement(de,null,0===this.state.preference&&"\ud83d\ude12"),r.a.createElement(de,null,2===this.state.preference&&"\ud83d\ude0d")),r.a.createElement(V.Box,{p:[1],height:[.25],style:{marginTop:"0px"}},r.a.createElement(he,{style:{marginTop:"0px",width:"100%",height:"100px"},onClick:this.makeResevation.bind(this)},"B",r.a.createElement("br",null),"o",r.a.createElement("br",null),"o",r.a.createElement("br",null),"k"))))}}]),t}(r.a.Component);function be(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  color: black;\n  font-size: 0.7em;\n  height: 5em;\n']);return be=function(){return e},e}function ve(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-style: slim;\n  font-weight: 300;\n  font-size: 1em;\n  text-align: center;\n  color: black;\n  min-height: 2em;\n  max-height: 2em;\n']);return ve=function(){return e},e}var ye=u.default.h1(ve()),we=u.default.h6(be()),ke=function(e){function t(e){return Object(I.a)(this,t),Object(A.a)(this,Object(F.a)(t).call(this,e))}return Object(U.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.restaurant,n={};n.reservation=t.name,n.filters=this.props.filters,n.history=this.props.history,this.get_response=function(e){e.ok&&console.log(e.json()),console.log("Network response was not ok.")},fetch("http://nomOkt5.diux6a5vrk.eu-west-2.elasticbeanstalk.com/feedback",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(t){return e.get_response(t)})}},{key:"render",value:function(){var e=this.props.restaurant;return r.a.createElement(V.Flex,{width:"100%",align:"left"},r.a.createElement(V.Box,{p:[1],width:[1,.25]},r.a.createElement(ae,{title:e.name,cuisine:e.cuisine,price:e.price_min,image:e.z_image,specific:[e.vegan,e.vegetarisch,e.alcohol,e.outside],type:[e.Type_Ontbijt,e.Type_Brunch,e.Type_Lunch,e.Type_Diner],reservation:!0})),r.a.createElement(V.Box,{p:[1,10],m:[1,5],width:[1,.75]},r.a.createElement(ye,null,"You've chosen ",r.a.createElement("b",null,e.name),"!"),r.a.createElement(ye,null,"Which is located at ",r.a.createElement("br",null)," ",r.a.createElement("i",null,e.adress),"!"),r.a.createElement(we,{style:{marginLeft:"20%",marginRight:"20%"}},"In beta stage we'll not be able to redirect you yet, but please go ahead and enjoy your food there:)",r.a.createElement("br",null),r.a.createElement("br",null),"As we're still testing the concept and user experience, please fill out this form:")))}}]),t}(r.a.Component);function xe(){var e=Object(s.a)(['\n  /* outline: none; */\n  border: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 1em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 0.1em;\n  width: 100%;\n  padding: 0.25em 1em;\n  border-radius: 10px;\n  border: 2px solid Seashell;\n  :hover {\n    background: Seashell;\n  }\n']);return xe=function(){return e},e}function Ee(){var e=Object(s.a)(['\n  outline: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 1em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 20px;\n  :hover {\n    background: Seashell;\n  }\n']);return Ee=function(){return e},e}function Oe(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  background: white;\n']);return Oe=function(){return e},e}function je(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  font-size: 0.5em;\n  text-align: center;\n  color: black;\n']);return je=function(){return e},e}function Se(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  font-size: 1em;\n  text-align: center;\n  color: black;\n']);return Se=function(){return e},e}var _e=u.default.h2(Se()),Te=(u.default.h2(je()),{padding:"5%",height:"100%",marginLeft:"5%",marginright:"5%",width:"80%"}),Be={padding:"0%",width:"100%",height:"100%",marginLeft:"0%",marginright:"0%",justifyContent:"center"},Ce=u.default.div(Oe()),Re=u.default.button(Ee()),Me=u.default.button(xe()),Ne={marginBottom:"10%",width:"40%",opacity:"0.1"},ze={marginBottom:"0%",width:"40%"},Le=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(A.a)(this,Object(F.a)(t).call(this,e))).state={list:{},show:!1,show_load:!0,reservation:!1,round:n.props.round},n}return Object(U.a)(t,e),Object(G.a)(t,[{key:"makeComponents",value:function(){var e=this,t=[];console.log(String(this.state.round)+String(this.cycle));for(var n=function(n){var a=String(e.state.round)+String(e.cycle)+String(n),i=e.state.list[n];1!=q.isMobile?t.push(r.a.createElement(ae,{key:a,index:n,prefChange:function(t){e.preferences[n]=t},title:i.name,cuisine:i.cuisine,price_min:i.price_min,price_max:i.price_max,priceAvg:i.price_avg,distance:i.distance,image:i.z_image,specific:[i.vegan,i.vegetarisch,i.alcohol,i.outside,i.halal,i.kosher],type:[i.Type_Ontbijt,i.Type_Brunch,i.Type_Lunch,i.Type_Diner],reservation:function(t){e._isMounted&&e.setState({reservation:n,show:!1})},pref:e.state.show})):t.push(r.a.createElement(ge,{key:a,index:n,prefChange:function(t){e.preferences[n]=t},title:i.name,cuisine:i.cuisine,price_min:i.price_min,price_max:i.price_max,priceAvg:i.price_avg,distance:i.distance,image:i.z_image,specific:[i.vegan,i.vegetarisch,i.alcohol,i.outside,i.halal,i.kosher],type:[i.Type_Ontbijt,i.Type_Brunch,i.Type_Lunch,i.Type_Diner],reservation:function(t){e._isMounted&&e.setState({reservation:n,show:!1})},pref:e.state.show}))},a=0;a<5;a++)n(a);return t}},{key:"componentDidMount",value:function(){this.preferences={},this._isMounted=!0,this.cycle=0,this.reservoir={},this.makeComponents=this.makeComponents.bind(this),this.clickNextRestaurant=this.clickNextRestaurant.bind(this),this.clickNextRestaurant()}},{key:"componentWillUnmount",value:function(){console.log("component unmounted"),this._isMounted=!1}},{key:"componentWillUpdate",value:function(e,t){if(!1!==t.reservation&&!1===this.state.reservation){this.reservoir[this.cycle]=this.state.list;for(var n=0;n<this.reservoir[this.cycle].length;n++);}}},{key:"clickNextRestaurant",value:function(){for(var e=this,t=[],n=0;n<this.state.list.length;n++)t[n]={},t[n].id=this.state.list[n].id,t[n].preference=this.preferences[n];0!==Object.entries(t).length&&(this.reservoir[this.cycle]=t,this.cycle+=1),this.setState({reservoir:this.reservoir}),m()(document.querySelector("#cards_view")),this.get_response=function(e){if(e.ok)return this.setState({show_load:!0}),e.json();console.log("Network response was not ok.")},this.unpack_response=function(e){this.numberRestaurants=e.stats,e=e.restaurants;var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t},this.update_state=function(e){this.setState({list:e}),this.components=this.makeComponents(this.state);for(var t=0;t<Object.entries(this.state.list).length;t+=1)this.preferences[t]=1;this.setState({show_load:!1}),this.setState({show:!0}),m()(document.querySelector("#cards_view"))};var a={};a.filters=this.props.filters,a.history=this.reservoir,fetch("http://nomOkt5.diux6a5vrk.eu-west-2.elasticbeanstalk.com/restaurant",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(t){return e.get_response(t)}).then(function(t){return e.unpack_response(t)}).then(function(t){return e.update_state(t)})}},{key:"reactThis",value:function(e){this.props.setRound(),this.props.setFilters(!1),this.setState({reservation:!1}),e.preventDefault()}},{key:"render",value:function(){var e=this.props.filters,t=this.props.filters.maxTime;for(var n in delete e.show,e)if(1===e[n]&&"range"!==n)var a=n;return r.a.createElement(Ce,{id:"introbox",style:q.isMobile?Be:Te,className:"introBox"},r.a.createElement(V.Flex,{id:"demo",flexWrap:"wrap",width:"100%",style:{marginBottom:50}},0==q.isMobile&&r.a.createElement(V.Box,{p:[1],align:"center",width:[1/3]},r.a.createElement("img",{src:l.a,alt:"logo",style:ze})),r.a.createElement(V.Box,{p:[1],width:[1,1/3]},r.a.createElement(_e,null,"Discovering ",this.numberRestaurants," ",r.a.createElement("b",null,a)," places within ",r.a.createElement("b",null,t)," minutes \ud83d\udeb2"),r.a.createElement(Re,{onClick:this.reactThis.bind(this)}," Go Back ")),r.a.createElement(V.Box,{id:"cards_view",p:2,width:1,align:"center",ref:"umountable"},r.a.createElement(V.Box,{p:[1],width:[1]},this.state.show_load&&r.a.createElement("img",{src:l.a,className:"fadein",alt:"logo",style:Ne}))),!1!==this.state.reservation&&r.a.createElement(ke,{cycle:this.state.round,restaurant:this.state.list[this.state.reservation],history:this.state.reservoir,filters:this.props.filters}),this.state.show&&r.a.createElement(V.Box,{className:"basket",p:[1],width:[1,.5,.2]},this.components[0]),this.state.show&&r.a.createElement(V.Box,{className:"basket",p:[1],width:[1,.5,.2]},this.components[1]),this.state.show&&r.a.createElement(V.Box,{className:"basket",p:[1],width:[1,.5,.2]},this.components[2]),this.state.show&&r.a.createElement(V.Box,{className:"basket",p:[1],width:[1,.5,.2]},this.components[3]),this.state.show&&r.a.createElement(V.Box,{className:"basket",p:[1],width:[1,.5,.2]},this.components[4]),!1===this.state.reservation?r.a.createElement(Me,{onClick:this.clickNextRestaurant},"\ud83d\udc49 Next restaurants \ud83d\udc48"):" "))}}]),t}(r.a.Component),De=n(76),We=n.n(De),Ie=(n(183),n(23));function Ge(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  width: 80%;\n  height: "400px";\n']);return Ge=function(){return e},e}var Ae={width:"80%",height:"400px"},Fe=u.default.div(Ge()),Ue=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(A.a)(this,Object(F.a)(t).call(this,e))).state={lat:52.3667,lng:4.8945,latLng:[52.3667,4.8945],key:!1},n}return Object(U.a)(t,e),Object(G.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({key:!1})}},{key:"changeMarker",value:function(e,t,n,a,r){this.props.latLngChange([n.latLng.lat(),n.latLng.lng()])}},{key:"render",value:function(){var e=this;return r.a.createElement(Fe,null,r.a.createElement(Ie.Map,{google:this.props.google,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1,zoom:13.1,style:Ae,initialCenter:{lat:this.state.lat,lng:this.state.lng},onClick:function(t,n,a,r,i){return e.changeMarker(t,n,a,r,i)}},r.a.createElement(Ie.Marker,{position:{lat:this.props.latLng[0],lng:this.props.latLng[1]}},r.a.createElement(Ie.InfoWindow,{visible:!0},r.a.createElement("h4",null,"Something is there!")))))}}]),t}(r.a.Component),Ve=Object(Ie.GoogleApiWrapper)({apiKey:"AIzaSyBJIlVWE-dlLpokGxhwaHBQyFCOtbvVicw"})(Ue);function qe(){var e=Object(s.a)(['\n  outline: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 1em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 20px;\n  :hover {\n    background: Seashell;\n  }\n']);return qe=function(){return e},e}function He(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  background: white;\n  width: 100%;\n']);return He=function(){return e},e}function Je(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-style: slim;\n  font-weight: 300;\n  font-size: 1em;\n  text-align: center;\n  color: black;\n']);return Je=function(){return e},e}function Ze(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n  padding: 20px;\n']);return Ze=function(){return e},e}var Ke=u.default.h2(Ze()),Pe=u.default.h1(Je()),Qe=u.default.div(He()),Xe=u.default.button(qe()),Ye={marginBottom:"420px"},$e={marginLeft:"35%",paddingBottom:"5%"},et=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(A.a)(this,Object(F.a)(t).call(this,e))).handleOnChange=function(e){0===e&&(n.maxTime=5),1===e&&(n.maxTime=15),2===e&&(n.maxTime=30),3===e&&(n.maxTime=60),n.range=e,n.setState({range:e,maxTime:n.maxTime})},n.state={show:!1,breakfast:-1,lunch:-1,dinner:-1,drinks:-1,range:1,maxTime:15,latLng:[52.3667,4.8945]},n.maxTime=10,n.range=1,n}return Object(U.a)(t,e),Object(G.a)(t,[{key:"handleSubmit",value:function(e){this.props.setFilters(this.state),e.preventDefault()}},{key:"render",value:function(){var e=this;this.state.range;return r.a.createElement(Qe,null,r.a.createElement(Ke,null," Welcome to NOMNOMNOM restaurant discovery"),r.a.createElement(Pe,null,r.a.createElement("em",null,"What do you feel like?")),r.a.createElement(Xe,{onClick:function(){return e.setState({breakfast:-1*e.state.breakfast,lunch:-1,dinner:-1,drinks:-1})},style:{transform:1===this.state.breakfast?"scale(1.3)":"scale(1)",background:1===this.state.breakfast?"DarkOrange":"snow"}},"breakfast"),r.a.createElement(Xe,{onClick:function(){return e.setState({lunch:-1*e.state.lunch,breakfast:-1,dinner:-1,drinks:-1})},style:{transform:1===this.state.lunch?"scale(1.3)":"scale(1)",background:1===this.state.lunch?"LightGreen":"snow"}},"lunch"),r.a.createElement(Xe,{onClick:function(){return e.setState({dinner:-1*e.state.dinner,lunch:-1,breakfast:-1,drinks:-1})},style:{transform:1===this.state.dinner?"scale(1.3)":"scale(1)",background:1===this.state.dinner?"LightSkyBlue":"snow"}},"dinner"),r.a.createElement(Xe,{onClick:function(){return e.setState({drinks:-1*e.state.drinks,lunch:-1,dinner:-1,breakfast:-1})},style:{transform:1===this.state.drinks?"scale(1.3)":"scale(1)",background:1===this.state.drinks?"Plum":"snow"}},"drinks"),r.a.createElement("div",null,r.a.createElement(Xe,{style:{background:"white"},onClick:this.handleSubmit.bind(this)},"Submit")),r.a.createElement("div",{style:Ye},r.a.createElement("center",null,r.a.createElement(Ve,{latLng:this.state.latLng,latLngChange:function(t){e.setState({latLng:t})}}))),r.a.createElement("div",{style:$e},r.a.createElement("div",{style:{width:"50%"}},r.a.createElement(Pe,null,"\ud83d\udeb2 ride ",60!=this.maxTime&&" < "," ",this.maxTime," ",60==this.maxTime&&" + "," minutes"),r.a.createElement(We.a,{min:0,max:3,step:1,value:this.range,orientation:"horizontal",onChange:this.handleOnChange,tooltip:!1}))))}}]),t}(r.a.Component),tt=n(77),nt=n.n(tt),at=n(78),rt=n.n(at);function it(){var e=Object(s.a)(['\n  /* outline: none; */\n  border: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 0.5em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 0.1em;\n  width: 20%;\n  padding: 0.25em 1em;\n  border-radius: 10px;\n  border: 2px solid Seashell;\n  :hover {\n    background: Seashell;\n  }\n']);return it=function(){return e},e}function ot(){var e=Object(s.a)(['\n  outline: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 1.5em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 20px;\n  :hover {\n    background: Seashell;\n  }\n']);return ot=function(){return e},e}function st(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-style: slim;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n']);return st=function(){return e},e}function ct(){var e=Object(s.a)(["\n  justify-content: center;\n  background: white;\n  width: 100%;\n  marginleft: 5%;\n"]);return ct=function(){return e},e}function lt(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  font-size: 1em;\n  text-align: center;\n  color: black;\n']);return lt=function(){return e},e}var ut=u.default.h5(lt()),ht=u.default.div(ct()),mt={marginTop:"5%",padding:"5%",width:"80%"},pt=u.default.h2(st()),ft=u.default.button(ot()),dt=(u.default.button(it()),function(e){var t=e.color;return r.a.createElement("hr",{style:{color:t,backgroundColor:"white",height:.5}})}),gt=function(e){function t(e){return Object(I.a)(this,t),Object(A.a)(this,Object(F.a)(t).call(this,e))}return Object(U.a)(t,e),Object(G.a)(t,[{key:"handleSubmit",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(ht,{style:mt},r.a.createElement(pt,null,"How to play the NOMNOM restaurant discovery game?"),r.a.createElement(V.Flex,{width:"100%",flexWrap:"wrap",style:{justifyContent:"center"}},r.a.createElement(V.Box,{p:[1],width:[.5]},r.a.createElement(V.Box,{p:[1],width:[1]},r.a.createElement(V.Image,{height:"100px",width:"100px",borderRadius:10,margin:0,src:nt.a,alt:"instruction1"})),r.a.createElement("span",null," \ud83d\ude12"),r.a.createElement("span",{style:{fontSize:"2em"}}," \ud83d\ude0d")),r.a.createElement(V.Box,{p:[1],width:[.5]},r.a.createElement(ut,null,"Click the \ud83d\ude0d if this restaurant is what you'd be into")),r.a.createElement(V.Box,{p:[1],width:[.75]},r.a.createElement(dt,{color:"black"})),r.a.createElement(V.Box,{p:[1],width:[.5]},r.a.createElement(ut,null,"Click the \ud83d\ude12 if this restaurant is not what you're looking for")),r.a.createElement(V.Box,{p:[1],width:[.5]},r.a.createElement(V.Box,{p:[1],width:[1]},r.a.createElement(V.Image,{height:"100px",width:"100px",borderRadius:10,margin:0,src:rt.a,alt:"instruction1"})),r.a.createElement("span",{style:{fontSize:"2em"}}," \ud83d\ude12"),r.a.createElement("span",null," \ud83d\ude0d")),r.a.createElement(V.Box,{p:[1],width:[.75]},r.a.createElement(dt,{color:"black"})),r.a.createElement(ut,{style:{textAlign:"center"}},"Our machine learning magic will help you navigate to your perfect match"),r.a.createElement(V.Box,{p:[1],width:[1]},r.a.createElement("center",null,r.a.createElement(ft,{style:{background:"white"},onClick:function(){return e.props.instructionsDone()}},"Start!")))))}}]),t}(r.a.Component);function bt(){var e=Object(s.a)(['\n  justify-content: "center";\n  alignitems: "center";\n  background: white;\n  width: 100%;\n']);return bt=function(){return e},e}function vt(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  color: black;\n  font-size: 0.5em;\n  height: 5em;\n']);return vt=function(){return e},e}var yt={justifyContent:"center",marginTop:"5%",marginLeft:"0%",marginright:"0%",paddingTop:"0%",paddingLeft:"0%",paddingRight:"0%",height:"100%"},wt=(u.default.h6(vt()),u.default.div(bt())),kt=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(A.a)(this,Object(F.a)(t).call(this,e))).state={filters:!1,instructionsDone:!1,round:0},n}return Object(U.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(wt,{style:yt},this.state.filters?this.state.instructionsDone?r.a.createElement(Le,{key:this.state.round,filters:this.state.filters,setRound:function(){return e.setState({round:e.state.round+1})},setFilters:function(t){return e.setState({filters:t})},round:this.state.round}):r.a.createElement(gt,{instructionsDone:function(){return e.setState({instructionsDone:!0})}}):r.a.createElement("div",null,r.a.createElement(et,{setFilters:function(t){return e.setState({filters:t})},tester:this.state.filters})))}}]),t}(r.a.Component),xt=n(79),Et=n.n(xt),Ot=n(80),jt=n.n(Ot),St=n(81),_t=n.n(St),Tt=n(82),Bt=n.n(Tt);function Ct(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  background: white;\n  width: 80%;\n']);return Ct=function(){return e},e}function Rt(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  font-size: 1em;\n  text-align: center;\n  color: black;\n']);return Rt=function(){return e},e}function Mt(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n']);return Mt=function(){return e},e}var Nt=u.default.h2(Mt()),zt=u.default.h2(Rt()),Lt={marginTop:"5%",padding:"5%",height:"100%"},Dt=u.default.div(Ct()),Wt={marginBottom:"0%",borderRadius:"10px",height:"200px"},It=function(e){function t(){return Object(I.a)(this,t),Object(A.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement(Dt,{id:"introbox",style:Lt,className:"introBox"},r.a.createElement(V.Flex,{id:"team",flexWrap:"wrap",width:"100%",style:{marginBottom:"0px"}},r.a.createElement(V.Box,{p:2,width:1,align:"center",ref:"umountable"},r.a.createElement(Nt,null,"Team")),r.a.createElement(V.Box,{p:[1],width:[1,.5]},r.a.createElement(V.Image,{src:Et.a,style:Wt}),r.a.createElement(zt,null,"Hugo Evers, ",r.a.createElement("em",null,"The Visionary"))),r.a.createElement(V.Box,{p:[1],width:[1,.5]},r.a.createElement(V.Image,{src:Bt.a,style:Wt}),r.a.createElement(zt,null,"Lucas Berndsen, ",r.a.createElement("em",null,"The Scientist"))),r.a.createElement(V.Box,{p:[1],width:[1,.5]},r.a.createElement(V.Image,{src:jt.a,style:Wt}),r.a.createElement(zt,null,"Mark Tensen, ",r.a.createElement("em",null,"The Macgyver"))),r.a.createElement(V.Box,{p:[1],width:[1,.5]},r.a.createElement(V.Image,{src:_t.a,style:Wt}),r.a.createElement(zt,null,"Dani\xebl Koudijs, ",r.a.createElement("em",null,"The Operator")))))}}]),t}(r.a.Component);var Gt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(kt,null),r.a.createElement(W,null),r.a.createElement(It,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Gt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,n){e.exports=n.p+"static/media/logo_sq.68594f70.png"},77:function(e,t,n){e.exports=n.p+"static/media/papedie.a4940e85.png"},78:function(e,t,n){e.exports=n.p+"static/media/poepedie.877f15d1.png"},79:function(e,t,n){e.exports=n.p+"static/media/team_hugo.e01c60eb.png"},80:function(e,t,n){e.exports=n.p+"static/media/team_mark.73d401f2.png"},81:function(e,t,n){e.exports=n.p+"static/media/team_daniel.ab023b14.png"},82:function(e,t,n){e.exports=n.p+"static/media/team_lucas.d12687b7.png"},85:function(e,t,n){e.exports=n(196)},90:function(e,t,n){}},[[85,1,2]]]);
//# sourceMappingURL=main.324b09f3.chunk.js.map