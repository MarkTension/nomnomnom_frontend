(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},192:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),o=n.n(i),s=(n(87),n(11),n(2)),c=n(22),l=n.n(c),u=n(1),h=n(14),m=n.n(h),f=n(43),p=n.n(f);function d(){var e=Object(s.a)(["\n      @media (max-width: ","px) {\n        ",";\n      }\n    "]);return d=function(){return e},e}function g(){var e=Object(s.a)(["\n      @media (min-width: ","px) {\n        ",";\n      }\n    "]);return g=function(){return e},e}var b={small:639,medium:1047,large:1048},v=Object.keys(b).reduce(function(e,t){return"large"===t?(e[t]=function(){return Object(u.css)(g(),b[t],u.css.apply(void 0,arguments))},e):("large"!==t&&(e[t]=function(){return Object(u.css)(d(),b[t],u.css.apply(void 0,arguments))}),e)},{});function y(){var e=Object(s.a)(['\n  font-family: "Helvetiva", sans-serif;\n  font-weight: 100;\n  padding: 5px\n  border-radius: 3px;\n  border: 1px outset black;\n  margin: 10px\n  background-color: white\n  color: black;\n  opacity: 1;\n  font-size: 1.6rem;\n  cursor: pointer;\n  transition: transform 200ms ease-in-out;\n  &:hover {\n    transform: scale(1.2);\n    /* font-weight: 200; */\n    /* text-decoration: underline; */\n  }\n']);return y=function(){return e},e}function k(){var e=Object(s.a)(["\n  padding: 0px 0px;\n  display: flex;\n  flex-direction: row;\n"]);return k=function(){return e},e}function w(){var e=Object(s.a)(["\n  max-width: 1200px;\n  padding-left: 4%;\n  display: flex;\n  flex-direction: row;\n"]);return w=function(){return e},e}function x(){var e=Object(s.a)(["\n    display: none;\n  "]);return x=function(){return e},e}function E(){var e=Object(s.a)(["\n  /* width: 50vw; */\n  align-items: center;\n  background-color: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0px 4%;\n  margin: 0px;\n  position: relative;\n  .active {\n    font-size: 200px;\n  }\n  ",";\n"]);return E=function(){return e},e}var j=u.default.div(E(),v.small(x())),O=u.default.div(w()),S=u.default.div(k()),_=u.default.div(y()),T=function(e){var t=document.getElementById("menu");e.status===p.a.STATUS_FIXED?(t.style.boxShadow="0 0 30px 0 rgba(0,0,0,0.05)",t.style.borderBottom="1px solid #efefef",t.style.backgroundColor="rgba(255,255,255, 0.98)"):(t.style.boxShadow="none",t.style.borderBottom="none",t.style.backgroundColor="rgba(255,255,255, 0)")},C=function(){return r.a.createElement(p.a,{enabled:!0,innerZ:100,onStateChange:T},r.a.createElement(j,{id:"menu"},r.a.createElement(O,null,r.a.createElement(S,null,r.a.createElement(_,{onClick:function(){m()(document.querySelector("#demo"))}},"demo"),r.a.createElement(_,{onClick:function(){m()(document.querySelector("#team"))}},"team"),r.a.createElement(_,{onClick:function(){return m()(document.querySelector("#footer"))}},r.a.createElement("a",{id:"nounderline",href:"mailto:info@nomnomnom.ai"},"contact"))))))};function B(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  transition: transform 300ms ease-in-out;\n  &:hover {\n    transform: rotate(20deg);\n  }\n']);return B=function(){return e},e}function R(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  background: white;\n  width: 80%;\n']);return R=function(){return e},e}function M(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  text-align: justify;\n  color: black;\n  padding: 1em;\n  margin-bottom: 0px;\n']);return M=function(){return e},e}var N=u.default.h4(M()),z=u.default.div(R()),D=u.default.div(B()),L={marginTop:"5%",padding:"5%",height:"100%"},W=function(){return r.a.createElement(z,{style:L,className:"introBox"},r.a.createElement("center",null,r.a.createElement(D,null,r.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo",width:"20%"}))),r.a.createElement(N,null,r.a.createElement("p",null,r.a.createElement("em",null,"NOMNOMNOM")," is innovating the field of recommendations.",r.a.createElement("br",null),"We're exploring Taste Profiles by applying cutting edge ML techniques.",r.a.createElement("br",null),r.a.createElement("br",null),"Preview the personalised Discovery engine below.",r.a.createElement("br",null),r.a.createElement("br",null),"Interested? ",r.a.createElement("a",{href:"mailto:info@nomnomnom.ai"},"Send us an email!"))),r.a.createElement(C,null))},G=n(5),I=n(6),F=n(8),A=n(7),U=n(9),V=n(3),q=n(16);function H(){var e=Object(s.a)(["\n  margin-left: 5%;\n  margin-right: 5%;\n  font-size: 1.5em\n  display: inline-block;\n  transition: transform 200ms ease-in-out;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return H=function(){return e},e}function J(){var e=Object(s.a)(["\n  padding-left: 0em;\n  padding-right: 0em;\n  padding-bottom: 1em;\n  padding-top: 0em;\n  background: white;\n\n  border-radius: 10px;\n  border: 2px solid Seashell;\n  box-shadow: 2px 2px 2px Gainsboro;\n  shadowopacity: 0.1;\n"]);return J=function(){return e},e}function Z(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  font-size: 0.6em;\n  color: black;\n  height: 1.5em;\n']);return Z=function(){return e},e}function K(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: bold;\n  text-align: center;\n  color: black;\n  font-size: 0.5em;\n  height: 5em;\n']);return K=function(){return e},e}function P(){var e=Object(s.a)(['\n  outline: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 0.7em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 1em;\n  padding: 0.25em;\n  border-radius: 10px;\n  :hover {\n    background: MistyRose;\n  }\n  box-shadow: 2px 2px 2px Gainsboro;\n  shadowopacity: 0.1;\n']);return P=function(){return e},e}function Y(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-style: slim;\n  font-weight: 300;\n  font-size: 0.8em;\n  text-align: center;\n  color: black;\n  min-height: 2em;\n  max-height: 2em;\n']);return Y=function(){return e},e}var Q=u.default.h1(Y()),X=u.default.button(P()),$=u.default.h6(K()),ee=u.default.h6(Z()),te=u.default.section(J()),ne=u.default.span(H()),ae=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(F.a)(this,Object(A.a)(t).call(this,e))).state={active:!1,preference:1,didMount:!1},n.restName=e.title,n.restName.length>25&&(n.restName=n.restName.substring(0,25)+"..."),n}return Object(U.a)(t,e),Object(I.a)(t,[{key:"changeZero",value:function(){0===this.state.preference?this.setState({preference:1}):this.setState({preference:0})}},{key:"changeTwo",value:function(){2===this.state.preference?this.setState({preference:1}):this.setState({preference:2})}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({didMount:!0})},0),setTimeout(function(){e.setState({preference:1})},0),this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this.setState({preference:1}),this._isMounted=!1}},{key:"componentWillUpdate",value:function(e,t){t.preference!==this.state.preference&&this.props.prefChange(t.preference)}},{key:"handleActive",value:function(){this.setState({active:!0})}},{key:"makeResevation",value:function(){this.props.reservation()}},{key:"render",value:function(){var e=this,t=this.state.didMount;return r.a.createElement(te,{className:"fade-in ".concat(t&&"visible"),onMouseEnter:function(){return e.handleActive()},onMouseLeave:function(){return e.setState({active:!1})},id:"entry_wrapper"},r.a.createElement(V.Image,{height:"190px",width:"100%",borderRadius:10,margin:0,src:this.props.image,alt:"logo"}),r.a.createElement(Q,null,this.restName),r.a.createElement($,null,this.props.cuisine.toString().replace(/,/g," \u2022 "),1===this.props.specific[0]||1===this.props.specific[1]?" \u2022 ":"",r.a.createElement("green",null,this.props.specific[0]?"Vegan\ud83c\udf31 ":"\n"," "),1===this.props.specific[0]&&1===this.props.specific[1]?" \u2022 ":"",r.a.createElement("green",null,this.props.specific[1]?" Vegetarian\ud83c\udf31 ":"\n"," "),1===this.props.specific[2]||1===this.props.specific[3]?" \u2022 ":"",this.props.specific[2]?" \ud83c\udf77\ud83c\udf7a ":"\n",1===this.props.specific[2]&&1===this.props.specific[3]?" \u2022 ":"",this.props.specific[3]?" Outdoor-seating\u2600\ufe0f\u26f1\ufe0f ":"\n",1===this.props.specific[3]&&1===this.props.specific[4]?" \u2022 ":"",this.props.specific[4]?" Halal ":"\n",1===this.props.specific[4]&&1===this.props.specific[5]?" \u2022 ":"",this.props.specific[5]?" Kosher ":"\n"),r.a.createElement(ee,null,"\u20ac",0|this.props.price_min," ~ \u20ac",0|this.props.price_max),r.a.createElement(ee,null,"~",this.props.distance/.28|0," minutes \ud83d\udeb2 away"),r.a.createElement(V.Flex,{justifyContent:["center","left"],flexDirection:"row",flexWrap:"wrap"}),!0!==this.props.reservation&&r.a.createElement(V.Flex,{id:"demo",flexWrap:"wrap",width:"100%"},r.a.createElement(V.Box,{p:[1],width:[.5]},r.a.createElement(ne,{id:"emo0",onClick:function(){return e.changeZero()},style:{transform:0===this.state.preference?"scale(1.5)":"scale(1)"}},"\ud83d\ude41")),r.a.createElement(V.Box,{p:[1],width:[.5]},r.a.createElement(ne,{id:"emo2",onClick:function(){return e.changeTwo()},style:{transform:2===this.state.preference?"scale(1.5)":"scale(1)"}},"\ud83d\ude0d")),r.a.createElement(X,{style:{width:"100%"},onClick:this.makeResevation.bind(this)},"Make Reservation")))}}]),t}(r.a.Component);function re(){var e=Object(s.a)(["\n  margin-left: 5%;\n  margin-right: 5%;\n  font-size: 1.5em;\n"]);return re=function(){return e},e}function ie(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  font-size: 0.6em;\n  color: black;\n  margin-top: 0px;\n  margin-bottom: 0px;\n']);return ie=function(){return e},e}function oe(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: bold;\n  text-align: center;\n  color: black;\n  font-size: 0.5em;\n  height: 5em;\n']);return oe=function(){return e},e}function se(){var e=Object(s.a)(['\n  outline: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 0.7em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 1em;\n  padding: 0.25em;\n  border-radius: 10px;\n  :hover {\n    background: MistyRose;\n  }\n  box-shadow: 2px 2px 2px Gainsboro;\n  shadowopacity: 0.1;\n']);return se=function(){return e},e}function ce(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-style: slim;\n  font-weight: 300;\n  font-size: 0.8em;\n  text-align: center;\n  color: black;\n  min-height: 2em;\n  max-height: 2em;\n']);return ce=function(){return e},e}var le=u.default.h1(ce()),ue=u.default.button(se()),he=u.default.h6(oe()),me=u.default.h6(ie()),fe={paddingLeft:"0em",paddingRight:"0em",paddingBottom:"0em",paddingTop:"0em",background:"white",borderRadius:"10px"},pe=u.default.span(re()),de=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(F.a)(this,Object(A.a)(t).call(this,e))).state={active:!1,preference:1,didMount:!1},n.restName=e.title,n.restName.length>25&&(n.restName=n.restName.substring(0,25)+"..."),n}return Object(U.a)(t,e),Object(I.a)(t,[{key:"changeZero",value:function(){0===this.state.preference?this.setState({preference:1}):this.setState({preference:0})}},{key:"changeTwo",value:function(){2===this.state.preference?this.setState({preference:1}):this.setState({preference:2})}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({didMount:!0})},0),setTimeout(function(){e.setState({preference:1})},0),this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this.setState({preference:1}),this._isMounted=!1}},{key:"componentWillUpdate",value:function(e,t){t.preference!==this.state.preference&&this.props.prefChange(t.preference)}},{key:"handleActive",value:function(){this.setState({active:!0})}},{key:"makeResevation",value:function(){this.props.reservation()}},{key:"render",value:function(){var e=this;this.state.didMount;return r.a.createElement(V.Flex,{style:fe},r.a.createElement(V.Box,{p:[1],width:[1/3]},r.a.createElement(le,null,this.restName),r.a.createElement(V.Image,{position:"relative",width:"100%",height:"50%",borderRadius:10,margin:0,src:this.props.image,alt:"logo"})),r.a.createElement(V.Box,{p:[1],width:[.5]},r.a.createElement(he,null,this.props.cuisine.toString().replace(/,/g," \u2022 "),1===this.props.specific[0]||1===this.props.specific[1]?" \u2022 ":"",r.a.createElement("green",null,this.props.specific[0]?"Vegan\ud83c\udf31 ":"\n"," "),1===this.props.specific[0]&&1===this.props.specific[1]?" \u2022 ":"",r.a.createElement("green",null,this.props.specific[1]?" Vegetarian\ud83c\udf31 ":"\n"," "),1===this.props.specific[2]||1===this.props.specific[3]?" \u2022 ":"",this.props.specific[2]?" \ud83c\udf77\ud83c\udf7a ":"\n",1===this.props.specific[2]&&1===this.props.specific[3]?" \u2022 ":"",this.props.specific[3]?" Outdoor-seating\u2600\ufe0f\u26f1\ufe0f ":"\n",1===this.props.specific[3]&&1===this.props.specific[4]?" \u2022 ":"",this.props.specific[4]?" Halal ":"\n",1===this.props.specific[4]&&1===this.props.specific[5]?" \u2022 ":"",this.props.specific[5]?" Kosher ":"\n"),r.a.createElement(me,null,"\u20ac",0|this.props.price_min," ~ \u20ac",0|this.props.price_max),r.a.createElement(me,null,"~",this.props.distance/.28|0," minutes \ud83d\udeb2 away")),r.a.createElement(V.Box,{p:[1],width:[1/6]},!0!==this.props.reservation&&r.a.createElement(V.Flex,{flexDirection:"column",id:"demo",flexWrap:"wrap",width:"100%"},r.a.createElement(V.Box,{p:[1],height:[.2]},r.a.createElement(pe,{id:"emo0",onClick:function(){return e.changeZero()},style:{transform:0===this.state.preference?"scale(1.5)":"scale(1)"}},"\ud83d\ude41")),r.a.createElement(V.Box,{p:[1],height:[.2]},r.a.createElement(pe,{id:"emo2",onClick:function(){return e.changeTwo()},style:{transform:2===this.state.preference?"scale(1.5)":"scale(1)"}},"\ud83d\ude0d")),r.a.createElement(V.Box,{p:[1],height:[.5]},r.a.createElement(ue,{style:{width:"100%"},onClick:this.makeResevation.bind(this)},"Make Reservation")))))}}]),t}(r.a.Component);function ge(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  color: black;\n  font-size: 0.7em;\n  height: 5em;\n']);return ge=function(){return e},e}function be(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-style: slim;\n  font-weight: 300;\n  font-size: 1em;\n  text-align: center;\n  color: black;\n  min-height: 2em;\n  max-height: 2em;\n']);return be=function(){return e},e}var ve=u.default.h1(be()),ye=u.default.h6(ge()),ke=function(e){function t(e){return Object(G.a)(this,t),Object(F.a)(this,Object(A.a)(t).call(this,e))}return Object(U.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.restaurant,n={};n.reservation=t.name,n.filters=this.props.filters,n.history=this.props.history,this.get_response=function(e){e.ok&&console.log(e.json()),console.log("Network response was not ok.")},fetch("http://nomOkt5.diux6a5vrk.eu-west-2.elasticbeanstalk.com/feedback",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(t){return e.get_response(t)})}},{key:"render",value:function(){var e=this.props.restaurant;return r.a.createElement(V.Flex,{width:"100%",align:"left"},r.a.createElement(V.Box,{p:[1],width:[1,.25]},r.a.createElement(ae,{title:e.name,cuisine:e.cuisine,price:e.price_min,image:e.z_image,specific:[e.vegan,e.vegetarisch,e.alcohol,e.outside],type:[e.Type_Ontbijt,e.Type_Brunch,e.Type_Lunch,e.Type_Diner],reservation:!0})),r.a.createElement(V.Box,{p:[1,10],m:[1,5],width:[1,.75]},r.a.createElement(ve,null,"You've chosen ",r.a.createElement("b",null,e.name),"!"),r.a.createElement(ve,null,"Which is located at ",r.a.createElement("br",null)," ",r.a.createElement("i",null,e.adress),"!"),r.a.createElement(ye,{style:{marginLeft:"20%",marginRight:"20%"}},"In beta stage we'll not be able to redirect you yet, but please go ahead and enjoy your food there:)",r.a.createElement("br",null),r.a.createElement("br",null),"As we're still testing the concept and user experience, please fill out this form:")))}}]),t}(r.a.Component);function we(){var e=Object(s.a)(['\n  /* outline: none; */\n  border: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 1em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 0.1em;\n  width: 100%;\n  padding: 0.25em 1em;\n  border-radius: 10px;\n  border: 2px solid Seashell;\n  :hover {\n    background: Seashell;\n  }\n']);return we=function(){return e},e}function xe(){var e=Object(s.a)(['\n  outline: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 1em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 20px;\n  :hover {\n    background: Seashell;\n  }\n']);return xe=function(){return e},e}function Ee(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  background: white;\n  width: 80%;\n']);return Ee=function(){return e},e}function je(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  font-size: 0.5em;\n  text-align: center;\n  color: black;\n']);return je=function(){return e},e}function Oe(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  font-size: 1em;\n  text-align: center;\n  color: black;\n']);return Oe=function(){return e},e}var Se=u.default.h2(Oe()),_e=u.default.h2(je()),Te={padding:"5%",height:"100%",marginLeft:"5%",marginright:"5%"},Ce={padding:"0%",height:"100%",marginLeft:"0%",marginright:"0%",justifyContent:"center"},Be=u.default.div(Ee()),Re=u.default.button(xe()),Me=u.default.button(we()),Ne={marginBottom:"10%",width:"40%",opacity:"0.1"},ze={marginBottom:"0%",width:"40%"},De=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(F.a)(this,Object(A.a)(t).call(this,e))).state={list:{},show:!1,show_load:!0,reservation:!1,round:n.props.round},n}return Object(U.a)(t,e),Object(I.a)(t,[{key:"makeComponents",value:function(){var e=this,t=[];console.log(String(this.state.round)+String(this.cycle));for(var n=function(n){var a=String(e.state.round)+String(e.cycle)+String(n),i=e.state.list[n];1!=q.isMobile?t.push(r.a.createElement(ae,{key:a,index:n,prefChange:function(t){e.preferences[n]=t},title:i.name,cuisine:i.cuisine,price_min:i.price_min,price_max:i.price_max,priceAvg:i.price_avg,distance:i.distance,image:i.z_image,specific:[i.vegan,i.vegetarisch,i.alcohol,i.outside,i.halal,i.kosher],type:[i.Type_Ontbijt,i.Type_Brunch,i.Type_Lunch,i.Type_Diner],reservation:function(t){e._isMounted&&e.setState({reservation:n,show:!1})},pref:e.state.show})):t.push(r.a.createElement(de,{key:a,index:n,prefChange:function(t){e.preferences[n]=t},title:i.name,cuisine:i.cuisine,price_min:i.price_min,price_max:i.price_max,priceAvg:i.price_avg,distance:i.distance,image:i.z_image,specific:[i.vegan,i.vegetarisch,i.alcohol,i.outside,i.halal,i.kosher],type:[i.Type_Ontbijt,i.Type_Brunch,i.Type_Lunch,i.Type_Diner],reservation:function(t){e._isMounted&&e.setState({reservation:n,show:!1})},pref:e.state.show}))},a=0;a<5;a++)n(a);return t}},{key:"componentDidMount",value:function(){this.preferences={},this._isMounted=!0,this.cycle=0,this.reservoir={},this.makeComponents=this.makeComponents.bind(this),this.clickNextRestaurant=this.clickNextRestaurant.bind(this),this.clickNextRestaurant()}},{key:"componentWillUnmount",value:function(){console.log("component unmounted"),this._isMounted=!1}},{key:"componentWillUpdate",value:function(e,t){if(!1!==t.reservation&&!1===this.state.reservation){this.reservoir[this.cycle]=this.state.list;for(var n=0;n<this.reservoir[this.cycle].length;n++);}}},{key:"clickNextRestaurant",value:function(){for(var e=this,t=[],n=0;n<this.state.list.length;n++)t[n]={},t[n].id=this.state.list[n].id,t[n].preference=this.preferences[n];0!==Object.entries(t).length&&(this.reservoir[this.cycle]=t,this.cycle+=1),this.setState({reservoir:this.reservoir}),m()(document.querySelector("#cards_view")),this.get_response=function(e){if(e.ok)return this.setState({show_load:!0}),e.json();console.log("Network response was not ok.")},this.unpack_response=function(e){this.numberRestaurants=e.stats,e=e.restaurants;var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t},this.update_state=function(e){this.setState({list:e}),this.components=this.makeComponents(this.state);for(var t=0;t<Object.entries(this.state.list).length;t+=1)this.preferences[t]=1;this.setState({show_load:!1}),this.setState({show:!0}),m()(document.querySelector("#cards_view"))};var a={};a.filters=this.props.filters,a.history=this.reservoir,fetch("http://nomOkt5.diux6a5vrk.eu-west-2.elasticbeanstalk.com/restaurant",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(t){return e.get_response(t)}).then(function(t){return e.unpack_response(t)}).then(function(t){return e.update_state(t)})}},{key:"reactThis",value:function(e){this.props.setRound(),this.props.setFilters(!1),this.setState({reservation:!1}),e.preventDefault()}},{key:"render",value:function(){var e=this.props.filters,t=this.props.filters.maxTime;for(var n in delete e.show,e)if(1===e[n]&&"range"!==n)var a=n;return r.a.createElement(Be,{id:"introbox",style:q.isMobile?Ce:Te,className:"introBox"},r.a.createElement(V.Flex,{id:"demo",flexWrap:"wrap",width:"100%",style:{marginBottom:50}},0==q.isMobile&&r.a.createElement(V.Box,{p:[1],align:"center",width:[1/3]},r.a.createElement("img",{src:l.a,alt:"logo",style:ze})),r.a.createElement(V.Box,{p:[1],width:[1,1/3]},r.a.createElement(Se,null,"Discovering ",this.numberRestaurants," ",r.a.createElement("b",null,a)," places within ",r.a.createElement("b",null,t)," minutes \ud83d\udeb2"),r.a.createElement(Re,{onClick:this.reactThis.bind(this)}," Go Back ")),r.a.createElement(V.Box,{id:"cards_view",p:2,width:1,align:"center",ref:"umountable"},r.a.createElement(V.Box,{p:[1],width:[1]},this.state.show_load&&r.a.createElement("img",{src:l.a,className:"fadein",alt:"logo",style:Ne}))),!1!==this.state.reservation&&r.a.createElement(ke,{cycle:this.state.round,restaurant:this.state.list[this.state.reservation],history:this.state.reservoir,filters:this.props.filters}),this.state.show&&r.a.createElement(V.Box,{className:"basket",p:[1],width:[1,.5,.2]},this.components[0]),this.state.show&&r.a.createElement(V.Box,{className:"basket",p:[1],width:[1,.5,.2]},this.components[1]),this.state.show&&r.a.createElement(V.Box,{className:"basket",p:[1],width:[1,.5,.2]},this.components[2]),this.state.show&&r.a.createElement(V.Box,{className:"basket",p:[1],width:[1,.5,.2]},this.components[3]),this.state.show&&r.a.createElement(V.Box,{className:"basket",p:[1],width:[1,.5,.2]},this.components[4]),!1===this.state.reservation?r.a.createElement(Me,{onClick:this.clickNextRestaurant},"\ud83d\udc49 Next restaurants \ud83d\udc48"):" ",r.a.createElement(V.Box,{p:2,width:1,align:"center"},r.a.createElement(Se,null,"Specify preference with emoji's*"),r.a.createElement(_e,null,r.a.createElement("i",null,"*This trains our algorithms to come up with better matching discoveries in the next round")))))}}]),t}(r.a.Component),Le=n(75),We=n.n(Le),Ge=(n(179),n(23));function Ie(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  width: 80%;\n  height: "400px";\n']);return Ie=function(){return e},e}var Fe={width:"80%",height:"400px"},Ae=u.default.div(Ie()),Ue=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(F.a)(this,Object(A.a)(t).call(this,e))).state={lat:52.3667,lng:4.8945,latLng:[52.3667,4.8945],key:!1},n}return Object(U.a)(t,e),Object(I.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({key:!1})}},{key:"changeMarker",value:function(e,t,n,a,r){this.props.latLngChange([n.latLng.lat(),n.latLng.lng()])}},{key:"render",value:function(){var e=this;return r.a.createElement(Ae,null,r.a.createElement(Ge.Map,{google:this.props.google,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1,zoom:13.1,style:Fe,initialCenter:{lat:this.state.lat,lng:this.state.lng},onClick:function(t,n,a,r,i){return e.changeMarker(t,n,a,r,i)}},r.a.createElement(Ge.Marker,{position:{lat:this.props.latLng[0],lng:this.props.latLng[1]}},r.a.createElement(Ge.InfoWindow,{visible:!0},r.a.createElement("h4",null,"Something is there!")))))}}]),t}(r.a.Component),Ve=Object(Ge.GoogleApiWrapper)({apiKey:"AIzaSyBJIlVWE-dlLpokGxhwaHBQyFCOtbvVicw"})(Ue);function qe(){var e=Object(s.a)(['\n  outline: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 1em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 20px;\n  :hover {\n    background: Seashell;\n  }\n']);return qe=function(){return e},e}function He(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  background: white;\n  width: 100%;\n']);return He=function(){return e},e}function Je(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-style: slim;\n  font-weight: 300;\n  font-size: 1em;\n  text-align: center;\n  color: black;\n']);return Je=function(){return e},e}function Ze(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n  padding: 20px;\n']);return Ze=function(){return e},e}var Ke=u.default.h2(Ze()),Pe=u.default.h1(Je()),Ye=u.default.div(He()),Qe=u.default.button(qe()),Xe={marginBottom:"420px"},$e={marginLeft:"35%",paddingBottom:"5%"},et=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(F.a)(this,Object(A.a)(t).call(this,e))).handleOnChange=function(e){0===e&&(n.maxTime=5),1===e&&(n.maxTime=15),2===e&&(n.maxTime=30),3===e&&(n.maxTime=60),n.range=e,n.setState({range:e,maxTime:n.maxTime})},n.state={show:!1,breakfast:-1,lunch:-1,dinner:-1,drinks:-1,range:1,maxTime:15,latLng:[52.3667,4.8945]},n.maxTime=10,n.range=1,n}return Object(U.a)(t,e),Object(I.a)(t,[{key:"handleSubmit",value:function(e){this.props.setFilters(this.state),e.preventDefault()}},{key:"render",value:function(){var e=this;this.state.range;return r.a.createElement(Ye,null,r.a.createElement(Ke,null," Welcome to NOMNOMNOM restaurant discovery"),r.a.createElement(Pe,null,r.a.createElement("em",null,"What do you feel like?")),r.a.createElement(Qe,{onClick:function(){return e.setState({breakfast:-1*e.state.breakfast,lunch:-1,dinner:-1,drinks:-1})},style:{transform:1===this.state.breakfast?"scale(1.3)":"scale(1)",background:1===this.state.breakfast?"DarkOrange":"snow"}},"breakfast"),r.a.createElement(Qe,{onClick:function(){return e.setState({lunch:-1*e.state.lunch,breakfast:-1,dinner:-1,drinks:-1})},style:{transform:1===this.state.lunch?"scale(1.3)":"scale(1)",background:1===this.state.lunch?"LightGreen":"snow"}},"lunch"),r.a.createElement(Qe,{onClick:function(){return e.setState({dinner:-1*e.state.dinner,lunch:-1,breakfast:-1,drinks:-1})},style:{transform:1===this.state.dinner?"scale(1.3)":"scale(1)",background:1===this.state.dinner?"LightSkyBlue":"snow"}},"dinner"),r.a.createElement(Qe,{onClick:function(){return e.setState({drinks:-1*e.state.drinks,lunch:-1,dinner:-1,breakfast:-1})},style:{transform:1===this.state.drinks?"scale(1.3)":"scale(1)",background:1===this.state.drinks?"Plum":"snow"}},"drinks"),r.a.createElement("div",null,r.a.createElement(Qe,{style:{background:"white"},onClick:this.handleSubmit.bind(this)},"Submit")),r.a.createElement("div",{style:Xe},r.a.createElement("center",null,r.a.createElement(Ve,{latLng:this.state.latLng,latLngChange:function(t){e.setState({latLng:t})}}))),r.a.createElement("div",{style:$e},r.a.createElement("div",{style:{width:"50%"}},r.a.createElement(Pe,null,"\ud83d\udeb2 ride ",60!=this.maxTime&&" < "," ",this.maxTime," ",60==this.maxTime&&" + "," minutes"),r.a.createElement(We.a,{min:0,max:3,step:1,value:this.range,orientation:"horizontal",onChange:this.handleOnChange,tooltip:!1}))))}}]),t}(r.a.Component);function tt(){var e=Object(s.a)(['\n  /* outline: none; */\n  border: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 0.5em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 0.1em;\n  width: 20%;\n  padding: 0.25em 1em;\n  border-radius: 10px;\n  border: 2px solid Seashell;\n  :hover {\n    background: Seashell;\n  }\n']);return tt=function(){return e},e}function nt(){var e=Object(s.a)(['\n  outline: none;\n  background: snow;\n  color: "palevioletred";\n  font-size: 1em;\n  font-weight: 300;\n  color: DarkSlateGrey\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 20px;\n  :hover {\n    background: Seashell;\n  }\n']);return nt=function(){return e},e}function at(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-style: slim;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n']);return at=function(){return e},e}function rt(){var e=Object(s.a)(["\n  justify-content: left;\n  background: white;\n  width: 80%;\n"]);return rt=function(){return e},e}function it(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n']);return it=function(){return e},e}var ot=u.default.h5(it()),st=u.default.div(rt()),ct={marginTop:"5%",padding:"5%",height:"100%"},lt={fontSize:"0.8em",fontWeight:300,color:"black"},ut=u.default.h2(at()),ht=u.default.button(nt()),mt=u.default.button(tt()),ft=function(e){function t(e){return Object(G.a)(this,t),Object(F.a)(this,Object(A.a)(t).call(this,e))}return Object(U.a)(t,e),Object(I.a)(t,[{key:"handleSubmit",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(st,{id:"introbox",style:ct,className:"introBox"},r.a.createElement(ut,null,"How does it work?"),r.a.createElement(ot,null,"You'll see a number of restaurants/caf\xe9's appear on screen.",r.a.createElement("br",null),r.a.createElement("br",null),"Click on the \ud83d\ude41\ud83d\ude0d emoji's to set your preference."),r.a.createElement("div",{style:{display:"block"}},r.a.createElement("span",{style:lt},"When done, press "),r.a.createElement(mt,null,"\ud83d\udc49 Next restaurants \ud83d\udc48")),r.a.createElement(ot,null,"This makes the next round's options a little closer to your liking \u2764\ufe0f",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{style:{display:"block"}},r.a.createElement("span",{style:lt},"Repeat until you've found ",r.a.createElement("i",null,"the one"),", and press"),r.a.createElement(mt,null,"Make Reservation")),r.a.createElement(ht,{style:{background:"white"},onClick:function(){return e.props.instructionsDone()}},"Start!"))}}]),t}(r.a.Component);function pt(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  background: white;\n  width: 100%;\n']);return pt=function(){return e},e}function dt(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 500;\n  text-align: center;\n  color: black;\n  font-size: 0.5em;\n  height: 5em;\n']);return dt=function(){return e},e}var gt={justifyContent:"center",marginTop:"5%",marginLeft:"0%",marginright:"0%",paddingTop:"0%",paddingLeft:"0%",paddingTight:"0%",height:"100%"},bt=(u.default.h6(dt()),u.default.div(pt())),vt=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(F.a)(this,Object(A.a)(t).call(this,e))).state={filters:!1,instructionsDone:!1,round:0},n}return Object(U.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(bt,{style:gt},this.state.filters?this.state.instructionsDone?r.a.createElement(De,{key:this.state.round,filters:this.state.filters,setRound:function(){return e.setState({round:e.state.round+1})},setFilters:function(t){return e.setState({filters:t})},round:this.state.round}):r.a.createElement(ft,{instructionsDone:function(){return e.setState({instructionsDone:!0})}}):r.a.createElement(bt,{style:gt},r.a.createElement(et,{setFilters:function(t){return e.setState({filters:t})},tester:this.state.filters})))}}]),t}(r.a.Component),yt=n(76),kt=n.n(yt),wt=n(77),xt=n.n(wt),Et=n(78),jt=n.n(Et),Ot=n(79),St=n.n(Ot);function _t(){var e=Object(s.a)(['\n  justify-content: center;\n  alignitems: "center";\n  background: white;\n  width: 80%;\n']);return _t=function(){return e},e}function Tt(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  font-size: 1em;\n  text-align: center;\n  color: black;\n']);return Tt=function(){return e},e}function Ct(){var e=Object(s.a)(['\n  font-family: "Raleway", sans-serif;\n  font-weight: 300;\n  text-align: center;\n  color: black;\n']);return Ct=function(){return e},e}var Bt=u.default.h2(Ct()),Rt=u.default.h2(Tt()),Mt={marginTop:"5%",padding:"5%",height:"100%"},Nt=u.default.div(_t()),zt={marginBottom:"0%",borderRadius:"10px",height:"200px"},Dt=function(e){function t(){return Object(G.a)(this,t),Object(F.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement(Nt,{id:"introbox",style:Mt,className:"introBox"},r.a.createElement(V.Flex,{id:"team",flexWrap:"wrap",width:"100%",style:{marginBottom:"0px"}},r.a.createElement(V.Box,{p:2,width:1,align:"center",ref:"umountable"},r.a.createElement(Bt,null,"Team")),r.a.createElement(V.Box,{p:[1],width:[1,.5]},r.a.createElement(V.Image,{src:kt.a,style:zt}),r.a.createElement(Rt,null,"Hugo Evers, ",r.a.createElement("em",null,"The Visionary"))),r.a.createElement(V.Box,{p:[1],width:[1,.5]},r.a.createElement(V.Image,{src:St.a,style:zt}),r.a.createElement(Rt,null,"Lucas Berndsen, ",r.a.createElement("em",null,"The Scientist"))),r.a.createElement(V.Box,{p:[1],width:[1,.5]},r.a.createElement(V.Image,{src:xt.a,style:zt}),r.a.createElement(Rt,null,"Mark Tensen, ",r.a.createElement("em",null,"The Macgyver"))),r.a.createElement(V.Box,{p:[1],width:[1,.5]},r.a.createElement(V.Image,{src:jt.a,style:zt}),r.a.createElement(Rt,null,"Dani\xebl Koudijs, ",r.a.createElement("em",null,"The Operator")))))}}]),t}(r.a.Component);var Lt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(vt,null),r.a.createElement(W,null),r.a.createElement(Dt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,n){e.exports=n.p+"static/media/logo_sq.68594f70.png"},76:function(e,t,n){e.exports=n.p+"static/media/team_hugo.e01c60eb.png"},77:function(e,t,n){e.exports=n.p+"static/media/team_mark.73d401f2.png"},78:function(e,t,n){e.exports=n.p+"static/media/team_daniel.ab023b14.png"},79:function(e,t,n){e.exports=n.p+"static/media/team_lucas.d12687b7.png"},82:function(e,t,n){e.exports=n(192)},87:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.8e2162fd.chunk.js.map