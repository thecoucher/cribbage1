(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(11),s=n.n(o),r=n(2),i=n(3),l=n(5),d=n(4),h=n(6),u=n(1),p=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.deck_id;this.props.getCib;console.log("CRIB: props",this.props);var n=this.props.card.code,c=this.props.card.image;return console.log("CRIB code",n),console.log("CRIB image",c),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.props.getCrib({deck_id:t})}},"Get Crib"),a.a.createElement("p",null,"This will become the card hands: ",t),a.a.createElement("p",null,"This the first card: ",n),a.a.createElement("img",{src:c,heigh:"228px",width:"162px"}))}}]),t}(c.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.deck_id;this.props.getHand;console.log("GETHAND Main1 props",this.props);var n=this.props.cards;console.log("GETHAND cards: ",n);var c=n.map(function(e){return a.a.createElement("img",{src:e.image,key:e.code,height:"228",width:"162"})});return console.log("22222222222222222222222 ",c),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.props.getHand({deck_id:t})}},"Get Hand"),a.a.createElement("p",null,"This will become the card hands: ",t),a.a.createElement("div",null,c))}}]),t}(c.Component),b=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={deck:[]},n.getCrib=n.getCrib.bind(Object(u.a)(Object(u.a)(n))),n.getHand=n.getHand.bind(Object(u.a)(Object(u.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Look at me. I mounted!!");fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(function(e){return e.json()}).then(function(t){console.log("STATE1111",e.state),console.log("BBBBBBB ",t),e.setState({deck:t})})}},{key:"getCrib",value:function(e){var t=this;console.log("I am getting crib card from the deck: ",e.deck_id);var n="https://deckofcardsapi.com/api/deck/"+e.deck_id+"/draw/?count=1";fetch(n).then(function(e){return e.json()}).then(function(e){console.log("GET CRIB state",t.state),console.log("GT CRIB result ",e),console.log("GET CRIB cards",e.cards[0]),t.setState({crib:e.cards})})}},{key:"getHand",value:function(e){var t=this;console.log("I am getting users hand from the deck: ",e.deck_id);var n="https://deckofcardsapi.com/api/deck/"+e.deck_id+"/draw/?count=4";fetch(n).then(function(e){return e.json()}).then(function(e){console.log("GET HAND state",t.state),console.log("GET HAND result ",e),console.log("CCCCCCC "),console.log("GET HAND cards1",e),console.log("GET HAND cards2",e.cards),t.setState({hand:e.cards})})}},{key:"render",value:function(){console.log("RENDER: state",this.state);var e,t,n=this.state.deck.deck_id;this.state.deck.deck;return e=this.state.crib?this.state.crib[0]:{},this.state.hand?(console.log("APP checking state.cards1 "),console.log("APP checking state ",this.state),console.log("APP checking state.hand ",this.state.hand),t=this.state.hand):(console.log("APP checking stae.cards2 "),t=[]),a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"Cribbage Hand Tester"),a.a.createElement("p",null,"Guess how many points this hand is worth."),a.a.createElement(p,{deck_id:n,getCrib:this.getCrib,card:e}),a.a.createElement(g,{deck_id:n,getHand:this.getHand,cards:t}))}}]),t}(c.Component);n(21);s.a.render(a.a.createElement(b,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.eb8b9b53.chunk.js.map