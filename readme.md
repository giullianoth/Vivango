# Vivango

[![HTML 5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS 3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-712cf9?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

---

Este é um projeto front-end para o site da agência de turismo **Vivango**.

## Status do projeto

Projeto em desenvolvimento.

## Tecnologias utilizadas

Foram utilizadas as seguintes tecnologias para a construção desta página:

- [HTML 5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS 3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Sass](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/)

## Como instalar

Após baixar o projeto, siga as seguintes instruções:

- Instale o [Node JS](https://nodejs.org/en).

- Com o terminal, navegue até o diretório do projeto.
```
cd [caminho do projeto]
```

- Instale o [Sass](https://sass-lang.com/).
```
npm install -g sass
```

- Instale o [jQuery](https://jquery.com/).
```
npm install jquery
```

- Instale o [Bootstrap](https://getbootstrap.com/).
```
npm i bootstrap
```

- Instale o [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/).
    - Para instalar esta extensão, acesse a [página](https://owlcarousel2.github.io/OwlCarousel2/) e clique em *Download*.
    - Descompacte o arquivo e copie em ```assets/shared``` dentro do projeto, renomeando a pasta descompactada para ```owl-carousel```.

Para editar os arquivos ```sass``` ative o seguinte comando no terminal: (Para criar a versão minificada do CSS utilize a flag ```--style=compressed```)
```
sass assets/styles/scss/style.scss:assets/styles/css/style.css --watch
```

Se você usa o editor [Visual Studio Code](https://code.visualstudio.com/), você pode instalar a extensão "[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)". Após instalado:
- Clique no ícone de engrenagem, na aba da extensão, depois em "Configurações de extensão" e depois em "settins.json";
- Em ```settings.json``` acrescente os seguintes parâmetros:
```json
"liveSassCompile.settings.formats":[ 
    {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "assets/styles/css"
    },
    {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "assets/styles/css"
    },
]
```
- Depois, na parte inferior do editor, clique em "Watch Sass".