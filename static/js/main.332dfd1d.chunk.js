(this["webpackJsonp00-practice-app"]=this["webpackJsonp00-practice-app"]||[]).push([[0],[,,,,,,function(e,t,c){},,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var r=c(2),a=c(10),n=c.n(a),o=c(7),i=(c(15),c(0));function s(e){var t=e.currentPage,c=e.handlePageChange,a=function(e){return t===e?"nav-link active":"nav-link"},n=Object(r.useState)(!1),s=Object(o.a)(n,2),l=s[0],j=s[1],h=function(e){j(!1),c(e)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:l?"navigation navigation-open":"navigation",children:[Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#about",onClick:function(){return h("About")},className:a("About"),children:"About Me"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#portfolio",onClick:function(){return h("Portfolio")},className:a("Portfolio"),children:"Portfolio"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#contact",onClick:function(){return h("Contact")},className:a("Contact"),children:"Contact"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#resume",onClick:function(){return h("Resume")},className:a("Resume"),children:"Resume"})})]}),Object(i.jsxs)("div",{className:l?"hamburger hamburger-open":"hamburger",onClick:function(){j(!l)},children:[Object(i.jsx)("div",{className:"burger burger1"}),Object(i.jsx)("div",{className:"burger burger2"}),Object(i.jsx)("div",{className:"burger burger3"})]})]})})}c(17),c(6);function l(){return Object(i.jsxs)("section",{className:"section",children:[Object(i.jsx)("header",{children:"About Me"}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("div",{className:"profile-photo"}),Object(i.jsx)("p",{children:"Hello, my name is Natalia Post, and I am a New York-based freelance Web Developer. If I am not freelancing at some of New York\u2019s finest digital agencies, I am working on projects remotely on for clients all over the world. I have a diverse set of skills, ranging from design to HTML + CSS + JavaScript."}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"Certificate of Completion the Institute For Robotic Process Automation & Artificial Intelligence Completed The Next Gen Society: Intro to artificial intelligence."})]})]})}c(18);var j=c(4),h=c(3);var u=function(e){var t=e.project;return Object(i.jsx)("div",{className:"work-card "+t.projectIcon,title:t.projectDesc,children:Object(i.jsxs)("div",{className:"card-hover",children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.appLink,children:Object(i.jsx)("h1",{children:t.projectName})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.gitHubLink,children:Object(i.jsx)(h.a,{icon:j.a,size:"2x"})})]})})},d=[{projectName:"Paw Time",projectIcon:"project-pawtime",projectDesc:"A web application that stores a personal profile for your pet(s). \n              Each pet has their vaccinations, issues, appointments, etc logged. \n              Future releases will include integration with Rover to schedule pet sitting/walking \n              and Veterinary Visit Scheduling.",gitHubLink:"https://github.com/nataliapost11/portfolio/",appLink:"https://mysterious-waters-58125.herokuapp.com/"},{projectName:"Game Time",projectIcon:"project-game-time",projectDesc:"Game Time is a web application that allows the team management to\n            get weather predictions for a week in advance and schedule an event on the team calendar,\n            thus informing team players of upcoming matches, practice sessions and other events",gitHubLink:"https://github.com/nataliapost11/portfolio/",appLink:"https://varunisinha.github.io/game-time/"},{projectName:"Weather Dashboard",projectIcon:"project-weather-dashboard",projectDesc:"A weather dashboard which provides the weather outlook for multiple\n            cities for allowing users to plan a trip accordingly.",gitHubLink:"https://github.com/nataliapost11/homework-weather-dashboard",appLink:"https://nataliapost11.github.io/homework-weather-dashboard/"},{projectName:"Work Day Scheduler",projectIcon:"project-workday-scheduler",projectDesc:"Work Day Scheduler A simple calendar app for scheduling your work day.\n            A simple calendar application that allows a user to save events for each hour of the\n            day by modifying starter code.",gitHubLink:"https://github.com/nataliapost11/homework-work-day-scheduler",appLink:"https://nataliapost11.github.io/homework-work-day-scheduler/"}];c(24);function b(){return Object(i.jsxs)("section",{className:"section",children:[Object(i.jsx)("header",{children:"Portfolio"}),Object(i.jsx)("div",{className:"content portfolio-container",children:d&&d.map((function(e){return Object(i.jsx)(u,{project:e})}))})]})}function p(){return Object(i.jsxs)("section",{className:"section",children:[Object(i.jsx)("header",{children:"Resume"}),Object(i.jsx)("div",{className:"content",children:"Resume goes here!"})]})}var m=function(){return Object(i.jsxs)("section",{className:"section",children:[Object(i.jsx)("header",{children:"Contact"}),Object(i.jsx)("div",{className:"content"})]})};function f(e){var t=e.currentPage;return Object(i.jsx)("div",{className:"main",children:"Portfolio"===t?Object(i.jsx)(b,{}):"Contact"===t?Object(i.jsx)(m,{}):"Resume"===t?Object(i.jsx)(p,{}):Object(i.jsx)(l,{})})}c(25);var g=function(){var e=Object(r.useState)("About"),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){document.title="".concat(c," Selected")})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("div",{className:"header-text",children:"Natalia Post"}),Object(i.jsx)(s,{currentPage:c,handlePageChange:function(e){return a(e)}})]}),Object(i.jsx)(f,{currentPage:c})]})};c(26);var x=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsxs)("div",{className:"footer-icons",children:[Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/nataliapost11",children:Object(i.jsx)(h.a,{icon:j.a,size:"2x"})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"http://linkedin.com",children:Object(i.jsx)(h.a,{icon:j.b,size:"2x"})}),Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"http://stackexchange.com",children:Object(i.jsx)(h.a,{icon:j.c,size:"2x"})})]})})},O=(c(27),function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g,{}),Object(i.jsx)(x,{})]})});c(28);n.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.332dfd1d.chunk.js.map