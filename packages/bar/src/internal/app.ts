// No problems here with imports using `#/*`
import { publicUseful } from "#/public/utils";
import { useful } from "#/internal/utils";

const publicValue = publicUseful();
console.log(`value: ${publicValue.toFixed(2)}`);

const value = useful();
console.log(`value: ${value.toFixed(2)}`);
