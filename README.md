# Viajar Faz Bem
Biblioteca de estilos utilizado nos projetos da [Viajar Faz Bem](http://viajarfazbem.com).

Está sendo utilizado como base variáveis no arquivo `.css` que são replicados nos arquivos `.scss` caso seja utilizado Sass ou arquivos `.js` que podem ser utilizados com CSS-in-JS.

## Como utilizar
Baixar arquivos
```bash
yarn add viajarfazbem-styles
```
Adicionar no arquivo de estilo padrão ou no arquivo base do projeto(.js/.tsx)
```css
@import  '../../node_modules/viajarfazbem-styles/src/styles/theme/index.css';
```
```js
import  '../../node_modules/viajarfazbem-styles/src/styles/theme/index.css';
```
Pode ser utilizado através do CDN
```
https://cdn.jsdelivr.net/gh/sbtur/viajarfazbem-styles/src/styles/css/index.css
```
