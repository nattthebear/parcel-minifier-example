const S = /*#__PURE__*/ Symbol("symbol called");

function test(val) {
	return val === S;
}

class SomeClass {
	static staticProp = test;
}
