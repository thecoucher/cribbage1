(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),s=a(2),i=a(3),o=a(5),u=a(4),d=a(6),m=a(7),h=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.deck_id,n=this.props.card.code,c=this.props.card.image;return e=c?r.a.createElement("div",null,r.a.createElement("img",{className:"hand",src:c,alt:n})):r.a.createElement("div",null,r.a.createElement("img",{className:"hand",src:"./card_back.jpg",alt:n})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t.props.turnOverCard({deck_id:a})}},"Turn Over"),r.a.createElement("div",null,"Community Card"),e)}}]),t}(n.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.deck_id,n=this.props.cards,c=this.props.cardsLeft;return console.log("temp"),console.log("PPPPPPP ",this.props),e=n.length>0?n.map(function(e){return r.a.createElement("img",{className:"hand",src:e.image,key:e.code,alt:e.code})}):r.a.createElement("div",null,r.a.createElement("img",{className:"hand",src:"./card_back.jpg",alt:"1"}),r.a.createElement("img",{className:"hand",src:"./card_back.jpg",alt:"2"}),r.a.createElement("img",{className:"hand",src:"./card_back.jpg",alt:"3"}),r.a.createElement("img",{className:"hand",src:"./card_back.jpg",alt:"4"})),r.a.createElement("div",null,r.a.createElement("button",{className:"freddy",onClick:function(){return t.props.getHand({deck_id:a})}},"Get Hand"),r.a.createElement("div",null,"Cards remaining in deck: ",c),r.a.createElement("div",null,e))}}]),t}(n.Component),f=a(1),p=[[0,1,2],[0,1,3],[1,2,3],[0,1,4],[0,2,4],[1,2,4],[0,3,4],[1,3,4],[2,3,4],[0,2,3]],g=[[0,1,2,3],[0,1,2,4],[0,1,3,4],[0,2,3,4],[1,2,3,4]];function E(e){return e.map(function(e){return e.value}).map(function(e){return e=isNaN(e)?"ACE"===e?1:10:parseInt(e,10)})}function k(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,a=[],n=0;n<e.length;n++)for(var r=n+1;r<e.length;r++)e[n]+e[r]===t&&a.push([n,r]);return a}function b(e,t){for(var a=!0,n=0;n<t.length-1;n++){1!==e[t[n+1]].val-e[t[n]].val&&(a=!1)}return a}function N(e,t){for(var a=0,n=0;n<e.length;n++)e[n]===t&&a++;return a}function O(e){var t=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,a=k(E(e),t),n=[],r=0;r<a.length;r++)n.push([e[a[r][0]],e[a[r][1]]]);return n}(e,15),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,a=E(e),n=t-a[0];a.shift();for(var r=[],c=1;c<a.length+2;c++){for(var l=k(a,n),s=0;s<l.length;s++){var i=[e[c-1]];i.push(e[l[s][0]+c]),i.push(e[l[s][1]+c]),r.push(i)}n=t-a[0],a.shift()}return r}(e,15),n=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,a=[],n=E(e),r=0;r<n.length;r++){var c=n[0]+n[1]+n[2]+n[3]+n[4]-n[r];if(c===t){var l=Object(f.a)(e);l.splice(r,1),a.push(l)}}return a}(e,15),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,a=[],n=E(e);n[0]+n[1]+n[2]+n[3]+n[4]===t&&a.push(e);return a}(e,15);return[].concat(Object(f.a)(t),Object(f.a)(a),Object(f.a)(n),Object(f.a)(r))}function y(e){for(var t=function(e){for(var t=Object(f.a)(e),a=0;a<e.length;a++)switch(t[a].value){case"ACE":t[a].val=1;break;case"JACK":t[a].val=11;break;case"QUEEN":t[a].val=12;break;case"KING":t[a].val=13;break;default:t[a].val=parseInt(t[a].value,10)}return t.sort(function(e,t){return e.val-t.val}),t}(e),a=[],n=!0,r=0;r<4;r++)if(t[r+1].val-t[r].val!==1){n=!1;break}var c=!1;if(!n)for(var l=0;l<g.length;l++)b(t,g[l])&&(a.push([t[g[l][0]],t[g[l][1]],t[g[l][2]],t[g[l][3]]]),c=!0);if(!c)for(var s=0;s<p.length;s++)b(t,p[s])&&(a.push([t[p[s][0]],t[p[s][1]],t[p[s][2]]]),a.description="fred",a.score=3);return a}var j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={showResults:!0},a.patternsOfThree=[[0,1,2],[0,1,3],[1,2,3],[0,1,4],[0,2,4],[1,2,4],[0,3,4],[1,3,4],[2,3,4],[0,2,3]],a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"tallyTheScores",value:function(e,t,a,n){for(var r=0,c=0;c<e.length;c++)r+=e[c].score;for(var l=0;l<t.length;l++)r+=2;for(var s=0;s<a.length;s++)r+=a[s].length;return n.length>0&&(r+=1),r}},{key:"render",value:function(){var e,t,a,n,c,l,s,i,o,u=this,d=[],m=this.props,h=m.cards,v=m.card,p=this.state.showResults,g=Object(f.a)(h);g.push(v);var E=0;5===g.length&&(d=function(e){for(var t=function(e){var t=[];return e.map(function(e){return t.push(e.value)}),t}(e),a=new Set(t),n=Object(f.a)(a),r=[],c=0;c<n.length;c++){var l=[];if(N(t,n[c])>1){for(var s=0;s<t.length;s++)n[c]===t[s]&&l.push(e[s]);var i={};i.result=l;var o=l.length;2===o?(i.description="Pair",i.score=2):3===o?(i.description="Three of a kind",i.score=6):4===o&&(i.description="Four of a kind",i.score=12),r.push(i)}}return r}(g),console.log("****** P A I R  T E S T I N G"),console.log(d),l=O(g),console.log("****** T O T A L   S U M   T E S T I N G  "),console.log(l),s=function(e){var t=Object(f.a)(e),a=function(e){return e.every(function(t){return t.suit===e[0].suit})},n=a(t);return n?t:(t.pop(),(n=a(t))?t:[])}(g),console.log("****** F L U S H   T E S T I N G   "),console.log(s),i=y(g),console.log("******  R U N S    T E S T I N G   "),console.log("======> runsResult ",i),console.log(i),o=function(e,t){for(var a=t.suit,n=[],r=0;r<e.length;r++)"JACK"===e[r].value&&e[r].suit===a&&n.push(t);return n}(h,v),console.log("======> cards: ",h),console.log("======> card: ",v),console.log("======> nibsResult ",o),console.log("******  N I B S   T E S T I N G   "),console.log(o),E=this.tallyTheScores(d,l,i,o));var k=r.a.createElement("div",{className:"show-results"},r.a.createElement("input",{type:"checkbox",inline:"true",checked:p,onClick:function(){u.setState({showResults:!p})}}),r.a.createElement("div",null,"Show results"));return 5===g.length&&(e=r.a.createElement("div",null,d.map(function(e){return r.a.createElement("div",{style:{display:p?"block":"none"}},r.a.createElement("ul",null,r.a.createElement("div",{className:"result-row"},r.a.createElement("div",{className:"result-image"},e.result.map(function(e){return r.a.createElement("img",{className:"result-card",src:e.image,key:e.code,alt:e.code})})),r.a.createElement("div",{className:"result-text"},e.description," - Points: ",e.score))))})),t=r.a.createElement("div",null,l.map(function(e){return r.a.createElement("div",{style:{display:p?"block":"none"}},r.a.createElement("ul",null,r.a.createElement("div",{className:"result-row"},r.a.createElement("div",{className:"result-image"},e.map(function(e){return r.a.createElement("img",{className:"result-card",src:e.image,key:e.code,alt:e.code})})),r.a.createElement("div",{className:"result-text"},"Sum to 15 - Points: 2"))))})),a=r.a.createElement("div",null,i.map(function(e){return r.a.createElement("div",{style:{display:p?"block":"none"}},r.a.createElement("ul",null,r.a.createElement("div",{className:"result-row"},r.a.createElement("div",{className:"result-image"},e.map(function(e){return r.a.createElement("img",{className:"result-card",src:e.image,key:e.code,alt:e.code})})),r.a.createElement("div",{className:"result-text"},"Run - Points: ",e.length))))})),c=r.a.createElement("div",null,o.map(function(e){return r.a.createElement("div",{style:{display:p?"block":"none"}},r.a.createElement("ul",null,r.a.createElement("div",{className:"result-row"},r.a.createElement("div",{className:"result-image"},r.a.createElement("img",{className:"result-card",src:e.image,key:e.code,alt:e.code})),r.a.createElement("div",{className:"result-text"},"Nibs - Points: 1"))))})),n=s.length>0?r.a.createElement("div",{style:{display:p?"block":"none"}},r.a.createElement("ul",null,r.a.createElement("div",{className:"result-row"},r.a.createElement("div",{className:"result-image"},s.map(function(e){return r.a.createElement("img",{className:"result-card",src:e.image,key:e.code,alt:e.code})})),r.a.createElement("div",{className:"result-text"},"Flush - Points: 5")))):r.a.createElement("div",null)),5===g.length?r.a.createElement("div",null,r.a.createElement("div",null,k),r.a.createElement("div",{style:{display:p?"block":"none"}},r.a.createElement("h3",null,"Result: Score = ",E)),e,t,a,n,c):r.a.createElement("div",null,k,r.a.createElement("div",null,"Nothing to display"))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).turnOverCard=a.turnOverCard.bind(Object(m.a)(Object(m.a)(a))),a.getHand=a.getHand.bind(Object(m.a)(Object(m.a)(a))),a.state={deck:[],cardsLeft:52},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(function(e){return e.json()}).then(function(t){console.log("STATE1111",e.state),console.log("BBBBBBB ",t),e.setState({deck:t,cardsLeft:t.remaining})})}},{key:"turnOverCard",value:function(e){var t=this,a="https://deckofcardsapi.com/api/deck/"+e.deck_id+"/draw/?count=1";fetch(a).then(function(e){return e.json()}).then(function(e){t.setState({communityCard:e.cards[0],cardsLeft:e.remaining})})}},{key:"getHandTemp",value:function(e){this.setState({hand:[{value:"4",code:"4d",image:"https://deckofcardsapi.com/static/img/4D.png",suit:"DIAMONDS"},{value:"2",code:"2c",image:"https://deckofcardsapi.com/static/img/2C.png",suit:"CLUBS"},{value:"2",code:"2h",image:"https://deckofcardsapi.com/static/img/2H.png",suit:"HEARTS"},{value:"3",code:"3h",image:"https://deckofcardsapi.com/static/img/3H.png",suit:"HEARTS"}]})}},{key:"getHand",value:function(e){var t=this,a="https://deckofcardsapi.com/api/deck/"+e.deck_id+"/draw/?count=4";fetch(a).then(function(e){return e.json()}).then(function(e){t.setState({hand:e.cards,cardsLeft:e.remaining})})}},{key:"render",value:function(){var e,t,a=this.state.deck.deck_id,n=this.state.cardsLeft;return e=this.state.communityCard?this.state.communityCard:{},t=this.state.hand?this.state.hand:[],r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Cribbage Hand Tester"),r.a.createElement("p",null,"Guess how many points this hand is worth."),r.a.createElement("div",{className:"result-row"},r.a.createElement("div",{className:"full-hand-cards"},r.a.createElement(v,{deck_id:a,getHand:this.getHand,cardsLeft:n,cards:t})),r.a.createElement("div",{className:"full-hand-community-card"},r.a.createElement(h,{deck_id:a,turnOverCard:this.turnOverCard,card:e}))),r.a.createElement(j,{cards:t,card:e}))}}]),t}(n.Component);a(22);l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.7b697452.chunk.js.map