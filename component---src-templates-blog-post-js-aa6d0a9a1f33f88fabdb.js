(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return f});a(33);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(157),c=a(186),s=a(169),d=a(163),u=a(164),m=a(158),p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next,i={identifier:t.id,title:t.frontmatter.title};return o.a.createElement(d.a,{location:this.props.location,title:e},o.a.createElement(u.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-1)})},t.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),o.a.createElement(s.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,n&&o.a.createElement(l.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(l.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))),o.a.createElement(c.DiscussionEmbed,{shortname:"royletron-dev",config:i}))},e}(o.a.Component);e.default=p;var f="2761936148"},157:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(32),c=a.n(l);a.d(e,"a",function(){return c.a});a(159);var s=r.a.createContext({}),d=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return s});var n=a(174),r=a.n(n),i=a(175),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts,o.a.bodyFontFamily[0]="Sniglet";var l=new r.a(o.a);var c=l.rhythm,s=l.scale},159:function(t,e,a){var n;t.exports=(n=a(161))&&n.default||n},161:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},163:function(t,e,a){"use strict";a(33);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(157),c=a(158),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},o.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},o.a.createElement("header",null,t),o.a.createElement("main",null,r),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(o.a.Component);e.a=s},164:function(t,e,a){"use strict";var n=a(165),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(176),s=a.n(c);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,l=t.title,c=n.data.site,d=e||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},e.a=d},165:function(t){t.exports={data:{site:{siteMetadata:{title:"Royletron.dev",description:"All my knowledge, in a tiny blog.",author:"Darren"}}}}},169:function(t,e,a){"use strict";a(170);var n=a(172),r=a(0),i=a.n(r),o=a(157),l=a(173),c=a.n(l),s=a(158);var d="15316941";e.a=function(){return i.a.createElement(o.b,{query:d,render:function(t){var e=t.site.siteMetadata,a=e.author,n=e.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},i.a.createElement(c.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(s.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who lives and works in Oxford, being a wizard like Harry Potter ⚡."," ",i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"You should follow him on Twitter")))},data:n})}},172:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD/klEQVQ4y3WUi09bZRjG+Y9cYowuU8lgQKYmGjXOTOcUGAMC4aISzBgbDCwDubhxh42xqtyFcRkg7AKUcoe1gKXl0hbGZaBCuZTSyw+/0wIrg33Jycl3cs7ve97nfc7rgdva3d09cm1bLMzPzx96hsOO3WbjuOXhArlgZrOZublZ1jc20Ol0NJUVkCuLIf9aEGOjKurL77K0uHAYfjxwlx2rlaybCdT+lkd50S/EfH2a4mg/skK9yIs4Q1KAF8nfnqQo7jxVhSm01pVhWls7Aj0Abm9buPKdDxnRn5MU6E1uuDf50R+QetmblCBvfg3zQXbJi/QQL25ffoe06HOsmjac3zrsdleZ7sCNLQslsnDywk+TFeZLwfcfkR3uQ0rge9y85ElmqDd5kX6kBp+hIMoPeWoUUxo1Fht7Kh0uoEMYLD1QqVTcCP9ClOnLvdiPuX7hbeIDzlJyPYDMiE+QBZ8lLcQXWaAnyQHvc+PiSZL8PcmJ80f5tNWlVLAOmmITquUZscRfeJeEQF9qcpJJiwmirbKcVe3fLKqGmOlTUpGbTmJkALciPqQwyoe0YG9GRwZeBe5itTnIjbtIfnwI5dkyehqqMBtmWBkbYVs/iXlGh3VOz5pOwEfVlP4cSaLwulep2IvSXsl2u6vk/qfNXPvyDTJig9EolTwf7sM6O43FMMXmtPbg2pjUYDbqqcpJIdn/FEVJYRgN+j2FDuHhHrC+Us6VcyfIuRqKplvBv8Lw+WeDLKqHWRlXs6YdF3cVWwK6IDL5p7Ak+Zs3yfzxPJtbWwfx8ZCo0sao15MW5ElToYyl8VG6G2rpqK2ivbocnbIT/UAPnXU1tJTJMQ4P0lSczk9fnaKiNJ/+XqWTIVUrSrY5N52tD4j+9ARdtWXsvljgH80o1b/LRUPG2Zmd4T+xb66toae5Ece8kYb7d4j67C0GezpeZtFd4dSklqQfQlA/accmzDcM9SFLTGBJPcKWaMjaxBgl+bkoGuvFgfP0tzyk9FYayfExrJnWX5a832XLjpWOR4/QdD1hxzjt9GxReCh1WNvdyVBbs+j4M2d87M8NzvJ1Gg0iHFjEADkE3Ff5YnkZ1eM2J9AkuikpnVB0YBjoFV5WYBjsZVt03Sos6Balr5pMR4aEh/vo2tjcpKW6Epv4YH1qgnUBlRSOtLeKxnQ5Y2MW+1XhZ8uDWqFOCDlu2rirHB4eprXiD2G8gU3hnaSw92GDs8RlEZsd4xR18lKmZ2YOsncs0B2qUCiou1+CSfgoqZQ6LTVHCnvVvbtMaLVHpsyxQHeoNGCLs2+jfvwXK6MjtFeVIb9T7PR5P3OvHbCvrv2XpT+gq7OTlqZGBgYGsO8d9jqYtP4HMlRVsALg9ZkAAAAASUVORK5CYII=",width:50,height:50,src:"/static/416334e439c2722a5ed6629155742a2d/7adcd/royletron.png",srcSet:"/static/416334e439c2722a5ed6629155742a2d/7adcd/royletron.png 1x,\n/static/416334e439c2722a5ed6629155742a2d/5e4a8/royletron.png 1.5x,\n/static/416334e439c2722a5ed6629155742a2d/2fa9b/royletron.png 2x,\n/static/416334e439c2722a5ed6629155742a2d/e31b2/royletron.png 3x"}}},site:{siteMetadata:{author:"Darren",social:{twitter:"royletron"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-aa6d0a9a1f33f88fabdb.js.map