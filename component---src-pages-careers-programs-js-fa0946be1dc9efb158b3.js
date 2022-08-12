(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[6107],{25679:function(e,n,t){"use strict";var a=t(63366),r=t(67294),i=t(37059),l=["childImageSharp","extension","publicURL","alt"];n.Z=function(e){var n=e.childImageSharp,t=e.extension,m=e.publicURL,c=e.alt,o=(0,a.Z)(e,l);return n||"svg"!==t?r.createElement(i.G,Object.assign({image:n.gatsbyImageData},o,{alt:c})):r.createElement("div",{className:"old-gatsby-image-wrapper"},r.createElement("img",{src:m,alt:c}))}},91523:function(e,n,t){"use strict";t.r(n);var a=t(67294),r=t(43587),i=t(26052),l=t(9357),m=t(63941),c=t(1293),o=t(87369),u=t(22034),g=t(35085),s=t(38001);n.default=function(){var e=(0,a.useState)(),n=e[0],t=e[1];return a.createElement(r.ThemeProvider,{theme:"dark"===n?s.k:s.Z},a.createElement(i.Z,null,a.createElement(g.Z,null),a.createElement(l.Z,{title:"Open Source Internship Programs",description:"Engage, Learn, Share. Join the award-winning, Layer5 open source community and projects."}),a.createElement(m.Z,{theme:n,themeSetter:function(e){t(e)}}),a.createElement(u.Z,null),a.createElement(o.Z,{category:["internships"]}),a.createElement(c.Z,null)))}},33754:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var a=t(67294),r=t(1597),i=t(51174),l=t.n(i),m=t(43587).default.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"sc-bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 1.5rem;\n                img{\n                    padding-left: 1rem;\n                    width: 3rem;\n                    filter: invert(",");\n\n                }\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            object-fit: contain;\n            justify-content: center; \n            \n            img{\n                max-height: 25rem;\n                max-width: 31rem;\n                display: block;\n                margin-left: auto; \n                margin-right: auto; \n            }   \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;\n            align-items: center;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"],(function(e){return e.theme.meshInterfaceLogoFilter})),c=t(25679),o=t(46319),u=function(e,n){return a.createElement(a.Fragment,null,n?a.createElement(r.Link,{to:"/community/members/"+l()(e.name)},a.createElement("span",null,e.name)):a.createElement("span",null,e.name))},g=function(e){var n=e.category,t=e.title,i=e.img,g=e.feedlink,s=e.subtitle,M=e.author,p=e.thumbnail,I=e.superscript,d=e.date,N=!1;M&&(N=(0,r.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==M.name})));return a.createElement(m,null,a.createElement("div",{className:"page-header"},p&&a.createElement("div",{className:"feature-image"},a.createElement(c.Z,Object.assign({},p,{imgStyle:{objectFit:"contain"},alt:t}))),a.createElement("h1",{className:"page-title"},t,"  ",a.createElement("sup",{className:"supscript"},I),i&&g&&a.createElement("a",{href:g,target:"_blank",rel:"noreferrer"}," ",a.createElement("img",{src:i,alt:"RSS Feed"})," ")," "),s&&a.createElement("h3",null,s),n&&a.createElement("div",{className:"breadcrumbs"},a.createElement("span",null,a.createElement("h5",null,"Category:"),a.createElement("p",{key:n},a.createElement(r.Link,{to:"/blog/category/"+l()(n)},a.createElement("span",null,n)))),M&&a.createElement(a.Fragment,null,a.createElement("span",null,a.createElement("h5",null,"By:"),"Layer5 Team"===M.name?a.createElement("p",null,a.createElement("img",{src:o.Z,alt:"Layer5",width:"85"})," Team"):a.createElement("p",null,u(M,N)))),d&&a.createElement(a.Fragment,null,a.createElement("span",null,a.createElement("h5",null,"On:"),a.createElement("p",null,d)))),!n&&M&&a.createElement("div",{className:"breadcrumbs post"},a.createElement("h5",null,"By:"),a.createElement("span",null,u(M,N)),d&&a.createElement("span",null,a.createElement("h5",null,"On:"),a.createElement("p",null,d)))))}},22034:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(67294),r=t(1597),i=t(37242),l=t(33754),m=t(25679),c=t(43587).default.div.withConfig({displayName:"ProgramGridstyle__ProgramsPageWrapper",componentId:"sc-1ikyabo-0"})(["\n    \n    margin-top: -2rem;\n    h1{\n        color: ",";\n\n    }\n    .programs-page-wrapper{\n        margin: 4rem 0;\n\n        h5{\n            font-weight: 600;\n            text-align: center;\n        }\n    }\n    .sub-header_wrapper{\n        margin: 1rem 0;\n\n        h5{\n            font-size: 1.1rem; \n            font-weight: 600;\n            color: ",";\n        }\n    }\n\n    .icon{\n        height: 12rem;\n        width: 12rem;\n        margin: 0 auto 1.5rem auto;\n        position: relative;\n        \n        img{\n            display: block;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            margin: auto;\n        }\n    }\n    .sub-section_icon{\n        height: 8rem;\n        width: 8rem;\n    }\n\n    .program{\n        height: 18rem;\n        width: 20rem;\n        padding: 5px;\n        color: ",";\n        margin: auto;\n        background: ",";\n        justify-content: center;\n        border-radius: 1rem;\n        transition: all 0.2s;\n        transition-timing-function: ease-in-out;\n        \n        &:hover{\n            box-shadow: 0px 4px 20px 2px ",";\n        }\n    }\n    .sub-section_program{\n        width: 18rem;\n        height: 13rem;\n    }\n\n    .programs-col{\n        flex: 0 0 33%;\n        max-width: 100%;\n        margin: 1rem 0;\n    }\n    @media only screen and (max-width:1200px){\n        .programs-col{\n            flex: 0 0 50%;\n        }\n    }\n    @media only screen and (max-width:700px){\n        .programs-col{\n            flex: 0 0 100%;\n        }\n    }\n"],(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.DarkTheme?"rgba(10, 10, 10, 1)":"rgba(247, 247, 247, 1)"}),(function(e){return e.theme.shadowLightColor})),o=function(e){var n=e.hide_path,t=e.sub_section,o=(0,r.useStaticQuery)("2376360048"),u=n?"":"Programs",g=[],s=o.allMdx.nodes.filter((function(e){return!(g.indexOf(e.frontmatter.program)>=0)&&(g.push(e.frontmatter.program),!0)}));return a.createElement(c,null,a.createElement(l.Z,{title:"Open Source Internship Programs",subtitle:"Build Your Career at Layer5",path:u}),a.createElement("div",{className:t?"sub-header_wrapper":"programs-page-wrapper"},a.createElement(i.W2,null,a.createElement("div",{className:"program-grid-wrapper"},a.createElement(i.X2,null,s.reverse().map((function(e){var n=e.id,l=e.frontmatter,c=e.fields;return a.createElement(i.JX,{key:n,className:"programs-col"},a.createElement(r.Link,{to:"Layer5"===l.program?c.slug:"/programs/"+l.programSlug},a.createElement("div",{className:"program "+(t?"sub-section_program":"")},a.createElement("div",{className:"icon "+(t?"sub-section_icon":"")},a.createElement(m.Z,Object.assign({},l.thumbnail,{imgStyle:{objectFit:"contain"},alt:l.title}))),a.createElement("h5",null,l.program))))})))),a.createElement("p",null,"Layer5 is driven by its people, who are the stewards of our culture and principles. Join us on the journey to enabling the world's most innovative companies make the transition to cloud navtive and multi-cloud through engineering-empowered automation."))))}},51174:function(e){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},46319:function(e,n){"use strict";n.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYuOSA5My43OCI+PHRpdGxlPmxheWVyNS1ncmF5LW5vLXRyaW08L3RpdGxlPjxwb2x5Z29uIHBvaW50cz0iMTguNzYgMCAwIDAgMCA5My43OCA4OC45MSA5My43OCA4OC45MSA3NS4wMyAxOC43NiA3NS4wMyAxOC43NiAwIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIxMzUuODQgMCA5OC4zMyA5My43OCAxMTkuNzIgOTMuNzggMTQ1LjIyIDI4LjE0IDE2My4zOSA3NS4wMyAxMzIuMjIgNzUuMDMgMTI1LjIyIDkzLjc4IDE5Mi4xMSA5My43OCAxNTQuNTkgMCAxMzUuODQgMCIgc3R5bGU9ImZpbGw6IzNjNDk0ZiIvPjxwb2x5Z29uIHBvaW50cz0iMjE4LjU4IDMyLjgzIDE5NS4xNCAwIDE3MS42OSAwIDIwOS4yIDU2LjI3IDIwOS4yIDkzLjc4IDIyNy45NiA5My43OCAyMjcuOTYgNTYuMjcgMjY1LjQ3IDAgMjQyLjMyIDAgMjE4LjU4IDMyLjgzIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIyNzMuNTYgMTQuNzcgMjczLjU2IDE4Ljc2IDI3My41NiAzNy41MSAyNzMuNTYgNjAuMzkgMjczLjU2IDkzLjc4IDM2Mi40NiA5My43OCAzNjIuNDYgNzUuMDMgMjkyLjMyIDc1LjAzIDI5Mi4zMiA2MC4zOSAyOTIuMzIgNTYuMjcgMzQ2LjIxIDU2LjI3IDM0Ni4yMSAzNy41MSAyOTIuMzIgMzcuNTEgMjkyLjMyIDE4Ljc2IDM2Mi40NiAxOC43NiAzNjIuNDYgMCAyNzMuNTYgMCAyNzMuNTYgMTQuNzciIHN0eWxlPSJmaWxsOiMzYzQ5NGYiLz48cGF0aCBkPSJNMzkyLjkyLDE3Ljg4SDQ0MVYzNy4zOUgzOTguMTJsLjE4LDE3Ljg4aDEyLjg3bDM0LDM4LjUxaDIzLjE2bC0zNC0zOC41MWgxMy4yN2ExNC41NiwxNC41NiwwLDAsMCwxNC41Ny0xNC41NlYxNC41N0ExNC41NywxNC41NywwLDAsMCw0NDcuNTksMGgtNzNWOTMuNzhoMTguNzZaIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHJlY3QgaWQ9Il9QYXRoXyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIHg9IjUzNi42MSIgd2lkdGg9IjM2LjkzIiBoZWlnaHQ9IjE3Ljc5IiBzdHlsZT0iZmlsbDojODI4YzhjIi8+PHBhdGggaWQ9Il9QYXRoXzIiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBkPSJNNTc2LjksNTkuOTNWNTIuNTVjMC04LjQ4LTcuMTQtMTUuMzYtMTUuOTQtMTUuMzZoLTU5LjZWMzIuMzRINDc5LjU0djIxaDc1LjU0djYuNTdaIiBzdHlsZT0iZmlsbDojODI4YzhjIi8+PHBvbHlnb24gaWQ9Il9QYXRoXzMiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBwb2ludHM9IjUwMS4zNiAyNi41MiA1MDEuMzYgMTcuNzkgNTMwLjU4IDE3Ljc5IDUzMC41OCAwIDQ3OS41NCAwIDQ3OS41NCAyNi41MiA1MDEuMzYgMjYuNTIiIHN0eWxlPSJmaWxsOiNhMGFhYWEiLz48cGF0aCBpZD0iX1BhdGhfNCIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik01NTUuMDgsNjUuNjRWNzZINTI1Ljg2VjkzLjc4aDM2YzguMzEsMCwxNS02LjQ4LDE1LTE0LjQ4VjY1LjY0WiIgc3R5bGU9ImZpbGw6I2EwYWFhYSIvPjxwYXRoIGlkPSJfUGF0aF81IiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgZD0iTTQ5OS42MSw2Ni42MVY3NmgyMC4yMlY5My43OGgtMjZjLTguMzEsMC0xNS02LjQ4LTE1LTE0LjQ4VjY2LjYxWiIgc3R5bGU9ImZpbGw6IzgyOGM4YyIvPjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-careers-programs-js-fa0946be1dc9efb158b3.js.map