## 📦 Gerador de Fakename

Gerador de nomes falsos simples, cria nomes combinando o seu primeiro nome, com o nome de uma fruta, combinando nomes de frutas e pessoas.
Foi desenvolvido como parte do Checkpoint 4 de Web Development da FIAP.

## 🚀 Como funciona

Foram usados os pacotes: chalk e boxen. Utilizando a função `fakename()` que retornará um nome aleatório.
Também utilizamos o pacote `@heeymew/gatinhoslog`, e o pacote `@heeymew/cp4webdev` ele irá imprimir uma mensagem em uma caixa com um gatinho feito em ASCII.

## 🐱 Exemplo de saída

╭────────────────╮<br> 
│  Oi gente, eu sou Ana Uva!  |<br>
╰────────────────╯<br>

         _
         \`*-.
          )  _`-.
         .  : `. .
         : _   '  \
         ; *` _.   `*-._
         `-.-'          `-.
           ;       `       `.
           :.       .        \
           . \  .   :   .-'   .
           '  `+.;  ;  '      :
           :  '  |    ;       ;-.
           ; '   : :`-:     _. `* ;
           `*-*   `*-*  `*-*'


 ╭────────────────╮<br> 
 │Fazendo teste gatinhoslog!     |<br>
 ╰────────────────╯<br>

          ,
       `-._           __
        \  `-..____,.'  `.
         :`.         /    `
         :  )       :      : \
          ;'        '   ;  |  :
          )..      .. .:.`.;  :
         /::...  .:::...   ` ;
         ; _ '    __        /:\
         `:o>   /\o_>      ;:. `.
        `-.`.__ ;   __..--- /:.   \
        === \_/   ;=====_.':.     ;
         ,/'`--'...`--....        ;
              ;                    ;
            .'                      ;
          .'                        ;
        .'     ..     ,      .       ;
       :       ::..  /      ;::.     |
      /      `.;::.  |       ;:..    ;
     :         |:.   :       ;:.    ;
     :         ::     ;:..   |.    ;
      :       :;      :::....|     |
      /\     ,/ \      ;:::::;     ;
    .:. \:..|    :     ; '.--|     ;
   ::.  :''  `-.,,;     ;'   ;     ;
.-'. _.'\      / `;      \,__:      \
`---'    `----'   ;      /    \,.,,,/
                   `----`
Meow! 🐱

## 🛠️ Instalação e Configuração

1. Clone este repositório com o comando

    git clone https://github.com/heeymew/CP4WebDevFIAP.git

2. Acesse a pasta do projeto com o comando

    cd CP4WebDevFiap

3. Instalando os pacotes

    npm install

4. Executando o programa

Abra o terminal e execute o comando

    node script.js

## 📦 Como instalar via NPM (caso queira usar no seu projeto)

Abra o seu terminal e utilize os comandos para instalar os pacotes

    npm install @heeymew/fakename
    npm install @heeymew/gatinhoslog
    npm install @heeymew/cp4webdev

## 🐱 Como utilizar no seu projeto

Exemplo básico de uso

    import gatinhoslog from "@heeymew/gatinhoslog";
    import fakename from "@heeymew/fakename";
    gatinhoslog(`Oi gente, eu sou ${fakename()}`);
    gatosolelog(`Oi gente, eu sou ${fakename()}`);

## 📚 Tecnologias Utilizadas

- Node.js (v22+)
- Chalk - estilização de textos no terminal
- Boxen - cria caixas no terminal

## 👨‍💻 Autores

Desenvolvido por:
Lucas Alves Piereti - RM 559533<br>
Rafaela Heer Robinson - RM 560249<br>
Witalon Antonio Rodrigues - RM 559023<br>
Julia Hadja Kfouri Nunes - RM 559410

# 🔗 Links

- [Repositório no GitHub](https://github.com/heeymew/CP4WebDevFIAP)
- [Pacote @heeymew/fakename no NPM](https://www.npmjs.com/package/@heeymew/fakename)
- [Pacote @heeymew/gatinhoslog no NPM](https://www.npmjs.com/package/@heeymew/gatinhoslog)
