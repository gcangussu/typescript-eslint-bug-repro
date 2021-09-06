import { useful } from "@/bar/src/internal/utils";
import { publicUseful } from "@/bar/src/public/utils";

// This works fine
const value = useful();
console.log(`internal value: ${value.toFixed(2)}`);

// This fails
const publicValue = publicUseful();
console.log(`public value: ${publicValue.toFixed(2)}`);
