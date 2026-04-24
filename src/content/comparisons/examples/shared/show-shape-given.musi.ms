let Show [T] := shape {
  let show (value : T) : String;
};

export let showInt := given Show[Int] {
  let show (value : Int) : String := "number";
};
