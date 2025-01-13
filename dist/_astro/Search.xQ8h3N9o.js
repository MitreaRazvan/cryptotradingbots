import{j as e,c as s}from"./utils.B0NubzR9.js";import{a as n,B as p}from"./createLucideIcon.Cs3VbLyc.js";import{I as f}from"./input.BiCcMy4t.js";import{s as l}from"./store.C3IYmdSM.js";import{r}from"./index.BAAwwy_G.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=n("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=n("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function w({className:i}){const[a,c]=r.useState(""),[m,d]=r.useState(!1);r.useEffect(()=>{const t=document.documentElement.classList.contains("dark");d(t)},[]);const u=()=>{o()},h=()=>{a!==""&&c(""),l.set("")},o=()=>{l.set(a)};return e.jsxs("div",{className:s("flex w-full items-center justify-center gap-2 md:gap-4",i),children:[e.jsxs("div",{className:s("relative flex w-full"),children:[e.jsx(f,{placeholder:"Enter something...",value:a,className:"h-12 w-full bg-background pl-12 text-sm shadow-lg md:h-16 md:text-lg",onChange:t=>c(t.target.value),onKeyUp:t=>{(t.key==="Enter"||t.keyCode===13)&&o()}}),e.jsx("a",{onClick:h,className:s("absolute right-4 top-1 z-10 translate-y-[50%] md:top-2","cursor-pointer text-muted-foreground opacity-0 transition-all",a!==""&&"opacity-100"),children:e.jsx(x,{className:"size-5 md:size-6"})}),e.jsx(y,{className:s("absolute left-4 top-1 translate-y-[50%] md:top-2","size-5 cursor-pointer text-muted-foreground/20 md:size-6")})]}),e.jsx(p,{variant:m?"secondary":"default",className:s("h-12 w-32 text-sm font-light shadow-lg md:h-16 md:text-lg"),onClick:()=>u(),children:"Search"})]})}export{w as default};
