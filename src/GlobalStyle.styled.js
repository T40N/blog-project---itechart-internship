import { createGlobalStyle } from "styled-components";
import "./index.css";

const GlobalStyle = createGlobalStyle`

#root {
	display: grid;
	grid-template: auto / minmax(min-content,max-content) auto;
}
*::-webkit-scrollbar {
    display: none;
  }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
  box-sizing: border-box;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 16px;
	font-family: 'Poppins', sans-serif;
    font-weight: normal;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	text-decoration: none;
}
html {
	@media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
		font-size: 14px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.small}) {
		font-size: 12px;
	}
}
`;

export default GlobalStyle;
