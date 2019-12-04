(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),s=n.n(c),o=n(1),i=n(2),l=n(4),u=n(3),d=n(5),h=n(7),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.deck_id,n=this.props.card.code,a=this.props.card.image;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.turnOverCard({deck_id:t})}},"Turn over card"),r.a.createElement("div",null,r.a.createElement("img",{src:a,height:"180px",width:"128px",alt:n})))}}]),t}(a.Component),m=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.deck_id,n=this.props.cards.map(function(e){return r.a.createElement("img",{className:"hand",src:e.image,key:e.code,alt:e.code,height:"180",width:"128"})});return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.getHand({deck_id:t})}},"Get Hand"),r.a.createElement("div",null,n))}}]),t}(a.Component),p=n(6),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={showResults:!0},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"convertToIntegers",value:function(e){var t=e.map(function(e){return e.value}).map(function(e){return e=isNaN(e)?"ACE"===e?1:10:parseInt(e,10)});return console.log("222222222 ",t),t}},{key:"twoSum",value:function(e,t){for(var n=[],a=0;a<e.length;a++)for(var r=a+1;r<e.length;r++)e[a]+e[r]===t&&n.push([a,r]);return n}},{key:"convertToChars",value:function(e){var t=[];return e.map(function(e){return t.push(e.value)}),t}},{key:"countOcurrences",value:function(e,t){for(var n=0,a=0;a<e.length;a++)e[a]===t&&n++;return n}},{key:"getPairs",value:function(e,t){console.log("Getting results... ",t);var n=new Set(e);console.log("AAAAAAA ",n);for(var a=Object(p.a)(n),r=[],c=0;c<a.length;c++){var s=[];if(this.countOcurrences(e,a[c])>1){for(var o=0;o<e.length;o++)a[c]===e[o]&&s.push(t[o]);r.push(s)}}return console.log("ZZZZZZZZ ",r),r}},{key:"checkForFifteenPairs",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=this.convertToIntegers(e),a=this.twoSum(n,t),r=[],c=0;c<a.length;c++)r.push([e[a[c][0]],e[a[c][1]]]);return r}},{key:"checkForFifteenTriplets",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=this.convertToIntegers(e),a=t-n[0];n.shift();for(var r=[],c=1;c<n.length;c++){for(var s=this.twoSum(n,a),o=0;o<s.length;o++){var i=[e[c-1]];i.push(e[s[o][0]+c]),i.push(e[s[o][1]+c]),r.push(i)}a=t-n[0],n.shift()}return r}},{key:"checkForFifteenQuartets",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=[],a=this.convertToIntegers(e),r=0;r<a.length;r++){var c=a[0]+a[1]+a[2]+a[3]+a[4]-a[r];if(console.log("=======> comparing "+c+" to "+t),c===t){var s=Object(p.a)(e);s.splice(r,1),n.push(s)}}return n}},{key:"checkForFifteenQuintet",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=[],a=this.convertToIntegers(e);return a[0]+a[1]+a[2]+a[3]+a[4]===t&&n.push(e),n}},{key:"render",value:function(){var e=this,t=[],n=this.props,a=n.cards,c=n.card,s=this.state.showResults,o=Object(p.a)(a);o.push(c);var i=this.convertToChars(o);t=this.getPairs(i,o),console.log("****** P A I R  T E S T I N G"),console.log(t);var l=this.checkForFifteenPairs(o);console.log("****** S U M   T E S T I N G - P A I R S "),console.log(l);var u=this.checkForFifteenTriplets(o);console.log("****** S U M   T E S T I N G - T R I P L E T S  "),console.log(u);var d=this.checkForFifteenQuartets(o);console.log("****** S U M   T E S T I N G - Q U A R T E T S  "),console.log(d);var h=this.checkForFifteenQuintet(o);console.log("****** S U M   T E S T I N G - Q U I N T E T  "),console.log(h),console.log("sssssssss pairResults ",t),console.log("sssssssss ",l),console.log("sssssssss ",u),console.log("sssssssss ",h),console.log("sssssssss ",h);var v=[].concat(Object(p.a)(l),Object(p.a)(u),Object(p.a)(d),Object(p.a)(h));console.log("TTTTTTTTTTTTTTT ",v);var m=r.a.createElement("div",{className:"show-results"},r.a.createElement("input",{type:"checkbox",inline:"true",checked:s,onClick:function(){e.setState({showResults:!s})}}),r.a.createElement("div",null,"Show results")),g=r.a.createElement("div",null,t.map(function(e){return r.a.createElement("div",{style:{display:s?"block":"none"}},r.a.createElement("ul",null,r.a.createElement("div",{className:"result-row"},r.a.createElement("div",{className:"result-image"},e.map(function(e){return r.a.createElement("img",{className:"hand-results",src:e.image,key:e.code,alt:e.code})})),r.a.createElement("div",{className:"result-text"},2===e.length?"Pair":"Triplet"," - Points: ",e.length))))})),f=r.a.createElement("div",null,v.map(function(e){return r.a.createElement("div",{style:{display:s?"block":"none"}},r.a.createElement("ul",null,r.a.createElement("div",{className:"result-row"},r.a.createElement("div",{className:"result-image"},e.map(function(e){return r.a.createElement("img",{className:"hand-results",src:e.image,key:e.code,alt:e.code})})),r.a.createElement("div",{className:"result-text"},"Sum to 15 - Points: ",e.length))))}));return o.length>1?r.a.createElement("div",null,r.a.createElement("div",null,m),g,f):r.a.createElement("div",null,m,r.a.createElement("div",null,"Nothing to display"))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).turnOverCard=n.turnOverCard.bind(Object(h.a)(Object(h.a)(n))),n.getHand=n.getHand.bind(Object(h.a)(Object(h.a)(n))),n.state={deck:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(function(e){return e.json()}).then(function(t){e.setState({deck:t})})}},{key:"turnOverCard",value:function(e){var t=this,n="https://deckofcardsapi.com/api/deck/"+e.deck_id+"/draw/?count=1";fetch(n).then(function(e){return e.json()}).then(function(e){t.setState({crib:e.cards})})}},{key:"getHand",value:function(e){this.setState({hand:[{value:"JACK",code:"jh",image:"https://deckofcardsapi.com/static/img/JH.png"},{value:"5",code:"5d",image:"https://deckofcardsapi.com/static/img/5D.png"},{value:"5",code:"5s",image:"https://deckofcardsapi.com/static/img/5S.png"},{value:"5",code:"5c",image:"https://deckofcardsapi.com/static/img/5C.png"}]})}},{key:"getHandTemp",value:function(e){var t=this,n="https://deckofcardsapi.com/api/deck/"+e.deck_id+"/draw/?count=4";fetch(n).then(function(e){return e.json()}).then(function(e){console.log("GET HAND cards2",e.cards),t.setState({hand:e.cards})})}},{key:"render",value:function(){var e,t,n=this.state.deck.deck_id;return e=this.state.crib?this.state.crib[0]:{},t=this.state.hand?this.state.hand:[],r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Cribbage Hand Tester"),r.a.createElement("p",null,"Guess how many points this hand is worth."),r.a.createElement(m,{deck_id:n,getHand:this.getHand,cards:t}),r.a.createElement(v,{deck_id:n,turnOverCard:this.turnOverCard,card:e}),r.a.createElement("h3",null,"Results"),r.a.createElement(g,{cards:t,card:e}))}}]),t}(a.Component);n(22);s.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.de61e509.chunk.js.map