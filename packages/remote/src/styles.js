import { createGlobalStyles } from 'goober/global';
import { setup } from 'goober';
import React from 'react';

setup(React.createElement);
export default createGlobalStyles`
@import url('https://rsms.me/inter/inter.css');
html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{
    margin:0;
}
h1,h2,h3,h4,h5,h6{
    font-size:100%;
}
html{
    font-family:'Inter', sans-serif;
}
img,video{
    height:auto;
}
table{
    border-collapse:collapse;
}
@supports (font-variation-settings: normal){
    html{
        font-family:'Inter var', sans-serif;
    }
}
:root{
    --base-text-size:0.9rem;
    --text-size-increment:1.23;
    --text-xs:calc(var(--base-text-size) / var(--text-size-increment));
    --text-s:var(--base-text-size);
    --text-m:calc(var(--text-s) * var(--text-size-increment));
    --text-l:calc(var(--text-m) * var(--text-size-increment));
    --text-xl:calc(var(--text-l) * var(--text-size-increment));
    --line-height-fixed-amount:0.35rem;
    --line-height-relative-amount:1.1em;
    --global-line-height:calc(var(--line-height-fixed-amount) + var(--line-height-relative-amount));
    --unit:0.5rem;
    --space-increment:1.65;
    --space-s:var(--unit);
    --space-m:calc(var(--space-s) * var(--space-increment));
    --space-l:calc(var(--space-m) * var(--space-increment));
    --space-xl:calc(var(--space-l) * var(--space-increment));
    --space-2xl:calc(var(--space-xl) * var(--space-increment));
    --space-3xl:calc(var(--space-2xl) * var(--space-increment));
    --space-4xl:calc(var(--space-3xl) * var(--space-increment));
    --text-frame-ratio:2.37;
    --text-frame-y:0.8em;
    --text-frame-x:calc(var(--text-frame-y) * var(--text-frame-ratio));
    --accent-h:0;
    --accent-s:100%;
    --accent-l:50%;
    --c-accent:hsl(var(--accent-h), var(--accent-s), var(--accent-l));
    --c-accent-contrasted:hsl(var(--accent-h), var(--accent-l), 95%);
    --grey-h:var(--accent-h);
    --grey-s:6%;
    --initial-grey-lightness:93%;
    --greyscale-lightness-increment:11.3%;
    --grey1-l:var(--initial-grey-lightness);
    --grey2-l:calc(var(--initial-grey-lightness) - var(--greyscale-lightness-increment) * 1);
    --grey3-l:calc(var(--initial-grey-lightness) - var(--greyscale-lightness-increment) * 2);
    --grey4-l:calc(var(--initial-grey-lightness) - var(--greyscale-lightness-increment) * 3);
    --grey5-l:calc(var(--initial-grey-lightness) - var(--greyscale-lightness-increment) * 4);
    --grey6-l:calc(var(--initial-grey-lightness) - var(--greyscale-lightness-increment) * 5);
    --grey7-l:calc(var(--initial-grey-lightness) - var(--greyscale-lightness-increment) * 6);
    --grey8-l:calc(var(--initial-grey-lightness) - var(--greyscale-lightness-increment) * 7);
    --c-grey1:hsl(var(--grey-h), var(--grey-s), var(--grey1-l));
    --c-grey2:hsl(var(--grey-h), var(--grey-s), var(--grey2-l));
    --c-grey3:hsl(var(--grey-h), var(--grey-s), var(--grey3-l));
    --c-grey4:hsl(var(--grey-h), var(--grey-s), var(--grey4-l));
    --c-grey5:hsl(var(--grey-h), var(--grey-s), var(--grey5-l));
    --c-grey6:hsl(var(--grey-h), var(--grey-s), var(--grey6-l));
    --c-grey7:hsl(var(--grey-h), var(--grey-s), var(--grey7-l));
    --c-grey8:hsl(var(--grey-h), var(--grey-s), var(--grey8-l));
    --c-border:hsla(var(--grey-h), var(--grey-s), var(--grey8-l), 0.1);
    --c-overlay:hsla(var(--grey-h), var(--grey-s), var(--grey8-l), 0.07);
    --c-background:white;
    --c-body:var(--c-grey8);
    --c-body-dimmed:hsla(var(--grey-h), var(--grey-s), var(--grey8-l), 0.5);
    --c-field-border:var(--c-grey2);
    --c-button-bg:var(--c-grey2);
    --radius:0rem;
    --field-border-width:1px;
}
body.relive-darkMode{
    --c-border:hsla(var(--grey-h), var(--grey-s), var(--grey1-l), 0.1);
    --c-overlay:hsla(var(--grey-h), var(--grey-s), var(--grey1-l), 0.07);
    --c-background:var(--c-grey8);
    --c-body:var(--c-grey1);
    --c-body-dimmed:hsla(var(--grey-h), var(--grey-s), var(--grey1-l), 0.5);
    --c-field-border:var(--c-grey6);
    --c-button-bg:var(--c-grey6);
}
html, body{
    height:100%;
    background-color:var(--c-background);
    color:var(--c-body);
}
main{
    max-width:960px;
    margin-left:auto;
    margin-right:auto;
    padding:var(--space-l);
    display:grid;
    grid-template-columns:repeat(3, 1fr);
}
@media screen and (max-width: 960px){
    main{
        grid-template-columns:repeat(2, 1fr);
    }
}
@media screen and (max-width: 600px){
    main{
        grid-template-columns:repeat(1, 1fr);
    }
}
.card{
    padding:var(--text-frame-y);
    background-color:var(--c-overlay);
}
.animName{
    margin-bottom:var(--space-m);
    font-size:var(--text-m);
    font-weight:600;
}
.action{
    background-color:var(--c-accent);
    color:var(--c-accent-contrasted);
    padding:var(--text-frame-y) var(--text-frame-y);
    text-align:center;
    width:100%;
    border:none;
    font-size:var(--text-s);
    letter-spacing:.03em;
    transition:filter .2s;
    cursor:pointer;
}
.action.-disabled{
    color:var(--c-body-dimmed);
}
.darkmodeToggle{
    text-align:center;
    cursor:pointer;
}

`;
