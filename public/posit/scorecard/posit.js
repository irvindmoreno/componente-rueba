"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PositScorecard = function () {
	function PositScorecard() {
		_classCallCheck(this, PositScorecard);

		$(".posit-Epass-titulo-Flecha").on("click", this.ocultarPositEpass);
		$(".posit-Epass-Consulta-Oculta").on("click", this.mostrarPositEpass);
	}

	_createClass(PositScorecard, [{
		key: "ocultarPositEpass",
		value: function ocultarPositEpass() {
			$(".posit-Epass-Consulta-Oculta").css("display", "inline-block");
			$(".posit-Epass-Consulta").css("display", "none");
		}
	}, {
		key: "mostrarPositEpass",
		value: function mostrarPositEpass() {
			$(".posit-Epass-Consulta-Oculta").css("display", "none");
			$(".posit-Epass-Consulta").css("display", "block");
		}
	}]);

	return PositScorecard;
}();

$(document).on("ready", inicio);
function inicio() {
	var obj = new PositScorecard();
}