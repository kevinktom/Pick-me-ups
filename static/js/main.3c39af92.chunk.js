(this["webpackJsonppick-me-ups"]=this["webpackJsonppick-me-ups"]||[]).push([[0],{29:function(e,t,n){e.exports=n.p+"static/media/quotation-mark.d4e223d7.svg"},32:function(e,t,n){e.exports=n(64)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(27),r=n.n(s),i=(n(37),n(14)),c=n(1),u=(n(38),n(31)),l=n(9),m=n(28),d=n(12),h=n(11),f=(n(39),n(10)),E=(n(40),n(29)),g=n.n(E),w=n(41),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onAnimationStart=function(){a.setState({fadeIn:!0})},a.onAnimationEnd=function(){a.setState({fadeIn:!1})},a.quotes=[],a.render=function(){var e=a.state.quote,t=e.quote,n=e.author,s=a.state.fadeIn?"fade-in":"";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"quoteBody",className:"container-quote"},t&&o.a.createElement("div",null,o.a.createElement("div",{className:"button-actions",id:"button-quote"},o.a.createElement("button",{onClick:a.getRandomQuote,className:"fade-in"},"Another quote"),o.a.createElement("button",{onClick:a.props.resetAnswers,className:"fade-in"},"Reset")),o.a.createElement("div",{style:{display:"flex"},className:"fade-in"},o.a.createElement("img",{src:g.a,alt:"quotation mark",className:"quotation-mark-img"})),o.a.createElement("div",{className:"box-quote ".concat(s),onAnimationEnd:a.onAnimationEnd,onAnimationStart:a.onAnimationStart},o.a.createElement("div",{className:"quotetext"},t),"\xa0",o.a.createElement("div",{className:"author"},"- ",n||"Unknown")))))},a.componentDidMount=function(){a.getQuotes()},a.getQuotes=function(){var e=Object(f.a)(a),t=a.props.answers.join(" ");w.post("https://backend-pickmeups.herokuapp.com/api/quotes",{input:t}).then((function(t){return e.quotes=t.data,e.getRandomQuote(),t}))},a.getRandomQuote=function(){var e=a.getRandomNumber(0,a.quotes.length);a.setState({quote:a.quotes[e]}),a.onAnimationEnd(),a.onAnimationStart()},a.getRandomNumber=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1/0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;return Math.floor(Math.random()*(t-e))+e},a.state={quote:{quote:"",author:""},fadeIn:!0},a}return n}(o.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onAnimationStart=function(){a.setState({slideRight:!0})},a.onAnimationEnd=function(){a.setState({slideRight:!1})},a.questions=["How are you feeling right now?","What do you think is causing you to feel this way?","How did you respond?","Is there anything you would like to get off your mind?"],a.onEnterKeyDown=function(e){"Enter"===e.key&&(e.preventDefault(),a.onAnswerEnter())},a.onTextAreaChange=function(e){a.setState({currentAnswer:e.currentTarget.value})},a.onAnswerEnter=function(){a.setState({answers:[].concat(Object(u.a)(a.state.answers),[a.state.currentAnswer]),currentAnswer:""}),a.onAnimationEnd(),a.onAnimationStart()},a.resetAnswers=function(){a.setState({answers:[],currentAnswer:""})},a.returnPreviousQuestion=function(){var e=a.state.answers.slice(-1)[0];a.setState({answers:a.state.answers.slice(0,-1),currentAnswer:e})},a.generateRandomQuote=function(){for(var e=[],t=0;t<a.questions.length;t++)e.push("");a.setState({answers:e})},a.state={answers:[],currentAnswer:"",slideRight:!0},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.slideRight?"slide-right":"";return o.a.createElement("div",{className:"frame"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{id:"header"},"Pick me ups"),this.state.answers.length!==this.questions.length&&o.a.createElement("div",{id:"cardBody"},o.a.createElement("div",{className:"".concat(e),onAnimationStart:this.onAnimationStart,onAnimationEnd:this.onAnimationEnd},o.a.createElement("h2",null,this.questions[this.state.answers.length])),o.a.createElement("textarea",{onChange:this.onTextAreaChange,value:this.state.currentAnswer,name:"",id:"textareaBox",onKeyDown:this.onEnterKeyDown}),o.a.createElement("div",{className:"button-actions"},o.a.createElement("button",{onClick:this.onAnswerEnter},"Next Question"),this.state.answers.length>0&&o.a.createElement("button",{onClick:this.returnPreviousQuestion},"Back"),o.a.createElement("button",{onClick:this.generateRandomQuote},"Enlighten Me"))),this.state.answers.length===this.questions.length&&o.a.createElement(p,{resetAnswers:this.resetAnswers,answers:this.state.answers})),o.a.createElement("div",{id:"footer"},o.a.createElement("a",{href:"https://github.com/kevinktom/Pick-me-ups"},o.a.createElement("img",{src:"/github_icon.png",alt:""}))))}}]),n}(o.a.Component),A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:v}),o.a.createElement(c.a,{exact:!0,path:"/quote",component:p})))},b=function(){return o.a.createElement(i.a,null,o.a.createElement(A,null))},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),s(e),r(e)}))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),k()}},[[32,1,2]]]);
//# sourceMappingURL=main.3c39af92.chunk.js.map