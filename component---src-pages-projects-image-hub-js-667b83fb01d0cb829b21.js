"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[7305],{93798:function(I,i,M){M.r(i),M.d(i,{default:function(){return x}});var e=M(67294),c=M(43587),l=M(26052),G=M(9357),b=M(63941),n=c.default.section.withConfig({displayName:"imageHubstyle__ImageHubWrapper",componentId:"sc-19j2cat-0"})(["\n    .banner-background{\n        background-color: ",";\n    }\n    .banner{\n        padding: 6.25rem 0 1.25rem 0;\n        .title-text{\n            margin: 3.125rem 0 6.25rem 0;\n            h1{\n                color: ",";\n            }\n            h4{\n                border: 1px solid gray;\n                padding: 0.2rem 0.625rem 0.2rem 0.625rem;\n                font-size: 1.325rem;\n                width: 15rem;\n                font-weight: 600;\n                color: ",";\n                margin:0.5rem 0;\n                text-align:center;\n            }\n        }\n        .logo{\n            float: right;\n            margin-right: 1.875rem;\n            height: 12.5rem;\n            width: auto;\n        }\n        p{\n            width: 96%;\n            color: ",";\n        }\n        .iframe-div{\n            height: 450px;\n            aspect-ratio: 2;\n            display: block;\n            margin: 3.125rem auto;\n        }\n    }\n    .showcase{\n        margin: 6.25rem 0;\n        text-align: center;\n        .slider{\n            margin: auto;\n            width: 70%;\n            .slick-arrow{\n                margin: 0 -1.25rem 0 -3.125rem;\n            }\t\n            .slick-arrow:before{\t\n                color: ",";\n                font-size: 3rem;\n                display: inline-block;\n            }\n            .slick-arrow:hover:before{\t\n                color: ",";\t\n            }\n        }\n    }\n    .contributors{\n        width: 70%;\n        margin: 6.25rem auto;\n        text-align: center;\n        p{\n            margin-bottom: 3.125rem;\n        }\n    }\n    @media only screen and (max-width: 912px) {\n        .iframe-div{\n            height: 80%;\n            width: 100%;\n        }\n    }\n\n    @media only screen and (max-width: 480px) {\n        .banner{\n            padding: 3.125rem 0 1.25rem 0;\n            .title-text{\n                margin: 0 0 3.125rem 0;\n                h4{\n                    font-size: 16px;\n                    padding: 0;\n                    border: 0;\n                }\n            }\n            .logo{\n                height: 6.25rem;\n                width: auto;\n                margin: 0;\n            }\n            p{\n                width: 100%;\n            }\n            .iframe-div{\n                height: 80%;\n                width: 100%;\n                margin: 1.875rem auto;\n            }\n        }\n        .showcase{\n            margin: 3.125rem 0;\n            .slider{\n                margin: auto;\n                width: 85%;\n                .slick-arrow{\n                    margin: 0 -0.3rem 0 -0.3rem;\n                }\t\n                .slick-arrow:before{\t\n                    font-size: 1.5rem;\n                }\n            }\n        }\n        .contributors{\n            width: 100%;\n            margin: 3.125rem auto;\n            p{\n                margin-bottom: 1.875rem;\n            }\n        }\n    }\n"],(function(I){return I.theme.black}),(function(I){return I.theme.white}),(function(I){return I.theme.white}),(function(I){return I.theme.white}),(function(I){return I.theme.primaryColor}),(function(I){return I.theme.secondaryColor})),t=M(37242),m=M(63689),g=M(48538),j=M(7782),a=M(71445),S=M.p+"static/service-mesh-architecture-consul-c496f34df8205015d302cf525e40a20c.png",y=M.p+"static/image-hub-on-consul-with-wasm-and-meshery-4fcc299bb8f1b66003812470ba681739.png",Y=function(){return e.createElement(l.Z,null,e.createElement(n,null,e.createElement("div",{className:"banner-background"},e.createElement(t.W2,null,e.createElement("div",{className:"banner"},e.createElement("img",{className:"logo",src:a.Z,alt:"Image-Hub Logo"}),e.createElement("div",{className:"title-text"},e.createElement("h4",null,"Purpose and Overview"),e.createElement("h1",null,"Image Hub")),e.createElement("p",null,"Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters written in Rust. These modules can be used to implement multi-tenancy or to implement per user rate limiting in your application's endpoints. This application was first demonstrated at DockerCon 2020."),e.createElement("p",null,"Watch the demo to learn more about how WebAssembly (WASM) modules are dynamically loadable and reloadable in service mesh data planes, enabling them to be more intelligent and responsive in real-time. This project examines how to let application infrastructure concerns melt off your service mesh workloads and have your infrastructure implement multi-tenancy on your behalf."),e.createElement("p",null,"Learn how to use Docker Desktop and Kubernetes as your development platforms of choice in combination with Meshery, the cloud native management plane, to easily deploy a service mesh. Using Consul and Envoy's latest capabilities, see how WASM can be used to move user authentication and authorization from your application to the infrastructure."),e.createElement("iframe",{className:"iframe-div",width:"800px",height:"400px",src:"https://www.youtube.com/embed/5BrbbKZOctw",loading:"lazy",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))),e.createElement(t.W2,null,e.createElement("div",{className:"showcase"},e.createElement(g.Z,{className:"slider",arrows:!0,infinite:!1,speed:"500",slidesToScroll:1},e.createElement("div",null,e.createElement("a",{href:S},e.createElement("img",{src:S,alt:"Consul Service Mesh Architecture"}))),e.createElement("div",null,e.createElement("a",{href:y},e.createElement("img",{src:y,alt:"Image Hub on Consul with WASM and Meshery"})))),e.createElement("p",null,"Consul Service Mesh Architecture w/WebAssembly")),e.createElement("div",{className:"contributors"},e.createElement("h1",null,"Contributors"),e.createElement("p",null,"This demo application has been enabled by experimental works of Nic Jackson of HashiCorp, and Kanishkar J, Lee Calcote, and other contributors of Layer5. Learn more about the Layer5 and HashiCorp Partnership."),e.createElement(j.Z,{right:!0,vintageOne:!0},e.createElement(m.Z,{primary:!0,title:"Layer5 and HashiCorp",url:"/partners"})," ",e.createElement(m.Z,{secondary:!0,title:"Discuss WASM Filters",url:"https://discuss.layer5.io/c/webassembly-filters/11",external:!0})),e.createElement("p",null,e.createElement("br",null),"See the ",e.createElement("a",{href:"https://github.com/layer5io/wasm-filters"},"WASM Filters repository"),".")))))},s=M(1293),N=M(35085),z=M(38001),x=function(){var I=(0,e.useState)(),i=I[0],M=I[1];return e.createElement(c.ThemeProvider,{theme:"dark"===i?z.k:z.Z},e.createElement(l.Z,null,e.createElement(N.Z,null),e.createElement(G.Z,{title:"Image Hub",description:"Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters.",image:"/images/layer5-image-hub.png"}),e.createElement(b.Z,{theme:i,themeSetter:function(I){M(I)}}),e.createElement(Y,null),e.createElement(s.Z,null)))}},7782:function(I,i,M){M.d(i,{Z:function(){return t}});var e=M(63366),c=M(67294),l=M(43587),G="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxNDAgNTYiPjxnIGlkPSJHcm91cF8xNDUyIiBkYXRhLW5hbWU9Ikdyb3VwIDE0NTIiIG9wYWNpdHk9Ii4zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA0NCAtMTc3NikiPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MCIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCAxODMyKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MSIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCAxODE5KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MiIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCAxODA2KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MyIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCAxNzkzKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2NCIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCAxNzgwKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MC0yIiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDYxIDE4MzIpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYxLTIiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNjEgMTgxOSkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjItMiIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA2MSAxODA2KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2My0yIiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDYxIDE3OTMpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjY0LTIiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNjEgMTc4MCkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjAtMyIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3OCAxODMyKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MS0zIiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDc4IDE4MTkpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYyLTMiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNzggMTgwNikgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjMtMyIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3OCAxNzkzKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2NC0zIiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDc4IDE3ODApIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYwLTQiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOTUgMTgzMikgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjEtNCIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA5NSAxODE5KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2Mi00IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDk1IDE4MDYpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYzLTQiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOTUgMTc5Mykgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjQtNCIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA5NSAxNzgwKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MC01IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTEyIDE4MzIpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYxLTUiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMTIgMTgxOSkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjItNSIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTExMiAxODA2KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2My01IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTEyIDE3OTMpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjY0LTUiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMTIgMTc4MCkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjAtNiIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyOSAxODMyKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MS02IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTI5IDE4MTkpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYyLTYiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMjkgMTgwNikgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjMtNiIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyOSAxNzkzKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2NC02IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTI5IDE3ODApIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYwLTciIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNDYgMTgzMikgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjEtNyIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE0NiAxODE5KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2Mi03IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTQ2IDE4MDYpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYzLTciIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNDYgMTc5Mykgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjQtNyIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE0NiAxNzgwKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MC04IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTYzIDE4MzIpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYxLTgiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNjMgMTgxOSkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjItOCIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2MyAxODA2KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2My04IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTYzIDE3OTMpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjY0LTgiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNjMgMTc4MCkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjAtOSIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4MCAxODMyKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MS05IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTgwIDE4MTkpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYyLTkiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwYjM5ZiIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODAgMTgwNikgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjMtOSIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDBiMzlmIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4MCAxNzkzKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2NC05IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGIzOWYiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTgwIDE3ODApIHJvdGF0ZSgtOTApIi8+PC9nPjwvc3ZnPg==",b=["children"],n=l.default.div.withConfig({displayName:"VintageBox__BoxWrapper",componentId:"sc-1wopi30-0"})(["\n    display:inline-block;\n    position:relative;\n    &:before{\n        content: url(",");\n        position: absolute;\n        bottom: -30px;\n        ","\n        ","\n        ","\n        ","\n  @media screen and (max-width: 450px) and (min-width: 402px)\n  {\n    // content: '';\n    right: -10px;\n  }\n\n  @media screen and (max-width: 402px)\n  {\n    content: '';\n  }\n    }\n"],G,(function(I){return I.vintageOne&&(0,l.css)({content:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxNDAgNTYiPjxnIGlkPSJHcm91cF8xNDUzIiBkYXRhLW5hbWU9Ikdyb3VwIDE0NTMiIG9wYWNpdHk9Ii40IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA0NCAtMTc3NikiPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MCIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCAxODMyKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MSIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCAxODE5KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MiIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCAxODA2KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MyIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCAxNzkzKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2NCIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0NCAxNzgwKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MC0yIiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDYxIDE4MzIpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYxLTIiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNjEgMTgxOSkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjItMiIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA2MSAxODA2KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2My0yIiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDYxIDE3OTMpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjY0LTIiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNjEgMTc4MCkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjAtMyIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3OCAxODMyKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MS0zIiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDc4IDE4MTkpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYyLTMiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNzggMTgwNikgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjMtMyIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA3OCAxNzkzKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2NC0zIiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDc4IDE3ODApIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYwLTQiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOTUgMTgzMikgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjEtNCIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA5NSAxODE5KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2Mi00IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDk1IDE4MDYpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYzLTQiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOTUgMTc5Mykgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjQtNCIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA5NSAxNzgwKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MC01IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTEyIDE4MzIpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYxLTUiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMTIgMTgxOSkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjItNSIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTExMiAxODA2KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2My01IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTEyIDE3OTMpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjY0LTUiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMTIgMTc4MCkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjAtNiIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyOSAxODMyKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MS02IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTI5IDE4MTkpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYyLTYiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMjkgMTgwNikgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjMtNiIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyOSAxNzkzKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2NC02IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTI5IDE3ODApIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYwLTciIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNDYgMTgzMikgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjEtNyIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE0NiAxODE5KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2Mi03IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTQ2IDE4MDYpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYzLTciIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNDYgMTc5Mykgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjQtNyIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE0NiAxNzgwKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MC04IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTYzIDE4MzIpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYxLTgiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNjMgMTgxOSkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjItOCIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2MyAxODA2KSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2My04IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTYzIDE3OTMpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjY0LTgiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNjMgMTc4MCkgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjAtOSIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4MCAxODMyKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2MS05IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTgwIDE4MTkpIHJvdGF0ZSgtOTApIi8+PGNpcmNsZSBpZD0iRWxsaXBzZV8zMjYyLTkiIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iI2NjYyIgZGF0YS1uYW1lPSJFbGxpcHNlIDMyNjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExODAgMTgwNikgcm90YXRlKC05MCkiLz48Y2lyY2xlIGlkPSJFbGxpcHNlXzMyNjMtOSIgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjY2NjIiBkYXRhLW5hbWU9IkVsbGlwc2UgMzI2MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4MCAxNzkzKSByb3RhdGUoLTkwKSIvPjxjaXJjbGUgaWQ9IkVsbGlwc2VfMzI2NC05IiBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjY2MiIGRhdGEtbmFtZT0iRWxsaXBzZSAzMjY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTgwIDE3ODApIHJvdGF0ZSgtOTApIi8+PC9nPjwvc3ZnPg==)"})}),(function(I){return I.vintageTwo&&(0,l.css)({content:"url("+G+")"})}),(function(I){return I.right&&(0,l.css)({right:"-45px",left:"auto"})}),(function(I){return I.left&&(0,l.css)({left:"-45px",right:"auto"})})),t=function(I){var i=I.children,M=(0,e.Z)(I,b),l=["vintage-box"];return M.className&&l.push(M.className),c.createElement(n,Object.assign({},M,{className:l.join(" ")}),i)}},71445:function(I,i,M){i.Z=M.p+"static/layer5-image-hub-5f459a315ba20880d5ec50b882acb87a.png"}}]);
//# sourceMappingURL=component---src-pages-projects-image-hub-js-667b83fb01d0cb829b21.js.map