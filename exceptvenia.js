let trg = [obj1, obj2, obj3];
let n = trg.length;
let val = "some value";

for (let i = 0; i < n; ++i) {
  trg[i].receive(val);
}
