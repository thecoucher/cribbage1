(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),s=n(1),u=n(2),l=n(4),o=n(3),d=n(5),h=n(6),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.deck_id,n=this.props.card.code,a=this.props.card.image;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.turnOverCard({deck_id:t})}},"Turn over card"),r.a.createElement("div",null,r.a.createElement("img",{src:a,height:"228px",width:"162px",alt:n})))}}]),t}(a.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.deck_id,n=this.props.cards.map(function(e){return r.a.createElement("img",{className:"hand",src:e.image,key:e.code,alt:e.code,height:"228",width:"162"})});return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.getHand({deck_id:t})}},"Get Hand"),r.a.createElement("div",null,n))}}]),t}(a.Component),v=n(7),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={showResults:!0},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"convertToChars",value:function(e){var t=[];return e.map(function(e){return t.push(e.value)}),t}},{key:"countOcurrences",value:function(e,t){for(var n=0,a=0;a<e.length;a++)e[a]===t&&n++;return n}},{key:"getPairs",value:function(e,t){console.log("Getting results... ",t);for(var n=new Set(e),a=Object(v.a)(n),r=[],c=0;c<a.length;c++){var i=[];if(this.countOcurrences(e,a[c])>1){for(var s=0;s<e.length;s++)a[c]===e[s]&&i.push(t[s]);r.push(i)}}return r}},{key:"render",value:function(){var e=this,t=[],n=this.props,a=n.cards,c=n.card,i=this.state.showResults,s=Object(v.a)(a);s.push(c);var u=this.convertToChars(s);(t=this.getPairs(u,s))||(t=[]);var l=r.a.createElement("div",null,r.a.createElement("label",null,"Show results"),r.a.createElement("input",{type:"checkbox",inline:"true",checked:i,onClick:function(){e.setState({showResults:!i})}}));return s.length>1?t.map(function(t){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"Show results"),r.a.createElement("input",{type:"checkbox",inline:"true",checked:i,onClick:function(){e.setState({showResults:!i})}})),r.a.createElement("div",{style:{display:i?"block":"none"}},r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("img",{className:"hand",src:e.image,key:e.code,alt:e.code,height:"114",width:"81"})}))))}):r.a.createElement("div",null,l,r.a.createElement("div",null,"Nothing to display"))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).turnOverCard=n.turnOverCard.bind(Object(h.a)(Object(h.a)(n))),n.getHand=n.getHand.bind(Object(h.a)(Object(h.a)(n))),n.state={deck:[]},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(function(e){return e.json()}).then(function(t){e.setState({deck:t})})}},{key:"turnOverCard",value:function(e){var t=this,n="https://deckofcardsapi.com/api/deck/"+e.deck_id+"/draw/?count=1";fetch(n).then(function(e){return e.json()}).then(function(e){t.setState({crib:e.cards})})}},{key:"getHand",value:function(e){var t=this,n="https://deckofcardsapi.com/api/deck/"+e.deck_id+"/draw/?count=4";fetch(n).then(function(e){return e.json()}).then(function(e){t.setState({hand:e.cards})})}},{key:"render",value:function(){var e,t,n=this.state.deck.deck_id;return e=this.state.crib?this.state.crib[0]:{},t=this.state.hand?this.state.hand:[],r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Cribbage Hand Tester"),r.a.createElement("p",null,"Guess how many points this hand is worth."),r.a.createElement(m,{deck_id:n,getHand:this.getHand,cards:t}),r.a.createElement(p,{deck_id:n,turnOverCard:this.turnOverCard,card:e}),r.a.createElement("h3",null,"Results"),r.a.createElement(f,{cards:t,card:e}))}}]),t}(a.Component);n(22);i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.7efb73a7.chunk.js.map