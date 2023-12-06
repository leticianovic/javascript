// boolean: verdadeiro ou falso
// string: caracter
// tuple
var title;
title: [1, "Título"];
// enum: chave, valor
var Color;
(function (Color) {
    Color["white"] = "#FFF";
    Color["red"] = "#F00";
    Color["blue"] = "#00F";
})(Color || (Color = {}));
