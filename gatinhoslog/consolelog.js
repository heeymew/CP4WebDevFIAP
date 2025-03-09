import chalk from "chalk";
import boxen from "boxen";

export default function gatinhoslog(message) {
    const gatoAscii = `
          _
          \`*-.
          )  _\`-.
         .  : \`. .
         : _   '  \\
         ; *\` _.   \`*-._
         \`-.-'          \`-.
           ;       \`       \`.
           :.       .        \\
           . \\  .   :   .-'   .
           '  \`+.;  ;  '      :
           :  '  |    ;       ;-.
           ; '   : :\`-:     _. \`* ;
           .*' /  .*' ; .*\`- +'  \`*' 
           \`*-*   \`*-*  \`*-*'
    `;

    const boxMessage = boxen(chalk.green(`${message}`), {
        padding: 0.8,
        margin: 0.4,
        borderStyle: "round",
        borderColor: "cyan"
    });

    console.log(boxMessage);
    console.log(chalk.blue(gatoAscii));
    console.log(chalk.green("Meow! 🐱"));
}